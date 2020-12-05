import { IconProp } from '@fortawesome/fontawesome-svg-core';

import { ICONS } from 'common/icon';

interface SocialMediaConfig {
  name: string;
  icon: IconProp;
  link: string;
}

export const socialMediaConfig: SocialMediaConfig[] = [
  {
    name: 'Instagram',
    icon: ICONS.INSTAGRAM,
    link: 'https://www.instagram.com/Nicole_Grodzka_photography/',
  },
  {
    name: 'LinkedIn',
    icon: ICONS.LINKEDIN,
    link: 'https://www.linkedin.com/in/nicole-grodzka-41180893/',
  },
  {
    name: 'Behance',
    icon: ICONS.BEHANCE,
    link: 'https://www.behance.net/nicolegrodzka',
  },
];
