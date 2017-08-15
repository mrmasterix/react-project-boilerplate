import React from 'react';

export default props => (
  <div className={props.element('form')}>
    <p className={props.element('description')}>Here you can try to change hello message and be confident that boilerplate is working correctly</p>
    <form onSubmit={props.helloMessage}>
      <input
        type="text"
        name="message"
        className={props.element('text')}
      />
      <button className={props.element('button')}>Change message</button>
    </form>
  </div>
);
