// React Imports
import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// Auth0 Import
import { withAuth0 } from '@auth0/auth0-react';

// Material UI Imports
import { withStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

// Redux Imports
import { connect, useDispatch } from 'react-redux';
import { setToken } from './Utils/Redux/Features/token/tokenSlice';

// Components & Page Imports
import Navigation from './Components/Navigation/Navigation';
import Routes from './Routes/Routes';

// Style Import
import './App.scss';

const classes = ({
  container: {
    maxWidth: '87.5vw',
    margin: '2vh 6.25vw 0 6.25vw',
    padding: '0',
  },
});

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projectId: undefined,
      user: undefined,
    };

    // Binding `this`
    this.focusProject = this.focusProject.bind(this);
    this.getUserToken = this.getUserToken.bind(this);
  }

  async getUserToken() {
    // Auth0 Access Token Method
    const { auth0, setToken } = this.props;
    const { isAuthenticated, getAccessTokenSilently } = auth0;

    if (isAuthenticated) {
      // Set Auth0 App Domain Var
      // TODO: environment variable
      const domain = 'wordsome.us.auth0.com';

      // Request JWT
      const accessToken = await getAccessTokenSilently({
        audience: `https://${domain}/api/v2/`,
        scope: 'read:current_user',
      });

      // Send `accessToken` to Store
      setToken(accessToken);
      this.setState({ user: accessToken });
    }
  }

  focusProject(projectId) {
    this.setState({ projectId });
  }

  render() {
    const { user, projectId } = this.state;
    // eslint-disable-next-line no-shadow
    const { classes } = this.props;

    if (!user) {
      this.getUserToken();
    }

    return (
      <div className="App">
        <Router>
          <Navigation getToken={this.getUserToken} focusProject={this.focusProject} />
          <Container className={classes.container}>
            <Routes
              getToken={this.getUserToken}
              projectId={projectId}
              focusProject={this.focusProject}
            />
          </Container>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {
    token: state.token.value,
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    setToken: (event) => dispatch(setToken(event)),
  }
);

export default withAuth0(connect(mapStateToProps, mapDispatchToProps)(withStyles(classes)(App)));
