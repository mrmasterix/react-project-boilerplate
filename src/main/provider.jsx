import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Layout from '../containers/layout';

export default class extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <Layout />
      </Provider>
    );
  }
}
