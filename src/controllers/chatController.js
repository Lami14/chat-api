const Message = require('../models/Message');

const saveMessage = async (userId, room, content) => {
    const message = await Message.create({
        user: userId,
        room,
        content
    });
    return message;
};

const getMessagesByRoom = async (room) => {
    const messages = await Message.find({ room }).sort({ createdAt: 1 }).populate('user', 'name');
    return messages;
};

module.exports = { saveMessage, getMessagesByRoom };
