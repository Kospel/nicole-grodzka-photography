import React, { FunctionComponent } from 'react';
import Gallery from 'react-photo-gallery';

import { photos } from 'assets/photos';

const HomePage: FunctionComponent = () => (
  <div className="home-page">
    <Gallery
      photos={photos}
      onClick={(event, photos) => console.log('data', photos)}
    />
  </div>
);

export default HomePage;
