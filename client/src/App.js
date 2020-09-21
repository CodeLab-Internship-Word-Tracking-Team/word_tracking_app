// React Imports
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// Auth0 Import
import { withAuth0 } from '@auth0/auth0-react';

// Material UI Imports
import { Container } from '@material-ui/core';

// Components & Page Imports
import AppBar from './Components/AppBar/AppBar';
import Routes from './Routes/Routes';

// Style Import
import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <AppBar />
        <Container className="container">
          <Routes />
        </Container>
      </Router>
    </div>
  );
}

export default withAuth0(App);
