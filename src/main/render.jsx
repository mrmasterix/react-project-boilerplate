import React from 'react';
import { render } from 'react-dom';
import thunk from 'redux-thunk';
import { applyMiddleware } from 'redux';
import AppProvider from './provider';
import Store from './store';
import PureReducers from '../base/reducer/component';
import StorageReducer from '../base/reducer/storage';
import App from '../app';
import ActionCreator from '../services/actionCreator';
import { main } from '../constants/stores';

export default () => {
  const store = new Store({
    reducers: {
      ...StorageReducer.getAll(),
      ...PureReducers.getAll(),
    },
    middleware: [
      applyMiddleware(thunk),
    ],
  });

  App.addStore(main, store);
  ActionCreator.setDispatch(main, store.dispatch);

  const node = document.querySelector(commonConfig.appRoot);
  render(<AppProvider store={store} />, node);
};
