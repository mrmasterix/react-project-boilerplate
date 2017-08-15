import React from 'react';

export default props => (
  <form onSubmit={props.onSubmit}>
    <input
      type="text"
      name="message"
      className={props.element('text')}
    />
    <button className={props.element('button')}>Change message</button>
  </form>
);
