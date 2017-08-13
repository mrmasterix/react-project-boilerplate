import React from 'react';
import { render } from 'react-dom';
import thunk from 'redux-thunk';
import { applyMiddleware } from 'redux';
import AppProvider from './provider';
import Store from './store';
import PureReducers from '../base/reducer/pure';
import StorageReducer from '../base/reducer/storage';

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
  window.store = store;
  const node = document.querySelector(commonConfig.appRoot);
  render(<AppProvider store={store} />, node);
};
