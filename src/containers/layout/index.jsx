import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, BrowserHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import BaseComponent from '../../base/baseComponent';
import componentProps from './props';
import componentActions from './actions';
import AppRoutes from '../../main/routes';
import appRoute from '../../components/route';
import './reducer';
import './styles/main.scss';

class Layout extends BaseComponent {

  render() {
    return (
      <Router history={BrowserHistory}>

        <div className="b-applicationHolder">
          {AppRoutes.map(appRoute)}
        </div>
      </Router>
    );
  }
}

Layout.propTypes = {
  info: PropTypes.object.isRequired,
};

export default connect(componentProps, componentActions)(Layout);
