// React Imports
import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

// Material UI Imports
import { Container, Button } from '@material-ui/core';

// API Import
import API from '../../Utils/APIHandler';

// Component Imports
import ProjectDescription from './Components/ProjectDescription/ProjectDescription';
import ProjectStatistics from './Components/ProjectStatistics/ProjectStatistics';
import EditProjectModal from '../../Components/EditProjectModal';

export default function ShowProject({ projectId }) {
  // GET Project from `projectId`
  const [project, setProject] = useState([]);
  const fetchProject = async () => {
    const response = await API.getProject(projectId);
    setProject(response.data[0]);
  };
  useEffect(() => { fetchProject(); }, []);

  // PUT Project from `projectId` and `projectData`
  const updateProject = async (projectData) => {
    // Update Project
    const response = await API.updateProject(projectId, projectData);
    // Use response code for error handling
    const { status } = response;
    // Update ShowProject by fetching all projects
    fetchProject();
  };

  // Control for whether a project is deleted
  const [projectDeleted, setProjectDeleted] = React.useState(false);
  // DELETE Project from `projectId`
  const deleteProject = async () => {
    // Delete Project
    const response = await API.deleteProject(projectId);
    // Use response code for error handling
    const { status } = response;
    // Set projectDeleted to `true`
    setProjectDeleted(true);
  };

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

  // Change route if page is opened without passing `projectId`
  // Change route if project has been deleted
  if (projectId === undefined || projectDeleted === true) {
    return (
      <Redirect from="/project" to="/" />
    );
  }

  return (
    <Container disableGutters maxWidth="md">
      <ProjectDescription project={project} />
      <Container>
        <ProjectStatistics project={project} />
      </Container>
      <Button onClick={handleOpen}>EDIT PROJECT</Button>
      <EditProjectModal
        open={modalOpen}
        onClose={handleClose}
        onSubmit={handleSubmit}
        onDelete={handleDelete}
        project={project}
      />
    </Container>
  );
}
