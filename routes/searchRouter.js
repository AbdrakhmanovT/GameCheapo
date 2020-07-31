const express = require('express');
const api = require('../api');

const router = express.Router();

router.get('/', async (req, res) => {
  const games = await api.getDealsByTitle(req.query.title);
  res.render('gameSearch', { games });
});

module.exports = router;
