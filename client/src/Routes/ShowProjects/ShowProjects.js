// React Imports
import React from 'react';

// Material UI imports
import { Grid, Typography } from '@material-ui/core';

// Component Imports
import ProjectGrid from './Components/ProjectGrid/ProjectGrid';
import NewProjectModal from '../../Components/NewProjectModal';

export default function ShowProjects({ focusProject }) {
  return (
    <div>
      <Typography variant="h4">Your Projects</Typography>
      <ProjectGrid focusProject={focusProject} />

      {/* Btn for add new project/ */}
      <Grid container alignItems="flex-start" justify="flex-end" direction="row">
        <NewProjectModal />
      </Grid>
    </div>
  );
}
