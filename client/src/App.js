// React Imports
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// Auth0 Import
import { withAuth0, useAuth0 } from '@auth0/auth0-react';

// Material UI Imports
import { Container, makeStyles } from '@material-ui/core';

// Components & Page Imports
import Navigation from './Components/Navigation/Navigation';
import Routes from './Routes/Routes';

// Style Import
import './App.scss';

const useStyles = makeStyles({
  container: {
    maxWidth: '87.5vw',
    margin: '2vh 6.25vw 0 6.25vw',
    padding: '0',
  },
});

function App() {
  // Material UI
  const classes = useStyles();

  return (
    <div className="App">
      <Router>
        <Navigation />
        <Container className={classes.container}>
          <Routes />
        </Container>
      </Router>
    </div>
  );
}

export default withAuth0(App);
