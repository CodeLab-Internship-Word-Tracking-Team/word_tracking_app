// React Imports
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// Auth0 Import
import { withAuth0, useAuth0 } from '@auth0/auth0-react';

// Material UI Imports
import { Container, makeStyles } from '@material-ui/core';

// Redux Imports
import { useDispatch, useSelector } from 'react-redux';
import { setToken, selectToken } from './Utils/Redux/Features/token/tokenSlice';

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
  // Auth0 Access Token Method
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();
  // Redux Dispatch Method
  const dispatch = useDispatch();
  // Material UI
  const classes = useStyles();

  const token = useSelector(selectToken);
  // const [focusedProject, setFocusedProject] = useState([]);

  const [userToken, setUserToken] = useState([]);

  useEffect(() => {
    const getUserToken = async () => {
      // if (isAuthenticated) {
      // Set Auth0 App Domain Var
      // TODO: environment variable
      const domain = 'wordsome.us.auth0.com';

      // Request JWT
      const accessToken = await getAccessTokenSilently({
        audience: `https://${domain}/api/v2/`,
        scope: 'read:current_user',
      });

      // Send `accessToken` to Store
      dispatch(setToken(accessToken));
      setUserToken(accessToken);
    };

    getUserToken();
  }, []);

  const setFocusedProject = () => (console.log('hi'));

  return (
    <div className="App">
      <Router>
        <Navigation getToken={userToken} focusProject={setFocusedProject} />
        <Container className={classes.container}>
          <Routes
            getToken={token}
            // projectId={projectId}
            projectId={4}
            focusProject={setFocusedProject}
          />
        </Container>
      </Router>
    </div>
  );
}

export default withAuth0(App);
