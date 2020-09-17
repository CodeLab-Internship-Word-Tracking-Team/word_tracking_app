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

// API Import
import API from '../../../Utils/APIHandler';

// Component Imports
import ProjectNavigationItem from '../ProjectNavigationItem/ProjectNavigationItem';
import NewProjectModal from '../../NewProjectModal';

// Style Import
import './ProjectNavigation.scss';

function mapProjects(projects) {
  if (projects.length > 0) {
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

function ProjectNavigation() {
  // Destructure `isAuthenticated` method from Auth0 Library
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();

  // GET Projects
  const [projects, setProjects] = useState([]);
  const getProjects = async () => {
    // Fetch Projects
    const tokenString = await getAccessTokenSilently();
    const response = await API.getProjects(tokenString);
    console.log('Get All Projects', response); // TODO: remove once token is never undefined
    setProjects(response.data);
  };
  useEffect(() => { getProjects(); }, []);

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
