import { BrowserRouter as Router } from 'react-router-dom';
import React, { FunctionComponent } from 'react';
import { hot } from 'react-hot-loader/root';

import SwitchRouter from 'routing/switch-router';

import Sidebar from './components/sidebar';

const PageLayout: FunctionComponent = () => (
  <Router>
    <div className="page-layout">
      <Sidebar />
      <SwitchRouter />
    </div>
  </Router>
);

export default hot(PageLayout);
