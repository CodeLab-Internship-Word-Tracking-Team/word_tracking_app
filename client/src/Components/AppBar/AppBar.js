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

// Auth0 Imports
import { useAuth0 } from '@auth0/auth0-react';

// Style Import
import './AppBar.scss';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <Button style={{ color: 'black' }} onClick={() => loginWithRedirect()}>Log In</Button>;
};

const LogoutButton = () => {
  const { logout } = useAuth0();

  return <Button style={{ color: 'black' }} onClick={() => logout()}>Log Out</Button>;
};

const UserButton = () => {
  const { user } = useAuth0();

  return (
    <Hidden only={['xs', 'sm']}>
      <Button disabled style={{ color: 'black' }}>{user.name}</Button>
    </Hidden>
  );
};

export default function ButtonAppBar() {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="root">
      <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none' }} className="navigation-app-bar">
        <Toolbar>
          <Link to="/" color="inherit" className="title">
            <Typography variant="h4">
              Wordsome
            </Typography>
          </Link>
          <div className="container">
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
