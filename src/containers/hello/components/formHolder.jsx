import React from 'react';
import Description from './description';
import Form from './form';

export default props => (
  <div className={props.element('form')}>

    <Description
      description="Here you can try to change hello message and be confident that boilerplate is working correctly"
      element={props.element}
    />

    <Form
      onSubmit={props.helloMessage}
      element={props.element}
    />

  </div>
);
