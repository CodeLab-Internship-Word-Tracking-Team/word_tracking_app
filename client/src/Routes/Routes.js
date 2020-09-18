// React Imports
import React from 'react';
import { Route } from 'react-router-dom';

// Auth0 Import
import { useAuth0 } from '@auth0/auth0-react';

// Route Imports
import Home from './Home/Home';
import ProjectPage from './ProjectPage/ProjectPage';

export default function Routes() {
  const { isAuthenticated } = useAuth0();
  return (
    <div>
      {/* "/" => ShowProjects */}
      <Route
        exact
        path="/"
        render={() => (
          isAuthenticated ? (
            <ProjectPage />
          ) : (
            <Home />
          )
        )}
      />
    </div>
  );
}
