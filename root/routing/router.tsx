import { BrowserRouter as Router, Switch } from 'react-router-dom';
import React, { FunctionComponent } from 'react';
import { hot } from 'react-hot-loader/root';

import { getRoutes, getNoMatchRoute } from './helpers';
import { routingDefinition } from './consts';

export const AppRouter: FunctionComponent = () => (
  <Router>
    <Switch>
      {getRoutes(routingDefinition)}
      {getNoMatchRoute()}
    </Switch>
  </Router>
);

export default hot(AppRouter);
