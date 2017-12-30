const config = require('./config');

// trades
const BitBank = require('./lib/BitBank');
const bitbank = new BitBank(config.bitbank);

const Zaif = require('./lib/Zaif');
const zaif = new Zaif(config.zaif);

// utilities
const sleep = require('await-sleep');

const LineNotify = require('./lib/LineNotify');
const notify = new LineNotify(config.line);

// parameters
const XRP_THREASHOLD = 220;
const MAIN_INTERVAL = 5000;

const main = async () => {
  const ticker = await bitbank.getTicker('xrp_jpy');
  console.log(ticker.last);

  if(ticker.last < XRP_THREASHOLD) {
    notify(`XRP last is cheaper than ${XRP_THREASHOLD} YEN!!! last is ${ticker.last} YEN`);
  }

  await sleep(MAIN_INTERVAL);
  main();
};

try {
  main();
} catch(e) {
  console.log(e);
  main();
}
