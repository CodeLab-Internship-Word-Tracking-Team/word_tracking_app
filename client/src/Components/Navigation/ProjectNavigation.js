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

// Redux Imports
import { useSelector } from 'react-redux';
import { selectToken } from '../../Utils/Redux/Features/token/tokenSlice';

// API Import
import API from '../../Utils/APIHandler';

// Component Imports
import ProjectNavigationItem from './ProjectNavigationItem/ProjectNavigationItem';
import NewProjectModal from '../NewProjectModal';

// Style Import
import './ProjectNavigation.scss';

// Mock Data Import
import data from './data.json';

function mapProjects(projects, focusProject) {
  if (projects.length > 0) {
    return projects.map((project) => {
      const { _id: id } = project;
      return <ProjectNavigationItem project={project} focusProject={focusProject} key={id} />;
    });
  }
  return <Typography className="project-navigation-error">No Projects Found</Typography>;
}

function ProjectNavigation({ focusProject, getToken }) {
  // Destructure `isAuthenticated` method from Auth0 Library
  const { isAuthenticated } = useAuth0();

  // GET Projects
  const tokenString = useSelector(selectToken);
  const [projects, setProjects] = useState([]);
  const getProjects = async () => {
    // Fetch Projects
    const response = await API.getProjects(tokenString.token.value);
    console.log(response);
    setProjects(data);
  };
  useEffect(() => { getProjects(); }, []);

  // const projects = data;

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
            <NewProjectModal getToken={getToken} />
          </div>
          <List>
            { mapProjects(projects, focusProject) }
          </List>
        </div>
      </Drawer>
    );
  }

  // If no user authentication, return null to render nothing
  return null;
}

export default ProjectNavigation;
