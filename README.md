# json-2-xml

Convert simple JS objects to XML


[![Build Status][travis-image]][travis-url]
[![NPM version][npm-image]][npm-url]


## Install

```
$ npm install --save json-2-xml
```


## Usage

```js
import { jsonToXml } from 'json-2-xml';

const object = {
  item: {
    foo: 'Lorem',
    bar: 'Ipsum'
  }
};

const xml = jsonToXml(object); // <item><foo>Lorem</foo><bar>Ipsum</bar></item>;
```


## License

MIT © [Jonathan Persson](https://github.com/jonathanp)

[npm-url]: https://npmjs.org/package/json-2-xml
[npm-image]: https://badge.fury.io/js/json-2-xml.svg
[travis-image]: https://travis-ci.org/jonathanp/json-2-xml.svg
[travis-url]: https://travis-ci.org/jonathanp/json-2-xml