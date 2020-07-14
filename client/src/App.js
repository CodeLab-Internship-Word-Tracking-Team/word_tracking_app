import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AppBar from './Components/AppBar';
import Projects from './Components/Projects';
import ProjectCard from './Components/ProjectCard';
import './App.css';
import './Components/AppBar.js';
import './Components/ProjectCard.js';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Routes from './Routes/Routes';

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
        <Route path="/projects" component={Projects} />
        <ProjectCard />
      </div>
    );
  }
}

export default App;
