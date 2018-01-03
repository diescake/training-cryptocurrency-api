const rule = require('./config/rule');

const sleep = require('await-sleep');
const moment = require('moment');

const LineNotifier = require('./lib/LineNotifier');
const notifier = new LineNotifier(
  require('./config/secure').line
);

const printPrice = (aTraderName, aPair, aLast) => {
  console.log(`[${moment().format('HH:mm:ss')}][${aTraderName.padEnd(7)}] ${aPair}: ${aLast}`);
};

const main = async() => {
  for (const scenario of rule.scenarios) {
    if (!scenario.enabled) {
      continue;
    }
    const trader = scenario.trader;
    const pair = scenario.pair;

    let prevTicker = trader.prevTicker;
    const ticker = await trader.getTicker(pair);

    if (!prevTicker) {
      prevTicker = ticker;
    }

    printPrice(scenario.trader.getName(), scenario.pair, ticker.last);

    if (ticker.last > scenario.threashold.max && !(prevTicker.last > scenario.threashold.max)) {
      notifier.alertPrice(pair, scenario.threashold.max, ticker.last, true);
    } else if (ticker.last < scenario.threashold.min && !(prevTicker.last < scenario.threashold.min)) {
      notifier.alertPrice(pair, scenario.threashold.min, ticker.last, false);
    }
  }
};

// main loop
(async() => {
  while (true) {
    await main().catch((aError) => {
      console.warn(aError);
    });
    await sleep(rule.interval);
  }
})();
