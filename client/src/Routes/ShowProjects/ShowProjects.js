// React Imports
import React from 'react';

// Material UI imports
import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid } from '@material-ui/core';

// Component Imports
import ProjectGrid from '../../Components/ProjectGrid';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ShowProjects({ focusProject }) {
  return (
    <div>
      <h1>Your Projects</h1>
      <ProjectGrid focusProject={focusProject} />

      {/* Btn for add new project/ */}
      <Grid container alignItems="flex-start" justify="flex-end" direction="row">
        <Button variant="contained" color="primary">
          +
        </Button>
      </Grid>
    </div>
  );
}
