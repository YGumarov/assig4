const express = require('express');
const axios = require('axios');
const jwt = require('jsonwebtoken');
const Game = require('../models/game'); // Import the game model
const router = express.Router();

router.get('/', (req, res) => {
    res.render('game', { gameData: [] }); // Pass an empty game data
});

router.post('/', async (req, res) => {
    const searchQuery = req.body.search;
    const apiKey = '10c63a2bfe79448280b9974fd4ca64f8'; // Replace with your actual API key

    try {
        // Make a GET request to the RAWG API to search for games
        const response = await axios.get(`https://api.rawg.io/api/games?key=${apiKey}&search=${encodeURIComponent(searchQuery)}`);

        const gameData = response.data.results.map(game => ({
            imageUrl: game.background_image ?? 'N/A',
            title: game.name ?? 'N/A',
            platform: game.platforms && game.platforms.length > 0 ? game.platforms[0].platform.name : 'N/A',
            releaseDate: game.released ? new Date(game.released) : null,
            genres: game.genres ? game.genres.map(genre => genre.name) : []
        }));

        // Decode JWT token to get user ID
        const decodedToken = jwt.decode(req.cookies.token);
        const userId = decodedToken.userId;

        // Find or create user's game record
        let userGames = await Game.findOne({ userId });

        userGames = new Game({ userId, search: searchQuery, gameList: [] });

        // Add new game data to the gameList array
        userGames.gameList.push(...gameData);

        // Save the updated game record
        await userGames.save();

        res.render('game', { gameData });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
