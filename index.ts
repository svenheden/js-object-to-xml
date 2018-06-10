export const objectToXml = (object: any): string => {
  return Object.entries(object)
    .map(([ key, value ]) => {
      let startTag = key;
      let endTag = key;
      let children;

      if (value == null) {
        return `<${startTag} xsi:nil="true"/>`;
      }

      if (typeof value === 'object' && '@' in value) {
        startTag += ` ${formatAttributes(value['@'])}`;
        value = '#' in value ? value['#'] : '';
      }

      if (typeof value === 'object') {
        children = objectToXml(value);
      } else {
        children = escape(value);
      }

      if (children === '') {
        return `<${startTag}/>`;
      }

      if (/^\d+$/.test(key)) {
        return children;
      }

      return `<${startTag}>${children}</${endTag}>`;
    })
    .join('');
};

const formatAttributes = (attributes: object): string =>
  Object.entries(attributes)
    .map(([ key, value ]) => `${key}="${value}"`)
    .join(' ');

const escape = (val?: string) => val
  ? String(val)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
  : val;
