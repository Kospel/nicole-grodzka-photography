import { IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core';

import { EventHandler } from 'utils/interfaces';

export interface IconProps {
  icon: IconProp;
  size?: SizeProp;
  className?: string;
  onClick?: EventHandler;
}

export interface Icons {
  [key: string]: IconProp;
}
