// React Imports
import React from 'react';

// Material UI Imports
import { Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// Auth0 Imports
import { useAuth0 } from '@auth0/auth0-react';

// Component Imports
import ExampleCardGrid from './Components/ExampleCardGrid';

const useStyles = makeStyles({
  welcomeTitle: {
    marginTop: '15vh',
    textAlign: 'center',
    fontSize: 36,
  },
  welcomeTagline: {
    textAlign: 'center',
    fontSize: 28,
    marginTop: '3vh',
  },
  welcomeButtonsContainer: {
    textAlign: 'center',
    marginTop: '10vh',
  },
  welcomeButton: {
    fullWidth: 'false',
    marginTop: '2vh',
    marginBottom: '2vh',
  },
});

export default function Home() {
  const { loginWithRedirect } = useAuth0();
  const classes = useStyles();

  return (
    <div className={classes.welcomeContainer}>
      <Typography className={classes.welcomeTitle} variant="h1">Welcome to Wordsome</Typography>
      <Typography className={classes.welcomeTagline} variant="h2">
        Keep track of all your writing projects and track your word count goals!
      </Typography>
      <div className={classes.welcomeButtonsContainer}>
        <Button variant="outlined" color="primary" className={classes.welcomeButton} onClick={() => loginWithRedirect()}>
          Create an Account
        </Button>
        <Typography>or</Typography>
        <Button variant="outlined" color="primary" className={classes.welcomeButton} onClick={() => loginWithRedirect()}>
          Log In
        </Button>
      </div>
      <ExampleCardGrid />
    </div>
  );
}
