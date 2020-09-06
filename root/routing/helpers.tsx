import React from 'react';
import { Route } from 'react-router-dom';

import NoMatchPage from 'pages/no-matched-page';

import { RoutingDefinition } from './interfaces';

export const getRoutes = (routingDefinition: RoutingDefinition[]) =>
  routingDefinition.map(({ component, path, isExact = false }, index) => (
    <Route key={index} exact={isExact} path={path} component={component} />
  ));

export const getNoMatchRoute = () => <Route path="*" component={NoMatchPage} />;
