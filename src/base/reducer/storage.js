import SmartObject from '../../services/smartObject';

class ReducerStorage {

  constructor() {
    this.reducers = {};
  }

  getReducer(reducerName) {
    if (Object.prototype.hasOwnProperty.call(this.reducers, reducerName)) {
      return this.reducers[reducerName];
    }
    throw Error(`There is no reducer with name: ${reducerName}`);
  }

  getAll() {
    const reducers = {};
    Object.keys(this.reducers).forEach((reducerName) => {
      reducers[reducerName] = this.reducers[reducerName].getNewState;
    });
    return reducers;
  }

  addReducer(reducerName, reducerInstance) {
    if (SmartObject.hasProp(this.reducers, reducerName)) {
      throw Error(`Reducer with name "${reducerName}" is already exist!`);
    }
    this.reducers[reducerName] = reducerInstance;
  }

  getNewState(state, action, types) {
    const keys = Object.keys(this.reducers);
    return keys.reduce((curState, reducerKey) => {
      if (SmartObject.hasValue(types, action.type)) {
        return this.reducers[reducerKey].getNewState(curState, action);
      }
      return state;
    }, state);
  }

}

export default new ReducerStorage();
