import * as common from '../constants/actions/common';

export class ActionTypes {
  constructor(commonTypes) {
    this.commonTypes = commonTypes;
  }

  createWithCommon(newTypes) {
    if (typeof newTypes !== 'object') {
      throw Error('Argument should be an object');
    }
    return {
      ...this.commonTypes,
      ...newTypes,
    };
  }

  create(newTypes) {
    if (typeof newTypes !== 'object') {
      throw Error('Argument should be an object');
    }
    return newTypes;
  }
}

export default new ActionTypes(common);
