import React from 'react';

export default ({ description, element }) => (
  <p className={element('description')}>{description}</p>
);
