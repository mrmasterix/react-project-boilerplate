import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, BrowserHistory } from 'react-router-dom';
import AppComponent from '../../base/baseComponent';
import './reducer';

class Layout extends AppComponent {

  render() {
    return (
      <Router history={BrowserHistory}>
        <div>
          <h3>React Project Boilerplate</h3>
          Is Loading: {this.props.isLoading ? 'Loading...' : 'Ready!'}
        </div>
      </Router>
    );
  }

}

const mapToProps = state => ({
  ...state.Layout,
  isLoading: state.isLoading,
  info: {
    name: 'Layout',
  },
});

export default connect(mapToProps)(Layout);
