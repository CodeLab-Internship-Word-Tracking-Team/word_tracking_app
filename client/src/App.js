// React Imports
import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// Material UI Imports
import { withStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

// Components & Page Imports
import AppBar from './Components/AppBar';
import Routes from './Routes/Routes';

const classes = ({
  container: {
    maxWidth: '87.5vw',
    margin: '0 6.25vw 0 6.25vw',
    padding: '0',
  },
});

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: 'user',
      project: 'project',
    };
  }

  render() {
    const { user, project } = this.state;
    // eslint-disable-next-line no-shadow
    const { classes } = this.props;

    return (
      <div className="App">
        <Router>
          <AppBar />
          <Container className={classes.container}>
            <Routes user={user} project={project} />
          </Container>
        </Router>
      </div>
    );
  }
}

export default withStyles(classes)(App);
