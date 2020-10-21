import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

import { APP_PATH_URL } from 'routing/consts';

const Navigation: FunctionComponent = () => (
    <div className="navigation">
        <Link to={APP_PATH_URL.ABOUT}>ABOUT</Link>
        <Link to={APP_PATH_URL.HOME}>HOME</Link>
    </div>
);

export default Navigation;