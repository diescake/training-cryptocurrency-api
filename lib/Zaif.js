const ExchangeTrader = require('./ExchangeTrader');
const zaif = require('zaif.jp');

class Zaif extends ExchangeTrader {
  constructor(aConfig) {
    super(aConfig);
    this.publicAPIs = zaif.PublicApi;
    this.privateAPIs = zaif.createPrivateApi(aConfig.apiKey, aConfig.secret);

    this.supportPairs = [
      'btc_jpy', 'jpyz_jpy', 'mosaic.cms_jpy', 'erc20.cms_jpy',
      'sjcx_jpy', 'fscc_jpy', 'xcp_jpy', 'bch_jpy', 'pepecash_jpy', 'zaif_jpy', 'mona_jpy', 'cicc_jpy', 'bitcrystals_jpy', 'ncxc_jpy', 'eth_jpy', 'xem_jpy',
      'sjcx_btc', 'fscc_btc', 'xcp_btc', 'bch_btc', 'pepecash_btc', 'zaif_btc', 'mona_btc', 'cicc_btc', 'bitcrystals_btc', 'ncxc_btc', 'eth_btc', 'xem_btc'
    ];
    this.prevTicker = null;
  }

  // public APIs
  getName() {
    return 'Zaif';
  }

  async getTicker(aPair) {
    const ticker = await this.publicAPIs.ticker(aPair);
    this.prevTicker = ticker;
    return ticker;
  }
}

module.exports = Zaif;
