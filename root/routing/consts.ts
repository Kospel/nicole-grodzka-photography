import { RoutingDefinition } from './interfaces';

import AboutPage from 'pages/about-page';
import HomePage from 'pages/home-page';

export enum APP_PATH_URL {
  INDEX = '/',
  HOME= '/home',
  ABOUT = '/about',
};

export const routingDefinition: RoutingDefinition[] = [
  {
    component: HomePage,
    path: APP_PATH_URL.INDEX,
    isExact: true,
  },
  {
    component: HomePage,
    path: APP_PATH_URL.HOME,
    isExact: true,
  },
  {
    component: AboutPage,
    path: APP_PATH_URL.ABOUT,
    isExact: true,
  },
];
