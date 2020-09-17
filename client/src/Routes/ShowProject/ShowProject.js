// React Imports
import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

// Material UI Imports
import { Container, Button } from '@material-ui/core';

// Auth0
import { useAuth0 } from "@auth0/auth0-react";

// API Import
import API from '../../Utils/APIHandler';

// Component Imports
import ProjectDescription from './Components/ProjectDescription/ProjectDescription';
import ProjectStatistics from './Components/ProjectStatistics/ProjectStatistics';
import EditProjectModal from '../../Components/EditProjectModal';

export default function ShowProject({ projectId }) {
  const { getAccessTokenSilently } = useAuth0();

  // GET Project from `projectId`
  const [project, setProject] = useState([]);
  const fetchProject = async () => {
    console.log('fetchProject called with projectId:', projectId);
    if (!projectId === undefined) {
      console.log('fetchProject(), projectId not undefined.');
      getAccessTokenSilently()
        .then(async (tokenString) => {
          const response = await API.getProject(tokenString, projectId);
          setProject(response.data[0]);
        })
        .catch((error) => {
          console.log('fetchproject error: ${error}');
        });
    }
  };

  const updateProject = async (projectData) => {
    getAccessTokenSilently()
      .then(async (tokenString) => {
        const response = await API.updateProject(tokenString, projectId, projectData);
        const { status } = response;
        if (status === 200) {
          fetchProject();
        }
      })
      .catch((error) => {
        console.log('updateProject error: ${error}');
      });

  };

  const [projectDeleted, setProjectDeleted] = React.useState(false);
  // DELETE Project from `projectId`
  const deleteProject = async () => {
    getAccessTokenSilently()
      .then(async (tokenString) => {
        const response = await API.deleteProject(tokenString, projectId);
        // Use response code for error handling
        const { status } = response;
        if (status === 200) {
          // Set projectDeleted to `true`
          setProjectDeleted(true);
        }
      })
      .catch((error) => {
        console.log('deleteproject error: ${error}');
      });
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
