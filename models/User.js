const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Please add a valid email',
        ],
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    role: {
        type: String,
        enum: ['admin', 'manager', 'user'], // Limited to these three roles
        default: 'user' // Default role is 'user'
    },
    team: {
        type: String,
        default: 'default'
    }
});

module.exports = mongoose.model('User', userSchema);