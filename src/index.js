'use-strict'


import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { Provider } from 'react-redux';
import store from './redux/store'
import {BrowserRouter as Router} from 'react-router-dom';
import {I18nextProvider} from 'react-i18next';



ReactDOM.render(
  <I18nextProvider>
    <Provider store={store}>
      <Router basename={window.location.pathname || ''}>
        <App />
      </Router>
    </Provider>
  </I18nextProvider>,
  document.getElementById('root')
);

