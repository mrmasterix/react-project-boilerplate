import SmartObject from '../instance';

const methodName = 'hasValue';
const method = function hasValue(context, value) {
  const matches = [];
  Object.keys(context).forEach((key) => {
    matches.push(context[key] === value);
  });
  return matches.some(match => match);
};

SmartObject.createMethod(methodName, method);
