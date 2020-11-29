import { Icon } from 'common/icon/interfaces';
import { ICONS } from 'common/icon';

interface SocialMediaConfig {
  name: string;
  icon: Icon["icon"];
  link: string;
}

export const socialMediaConfig: SocialMediaConfig[] = [
  {
    name: "Facebook",
    icon: ICONS.FACEBOOK,
    link: "http://www.facebook.com",
  },
  {
    name: "Facebook",
    icon: ICONS.INSTAGRAM,
    link: "http://www.instargram.com",
  },
];
