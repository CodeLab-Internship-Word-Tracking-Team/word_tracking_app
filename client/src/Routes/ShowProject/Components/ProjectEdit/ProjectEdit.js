// React Imports
import React from 'react';

// Material UI Imports
import { makeStyles } from '@material-ui/core/styles';
import {
  Modal, Container, FormControl, InputLabel, Input,
} from '@material-ui/core';

const useStyles = makeStyles({
  container: {
    height: '90vh',
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

function ProjectEdit({ open, onClose, project }) {
  const {
    title, description, word_count: wordCount, word_goal: wordGoal,
  } = project;

  const classes = useStyles();

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="project-title"
      aria-describedby="project-description"
      disableEnforceFocus
    >
      <Container className={classes.container} direction="column" alignItems="center" justify="center">
        <FormControl>
          <InputLabel htmlFor="project-title">Project Title</InputLabel>
          <Input id="project-title" defaultValue={title} />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="project-description">Project Title</InputLabel>
          <Input id="project-description" defaultValue={description} multiline rows={3} />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="project-count">Project Title</InputLabel>
          <Input id="project-count" defaultValue={wordCount} />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="project-goal">Project Title</InputLabel>
          <Input id="project-goal" defaultValue={wordGoal} />
        </FormControl>
      </Container>
    </Modal>
  );
}

export default ProjectEdit;
