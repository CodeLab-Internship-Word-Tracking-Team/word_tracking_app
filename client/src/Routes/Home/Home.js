import React from 'react';

// Material UI imports
import { Grid, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ExampleCardGrid from '../../Components/ExampleCardGrid';

const useStyles = makeStyles({
  welcomeTitle: {
    marginTop: "15vh",
    textAlign: "center",
    fontSize: 36,
  },
  welcomeTagline: {
    textAlign: "center",
    fontSize: 28,
    marginTop: '3vh',
  },
  welcomeButtonsContainer: {
    textAlign: "center",
    marginTop: "10vh",
  },
  welcomeButton: {
    fullWidth: "false",
    marginTop: "2vh",
    marginBottom: "2vh",
  }
})

export default function Home() {
  const classes = useStyles();
  
  return (
    <div className={classes.welcomeContainer}>
      <Typography className={classes.welcomeTitle} variant="h1">Welcome to Count the Words</Typography>
      <Typography className={classes.welcomeTagline} variant="h2">
        Keep track of all your writing projects and track your word count goals!
      </Typography>
      <div className={classes.welcomeButtonsContainer}>
        <Button variant="outlined" color="primary" className={classes.welcomeButton}>
          Create an Account
        </Button>
        <Typography>or</Typography>
        <Button variant="outlined" color="primary" className={classes.welcomeButton}>
          Log In
        </Button>
      </div>
      <ExampleCardGrid />
    </div>
  );
}
