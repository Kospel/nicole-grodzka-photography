import React, { FunctionComponent } from 'react';

import PhotoGallery from 'common/photo-gallery';
import { localPhotos } from 'assets/photos';

const PhotoPage: FunctionComponent = () => (
  <div className="photo-page">
    <PhotoGallery photos={localPhotos} />
  </div>
);

export default PhotoPage;
