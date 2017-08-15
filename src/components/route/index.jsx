import React from 'react';
import { Route } from 'react-router-dom';

export default (routeProps, routeIndex) => (<Route key={routeIndex} {...routeProps} />);
