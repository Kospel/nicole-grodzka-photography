import { APP_PATH_URL } from './consts';

export interface RoutingDefinition {
  component: any;
  path: APP_PATH_URL;
  isExact?: boolean;
}
