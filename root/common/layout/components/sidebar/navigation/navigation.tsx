import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

import { APP_PATH_URL } from 'routing/consts';

const Navigation: FunctionComponent = () => (
  <div className="navigation">
    <Link to={APP_PATH_URL.HOME}>STRONA GŁÓWNA</Link>
    <Link to={APP_PATH_URL.VIDEO}>WIDEO</Link>
    <Link to={APP_PATH_URL.CONTACT}>KONTAKT</Link>
    <Link to={APP_PATH_URL.COOPERATION}>WSPÓŁPRACA</Link>
  </div>
);

export default Navigation;
