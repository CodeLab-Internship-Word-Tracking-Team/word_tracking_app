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
import ProjectEdit from './Components/ProjectEdit/ProjectEdit';

export default function ShowProject({ projectId }) {
  // GET Project from `projectId`
  const [project, setProject] = useState([]);
  const fetchProject = async () => {
    const response = await API.getProject(projectId);
    setProject(response.data[0]);
  };
  useEffect(() => { fetchProject(); }, []);

  // Modal Control
  const [modalOpen, setModalOpen] = React.useState(false);
  const handleOpen = () => { setModalOpen(true); };
  const handleClose = () => { setModalOpen(false); };

  // Change route if page is opened without passing `projectId`
  if (projectId === undefined) {
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
      <ProjectEdit open={modalOpen} onClose={handleClose} project={project} />
    </Container>
  );
}
