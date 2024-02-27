const mongoose = require('mongoose');
const axios = require('axios');
const apiKey = '10c63a2bfe79448280b9974fd4ca64f8';


const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', userSchema);
