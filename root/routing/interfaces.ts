import { FunctionComponent } from 'react';

import { APP_PATH_URL } from './consts';

export interface RoutingDefinition {
  component: FunctionComponent;
  path: APP_PATH_URL;
  isExact?: boolean;
}
