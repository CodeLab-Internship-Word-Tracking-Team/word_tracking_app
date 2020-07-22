// React Imports
import React, { useState, useEffect } from 'react';

// Material UI Imports
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

// Component Imports
// eslint-disable-next-line import/no-named-as-default-member
import ProjectCard from './ProjectCard';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function ProjectGrid({ focusProject }) {
  const [projects, setProjects] = useState([]);
  const fetchProjects = async () => {
    const response = await fetch('http://localhost:3000/projects');
    const data = await response.json();
    setProjects(data);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {projects.map((project) => (
          <Grid item xs={12} lg={4} key={project.toString() + Math.random()}>
            <ProjectCard project={project} focusProject={focusProject} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
