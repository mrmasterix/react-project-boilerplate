import React from 'react';
import Title from './sectionTitle';
import Message from './message';
import Form from './form';

export default (props) => (
  <section className={props.block()}>
    <Title title={props.title} element={props.element} />
    <Message message={props.message} element={props.element} />
    <Form {...props} element={props.element} />
  </section>
);
