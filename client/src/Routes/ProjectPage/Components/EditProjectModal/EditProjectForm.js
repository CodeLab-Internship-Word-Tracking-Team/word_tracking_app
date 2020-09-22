/*
 * MODAL CONTROL > EditProjectModal.js
 * - open
 * - onClose
 * - onSubmit
 * - onDelete
 * CRUD OPS > ProjectPage.js
 * - updateProject
 * - deleteProject
 * - getProject
 * - getProjects
 * FORM > EditProject.js
 * - React Hook Forms
 * - TextField/FormField
*/
// React Imports
import React from 'react';

// React Hook Form Import
import { useForm } from 'react-hook-form';

// Material UI Imports
import {
  Button,
  Container,
  DialogActions,
  TextField,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

export default function EditProjectForm({ project }) {
  const {
    title, description, wordGoal, wordCount,
  } = project;
  const { register, errors, handleSubmit } = useForm();

  return (
    <form className="editProjectForm" onSubmit={handleSubmit(onSubmit)}>
      {/* Project Name Field  */}
      <div className="editProjectField">
        <TextField
          autoFocus
          margin="dense"
          name="description"
          id="edit-project-title"
          label="Project Title"
          fullWidth
          defaultValue={title}
          inputRef={register({ required: true })}
        />
        {errors.title
          && <span>Project Title is required</span>}
      </div>

      {/* Project Description Field  */}
      <div className="editProjectField">
        <TextField
          autoFocus
          margin="dense"
          name="description"
          id="edit-project-description"
          label="Project Description"
          fullWidth
          defaultValue={description}
          inputRef={register({ required: true })}
        />
        {errors.description
          && <span>Project Description is required</span>}
      </div>

      {/* Project Word Goal Field  */}
      <div className="editProjectField">
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
      <div className="editProjectField">
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
  )
}
