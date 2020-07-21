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
  console.log(projectId);
  useEffect(() => {
    fetchProject();
  }, []);

  const [project, setProject] = useState([]);
  const fetchProject = async () => {
    const response = await fetch('/project/5f162f0bbe5fa9a20ed8e33b');
    // const response = await fetch(`/project/${projectId}`);
    const data = await response.json();
    setProject(data[0]);
  };

  const classes = useStyles();

  return (
    <Container className={classes.container} disableGutters>
      <ProjectDescription project={project} />
      <ProjectStatistics project={project} />
    </Container>
  );
}
