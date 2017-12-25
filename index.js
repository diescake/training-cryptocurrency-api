const config = require('./config.js');
const bitbank = require('./node-bitbankcc');

const publicAPIs = bitbank.publicApi();
const privateAPIs = bitbank.privateApi(config.apiKey, config.secret);

const PAIR_LIST = [
  'btc_jpy',
  'xrp_jpy',
  'ltc_btc',
  'eth_btc',
  'mona_jpy',
  'mona_btc',
  'bcc_jpy',
  'bcc_btc'
];

const validatePairs = (aPairs) => {
  if (!Array.isArray(aPairs)) {
    console.error(`Passed pairs is NOT type of Array: ${aPairs}`);
    return false;
  }

  return aPairs.every((aPair) => {
    if (typeof(aPair) !==  'string') {
      console.error(`Passed pair is NOT type of String: ${aPair}`);
      return false;
    }

    if (!PAIR_LIST.some((aPAIR) => (aPAIR === aPair))) {
      console.error(`Passed pair is NOT valid pair type: ${aPair}`);
      return false;
    }
    return true;
  });
};

const bbCancelAllOrders = async (aPairs) => {
  const pairs = aPairs || PAIR_LIST;
  if (!validatePairs(pairs)) {
    return false;
  }

  for (pair of pairs) {
    const result = await privateAPIs.getActiveOrders(pair);
    // TODO: validate result
    // TODO: handling promise

    if (result.orders.length === 0) {
      console.info(`no orders: ${pair}`);
      continue;
    }

    await privateAPIs.cancelOrders(pair, (() => {
      return result.orders.map((aOrder) => {
        return aOrder.order_id;
      });
    })());
  }

  return true;
};

(async () => {
  // public APIs
  // await publicAPIs.getTicker('btc_jpy');
  // await publicAPIs.getDepth('btc_jpy');
  // await publicAPIs.getTransactions('btc_jpy');
  // await publicAPIs.getTransactions('btc_jpy', 20170329);
  // await publicAPIs.getCandlestick('btc_jpy', '1day', 2017);

  // read
  // await privateAPIs.getAsset();
  // await privateAPIs.getOrder('xrp_jpy', 3287273);
  // await privateAPIs.getActiveOrders('xrp_jpy');
  // await privateAPIs.getOrdersInfo('xrp_jpy', [3287273]);
  // await privateAPIs.getTradeHistory();
  // await privateAPIs.getTradeHistory({ pair: 'xrp_jpy' });

  // deal
  // await privateAPIs.order('xrp_jpy', 135, 1.00, 'sell', 'limit');
  // await privateAPIs.cancelOrder('xrp_jpy', 310715141);
  // await privateAPIs.cancelOrders('xrp_jpy', [310715384, 310715385]);

  // withdraw
  // await privateAPIs.getWithdrawAccount('btc');
  // await privateAPIs.requestWithdraw('btc', 'wwwwwwwwww', 0.01, { otp_token: 223330 });

  bbCancelAllOrders();
})();
