/* eslint-disable class-methods-use-this */

const axios = require('axios');

const CheapSharkAPI = {
  stores: ['1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31'],

  storeString: '1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31',

  storeNames: ['Steam', 'GamersGate', 'GreenManGaming', 'Amazon', 'GameStop', 'Direct2Drive', 'GoG', 'Origin', 'Get Games', 'Shiny Loot', 'Humble Store', 'Desura', 'Uplay', 'IndieGameStand', 'Fanatical', 'Gamesrocket', 'Games Republic', 'SilaGames', 'Playfield', 'ImperialGames', 'WinGameStore', 'FunStockDigital', 'GameBillet', 'Voidu', 'Epic Games Store', 'Razer Game Store', 'Gamesplanet', 'Gamesload', '2Game', 'IndieGala', 'Blizzard Shop'],

  storeMap: {
    1: 'Steam',
    2: 'GamersGate',
    3: 'GreenManGaming',
    4: 'Amazon',
    5: 'GameStop',
    6: 'Direct2Drive',
    7: 'GoG',
    8: 'Origin',
    9: 'Get Games',
    10: 'Shiny Loot',
    11: 'Humble Store',
    12: 'Desura',
    13: 'Uplay',
    14: 'IndieGameStand',
    15: 'Fanatical',
    16: 'Gamesrocket',
    17: 'Games Republic',
    18: 'SilaGames',
    19: 'Playfield',
    20: 'ImperialGames',
    21: 'WinGameStore',
    22: 'FunStockDigital',
    23: 'GameBillet',
    24: 'Voidu',
    25: 'Epic Games Store',
    26: 'Razer Game Store',
    27: 'Gamesplanet',
    28: 'Gamesload',
    29: '2Game',
    30: 'IndieGala',
    31: 'Blizzard Shop',
  },

  storeMapReverse: {
    '2Game': '29',
    Amazon: '4',
    'Blizzard Shop': '31',
    Desura: '12',
    Direct2Drive: '6',
    'Epic Games Store': '25',
    Fanatical: '15',
    FunStockDigital: '22',
    GameBillet: '23',
    GameStop: '5',
    GamersGate: '2',
    'Games Republic': '17',
    Gamesload: '28',
    Gamesplanet: '27',
    Gamesrocket: '16',
    'Get Games': '9',
    GoG: '7',
    GreenManGaming: '3',
    'Humble Store': '11',
    ImperialGames: '20',
    IndieGala: '30',
    IndieGameStand: '14',
    Origin: '8',
    Playfield: '19',
    'Razer Game Store': '26',
    'Shiny Loot': '10',
    SilaGames: '18',
    Steam: '1',
    Uplay: '13',
    Voidu: '24',
    WinGameStore: '21',
  },

  async getAllDeals() {
    const response = await axios.get('https://www.cheapshark.com/api/1.0/deals');
    return response.data;
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

  async getDealsByStores(pageNumber = 0, stores = this.storeString, sortBy = 'Deal Rating', onSale = 1, pageSize = 20, steamworks = 0, lowerPrice = 0, upperPrice = 1000) {
    // console.log(`https://www.cheapshark.com/api/1.0/deals?storeID=${stores}&pageSize=${pageSize}&pageNumber=${pageNumber}&sortBy=${sortBy}&onSale=${onSale}&steamworks=${steamworks}&lowerPrice=${lowerPrice}&upperPrice=${upperPrice}`);
    const response = await axios.get(`https://www.cheapshark.com/api/1.0/deals?storeID=${stores}&pageSize=${pageSize}&pageNumber=${pageNumber}&sortBy=${sortBy}&onSale=${onSale}&steamworks=${steamworks}&lowerPrice=${lowerPrice}&upperPrice=${upperPrice}`);
    return response.data;
  },
};

const log = async (data) => console.log(await data);
log();

module.exports = CheapSharkAPI;
