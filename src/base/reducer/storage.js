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
    return this.reducers;
  }

  addReducer(reducerName, reducerInstance) {
    if (Object.prototype.hasOwnProperty.call(this.reducers, reducerName)) {
      throw Error(`Reducer with name "${reducerName}" is already exist!`);
    }
    this.reducers[reducerName] = reducerInstance;
  }

  getNewState(state, action) {
    const r = SmartObject.forEach(this.reducers, (reducer) => {
      return reducer.getNewState(state, action);
    });
    console.log(r);
    return r;
  }

}

export default new ReducerStorage();
