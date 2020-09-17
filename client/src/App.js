// React Imports
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// Auth0 Import
import { withAuth0, useAuth0 } from '@auth0/auth0-react';

// Material UI Imports
import { Container, makeStyles } from '@material-ui/core';

// Redux Imports
import { useDispatch } from 'react-redux';
import { setToken } from './Utils/Redux/Features/token/tokenSlice';

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
  // Auth0 Access Methods
  const { getAccessTokenSilently } = useAuth0();
  // Redux Dispatch Method
  const dispatch = useDispatch();
  // Material UI
  const classes = useStyles();

  const [userToken, setUserToken] = useState([]);
  useEffect(() => {
    const getUserToken = async () => {
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

  const [focusedProject, setFocusedProject] = useState(undefined);
  const focusProject = (event) => {
    // Set ClassName for focused element
    const selectedClassString = 'list-item-selected';

    // Return `true` if `event.target` is parent container of <ProjectNavigationItem />
    const checkContainer = (element) => element.classList.contains('project-navigation-item');

    // Remove ClassName from previously focused element
    const selectedElements = document.querySelectorAll(`.${selectedClassString}`);
    selectedElements.forEach((element) => {
      element.classList.remove(selectedClassString);
    });

    // Find target element
    let element = event.target;
    while (!checkContainer(element)) { element = element.parentElement; }
    // Apply `#list-item-selected` class to target element
    element.classList.add(selectedClassString);

    // Set `state.focusedProject` to projectId
    setFocusedProject(element.id);
  };

  return (
    <div className="App">
      <Router>
        <Navigation focusProject={focusProject} />
        <Container className={classes.container}>
          <Routes projectId={focusedProject} />
        </Container>
      </Router>
    </div>
  );
}

export default withAuth0(App);
