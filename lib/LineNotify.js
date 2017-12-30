const LineAPI = require('line-api');

class LineNotify {
  constructor(aConfig) {
    this.notify = new LineAPI.Notify({
      token: aConfig.token
    });
  }

  send(aMessage) {
    this.notify.send({
      message: aMessage
    });
  }
}

module.exports = LineNotify;
