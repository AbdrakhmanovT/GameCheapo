const express = require('express');
const api = require('../api');

const router = express.Router();

router.get('/:id', async (req, res) => {
  const game = await api.getGameById(req.params.id);
  game.deals = game.deals.map((deal) => {
    deal.savings = Math.floor(deal.savings);
    if (deal.savings === 100) deal.isFree = true;
    deal.storeID = api.storeMap[deal.storeID];
    return deal;
  });
  const cheapestDate = new Date(game.cheapestPriceEver.date * 1000).toLocaleDateString('ru-RU');
  const sales = game.deals.filter((deal) => deal.price !== deal.retailPrice);
  const otherDeals = game.deals.filter((deal) => deal.price === deal.retailPrice);
  res.render('game', {
    game, sales, otherDeals, cheapestDate,
  });
});

module.exports = router;
