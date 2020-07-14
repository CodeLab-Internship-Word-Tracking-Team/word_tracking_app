/* eslint-disable no-unused-expressions */
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// Routes
import Home from './Home/Home';
import ShowProjects from './ShowProjects/ShowProjects';
import ShowProject from './ShowProject/ShowProject';

export default function Routes({ user, project }) {
  return (
    <div>
      {/* "/" => ShowProjects */}
      <Route
        exact
        path="/"
        render={() => (
          user ? (
            <ShowProjects user={user} />
          ) : (
            <Home />
          )
        )}
      />

      {/* "/project/:id" => ShowProject */}
      <Route
        path="/project/"
        render={() => (
          user ? (
            <ShowProject user={user} project={project} />
          ) : (
            <Home />
          )
        )}
      />
    </div>
  );
}
