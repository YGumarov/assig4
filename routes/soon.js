const express = require('express');
const axios = require('axios');
const router = express.Router();
const Soon = require('../models/soon'); // Import the Soon model

const apiKey = '380ad4fef1msh9ec24ef4dc12d20p1a6f45jsn323d3a2d1721'; // Updated API key

const options = {
    method: 'GET',
    url: 'https://new-videogames-releases.p.rapidapi.com/getMonthGames',
    headers: {
        'X-RapidAPI-Key': apiKey, // Use the new API key
        'X-RapidAPI-Host': 'new-videogames-releases.p.rapidapi.com'
    }
};

router.get('/', async (req, res) => {
    try {
        const response = await axios.request(options);
        const games = response.data; // Extract games from the response data

        // Convert platform array to string
        games.forEach(game => {
            game.platform = game.platform.join(', '); // Convert array to comma-separated string
        });

        // Save the games data to MongoDB Atlas
        await Soon.insertMany(games);

        res.render('soon', { games }); // Render the soon.ejs template and pass the games data to it
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' }); // Send an error response if something goes wrong
    }
});

module.exports = router;
