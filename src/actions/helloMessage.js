import * as types from '../containers/hello/constants/types';
import ActionCreator from '../services/actionCreator';

const helloMessage = text => ({
  type: types.MESSAGE,
  payload: text,
});

ActionCreator.addAction('helloMessage', helloMessage);
