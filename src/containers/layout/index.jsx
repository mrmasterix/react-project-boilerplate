import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, BrowserHistory } from 'react-router-dom';
import BaseComponent from '../../base/baseComponent';
import props from './props';
import actions from './actions';
import './reducer';
import './styles/main.scss';

class Layout extends BaseComponent {
  render() {
    return (
      <Router history={BrowserHistory}>
        <section>
          <h3>React Project Boilerplate</h3>
          Is Loading: {this.props.isLoading ? 'Loading...' : 'Ready!'}
          <br/>
          <button onClick={this.props.getPost}>Get Post</button>
          <button onClick={this.props.load}>Load</button>
          <button onClick={this.props.complete}>Complete</button>
          <br/>
          <div>
            {this.props.post.title}
          </div>
        </section>
      </Router>
    );
  }
}

export default connect(props, actions)(Layout);
