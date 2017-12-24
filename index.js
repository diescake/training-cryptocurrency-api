const config = require('./config.js');
const bitbank = require('./node-bitbankcc');

const publicAPIs = bitbank.publicApi();
const privateAPIs = bitbank.privateApi(config.apiKey, config.secret);

(async () => {
  // await publicAPIs.getTicker('btc_jpy').then(console.log);
  // await publicAPIs.getDepth('btc_jpy').then(console.log);
  // await publicAPIs.getTransactions('btc_jpy').then(console.log);
  // await publicAPIs.getTransactions('btc_jpy', 20170329).then(console.log);
  // await publicAPIs.getCandlestick('btc_jpy', '1day', 2017).then(console.log);

  // read
  // await privateAPIs.getAsset().then(console.log);
  // await privateAPIs.getOrder('btc_jpy', 310724279).then(console.log);
  // await privateAPIs.getOrder('xrp_jpy').then(console.log);
  // await privateAPIs.getActiveOrders('btc_jpy', { 'count': 1 }).then(console.log);
  // await privateAPIs.getOrdersInfo('btc_jpy', [90956209, 90951996]).then(console.log);
  // await privateAPIs.getWithdrawAccount('btc').then(console.log);
  // api2.getTradeHistory().then(console.log);
  // api2.getTradeHistory({ pair: 'btc_jpy' }).then(console.log);

  // deal
  // api2.order('btc_jpy', 803234, 0.01, 'buy', 'limit').then(console.log);
  // api2.cancelOrder('btc_jpy', 310715141).then(console.log);
  // api2.cancelOrders('btc_jpy', [310715384, 310715385]).then(console.log);

  // withdraw
  // api2.requestWithdraw('btc', 'wwwwwwwwww', 0.01, { otp_token: 223330 }).then(console.log);
})();
