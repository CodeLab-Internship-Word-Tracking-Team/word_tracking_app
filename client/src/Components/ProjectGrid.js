// React Imports
import React from 'react';

// Material UI Imports
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

// Component Imports
import ProjectCard from './ProjectCard';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function ProjectGrid() {
  const classes = useStyles();

  const cards = [1, 2, 3, 4, 5];

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {cards.map((card) => (
          <Grid item xs={12} lg={4} key={card.toString()}>
            <ProjectCard />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
