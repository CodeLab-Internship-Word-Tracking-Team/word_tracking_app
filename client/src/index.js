import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import { Auth0Provider } from '@auth0/auth0-react';

import { Provider } from 'react-redux';
import store from './App/store';

import App from './App';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Auth0Provider
    domain="wordsome.us.auth0.com"
    clientId="uLQl0EEH0gq47b4jP1TlLQY3aV6e1ar2"
    redirectUri={window.location.origin}
    audience="https://wordsome.us.auth0.com/api/v2/"
    scope="read:current_user update:current_user_metadata"
  >
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </Auth0Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
