import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Auth0Provider
    domain="dev-word-tracking-app.us.auth0.com"
    clientId="rFbv17C82s0HFO7wiuc6HXKyReuGS9dP"
    redirectUri={window.location.origin}
    audience="https://dev-word-tracking-app.us.auth0.com/api/v2/"
    scope="read:current_user read:current_user_metadata update:current_user_metadata"
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Auth0Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
