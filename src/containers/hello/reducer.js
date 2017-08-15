import ComponentReducer from '../../base/reducer/component';
import initialState from './initialState';
import ActionTypes from '../../services/actionTypes';
import * as Types from './constants/types';

const types = ActionTypes.create(Types);

const cases = {
  [types.MESSAGE]: (state, action) => (Object.assign({}, state, { message: action.payload })),
};

ComponentReducer.register('Hello', initialState, cases);
