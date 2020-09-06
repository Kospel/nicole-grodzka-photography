import { render } from 'react-dom';
import React from 'react';

import AppRouter from 'routing/router';

import './index.scss';

const root = document.getElementById('root');
const renderApp = () => render(<AppRouter />, root);

renderApp();
