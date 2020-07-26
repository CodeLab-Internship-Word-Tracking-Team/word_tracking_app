// import React
import React from "react";

// Material UI Imports
import { 
    Button, Dialog, DialogActions, DialogTitle, DialogContent, DialogContentText, TextField, useMediaQuery 
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';

// React Hook Form Import
import { useForm } from "react-hook-form";

const useStyles = makeStyles({
    newProjectModal: {
        maxWidth: "md",
        minWidth: '50vw',
    },
    dialogTitle: {
        fontSize: 36,
    },
    newProjectField: {
        padding: '5px',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-evenly',
    },
    newProjectForm: {
        minWidth: '50vw',
    },
});

export default function NewProjectModal() {
    const classes = useStyles();
    
    // Material UI Dialog variables
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
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
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="new-project-form"
                className={classes.newProjectModal}
                maxWidth="lg"
            >
                <DialogTitle className={classes.dialogTitle} variant="h1">Add a New Project!</DialogTitle>
                <DialogContent>
                    <form className={classes.newProjectForm} onSubmit={handleSubmit(onSubmit)}>
                        {/* Project Name Field  */}
                        <div className={classes.newProjectField}>
                            <DialogContentText>
                                Project Name:
                            </DialogContentText>
                            <TextField
                                autoFocus
                                margin="dense"
                                name="projectName"
                                id="new-project-name"
                                label="Project Name"
                                inputRef={register({ required: true, minLength: 2, maxLength: 80 })}
                            />
                            <br />
                            {errors.projectName && <span>Project name is required</span>}
                        </div>

                        {/* Project Description Field  */}
                        <div className={classes.newProjectField}>
                            <DialogContentText>
                                Description:
                            </DialogContentText>
                            <TextField
                                autoFocus
                                margin="dense"
                                name="projectDescription"
                                id="new-project-description"
                                label="Project Description"
                                inputRef={register({ required: true, minLength: 1, maxLength: 280 })}
                            />
                            {errors.projectDescription && <span>Project description is required</span>}
                        </div>

                        {/* Project Word Goal Field  */}
                        <div className={classes.newProjectField}>
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
                            {errors.projectWordGoal && <span>Word goal is required and must be a number</span>}
                        </div>    

                        {/* Project Current Word Count Field */}
                        <div className={classes.newProjectField}>
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
                            {errors.projectCurrentWordCount && <span>Current word count is required and must be a number</span>}
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
