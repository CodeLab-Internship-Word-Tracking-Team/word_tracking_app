// React Imports
import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

// Material UI Imports
import { Container } from '@material-ui/core';

// API Import
import API from '../../Utils/APIHandler';

// Component Imports
import ProjectDescription from './Components/ProjectDescription/ProjectDescription';
import ProjectStatistics from './Components/ProjectStatistics/ProjectStatistics';

export default function ShowProject({ projectId }) {
  const [project, setProject] = useState([]);
  const fetchProject = async () => {
    const response = await API.getProject(projectId);
    setProject(response.data[0]);
  };
  useEffect(() => { fetchProject(); }, []);

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
    </Container>
  );
}
