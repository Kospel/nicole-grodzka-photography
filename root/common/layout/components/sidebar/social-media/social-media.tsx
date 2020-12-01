import React, { FunctionComponent } from 'react';

import Icon from 'common/icon';
import { socialMediaConfig } from './social-media-config';

const socialMediaIconPack = () =>
  socialMediaConfig.map(({ name, icon, link }) => (
    <a
      className="social-media-link"
      key={name}
      href={link}
      target="_blank"
      rel="noreferrer"
    >
      <Icon icon={icon} size="lg" className="social-media-icon" />
    </a>
  ));

const SocialMedia: FunctionComponent = () => (
  <div className="social-media">{socialMediaIconPack()}</div>
);

export default SocialMedia;
