// logout.js
const express = require('express');
const router = express.Router();
const axios = require('axios');
const apiKey = '10c63a2bfe79448280b9974fd4ca64f8';

router.get('/', (req, res) => {
    res.clearCookie('token');
    res.redirect('/login');
});

module.exports = router;
