import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, BrowserHistory } from 'react-router-dom';

import './reducer';

class Layout extends React.Component {

  render() {
    return (
      <Router history={BrowserHistory}>
        <div>React Project Boilerplate!</div>
      </Router>
    );
  }

}

const mapToProps = state => ({
  ...state.Layout,
});

export default connect(mapToProps)(Layout);
