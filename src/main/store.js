import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

export default class CreateStore {

  constructor(props) {
    this.persistedState = props.persistedState || {};
    this.reducers = props.reducers || {};
    this.combinedReducers = combineReducers(this.reducers);
    this.middleware = props.middleware || [];
    return createStore(
      this.combinedReducers,
      this.persistedState,
      composeWithDevTools(
        ...this.middleware,
      ),
    );
  }
}
