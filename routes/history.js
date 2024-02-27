const express = require('express');
const jwt = require('jsonwebtoken');
const Game = require('../models/game'); // Import the game model
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    // Получаем userId из токена
    const decodedToken = jwt.decode(req.cookies.token);
    const userId = decodedToken.userId;

    // Получаем записи аниме и фильмов для данного пользователя
    let userGame = await Game.find({ userId }).select('search createdAt').lean();

    // Сортируем записи по дате создания (createdAt) в порядке убывания
    userGame = userGame.sort((a, b) => b.createdAt - a.createdAt);
    // Отображаем страницу и передаем результаты поиска для отображения
    res.render('history', { userGame });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
