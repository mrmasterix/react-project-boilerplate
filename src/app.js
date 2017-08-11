import render from './main/render';

class App {
  constructor(appName) {
    this.name = appName;
  }

  run() {
    document.addEventListener('DOMContentLoaded', render, false);
  }
}

export default new App(commonConfig.appName);
