import React, { FunctionComponent } from 'react';

import Logo from './logo';
import Navigation from './navigation';
import SocialMedia from './social-media';

const Sidebar: FunctionComponent = () => (
    <div className="sidebar">
        <Logo />
        <Navigation />
        <SocialMedia />
    </div>
);

export default Sidebar;