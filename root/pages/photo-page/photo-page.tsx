import React, { FunctionComponent } from 'react';

import PhotoGallery from 'common/photo-gallery';
import { nicolePhoto } from 'assets/photos';

const PhotoPage: FunctionComponent = () => (
  <div className="photo-page">
    <PhotoGallery photos={nicolePhoto} />
  </div>
);

export default PhotoPage;
