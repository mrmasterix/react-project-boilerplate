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
    const r = {};
    Object.keys(this.reducers).forEach((k) => {
      r[k] = this.reducers[k].getNewState;
    });
    return r;
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
      if (SmartObject.hasProp(types, action.type)) {
        if (this.reducers[reducerKey].getNewState) {
          return this.reducers[reducerKey].getNewState(curState, action);
        }
        return this.reducers[reducerKey](curState, action);
      }
      return state;
    }, state);
  }

}

export default new ReducerStorage();
