import SmartObject from '../instance';

const methodName = 'modify';
const method = function forEach(state, modifier) {
  return Object.assign({}, state, modifier);
};

SmartObject.createMethod(methodName, method);
