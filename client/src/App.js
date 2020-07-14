import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './Routes/Routes';

import AppBar from './Components/AppBar';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: 'user',
    };
  }

  render() {
    const { user } = this.state;

    return (
      <div className="App">
        <Router>
          <AppBar />
          <Routes user={user} />
        </Router>
      </div>
    );
  }
}

export default App;
