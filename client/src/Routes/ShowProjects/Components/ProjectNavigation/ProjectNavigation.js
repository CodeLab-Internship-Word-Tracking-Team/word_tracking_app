// React Imports
import React, { useState, useEffect } from 'react';

// API Import
// import API from '../../../../Utils/APIHandler';

// Material UI imports
import { Typography } from '@material-ui/core';

// Component Imports
import ProjectNavigationItem from '../ProjectNavigationItem/ProjectNavigationItem.js';

// Mock Data
let data = require('../../data.json');

function mapProjects(projects, focusProject) {
  return projects.map((project) => <ProjectNavigationItem project={project} focusProject={focusProject} /> )
}

function ProjectNavigation({ focusProject, getToken }) {
  return (
    <div>
      <Typography variant="h4">Your Projects</Typography>
      { mapProjects(data, focusProject) }
    </div>
  );
}

export default ProjectNavigation;
