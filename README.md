# training-cryptocurrency-api

training for some Cryptocurrency APIs

## Install

```sh
npm install
```

This code is tested with node.js 8.6.0

## Preparation

Input your api-keys and secrets to `config/secure.js`

```js
module.exports.bitbank = {
  apiKey: 'your-api-key',
  secret: 'your-secret'
};

module.exports.zaif = {
  apiKey: 'your-api-key',
  secret: 'your-secret'
};

module.exports.line = {
  token: 'your-line-token'
};
```

## Run

```sh
npm start
```
