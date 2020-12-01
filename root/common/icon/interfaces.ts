import { IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core';

export interface IconProps {
  icon: IconProp;
  size?: SizeProp;
  className?: string;
}

export interface Icons {
  [key: string]: IconProp;
}
