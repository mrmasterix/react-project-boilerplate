import React from 'react';
import App from '../app';

export default class AppComponent extends React.Component {
  constructor({ info }) {
    super();
    if (typeof info !== 'object') {
      throw Error('Component should have an "info" property and it should be an object');
    }

    if (typeof info.name === 'undefined' || info.name === null) {
      throw Error('Component should have a "name" property in "info" object');
    }

    this.info = info;
  }

  componentWillMount() {
    App.addComponent(this.info.name, this);
    if (this.willMount) {
      this.willMount();
    }
  }
}
