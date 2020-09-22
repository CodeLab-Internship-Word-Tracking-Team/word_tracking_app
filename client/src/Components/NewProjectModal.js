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
  IconButton,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles, useTheme } from '@material-ui/core/styles';

// React Hook Form Import
import { useForm } from 'react-hook-form';

// Auth0 Import
import { useAuth0 } from '@auth0/auth0-react';

// API Import
import API from '../Utils/APIHandler';

// Style Import
import './NewProjectModal.scss';

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

  const { getAccessTokenSilently } = useAuth0();

  // POST Project from `projectData`
  const postProject = async (projectData) => {
    const tokenString = await getAccessTokenSilently();
    const response = await API.newProject(tokenString, projectData);
    return response.status;
  };

  // TODO: Delete this function
  // This function adds an author to the data
  // (for use before the app has a grasp on users)
  const handleData = (data) => {
    // eslint-disable-next-line no-param-reassign
    // data.author = 'Team';
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
    return <Redirect to="/" />;
  }

  return (
    <div>
      <div className="add-new-project-button">
        <IconButton aria-label="Add Project" onClick={handleClickOpen}>
          <AddIcon style={{ color: 'black' }} />
        </IconButton>
      </div>
      <Dialog
        fullScreen={fullScreen}
        open={modalOpen}
        onClose={handleClose}
        aria-labelledby="new-project-form"
        maxWidth="md"
      >
        <DialogTitle className={classes.dialogTitle} variant="h1">Create a Project</DialogTitle>
        <DialogContent>
          <form className={classes.newProjectForm} onSubmit={handleSubmit(onSubmit)}>

            {/* Project Name Field  */}
            <div className={classes.newProjectField}>
              <TextField
                autoFocus
                name="title"
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
                name="wordGoal"
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
                name="wordCount"
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
