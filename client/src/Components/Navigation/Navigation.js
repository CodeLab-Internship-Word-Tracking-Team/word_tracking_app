// React Imports
import React from 'react';

// Auth0 Import
import { useAuth0 } from '@auth0/auth0-react';

// Component Imports
import AppBar from './AppBar';
import ProjectNavigation from './ProjectNavigation/ProjectNavigation';

function Navigation({ focusProject }) {
  // Destructure `isAuthenticated` method from Auth0 Library
  const { isAuthenticated } = useAuth0();

  // If user is logged in, return Navigation
  if (isAuthenticated) {
    return (
      <div>
        <AppBar />
        <ProjectNavigation focusProject={focusProject} />
      </div>
    );
  }

  return <AppBar />;
}

export default Navigation;
