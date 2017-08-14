import * as types from '../containers/layout/constants/types';
import ActionCreator from '../services/actionCreator';

const getPost = post => ({
  type: types.TEST,
  payload: post,
});

ActionCreator.addAction('getPost', getPost);
