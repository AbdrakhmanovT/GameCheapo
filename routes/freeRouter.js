const express = require('express');
const api = require('../api');

const router = express.Router();

router.get('/', async (req, res) => {
  const games = await api.getDealsByStores(0, api.storeString, 'Deal Rating', 1, 60, 0, 0, 0);
  games.forEach((game) => {
    game.store = api.storeMap[game.storeID];
  });
  res.render('free', { games });
});

module.exports = router;
