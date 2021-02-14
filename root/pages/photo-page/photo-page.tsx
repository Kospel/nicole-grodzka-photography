import React, { FunctionComponent } from 'react';

import PhotoGallery from 'common/photo-gallery';
import { foodPhotos } from 'assets/photos';

const PhotoPage: FunctionComponent = () => (
  <div className="photo-page">
    <PhotoGallery photos={foodPhotos} />
  </div>
);

export default PhotoPage;
