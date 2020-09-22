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
