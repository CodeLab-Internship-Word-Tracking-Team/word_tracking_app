// React Imports
import React, { useState, useEffect } from 'react';

// Material UI Imports
import Grid from '@material-ui/core/Grid';

// Component Imports
import ProjectCard from './ProjectCard';

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

  return (
    <Grid container spacing={3}>
      {projects.map((project) => (
        <Grid item xs={12} lg={4} key={project.toString() + Math.random()}>
          <ProjectCard project={project} focusProject={focusProject} />
        </Grid>
      ))}
    </Grid>
  );
}
