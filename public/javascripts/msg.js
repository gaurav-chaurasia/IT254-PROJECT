var socket;

// client-side
if (window.location.pathname === '/msg') {
    socket = io('http://localhost:3000');
    // socket.on('connect', (data) => {
    //     console.log(socket.id);
    // });
    socket.on('user', (data) => {
        console.log('client', data);
    });

}
