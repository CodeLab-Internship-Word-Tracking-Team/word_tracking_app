// React Imports
import React, { useState, useEffect } from 'react';

// Material UI imports
import {
  Typography,
  Drawer,
  List,
  IconButton,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

// Auth0 Import
import { useAuth0 } from '@auth0/auth0-react';

// API Import
import API from '../../Utils/APIHandler';

// Component Imports
import ProjectNavigationItem from './ProjectNavigationItem/ProjectNavigationItem';

// Style Import
import './ProjectNavigation.scss';

// Mock Data Import
import data from './data.json';

function mapProjects(projects, focusProject) {
  return projects.map((project) => {
    const { _id: projectId } = project;
    return <ProjectNavigationItem project={project} focusProject={focusProject} key={projectId} />;
  });
}

function ProjectNavigation({ focusProject, getToken }) {
  // Destructure `isAuthenticated` method from Auth0 Library
  const { isAuthenticated } = useAuth0();

  // GET Projects
  // const [projects, setProjects] = useState([]);
  // const getProjects = async () => {
  // // Get JWT from `App.js`
  //   const token = await getToken();
  //   console.log(token);
  //   // Fetch Projects
  //   const response = await API.getProjects(await token);
  //   // Set to State
  //   return response.data;
  // };
  // useEffect(() => { getProjects(); }, []);

  const projects = data;

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
          <Typography variant="h4">Wordsome</Typography>

          {/* List of Projects */}
          <div className="project-list-heading">
            <Typography variant="h5">Your Projects</Typography>
            <IconButton aria-label="Add Project"><AddIcon style={{ color: 'black' }} /></IconButton>
          </div>
          <List>
            { projects.length > 0
              && mapProjects(projects, focusProject) }
          </List>
        </div>
      </Drawer>
    );
  }
  // If no user authentication, return null to render nothing
  return null;
}

export default ProjectNavigation;
