const { saveMessage, getMessagesByRoom } = require('../controllers/chatController');

const chatSocket = (io) => {
    io.on('connection', (socket) => {
        console.log('New WebSocket connection');

        socket.on('joinRoom', ({ room, userId }) => {
            socket.join(room);
            console.log(`User joined room: ${room}`);
        });

        socket.on('chatMessage', async ({ room, userId, content }) => {
            const message = await saveMessage(userId, room, content);
            io.to(room).emit('message', message);
        });

        socket.on('disconnect', () => {
            console.log('User disconnected');
        });
    });
};

module.exports = chatSocket;
