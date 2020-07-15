// React Imports
import React from 'react';
import { Route } from 'react-router-dom';

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

      {/* "/project/" => ShowProject */}
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
