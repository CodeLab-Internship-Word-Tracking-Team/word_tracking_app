// React Import
import React from 'react';

// Material UI Imports
import {
  Button,
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
  updateProject,
  deleteProject,
  project,
}) {
  // Responsiveness via Material UI
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  // Modal Control Management
  const [modalOpen, setModalOpen] = React.useState(false);
  const handleOpen = () => { setModalOpen(true); };
  const handleClose = () => { setModalOpen(false); };
  const handleSubmit = (data) => {
    setModalOpen(false);
    updateProject(data);
  };
  const handleDelete = () => {
    setModalOpen(false);
    deleteProject();
  };

  return (
    <div>
      <Button onClick={handleOpen}>EDIT PROJECT</Button>
      <Dialog
        fullScreen={fullScreen}
        open={modalOpen}
        onClose={handleClose}
        aria-labelledby="edit-project-form"
        maxWidth="md"
      >
        <DialogTitle className="dialogTitle" variant="h1">Edit Project</DialogTitle>
        <DialogContent>
          <EditProjectForm
            project={project[0]}
            onSubmit={handleSubmit}
            onDelete={handleDelete}
            onClose={handleClose}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}
