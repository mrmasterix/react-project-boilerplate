import render from './main/render';
import SmartObject from './services/smartObject';

let isRun = false;

class App {

  constructor(appName) {
    this.name = appName;
    this.components = {};
    this.stores = {};
  }

  run() {
    if (!isRun) {
      document.addEventListener('DOMContentLoaded', render, false);
      isRun = true;
    } else {
      throw Error('Application is already initialized!');
    }
  }

  addComponent(name, component) {
    if (SmartObject.hasProp(this.components, name)) {
      throw Error(`Component with name "${name}" is already exist!`);
    }
    this.components[name] = component;
  }

  addStore(name, store) {
    if (SmartObject.hasProp(this.stores, name)) {
      throw Error(`Store with name "${name}" is already exist!`);
    }
    this.stores[name] = store;
    return this;
  }

  getStore(name) {
    if (!SmartObject.hasProp(this.stores, name)) {
      throw Error(`Store with name "${name}" does not exist!`);
    }
    return this.stores[name];
  }
}

export default new App(commonConfig.appName);
