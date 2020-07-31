// React Import
import React from 'react';

// Material UI Imports
import {
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  TextField,
  useMediaQuery,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles, useTheme } from '@material-ui/core/styles';

// React Hook Form Import
import { useForm } from 'react-hook-form';

// Auth0 Import
import { useAuth0 } from '@auth0/auth0-react';

const useStyles = makeStyles({
  dialogTitle: {
    fontSize: 36,
  },
  editProjectField: {
    padding: '5px',
    margin: '10px',
  },
  editProjectForm: {
    minWidth: '50vw',
  },
});

export default function EditProjectModal({
  open, onClose, onSubmit, onDelete, project,
}) {
  const {
    name, description, word_goal: wordGoal, word_count: wordCount,
  } = project;
  const { register, errors, handleSubmit } = useForm();

  // Material UI Styles
  const classes = useStyles();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      onClose={onClose}
      aria-labelledby="edit-project-form"
      maxWidth="md"
    >
      <DialogTitle className={classes.dialogTitle} variant="h1">Edit Project</DialogTitle>
      <DialogContent>
        <form className={classes.editProjectForm} onSubmit={handleSubmit(onSubmit)}>

          {/* Project Name Field  */}
          <div className={classes.editProjectField}>
            <TextField
              autoFocus
              name="name"
              id="edit-project-name"
              label="Project Name"
              fullWidth
              defaultValue={name}
              inputRef={register({ required: true, minLength: 2, maxLength: 80 })}
            />
            {errors.name
              && <span>Project name is required</span>}
          </div>

          {/* Project Description Field  */}
          <div className={classes.editProjectField}>
            <TextField
              autoFocus
              margin="dense"
              name="description"
              id="edit-project-description"
              label="Project Description"
              fullWidth
              multiline
              defaultValue={description}
              inputRef={register({ required: true, minLength: 1, maxLength: 280 })}
            />
            {errors.description
              && <span>Project description is required</span>}
          </div>

          {/* Project Word Goal Field  */}
          <div className={classes.editProjectField}>
            <TextField
              autoFocus
              margin="dense"
              name="word_goal"
              id="edit-project-word-goal"
              label="Word Goal"
              fullWidth
              defaultValue={wordGoal}
              inputRef={register({ required: true, pattern: /\d+/ })}
            />
            {errors.word_goal
              && <span>Word goal is required and must be a number</span>}
          </div>

          {/* Project Current Word Count Field */}
          <div className={classes.editProjectField}>
            <TextField
              autoFocus
              margin="dense"
              name="word_count"
              id="edit-project-current-word-count"
              label="Current Word Count"
              fullWidth
              defaultValue={wordCount}
              inputRef={register({ required: true, pattern: /\d/ })}
            />
            {errors.word_count
              && <span>Current word count is required and must be a number</span>}
          </div>
          <DialogActions>
            <Container>
              <Button autoFocus startIcon={<DeleteIcon />} onClick={onDelete}>
                Delete
              </Button>
            </Container>
            <Button autoFocus onClick={onClose} color="primary">
              Close
            </Button>
            <Button autoFocus color="primary" type="submit">
              Save
            </Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
}
