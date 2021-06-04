# js-object-to-xml

Convert simple JS objects to XML

![Tests][tests-badge]
[![NPM version][npm-image]][npm-url]

## Install

```
$ npm install --save js-object-to-xml
```

## Usage

```js
import { objectToXml } from "js-object-to-xml";

const object = {
  item: {
    foo: "Lorem",
    bar: "Ipsum"
  }
};

const xml = objectToXml(object); // <item><foo>Lorem</foo><bar>Ipsum</bar></item>
```

## Optional configuration to suppress empty tags
```js
import { objectToXml } from "js-object-to-xml";

const object = {
  item: {
    foo: null,
    bar: "Ipsum"
  }
};
const config = {
    suppressEmptyTags: true
};
const xml = objectToXml(object,config); // <item><bar>Ipsum</bar></item>
```
## License

MIT © [Jonathan Svenheden](https://github.com/svenheden)

[npm-url]: https://npmjs.org/package/js-object-to-xml
[npm-image]: https://badge.fury.io/js/js-object-to-xml.svg
[tests-badge]: https://github.com/svenheden/js-object-to-xml/workflows/Tests/badge.svg
