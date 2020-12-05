import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

import { APP_PATH_URL } from 'routing/consts';

const Navigation: FunctionComponent = () => (
  <div className="navigation">
    <Link to={APP_PATH_URL.HOME}>PHOTO</Link>
    <Link to={APP_PATH_URL.VIDEO}>VIDEO</Link>
    <Link to={APP_PATH_URL.CONTACT}>CONTACT</Link>
  </div>
);

export default Navigation;
