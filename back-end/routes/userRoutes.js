const express = require('express');
const router = express.Router();

// middlewares 
const { hashPassword, verifyPassword } = require('../utils/passwordUtils');
const { generateToken } = require('../utils/jwtUtils');
const { validateUser } = require('../middleware/validation');
const auth = require('../middleware/auth');
const roleCheck = require('../middleware/roleCheck');

// models
const User = require('../models/User');
const UserInfo = require('../models/UserInfo');

// sign up
router.post('/register', validateUser, async (req, res) => {
    try {
        const { name, username, email, password, role } = req.body;
        let user = await User.findOne({ $or: [{ email }, { username }] });
        if (user) {
            return res.status(400).json({ msg: "User already exists" });
        }

        const hashedPassword = await hashPassword(password);

        user = new User({
            name,
            email,
            username,
            password: hashedPassword,
            role
        });

        const userInfo = new UserInfo({
            username,
            description: '',
            profileImageUrl: '',
            followers: [],
            following: []
        });

        await user.save();
        await userInfo.save();
        res.send('User registered successfully');
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// login
router.post('/login', async (req, res) => {
    try {
        const { email, username, password } = req.body;
        const user = await User.findOne({ $or: [{ email }, { username }] });

        if (!user) {
            return res.status(400).json({ msg: "User does not exist" });
        }

        const isMatch = await verifyPassword(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ msg: "Invalid credentials" });
        }

        const userInfo = await UserInfo.findOne({ username })
        .populate('followers', 'username')
        .populate('following', 'username');


        const token = generateToken(user);
        res.json({ token, userInfo });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// user info
router.get('/:username', async (req, res) => {
    try {
        const { username } = req.params;

        if (!username) {
            return res.status(400).json({ error: 'Username is required' });
        }

        const userInfo = await UserInfo.findOne({ username })
            .populate('followers', 'username')
            .populate('following', 'username');

        if (!userInfo) {
            return res.status(404).json({ error: 'User info not found' });
        }

        res.status(200).json(userInfo);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

// update user info
router.post('/update', async (req, res) => {
    try {
        const { username, description, profileImageUrl } = req.body;

        const userInfo = await UserInfo.findOneAndUpdate(
            { username },
            { description, profileImageUrl },
            { new: true, upsert: true }
        );

        res.status(200).json(userInfo);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});


router.put('/forget-password/:id', async (req, res) => {
    const { password } = req.body;
    try {
        const hashedPassword = await hashPassword(password);
        let user = await User.findById(req.params.id);

        if (!user) {
            return res.status(400).json({ msg: "User not found" });
        }

        user = await User.findByIdAndUpdate(req.params.id,
            { $set: { password: hashedPassword } },
            { new: true }
        );

        res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

router.delete('/delete-user/:id', auth, roleCheck(['admin']), async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        if (!user) {
            return res.status(400).json({ msg: "User not found" });
        }

        await User.findByIdAndDelete(req.params.id);

        res.send('User deleted');
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
})

module.exports = router;