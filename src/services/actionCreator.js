import { bindActionCreators } from 'redux';
import SmartObject from './smartObject';

class ActionCreator {

  constructor() {
    this.dispatch = {};
    this.pureActions = {};
    this.actions = {};
  }

  setDispatch(storeName, dispatch) {
    this.dispatch[storeName] = dispatch;
    this.bindActions(storeName);
  }

  addAction(name, action, storeName) {
    this.pureActions[name] = action;
    this.bindActions(storeName);
  }

  fire(actionName, data) {
    if (SmartObject.hasProp(this.actions, actionName)) {
      return this.actions[actionName](data);
    }
    throw Error(`There is no action with name ${actionName} in action creator.`);
  }

  bindActions(storeName) {
    this.actions = bindActionCreators(this.pureActions, this.dispatch[storeName || 'main']);
  }

}

export default new ActionCreator();
