const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const User = require('../models/User');
const UserInfo = require('../models/UserInfo');

router.get('/auth/me', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        if (!user) {
            return res.status(404).json({ msg: 'User not found' });
        }

        const userInfo = await UserInfo.findOne({ username: user.username });
        if (!userInfo) {
            return res.status(404).json({ msg: 'User info not found' });
        }

        res.json({ user, userInfo });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;
