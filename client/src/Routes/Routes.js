// React Imports
import React from 'react';
import { Route } from 'react-router-dom';

// Route Imports
import Home from './Home/Home';
import ShowProjects from './ShowProjects/ShowProjects';
import ShowProject from './ShowProject/ShowProject';

export default function Routes({ user, project }) {
  const { project_id: projectId } = project;
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
            <ShowProject user={user} projectId={projectId} />
          ) : (
            <Home />
          )
        )}
      />
    </div>
  );
}
