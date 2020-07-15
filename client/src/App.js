// React Imports
import React, { Component } from 'react';
// eslint-disable-next-line no-unused-vars
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

// Components & Pages
import AppBar from './Components/AppBar';
import Routes from './Routes/Routes';

// Styles
import './App.css';

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

    return (
      <div className="App">
        <Router>
          <AppBar />
          <Routes user={user} project={project} />
        </Router>
      </div>
    );
  }
}

export default App;
