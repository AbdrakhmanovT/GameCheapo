/* eslint-disable class-methods-use-this */

const axios = require('axios');

const GameSharkAPI = {
  stores: [
    '1', '2', '3', '4', '5', '6',
    '7', '8', '9', '10', '11', '12',
    '13', '14', '15', '16', '17', '18',
    '19', '20', '21', '22', '23', '24',
    '25', '26', '27', '28', '29', '30',
    '31',
  ],

  async getAllDeals() {
    const response = await axios.get('https://www.cheapshark.com/api/1.0/deals');
    return response;
  },

  async getDealsByTitle(title) {
    const response = await axios.get(`https://www.cheapshark.com/api/1.0/games?title=${title}`);
    return response.data;
  },

  async getGameById(id) {
    const response = await axios.get(`https://www.cheapshark.com/api/1.0/games?id=${id}`);
    return response.data;
  },

  async getDealById(id) {
    const response = await axios.get(`https://www.cheapshark.com/api/1.0/deals?id=${id}`);
    return response.data;
  },

  async getStores() {
    const response = await axios.get('https://www.cheapshark.com/api/1.0/stores');
    return response.data;
  },

  async getDealsByStores(stores = this.stores, pageNumber = 0, sortBy = 'Deal Rating', onSale = 1) {
    const response = await axios.get(`https://www.cheapshark.com/api/1.0/deals?storeID=${stores.join(',')}&pageNumber=${pageNumber}&sortBy=${sortBy}&onSale=${onSale}`);
    return response.data;
  },
};
const log = async (data) => console.log(await data);
log(GameSharkAPI.getDealsByStores());

module.exports = GameSharkAPI;
