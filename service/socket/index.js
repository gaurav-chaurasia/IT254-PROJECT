// node modules
const passportSocketIo = require('passport.socketio');
const session          = require('express-session');
const MongoStore       = require('connect-mongo')(session);

// local node modules
const config     = require('../../config/config')[process.env.NODE_ENV || 'development'];
const MSG        = require('../../db/models/msg');
const Connection = require('../../db/models/connection');

/**
 * @param {user} contains all info of authenticated user
 * @param {id} socket connection id
 * @returns JSON object @success , @status
 */
const insertSocketConnection = async (user, id) => {
  try {
    const connection = await Connection.updateOne(
      { user_id: user._id },
      { $set: { user_id: user._id, username: user.username, connection_id: id } },
      { upsert: true },
    );

    return JSON.stringify({
      success: true,
      status: 200,
    });
  } catch (err) {
    return JSON.stringify({
      success: false,
      status: 500,
      err: new Error("Connection couldn't be created!!!"),
    });
  }
};

/**
 * @param {id} socket connection id
 * @returns JSON object @success , @status
 */
const deleteSocketConnection = async (id) => {
  try {
    const connection = await Connection.deleteOne({ connection_id: id });
    return JSON.stringify({
      success: true,
      status: 200,
    });
  } catch (err) {
    return JSON.stringify({
      success: false,
      status: 500,
      err: new Error("Connection couldn't be removed!!!"),
    });
  }
};

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
    const user = socket.request.user;
    const id = socket.id;

    // when new user connects
    // saving new user to db
    response = await insertSocketConnection(user, id);
    console.log('SERVER-SIDE: user connected', id, response);
    /**
     * @sending to Client
     * and send info for new connection to other users
     * this below function will emit info about new user connected to
     * all connected users
     * */
    io.emit('user_connect', user);


    /**
     * @sending to Client
     * user on disconnect
     */
    socket.on('disconnect', async () => {
      // updating connection data
      response = await deleteSocketConnection(id);
      console.log('SERVER-SIDE: user disconnected', id, response);
      /**
       * @sending to Client
       * user with @id = user._id is disconnected
       */
      io.emit('user_disconnect', user._id);
    });
  });
};
// socket.rooms.has(socket.id);
module.exports = socketIO;
