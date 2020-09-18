// React Imports
import React, { useState, useEffect } from 'react';

// Material UI imports
import {
  Typography,
  Drawer,
  List,
} from '@material-ui/core';

// Auth0 Import
import { useAuth0 } from '@auth0/auth0-react';
// Component Imports
import ProjectNavigationItem from '../ProjectNavigationItem/ProjectNavigationItem';
import NewProjectModal from '../../../../Components/NewProjectModal';

// Style Import
import './ProjectNavigation.scss';

function mapProjects(projects) {
  if (projects) {
    return projects.map((project, index) => {
      const { _id: id } = project;
      if (index === 0) { // Return a special list item for index 0 to make projectId active
        return (
          <ProjectNavigationItem
            project={project}
            key={id}
            active
          />
        );
      }
      return <ProjectNavigationItem project={project} key={id} />;
    });
  }
  return <Typography className="project-navigation-error">No Projects Found</Typography>;
}

function ProjectNavigation({ projects }) {
  // Destructure `isAuthenticated` method from Auth0 Library
  const { isAuthenticated } = useAuth0();

  // If user is logged in return Projects Sidebar
  if (isAuthenticated) {
    return (
      <Drawer
        anchor="left"
        open
        variant="permanent"
        className="project-navigation-drawer"
      >
        <div>
          <Typography variant="h4" className="logo">Wordsome</Typography>

          {/* List of Projects */}
          <div className="project-list-heading">
            <div><Typography variant="h5">Your Projects</Typography></div>
            <NewProjectModal />
          </div>
          <List>
            { mapProjects(projects) }
          </List>
        </div>
      </Drawer>
    );
  }

  // If no user authentication, return null to render nothing
  return null;
}

export default ProjectNavigation;
