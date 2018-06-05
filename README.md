# js-object-to-xml

Convert simple JS objects to XML


[![Build Status][travis-image]][travis-url]
[![NPM version][npm-image]][npm-url]


## Install

```
$ npm install --save js-object-to-xml
```


## Usage

```js
import { objectToXml } from 'js-object-to-xml';

const object = {
  item: {
    foo: 'Lorem',
    bar: 'Ipsum'
  }
};

const xml = objectToXml(object); // <item><foo>Lorem</foo><bar>Ipsum</bar></item>;
```


## License

MIT © [Jonathan Persson](https://github.com/jonathanp)

[npm-url]: https://npmjs.org/package/js-object-to-xml
[npm-image]: https://badge.fury.io/js/js-object-to-xml.svg
[travis-image]: https://travis-ci.org/jonathanp/js-object-to-xml.svg
[travis-url]: https://travis-ci.org/jonathanp/js-object-to-xml