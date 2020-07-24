// import React
import React from "react";

// Material UI Imports
import { 
    Button, Dialog, DialogActions, DialogTitle, DialogContent, DialogContentText, TextField 
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// React Hook Form Import
import { useForm } from "react-hook-form";

const useStyles = makeStyles({
    root: {
        padding: '2vh',
        minWidth: '50%',
    },
    dialogTitle: {
        fontSize: 36,
    },
    formErrorMessage: {
        textColor: 'red',
    },
});

export default function NewProjectModal() {
    const classes = useStyles();
    
    // Material UI Dialog variables
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    // React Hook Form variables
    const { register, errors, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        handleClose();
    };

    return (
        <div>
            <Button variant="contained" color="primary" onClick={handleClickOpen}>
                +
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="new-project-form"
                className={classes.root}
            >
                <DialogTitle className={classes.dialogTitle} variant="h1">Add a New Project!</DialogTitle>
                <DialogContent>
                    <form className={classes.newProjectForm} onSubmit={handleSubmit(onSubmit)}>
                        {/* Project Name Field  */}
                        <DialogContentText>
                            Project Name:
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            name="projectName"
                            id="new-project-name"
                            label="Project Name Field"
                            inputRef={register({ required: true, minLength: 2, maxLength: 80 })}
                        />
                        {errors.projectName && <span className={classes.formErrorMessage}>Project name is required</span>}

                        {/* Project Description Field  */}
                        <DialogContentText>
                            Description:
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            name="projectDescription"
                            id="new-project-description"
                            label="Project Description Field"
                            inputRef={register({ required: true, minLength: 1, maxLength: 280 })}
                        />
                        {errors.projectDescription && <span className={classes.formErrorMessage}>Project description is required</span>}

                        {/* Project Word Goal Field  */}
                        <DialogContentText>
                            Word Goal:
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            name="projectWordGoal"
                            id="new-project-word-goal"
                            label="Project Word Goal"
                            inputRef={register({ required: true, pattern: /\d+/ })}
                        />
                        {errors.projectWordGoal && <span className={classes.formErrorMessage}>Word goal is required and must be a number</span>}

                        {/* Project Current Word Count Field */}
                        <DialogContentText>
                            Current Word Count:
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            name="projectCurrentWordCount"
                            id="new-project-current-word-count"
                            label="Project Current Word Count"
                            inputRef={register({ required: true, pattern: /\d/ })}
                        />
                        {errors.projectCurrentWordCount && <span className={classes.formErrorMessage}>Current word count is required and must be a number</span>}

                        <DialogActions>
                            <Button autoFocus color="primary" type="submit">
                                Create
                            </Button>
                        </DialogActions>
                        <DialogActions>
                            <Button autoFocus onClick={handleClose} color="primary">
                                Close
                            </Button>
                        </DialogActions>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    );
}
