const mongoose = require('mongoose');

// Constriants
const userSchema = new mongoose.Schema({
    email: {
        type: String, 
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
});

// Must be singular of what we name to call properly
const User = mongoose.model('user', userSchema);

module.exports = User;