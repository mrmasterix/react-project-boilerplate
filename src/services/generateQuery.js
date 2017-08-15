export default (obj) => {
  const str = [];
  Object.keys(obj).map((p) => {
    if ((Object.prototype.hasOwnProperty.call(obj, p) && obj[p]) || (typeof obj[p] === 'number' && obj[p] >= 0)) {
      str.push(`${encodeURIComponent(p)}=${encodeURIComponent(obj[p])}`);
    }
    return p;
  });
  return str.join('&');
};
