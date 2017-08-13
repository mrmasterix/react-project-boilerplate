import render from './main/render';
import SmartObject from './services/smartObject';

class App {
  constructor(appName) {
    this.name = appName;
    this.components = {};
  }

  run() {
    document.addEventListener('DOMContentLoaded', render, false);
  }

  addComponent(name, component) {
    if (SmartObject.hasProp(this.components, name)) {
      throw Error(`Component with name "${name}" is already exist!`);
    }
    this.components[name] = component;
  }
}

export default new App(commonConfig.appName);
