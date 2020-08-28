// React Imports
import React from 'react';

// Material UI Imports
import { Typography, ListItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  item: {
    borderBottom: '1px solid grey',
  },
  title: {
    flexGrow: 1,
  },
}));

function ProjectNavigationItem({ project }) {
  // Destructure `project` prop
  const { title, percentageComplete, wordCountEvents } = project;
  // Initialize Styling
  const classes = useStyles();

  return (
    <ListItem className={classes.item}>
      <Typography className={classes.title} variant="body1">{title}</Typography>
      <div>
        <Typography variant="body1">{percentageComplete}</Typography>
        <Typography variant="body1">{wordCountEvents[0].updateOn}</Typography>
      </div>
    </ListItem>
  );
}

export default ProjectNavigationItem;
