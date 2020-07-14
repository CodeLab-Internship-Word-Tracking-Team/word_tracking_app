import React from 'react';
import ReactDOM from 'react-dom';

import Routes from './Routes/Routes';

import AppBar from './Components/AppBar';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <AppBar />
        <Routes />
      </div>
    </Router>
  );
}

export default App;
