// io contains all the info of all connection 
// socket has all info for perticular connection
const socketIO = (io) => {
    const passportSocketIo = require('passport.socketio');
    const session          = require('express-session');
    const MongoStore       = require('connect-mongo')(session);
    const config           = require('../../config/config')[process.env.NODE_ENV || 'development'];
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

    io.on('connection', (socket) => {
        console.log('SERVER: connected user', socket.id);


        // user on disconnect  
        socket.on('disconnect', () => {
            console.log('SERVER: disconnected user', socket.id);
        });
    });
}

module.exports = socketIO;