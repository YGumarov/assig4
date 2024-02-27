const mongoose = require('mongoose');

// Define the schema for the Soon model
const soonSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true // Make it optional
    },
    platform: {
        type: String,
        required: true
    }
});

// Create a model based on the schema
const Soon = mongoose.model('Soon', soonSchema);

// Export the model
module.exports = Soon;
