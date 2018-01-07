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
      action: {
        type: 'trade',
        pair: 'xrp_jpy',
        buy: 330,
        sell: 500
      }
    },
    {
      enabled: false,
      trader: new BitBank(bbSecure),
      action: {
        type: 'alert',
        pair: 'xrp_jpy',
        threashold: {
          max: 400,
          min: 340
        }
      }
    },
    {
      enabled: false,
      trader: new Zaif(zfSecure),
      action: {
        type: 'alert',
        pair: 'btc_jpy',
        threashold: {
          max: 2000000,
          min: 1700000
        }
      }
    },
    {
      enabled: false,
      trader: new Zaif(zfSecure),
      action: {
        type: 'alert',
        pair: 'xem_jpy',
        threashold: {
          max: 350,
          min: 200
        }
      }
    }
  ]
};

module.exports = rule;
