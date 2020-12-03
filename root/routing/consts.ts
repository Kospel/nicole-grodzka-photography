import { RoutingDefinition } from './interfaces';

import VideoPage from 'pages/video-page';
import HomePage from 'pages/home-page';
import ContactPage from 'pages/contact-page';
import CooperationPage from 'pages/cooperation-page';

export enum APP_PATH_URL {
  INDEX = '/',
  HOME = '/home',
  VIDEO = '/video',
  CONTACT = '/contact',
  COOPERATION = '/cooperation',
}

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
    component: VideoPage,
    path: APP_PATH_URL.VIDEO,
    isExact: true,
  },
  {
    component: ContactPage,
    path: APP_PATH_URL.CONTACT,
    isExact: true,
  },
  {
    component: CooperationPage,
    path: APP_PATH_URL.COOPERATION,
    isExact: true,
  },
];
