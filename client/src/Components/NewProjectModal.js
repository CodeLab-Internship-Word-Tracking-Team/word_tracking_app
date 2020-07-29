// React Import
import React from 'react';
import { Redirect } from 'react-router-dom';

// Material UI Imports
import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  TextField,
  useMediaQuery,
} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';

// React Hook Form Import
import { useForm } from 'react-hook-form';

// API Import
import API from '../Utils/APIHandler';

const useStyles = makeStyles({
  dialogTitle: {
    fontSize: 36,
  },
  newProjectField: {
    padding: '5px',
    margin: '10px',
  },
  newProjectForm: {
    minWidth: '50vw',
  },
});

export default function NewProjectModal() {
  // React Hook Form Deconstruction
  const { register, errors, handleSubmit } = useForm();

  // New Project State
  const [projectCreated, setProjectCreated] = React.useState(false);

  // Material UI Theme
  const classes = useStyles();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  // POST Project from `projectData`
  const postProject = async (projectData) => {
    // Add new project
    const response = await API.newProject(projectData);
    return response.status;
  };

  // #TODO Delete this function
  // This function adds an author to the data
  // (for use before the app has a grasp on users)
  const handleData = (data) => {
    // eslint-disable-next-line no-param-reassign
    data.author = 'Team';
    return data;
  };

  // Modal Control Management
  const [modalOpen, setModalOpen] = React.useState(false);
  const handleClickOpen = () => { setModalOpen(true); };
  const handleClose = () => { setModalOpen(false); };
  const onSubmit = async (data) => {
    // Add author to data
    const projectData = handleData(data);
    // POST new project
    const status = await postProject(projectData);
    // Error handling (to some degree) using HTTP Status Response
    if (status === 201) {
      // Close Modal
      handleClose();
      // Set `projectCreated` state to true
      setProjectCreated(true);
    }
  };

  // If `projectCreated` is `true` redirect to that project
  if (projectCreated) {
    return <Redirect to="/project" />;
  }

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        +
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={modalOpen}
        onClose={handleClose}
        aria-labelledby="new-project-form"
        maxWidth="md"
      >
        <DialogTitle className={classes.dialogTitle} variant="h1">Add a New Project!</DialogTitle>
        <DialogContent>
          <form className={classes.newProjectForm} onSubmit={handleSubmit(onSubmit)}>

            {/* Project Name Field  */}
            <div className={classes.newProjectField}>
              <TextField
                autoFocus
                name="name"
                id="new-project-name"
                label="Project Name"
                fullWidth
                inputRef={register({ required: true, minLength: 2, maxLength: 80 })}
              />
              {errors.projectName
                && <span>Project name is required</span>}
            </div>

            {/* Project Description Field  */}
            <div className={classes.newProjectField}>
              <TextField
                autoFocus
                margin="dense"
                name="description"
                id="new-project-description"
                label="Project Description"
                fullWidth
                inputRef={register({ required: true, minLength: 1, maxLength: 280 })}
              />
              {errors.projectDescription
                && <span>Project description is required</span>}
            </div>

            {/* Project Word Goal Field  */}
            <div className={classes.newProjectField}>
              <TextField
                autoFocus
                margin="dense"
                name="word_goal"
                id="new-project-word-goal"
                label="Word Goal"
                fullWidth
                inputRef={register({ required: true, pattern: /\d+/ })}
              />
              {errors.projectWordGoal
                && <span>Word goal is required and must be a number</span>}
            </div>

            {/* Project Current Word Count Field */}
            <div className={classes.newProjectField}>
              <TextField
                autoFocus
                margin="dense"
                name="word_count"
                id="new-project-current-word-count"
                label="Current Word Count"
                fullWidth
                inputRef={register({ required: true, pattern: /\d/ })}
              />
              {errors.projectCurrentWordCount
                && <span>Current word count is required and must be a number</span>}
            </div>

            <div>
              <DialogActions>
                <Button autoFocus onClick={handleClose} color="primary">
                  Close
                </Button>
                <Button autoFocus color="primary" type="submit">
                  Create
                </Button>
              </DialogActions>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
