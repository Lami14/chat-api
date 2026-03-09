const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const { getMessagesByRoom } = require('../controllers/chatController');

router.get('/:room', protect, async (req, res) => {
    const messages = await getMessagesByRoom(req.params.room);
    res.json(messages);
});

module.exports = router;
