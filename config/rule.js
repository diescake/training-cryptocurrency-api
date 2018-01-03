const BitBank = require('../lib/BitBank');
const Zaif = require('../lib/Zaif');

const bbSecure = require('../config/secure').bitbank;
const zfSecure = require('../config/secure').zaif;

const rule = {
  interval: 3000,
  scenarios: [
    {
      enabled: true,
      trader: new BitBank(bbSecure),
      pair: 'xrp_jpy',
      threashold: {
        max: 300,
        min: 250
      }
    },
    {
      enabled: true,
      trader: new Zaif(zfSecure),
      pair: 'btc_jpy',
      threashold: {
        max: 1780000,
        min: 1500000
      }
    },
    {
      enabled: true,
      trader: new Zaif(zfSecure),
      pair: 'xem_jpy',
      threashold: {
        max: 150,
        min: 110
      }
    }
  ]
};

module.exports = rule;
