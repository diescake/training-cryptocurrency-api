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
}

module.exports = Zaif;
