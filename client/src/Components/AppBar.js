// React Imports
import React from 'react';
import { Link } from 'react-router-dom';

// Material UI Imports
import {
  AppBar,
  Button,
  Hidden,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// Auth0 Imports
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <Button color="inherit" onClick={() => loginWithRedirect()}>Log In</Button>;
};

const LogoutButton = () => {
  const { logout } = useAuth0();

  return <Button color="inherit" onClick={() => logout()}>Log Out</Button>;
};

const UserButton = () => {
  const { user } = useAuth0();

  return (
    <Hidden only={['xs', 'sm']}>
      <Button disabled style={{ color: 'white' }}>{user.name}</Button>
    </Hidden>
  );
};

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  container: {
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'baseline',
  },
}));

export default function ButtonAppBar() {
  const { isAuthenticated } = useAuth0();
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Link style={{ color: 'white', textDecoration: 'none' }} to="/" color="inherit" className={classes.title}>
            <Typography variant="h5">
              Wordsome
            </Typography>
          </Link>
          <div className={classes.container}>
            { !isAuthenticated
              && <LoginButton /> }
            { isAuthenticated
              && <UserButton /> }
            { isAuthenticated
              && <LogoutButton /> }
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
