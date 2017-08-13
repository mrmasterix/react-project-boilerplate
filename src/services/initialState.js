import * as common from '../constants/initialStates/common';

export class InitialState {
  constructor(commonState) {
    this.common = commonState;
  }

  createWithCommon(newInitialState) {
    if (typeof newInitialState === 'object') {
      return {
        ...this.common,
        ...newInitialState,
      };
    }
    throw Error('Argument should be an object');
  }

  create(newTypes) {
    if (typeof newTypes !== 'object') {
      throw Error('Argument should be an object');
    }
    return newTypes;
  }
}

export default new InitialState(common);
