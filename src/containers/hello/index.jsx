import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import bem from 'react-bem-classes';
import BaseComponent from '../../base/baseComponent';
import componentProps from './props';
import componentActions from './actions';
import generateClass from '../../services/generateClass';
import './reducer';
import './styles/main.scss';

import SectionHello from './components/section';

@bem({
  block: 'b-helloSection',
})
class Hello extends BaseComponent {

  render() {
    const { info } = this.props;
    return (
      <div className={generateClass(['b-pageHolder', info.pageClass])}>
        <SectionHello
          element={this.element}
          block={this.block}
          title="!!React Project Boilerplate"
          {...this.props}
        />
      </div>
    );
  }
}

Hello.propTypes = {
  info: PropTypes.object.isRequired,
  helloMessage: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
};

export default connect(componentProps, componentActions)(Hello);
