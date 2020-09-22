// React Import
import React from 'react';

// Material UI Imports
import {
  Dialog,
  DialogTitle,
  DialogContent,
  useMediaQuery,
} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

// Component Imports
import EditProjectForm from './EditProjectForm';

// Style Imports
import './EditProjectModal.scss';

export default function EditProjectModal({
  open, onClose, onSubmit, onDelete, project,
}) {
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
        <EditProjectForm project={project} />
      </DialogContent>
    </Dialog>
  );
}
