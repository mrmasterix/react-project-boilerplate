import SmartObject from '../instance';

const methodName = 'hasProp';
const method = function hasProp(context, prop) {
  return Object.prototype.hasOwnProperty.call(context, prop);
};

SmartObject.createMethod(methodName, method);
