const test = require('tape');
const { jsonToXml } = require('./dist');

test('simple object', assert => {
  const actual = jsonToXml({
    item: {
      foo: 'Lorem ipsum',
      bar: 'Dolor sit amet'
    }
  });

  const expected = `<item><foo>Lorem ipsum</foo><bar>Dolor sit amet</bar></item>`;

  assert.equal(actual, expected);
  assert.end();
});

test('object 2 levels deep', assert => {
  const actual = jsonToXml({
    item: {
      foo: {
        baz: 'Lorem',
        boz: 'Ipsum'
      },
      bar: 'Dolor sit amet'
    }
  });

  const expected = `<item><foo><baz>Lorem</baz><boz>Ipsum</boz></foo><bar>Dolor sit amet</bar></item>`;

  assert.equal(actual, expected);
  assert.end();
});

test('array of objects', assert => {
  const actual = jsonToXml({
    items: [
      {
        item: {
          foo: 'Lorem ipsum',
          bar: 'Dolor sit amet'
        }
      },
      {
        item: {
          foo: 'Consectetur',
          bar: 'Adipiscing'
        }
      }
    ]
  });

  const expected = `<items><item><foo>Lorem ipsum</foo><bar>Dolor sit amet</bar></item><item><foo>Consectetur</foo><bar>Adipiscing</bar></item></items>`;

  assert.equal(actual, expected);
  assert.end();
});

test('empty string', assert => {
  const actual = jsonToXml({
    item: {
      foo: ''
    }
  });

  const expected = `<item><foo/></item>`;

  assert.equal(actual, expected);
  assert.end();
});

test('null values', assert => {
  const actual = jsonToXml({
    item: {
      foo: null
    }
  });

  const expected = `<item><foo xsi:nil="true"/></item>`;

  assert.equal(actual, expected);
  assert.end();
});

test('undefined values', assert => {
  const actual = jsonToXml({
    item: {
      foo: undefined
    }
  });

  const expected = `<item><foo xsi:nil="true"/></item>`;

  assert.equal(actual, expected);
  assert.end();
});

test('numbers', assert => {
  const actual = jsonToXml({
    item: {
      foo: 12
    }
  });

  const expected = `<item><foo>12</foo></item>`;

  assert.equal(actual, expected);
  assert.end();
});