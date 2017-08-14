import * as types from '../constants/actions/common';
import ActionCreator from '../services/actionCreator';

const loading = flag => ({
  type: types.IS_LOADING,
  payload: flag,
});

ActionCreator.addAction('loading', loading);
