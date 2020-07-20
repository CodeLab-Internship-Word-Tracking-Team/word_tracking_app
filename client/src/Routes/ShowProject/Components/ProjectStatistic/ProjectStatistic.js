// React Imports
import React from 'react';

// Material UI Imports
import { Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  statisticCard: {
    padding: '1vw',
    textAlign: 'center',
    color: '#212121',
  },
  statisticText: {
    paddingBottom: '.5vw',
  },
});

export default function ProjectStatistic({ statNum, statLabel }) {
  const classes = useStyles();

  return (
    <Paper className={classes.statisticCard} elevation={2}>
      <Typography variant="h4" textAlign="center" className={classes.statisticText}>{statNum}</Typography>
      <Typography variant="body">{statLabel}</Typography>
    </Paper>
  );
}
