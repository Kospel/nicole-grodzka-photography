import { IconProp } from '@fortawesome/fontawesome-svg-core';

import { ICONS } from 'common/icon';

interface SocialMediaConfig {
  name: string;
  icon: IconProp;
  link: string;
}

export const socialMediaConfig: SocialMediaConfig[] = [
  {
    name: 'Facebook',
    icon: ICONS.FACEBOOK,
    link: 'http://www.facebook.com',
  },
  {
    name: 'Instagram',
    icon: ICONS.INSTAGRAM,
    link: 'http://www.instargram.com',
  },
];
