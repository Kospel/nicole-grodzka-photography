import React, { FunctionComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Icon } from './interfaces';

const Icon: FunctionComponent<Icon> = ({ icon, size, className }) => <FontAwesomeIcon className={className} size={size} icon={icon} />

export default Icon;

