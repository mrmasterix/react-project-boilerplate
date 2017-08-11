class SmartObject {

  createMethod(methodName, methodFn) {
    if (Object.prototype.hasOwnProperty.call(this, methodName)) {
      throw Error(`Reducer with name "${methodName}" is already exist!`);
    }
    this[methodName] = methodFn.bind(this);
  }

}

export default new SmartObject();
