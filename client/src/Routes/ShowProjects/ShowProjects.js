// React
import React from 'react';

// Material UI imports
import { makeStyles } from '@material-ui/core/styles';
import ProjectGrid from '../../Components/ProjectGrid';
import { Button, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  }, 
}));

export default function ShowProjects() {
  return (
    <div>
      <h1>Your Projects</h1>
      <ProjectGrid />

      {/* Btn for add new project/ */}
      <Grid container alignItems="flex-start" justify="flex-end" direction="row">
        <Button variant="contained" color="primary">
          +
        </Button>
      </Grid>  
    </div>
  );
}
