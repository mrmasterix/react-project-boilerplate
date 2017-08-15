import React from 'react';

export default props => (
  <p className={props.element('message')}>{props.message}</p>
);
