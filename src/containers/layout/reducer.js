import ComponentReducer from '../../base/reducer/component';
import initialState from './initialState';
import ActionTypes from '../../services/actionTypes';
import * as LayoutTypes from './constants/types';

const types = ActionTypes.create(LayoutTypes);

const cases = {
  [types.TEST]: (state, action) => (Object.assign({}, state, { post: action.payload })),
};

ComponentReducer.register('Layout', initialState, cases);
