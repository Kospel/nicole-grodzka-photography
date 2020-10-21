import { render } from 'react-dom';
import React from 'react';

import Layout from 'common/layout';

import './index.scss';

const root = document.getElementById('root');
const renderApp = () => render(<Layout />, root);

renderApp();
