import React, { FunctionComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IconProps } from './interfaces';

const Icon: FunctionComponent<IconProps> = ({ icon, size, className }) => (
  <FontAwesomeIcon className={className} size={size} icon={icon} />
);

export default Icon;
