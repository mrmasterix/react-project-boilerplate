import SmartObject from '../../services/smartObject';

class ComponentReducer {

  constructor() {
    this.reducers = {};
  }

  getAll() {
    return this.reducers;
  }

  register(name, initialState, cases) {
    this.reducers[name] = (state = initialState, action) => {
      if (SmartObject.hasProp(cases, action.type)) {
        return cases[action.type](state, action, initialState);
      }
      return state;
    };
  }

}

export default new ComponentReducer();
