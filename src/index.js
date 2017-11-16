import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import App from './App.js'

ReactDOM.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
, document.getElementById('root'));

registerServiceWorker();
