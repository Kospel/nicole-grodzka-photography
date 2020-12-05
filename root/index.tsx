import React from 'react';
import { render } from 'react-dom';

import PageLayout from 'common/page-layout';

import './index.scss';

const root = document.getElementById('root');

const renderApp = () => render(<PageLayout />, root);

renderApp();
