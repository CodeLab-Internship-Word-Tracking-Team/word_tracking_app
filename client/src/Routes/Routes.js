import React from 'react';
import { Route } from 'react-router-dom';

// Routes
import Home from './Home/Home';
import ShowProjects from './ShowProjects/ShowProjects';
import ShowProject from './ShowProject/ShowProject';

export default function Routes({ user, project, projects }) {
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
      {/* "/projects" => ShowProjects */}
      <Route
        path="/projects/"
        render={() => (
          user ? (
            <ShowProjects user={user} project={projects} />
          ) : (
            <Home />
          )
        )}
      />
    </div>
  );
}
