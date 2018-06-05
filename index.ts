export const jsonToXml = (object: any): string => {
  return Object.entries(object)
    .map(([ tag, value ]) => {
      if (value == null) {
        return `<${tag} xsi:nil="true"/>`;
      }

      const children = typeof value === 'object' ? jsonToXml(value) : value;

      if (children === '') {
        return `<${tag}/>`;
      }

      if (/^\d+$/.test(tag)) {
        return children;
      }

      return `<${tag}>${children}</${tag}>`;
    })
    .join('');
};
