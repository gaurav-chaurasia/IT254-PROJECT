// io contains all the info of all connection 
// socket has all info for perticular connection
const socketIO = (io) => {
    io.on('connection', (socket) => {
        console.log('SERVER: connected user', socket.id);


        // user on disconnect  
        socket.on('disconnect', () => {
            console.log('SERVER: disconnected user', socket.id);
        });
    });
}

module.exports = socketIO;