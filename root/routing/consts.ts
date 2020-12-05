import { RoutingDefinition } from './interfaces';

import PhotoPage from 'pages/photo-page';
import VideoPage from 'pages/video-page';
import ContactPage from 'pages/contact-page';

export enum APP_PATH_URL {
  INDEX = '/',
  HOME = '/photo',
  VIDEO = '/video',
  CONTACT = '/contact',
}

export const routingDefinition: RoutingDefinition[] = [
  {
    component: PhotoPage,
    path: APP_PATH_URL.INDEX,
    isExact: true,
  },
  {
    component: PhotoPage,
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
];
