import React, { FunctionComponent, memo } from 'react';
import { Switch } from 'react-router-dom';

import { getRoutes, getNoMatchRoute } from './helpers';
import { routingDefinition } from './consts';

const SwitchRouter: FunctionComponent = () => (
  <div className="main-content">
    <Switch>
      {getRoutes(routingDefinition)}
      {getNoMatchRoute()}
    </Switch>
  </div>
);

export default memo(SwitchRouter);
