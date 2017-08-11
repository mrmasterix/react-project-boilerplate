import React from 'react';
import { render } from 'react-dom';
import thunk from 'redux-thunk';
import { applyMiddleware } from 'redux';
import AppProvider from './provider';
import Store from './store';
import PureReducer from '../base/reducer/pure';

export default () => {
  const store = new Store({
    reducers: PureReducer.getAll(),
    middleware: [
      applyMiddleware(thunk),
    ],
  });
  const node = document.querySelector(commonConfig.appRoot);
  render(<AppProvider store={store} />, node);
};
