const ExchangeTrader = require('./ExchangeTrader');
const zaif = require('zaif.jp');

class Zaif extends ExchangeTrader {
  constructor(aConfig) {
    super(aConfig);
    this.publicAPIs = zaif.PublicApi;
  }

  // public APIs
  getName() {
    return 'Zaif';
  }

  async getTicker(aPair) {
    return this.publicAPIs.ticker(aPair);
  }

  async getTransactions(aPair) {
  }

  async getTransactions(aPair, aYYYYMMDD) {
  }

  // private APIs
  async getAsset() {
  }

  async getActiveOrders(aPair) {
  }

  async order(aPair, aPrice, aAmmount, aSide, aType) {
  }

  async cancelOrder(aPair, aOrderIds) {
  }

  async cancelAllOrders(aPairs) {
  }
}

module.exports = Zaif;
