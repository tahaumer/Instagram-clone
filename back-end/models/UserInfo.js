const mongoose = require('mongoose');

const UserInfoSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        ref: 'User',
    },
    description: {
        type: String,
    },
    profileImageUrl: {
        type: String,
    },
    followers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    following: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    date: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('User_info', UserInfoSchema);
