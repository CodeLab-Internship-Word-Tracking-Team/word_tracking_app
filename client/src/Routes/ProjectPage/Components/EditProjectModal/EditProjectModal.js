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
import { useTheme } from '@material-ui/core/styles';

// React Hook Form Import
import { useForm } from 'react-hook-form';

// Component Imports
import FormField from '../../../../Components/FormField/FormField';

// Style Imports
import './EditProjectModal.scss';

export default function EditProjectModal({
  open, onClose, onSubmit, onDelete, project,
}) {
  const {
    title, description, wordGoal, wordCount,
  } = project;
  const { register, errors, handleSubmit } = useForm();

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
          <FormField
            className="editProjectField"
            idName="edit-project-name"
            elementName="title"
            elementLabel="Project Title"
            errors={errors}
          />

          {/* Project Description Field  */}
          <FormField
            className="editProjectField"
            idName="edit-project-description"
            elementName="description"
            elementLabel="Project Description"
            errors={errors}
          />

          {/* Project Word Goal Field  */}
          <div className={classes.editProjectField}>
            <TextField
              autoFocus
              margin="dense"
              name="wordGoal"
              id="edit-project-word-goal"
              label="Word Goal"
              fullWidth
              defaultValue={wordGoal}
              inputRef={register({ required: true, pattern: /\d+/ })}
            />
            {errors.wordGoal
              && <span>Word goal is required and must be a number</span>}
          </div>

          {/* Project Current Word Count Field */}
          <div className={classes.editProjectField}>
            <TextField
              autoFocus
              margin="dense"
              name="wordCount"
              id="edit-project-current-word-count"
              label="Current Word Count"
              fullWidth
              defaultValue={wordCount}
              inputRef={register({ required: true, pattern: /\d/ })}
            />
            {errors.wordCount
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
