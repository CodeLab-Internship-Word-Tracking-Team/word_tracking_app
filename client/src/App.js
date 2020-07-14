import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from './Components/AppBar';
import Projects from './Components/Projects';
import './App.css';
import './Components/AppBar.js';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <AppBar />
        <Route path="/projects" component={Projects} />
      </div>
    </Router>
  );
}

export default App;
