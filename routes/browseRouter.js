const express = require('express');
const api = require('../api');

const router = express.Router();

router.get('/', async (req, res) => {
  const deals = await api.getDealsByStores();
  await deals.forEach((deal) => {
    deal.savings = Math.floor(deal.savings);
    if (deal.savings === 100) deal.isFree = true;
    deal.store = api.storeMap[deal.storeID];
  });
  res.render('browse', { deals });
});

router.post('/', async (req, res) => {
  req.body.storename = req.body.storename === ''
    ? api.storeString : [api.storeMapReverse[req.body.storename]].join(',');
  const deals = await api.getDealsByStores(req.body.pageNumber, req.body.storename, req.body.sortBy, 1, 20, req.body.steamworks, req.body.lowerPrice, req.body.upperPrice);
  // console.log(deals);
  await deals.forEach((deal) => {
    deal.savings = Math.floor(deal.savings);
    if (deal.savings === 100) deal.isFree = true;
    deal.store = api.storeMap[deal.storeID];
  });
  res.json({ deals });
});

module.exports = router;
