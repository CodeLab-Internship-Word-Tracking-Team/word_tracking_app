// React Imports
import React, { useState, useEffect } from 'react';

// Material UI Imports
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// Component Imports
import ProjectDescription from './Components/ProjectDescription/ProjectDescription';
import ProjectStatistics from './Components/ProjectStatistics/ProjectStatistics';

const useStyles = makeStyles({
  container: {
    maxWidth: '40%',
  },
});

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

  const classes = useStyles();

  return (
    <Container className={classes.container} disableGutters>
      <ProjectDescription project={project} />
      <ProjectStatistics project={project} />
    </Container>
  );
}
