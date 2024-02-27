const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User'}, // Reference to user with required option
    search: { type: String }, // Add a search field,
    gameList: [{
        imageUrl: { type: String, required: true },
        title:  String,
        platform: String , // Make platform optional
        releaseDate: Date ,
        genres: [String     ] // Specify the schema for genres as an array of strings
    }],
}, {
    timestamps: true // Adding timestamps
});

// Indexing the search field for faster search queries
gameSchema.index({ search: 'text' });

module.exports = mongoose.model('Game', gameSchema);
