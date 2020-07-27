// React Imports
import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

// Material UI Imports
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// Component Imports
import ProjectDescription from './Components/ProjectDescription/ProjectDescription';
import ProjectStatistics from './Components/ProjectStatistics/ProjectStatistics';

const useStyles = makeStyles({
  // container: {
  //   maxWidth: '50vw',
  // },
  // statistics: {
  //   maxWidth: '45vw',
  // },
});

export default function ShowProject({ user, projectId }) {
  const [project, setProject] = useState([]);
  const fetchProject = async () => {
    const response = await fetch(`http://localhost:3000/project/${projectId}`);
    const data = await response.json();
    setProject(data[0]);
  };

  useEffect(() => {
    fetchProject();
  }, []);

  const classes = useStyles();

  if (projectId === undefined) {
    return (
      <Redirect from="/project" to="/" />
    );
  }

  return (
    <Container className={classes.container} disableGutters maxWidth="md">
      <ProjectDescription project={project} />
      <Container className={classes.statistics}>
        <ProjectStatistics project={project} />
      </Container>
    </Container>
  );
}
