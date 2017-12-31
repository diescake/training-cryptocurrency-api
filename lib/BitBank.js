const ExchangeTrader = require('./ExchangeTrader');
const bitbank = require('./node-bitbankcc'); // TMP

class BitBank extends ExchangeTrader {
  constructor(aConfig) {
    super(aConfig);
    this.publicAPIs = bitbank.publicApi();
    this.privateAPIs = bitbank.privateApi(aConfig.apiKey, aConfig.secret);

    this.supportPairs = [
      'btc_jpy', 'xrp_jpy', 'ltc_btc', 'eth_btc',
      'mona_jpy', 'mona_btc', 'bcc_jpy', 'bcc_btc'
    ];
  }

  // public APIs
  getName() {
    return 'BitBank';
  }

  async getTicker(aPair) {
    return this.publicAPIs.getTicker(aPair);
  }

  async getTransactions(aPair) {
    return this.publicAPIs.getTransactions(aPair);
  }

  async getTransactions(aPair, aYYYYMMDD) {
    return this.publicAPIs.getTransactions(aPair, aYYYYMMDD);
  }

  // private APIs
  async getAsset() {
    return this.privateAPIs.getAsset();
  }

  async getActiveOrders(aPair) {
    return this.privateAPIs.getActiveOrders(aPair);
  }

  async order(aPair, aPrice, aAmmount, aSide, aType) {
    return this.privateAPIs.order(aPair, aPrice, aAmmount, aSide, aType);
  }

  async cancelOrder(aPair, aOrderIds) {
    return await privateAPIs.cancelOrders(aPair, aOrderIds);
  }

  async cancelAllOrders(aPairs) {
    /* TODO: promisize
    const pairs = aPairs || this.supportPairs;
    if (!this.validatePairs(pairs, this.supportPairs)) {
      return false;
    }

    for (pair of pairs) {
      const result = await this.privateAPIs.getActiveOrders(pair);

      if (result.orders.length === 0) {
        console.info(`no orders: ${pair}`);
        continue;
      }

      await this.privateAPIs.cancelOrders(pair, (() => {
        return result.orders.map((aOrder) => {
          return aOrder.order_id;
        });
      })());
    }
    return true;
    */
  }
}

module.exports = BitBank;
