// React Imports
import React from 'react';

// Material UI imports
import { Typography, Drawer, List } from '@material-ui/core';

// Auth0 Import
import { useAuth0 } from '@auth0/auth0-react';

// Component Imports
import ProjectNavigationItem from './ProjectNavigationItem/ProjectNavigationItem';

// Mock Data
// TODO: Delete mock data and replace with API call
const data = require('./data.json');

function mapProjects(projects, focusProject) {
  return projects.map((project) => <ProjectNavigationItem project={project} focusProject={focusProject} />);
}

function ProjectNavigation({ focusProject, getToken }) {
  // Destructure `isAuthenticated` method from Auth0 Library
  const { isAuthenticated } = useAuth0();

  // If user is logged in return Projects Sidebar
  if (isAuthenticated) {
    return (
      <Drawer
        anchor="left"
        open="true"
        variant="permanent"
      >
        <Typography variant="h4">Wordsome</Typography>

        {/* List of Projects */}
        <Typography variant="h5">Your Projects</Typography>
        <List>
          { mapProjects(data, focusProject) }
        </List>
      </Drawer>
    );
  }
  // If no user authentication, return null to render nothing
  return null;
}

export default ProjectNavigation;
