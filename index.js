const config = require('./config');

const BitBank = require('./lib/BitBank');
const Zaif = require('./lib/Zaif');

const sleep = require('await-sleep');
const moment = require('moment');

const LineNotifier = require('./lib/LineNotifier');
const notifier = new LineNotifier(config.line);

const bitbank = new BitBank(config.bitbank);
const zaif = new Zaif(config.zaif);

const rules = {
  interval: 5000,
  scenario: [
    {
      trader: bitbank,
      pair: 'xrp_jpy',
      threashold: {
        max: 300,
        min: 220
      }
    },
    {
      trader: zaif,
      pair: 'btc_jpy',
      threashold: {
        max: 1780000,
        min: 1000000
      }
    }
  ]
};

const main = async () => {
  for (rule of rules.scenario) {
    const trader = rule.trader;
    const pair = rule.pair;

    const ticker = await trader.getTicker(pair);
    console.log(`[${moment().format('HH:mm:ss')}][${rule.trader.getName()}] ${rule.pair}: ${ticker.last}`);

    if (ticker.last > rule.threashold.max) {
      notifier.send(`last ${pair} is higher than ${rule.threashold.max}: ${ticker.last}`);
    } else if (ticker.last < rule.threashold.min) {
      notifier.send(`last ${pair} is lower than ${rule.threashold.min}: ${ticker.last}`);
    }
  }
}

// main loop;
(async () => {
  while (true) {
    main();
    await sleep(rules.interval);
  }
})();
