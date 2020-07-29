// React Imports
import React, { useState, useEffect } from 'react';

// Material UI Imports
import Grid from '@material-ui/core/Grid';

// API Import
import API from '../../../../Utils/APIHandler';

// Component Imports
import ProjectCard from '../ProjectCard/ProjectCard';

export default function ProjectGrid({ focusProject }) {
  const [projects, setProjects] = useState([]);
  const fetchProjects = async () => {
    const response = await API.getProjects();
    setProjects(response.data);
  };
  useEffect(() => { fetchProjects(); }, []);

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
