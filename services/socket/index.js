// node modules
const passportSocketIo = require('passport.socketio');
const session          = require('express-session');
const MongoStore       = require('connect-mongo')(session);

// local node modules
const config     = require('../../config/config')[process.env.NODE_ENV || 'development'];
const MSG        = require('../../db/models/msg');
const Connection = require('../../db/models/connection');

/**
 * @param {Object} user all info of authenticated user
 * @param {string} id connection id
 * @returns JSON object @success , @status
 */
const insertSocketConnection = async (user, id) => {
  try {
    const connection = await Connection.updateOne(
      { user_id: user._id },
      { $set: { user_id: user._id, username: user.username, connection_id: id } },
      { upsert: true },
    );

    return {
      success: true,
    };
  } catch (err) {
    return {
      success: false,
      err: new Error("Connection couldn't be created!!!"),
    };
  }
};

/**
 * @param {string} id connection id
 * @returns JSON object @success , @status
 */
const deleteSocketConnection = async (id) => {
  try {
    const connection = await Connection.deleteOne({ connection_id: id });
    return {
      success: true,
    };
  } catch (err) {
    return {
      success: false,
      err: new Error("Connection couldn't be removed!!!"),
    };
  }
};

/**
 * @param {string} sender_id msg 
 * @param {string} reciver_id msg 
 * @param {string} msg msg 
 * @returns JSON object @success , @status
 */
const insertMSG = async (sender_id, reciver_id, msg) => {
  try {
    const newMSG = await MSG.create({
      sender_id: sender_id,
      receiver_id: reciver_id,
      msg: msg
    });

    return {
      success: true,
      MSG: newMSG,
    };
  } catch (err) {
    return {
      success: false,
      err: new Error("Connection couldn't be removed!!!"),
    };
  }
}

/**
 * @param {string} user_id Connection collection 
 * @returns JSON object @socket_id for connection
 */
const getSocketID = async (user_id) => {
  try {
    const socket_id = await Connection.findOne({ user_id: user_id}, { _id: 0, connection_id: 1 });

    return socket_id;
  } catch (err) {
    return {
      success: false,
      err: new Error("Opps somthing went wrong!!!"),
    };
  }
}

// io contains all the info of all connection
// socket has all info for perticular connection
const socketIO = (io) => {
  let response;
  io.use(
    passportSocketIo.authorize({
      key: 'dlhd',
      secret: config.secret,
      store: new MongoStore({ url: config.DATABASE_URI }),
    }),
  );
  // authenticate user
  io.use((socket, next) => {
    if (socket.request.user) {
      next();
    } else {
      next(new Error('unauthorized'));
    }
  });



  io.on('connection', async (socket) => {
    const current_user = socket.request.user;
    const id = socket.id;

    // when new user connects
    // saving new user to db
    response = await insertSocketConnection(current_user, id);
    console.log('SERVER-SIDE: user connected', id, current_user.username, response);
    /**
     * @sending to Client
     * and send info for new connection to other users
     * this below function will emit info about new user connected to
     * all connected users
     * */
    io.emit('user_connect', current_user);


    /**
     * @listening form Client
     * recives new MSG and emit to user
    */
    socket.on('SENT_MSG', async (to_user_id, to_username, msg, MSG_ACK) => {
      try {
        const socket_id = await getSocketID(to_user_id);
        const newMSG = await insertMSG(current_user._id, to_user_id, msg);
        // user online
        // console.log('from ', to_user_id);
        // console.log('to ', socket_id.connection_id);

        // below callback gives acknowledgement of message recived and stored
        MSG_ACK(newMSG.success, newMSG.MSG);
        // console.log(newMSG.MSG);
        // user is online
        // console.log(io.rooms.has(socket_id.connection_id));
        io.to(socket_id.connection_id).emit(
          'DELIVER_MSG',
          newMSG.MSG,
          `${current_user.firstname} ${current_user.lastname}`,
        );
      } catch (err) {
        throw new err();
      }
    });



    /**
     * @sending to Client
     * user on disconnect
     */
    socket.on('disconnect', async () => {
      // updating connection data
      response = await deleteSocketConnection(id);
      console.log('SERVER-SIDE: user disconnected', id, current_user.username, response);
      /**
       * @sending to Client
       * user with @id = user._id is disconnected
       */
      io.emit('user_disconnect', current_user._id);
    });
  });
};
// socket.rooms.has(socket.id);
module.exports = socketIO;
