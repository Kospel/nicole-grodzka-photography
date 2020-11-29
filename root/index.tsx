import React from 'react';
import { render } from 'react-dom';

import Layout from 'common/layout';

import './index.scss';

const root = document.getElementById('root');

const renderApp = () => render(<Layout />, root);

renderApp();
