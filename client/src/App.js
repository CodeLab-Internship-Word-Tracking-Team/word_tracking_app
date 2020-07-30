// React Imports
import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// Auth0 Import
import { useAuth0 } from '@auth0/auth0-react';

// Material UI Imports
import { withStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

// Components & Page Imports
import AppBar from './Components/AppBar';
import Routes from './Routes/Routes';

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
      user: 'user',
      projectId: undefined,
    };

    // Binding `this`
    this.focusProject = this.focusProject.bind(this);
    this.getUserToken = this.getUserToken.bind(this);
  }

  async getUserToken() {
    // Auth0 Access Token Method
    const { isAuthenticated, getAccessTokenSilently } = useAuth0();

    if (isAuthenticated) {
      // Set Auth0 App Domain Var
      const domain = 'dev-word-tracking-app.us.auth0.com';

      // Request JWT
      const accessToken = await getAccessTokenSilently({
        audience: `https://${domain}/api/v2/`,
        scope: 'read:current_user',
      });

      // Set `this.state.user` to JWT
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

    this.getUserToken();

    return (
      <div className="App">
        <Router>
          <AppBar />
          <Container className={classes.container}>
            <Routes user={user} projectId={projectId} focusProject={this.focusProject} />
          </Container>
        </Router>
      </div>
    );
  }
}

export default withStyles(classes)(App);
