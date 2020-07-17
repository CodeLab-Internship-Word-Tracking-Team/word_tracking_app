// React Imports
import React, { useState, useEffect } from 'react';

// Material UI Imports
import { Grid } from '@material-ui/core';

// Component Imports
import ProjectDescription from './Components/ProjectDescription/ProjectDescription';

export default function ShowProject({ user, projectId }) {
  useEffect(() => {
    fetchProject(projectId);
  }, []);

  const [project, setProject] = useState([]);
  const fetchProject = async () => {
    // change `/projects/` to `/project/:projectId` once route exists
    const response = await fetch('/projects');
    // change to `project`
    const data = await response.json();
    // change `projects.projects[0]` to just `project`
    setProject(data.projects[0]);
  };

  return (
    <Grid container alignItems="flex-start" justify="flex-end" direction="row">
      <ProjectDescription project={project} />
    </Grid>
  );
}
