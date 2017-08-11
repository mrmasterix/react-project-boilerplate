class PureReducer {

  constructor() {
    this.reducers = {};
  }

  getAll() {
    return this.reducers;
  }

  register(name, reducer) {
    this.reducers[name] = reducer;
  }

}

export default new PureReducer();
