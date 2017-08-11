import SmartObject from '../instance';

const methodName = 'forEach';
const method = function forEach(object, handler) {
  if (!handler || !object) {
    const paramsCount = 1 + (object || handler ? 0 : 1);
    throw Error(`SmartObject.forEach should have 2 parameters. Instead got ${paramsCount}.`);
  }
  return Object.keys(object).forEach((key, index) => handler(object[key], index));
};

SmartObject.createMethod(methodName, method);
