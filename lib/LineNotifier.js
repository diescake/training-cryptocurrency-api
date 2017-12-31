const LineAPI = require('line-api');

class LineNotifier {
  constructor(aConfig) {
    this.notifier = new LineAPI.Notify({
      token: aConfig.token
    });
  }

  alertPrice(aPair, aThreashold, aLast, aIsHigher) {
    this.notifier.send({
      message: (() => {
        return `[PriceAlert][${aPair}] last is ${aLast} and ${aIsHigher ? 'higher' : 'lower'} than ${aThreashold}`;
      })()
    });
  }

  send(aMessage) {
    this.notifier.send({
      message: aMessage
    });
  }
}

module.exports = LineNotifier;
