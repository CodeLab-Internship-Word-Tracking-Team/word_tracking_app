// React Imports
import React from 'react';

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
import NewProjectModal from '../../NewProjectModal/NewProjectModal';

// Style Import
import './ProjectNavigation.scss';

function mapProjects(projects, handleProjectSelection, selectedProjectID) {
  if (projects) {
    return projects.map((project) => {
      const { _id: id } = project;
      return (
        <ProjectNavigationItem
          project={project}
          key={id}
          handleProjectSelection={handleProjectSelection}
          selectedProjectID={selectedProjectID}
        />
      );
    });
  }
  return <Typography className="project-navigation-error">No Projects Found</Typography>;
}

function ProjectNavigation({
  projects, handleProjectSelection, createProject, selectedProjectID,
}) {
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
            <NewProjectModal createProject={createProject} />
          </div>
          <List>
            { mapProjects(projects, handleProjectSelection, selectedProjectID) }
          </List>
        </div>
      </Drawer>
    );
  }

  // If no user authentication, return null to render nothing
  return null;
}

export default ProjectNavigation;
