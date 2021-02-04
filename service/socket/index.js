// node modules
const passportSocketIo = require('passport.socketio');
const session          = require('express-session');
const MongoStore       = require('connect-mongo')(session);

// local node modules
const config     = require('../../config/config')[process.env.NODE_ENV || 'development'];
const MSG        = require('../../db/models/msg');
const Connection = require('../../db/models/connection');
const { json }   = require('express');

const insertSocketConnection = async (user, id) => {
    try {
        const connection = await Connection.updateOne(
          { user_id: user._id },
          { $set: { user_id: user._id, connection_id: id } },
          { upsert: true },
        );

        return JSON.stringify({ 
            success: true, 
            status: 200
        });
    } catch (err) {
        return JSON.stringify({
            success: false,
            status: 500,
            err: new Error("Connection couldn't be created!!!")
        });
    }
}

const deleteSocketConnection = async (id) => {
    try {
        const connection = await Connection.find({ connection_id: id });
        return JSON.stringify({ 
            success: true, 
            status: 200
        });
    } catch (err) {
        return JSON.stringify({ 
            success: false, 
            status: 500, 
            err: new Error("Connection couldn't be removed!!!")
        });   
    }
}


// io contains all the info of all connection 
// socket has all info for perticular connection
const socketIO = (io) => {
    io.use(
        passportSocketIo.authorize({
          key: 'dlhd',
          secret: config.secret,
          store: new MongoStore({ url: config.DATABASE_URI}),
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
        console.log('SERVER: connected user', socket.id);
        const connect = await insertSocketConnection(socket.request.user, socket.id);
    
        

        // user on disconnect  
        socket.on('disconnect', async() => {
            console.log(
              'SERVER: disconnected user',
              socket.id,
              await deleteSocketConnection(socket.id),
            );
        });
    });
}
// socket.rooms.has(socket.id);
module.exports = socketIO;
