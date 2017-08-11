import SmartObject from '../instance';

const methodName = 'modify';
const method = function forEach(state, modifier) {
  if (!state || !modifier) {
    const paramsCount = 1 + (state || modifier ? 0 : 1);
    throw Error(`SmartObject.modify should have 2 parameters. Instead got ${paramsCount}.`);
  }
  return Object.assign({}, state, modifier);
};

SmartObject.createMethod(methodName, method);
