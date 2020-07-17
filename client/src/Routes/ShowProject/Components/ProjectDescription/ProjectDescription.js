// React Imports
import React from 'react';

// Material UI Imports
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Container } from '@material-ui/core';

const useStyles = makeStyles({
  container: {
    maxWidth: '40%',
  },
});

export default function ProjectDescription({ project }) {
  const { name, author, description } = project;

  const classes = useStyles();

  return (
    <Container className={classes.container} disableGutters>
      <Typography variant="h3">{name}</Typography>
      <Typography variant="h4">{author}</Typography>
      <Typography variant="body1">{description}</Typography>
    </Container>
  );
}
