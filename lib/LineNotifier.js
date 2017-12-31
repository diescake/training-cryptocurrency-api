const LineAPI = require('line-api');

class LineNotifier {
  constructor(aConfig) {
    this.notifier = new LineAPI.Notify({
      token: aConfig.token
    });
  }

  send(aMessage) {
    this.notifier.send({
      message: aMessage
    });
  }
}

module.exports = LineNotifier;
