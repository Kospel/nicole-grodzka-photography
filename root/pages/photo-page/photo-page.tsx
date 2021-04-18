import React, { FunctionComponent, memo } from 'react';

import { foodPhotos } from 'assets/photos';
import PhotoCarousel from 'common/photo-carousel';

const PhotoPage: FunctionComponent = () => (
  <div className="photo-page">
    <PhotoCarousel photos={foodPhotos} />
  </div>
);

export default memo(PhotoPage);
