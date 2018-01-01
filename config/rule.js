const BitBank = require('../lib/BitBank');
const Zaif = require('../lib/Zaif');

const bitbank = new BitBank(
  require('../config/secure').bitbank
);
const zaif = new Zaif(
  require('../config/secure').zaif
);

const rule = {
  interval: 3000,
  scenarios: [
    {
      enabled: true,
      trader: bitbank,
      pair: 'xrp_jpy',
      threashold: {
        max: 250,
        min: 200
      }
    },
    {
      enabled: true,
      trader: zaif,
      pair: 'btc_jpy',
      threashold: {
        max: 1780000,
        min: 1000000
      }
    }
  ]
};

module.exports = rule;
