# bragg-cors [![Build Status](https://travis-ci.org/SamVerschueren/bragg-cors.svg?branch=master)](https://travis-ci.org/SamVerschueren/bragg-cors)

> [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS) middleware for [bragg](https://github.com/SamVerschueren/bragg)


## Install

```
$ npm install --save bragg-cors
```


## Usage

```js
const bragg = require('bragg');
const cors = require('bragg-cors');

const app = bragg();

app.use(ctx => {
	ctx.body = {
		unicorn: '🦄'
	};
});

app.use(cors('https://www.foo.io'));

exports.handler = app.listen();
```


## API

### cors(origin)

#### origin

Type: `string`

A URI that may access the resource.


## License

MIT © [Sam Verschueren](https://github.com/SamVerschueren)
