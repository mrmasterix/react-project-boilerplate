import PureReducer from '../../base/reducer/pure';
import ReducerStorage from '../../base/reducer/storage';
import initialState from './initialState';
import ActionTypes from '../../services/actionTypes';
import * as LayoutTypes from './constants/types';

const types = ActionTypes.create(LayoutTypes);
const reducer = (state = initialState, action) => ReducerStorage.getNewState(state, action, types);

PureReducer.register('Layout', reducer);
