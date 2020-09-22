// React Imports
import React, { useState, useEffect } from 'react';

// Auth0 Import
import { useAuth0 } from '@auth0/auth0-react';

// Material UI Imports
import { Container } from '@material-ui/core';

// API Import
import API from '../../Utils/APIHandler';

// Import Components
import ProjectNavigation from './Components/Navigation/ProjectNavigation/ProjectNavigation';
import ProjectDescription from './Components/ProjectDescription/ProjectDescription';
import ProjectStatistics from './Components/ProjectStatistics/ProjectStatistics';
import EditProjectModal from './Components/EditProjectModal/EditProjectModal';

export default function ProjectPage() {
  // Auth0 Methods
  const { getAccessTokenSilently } = useAuth0();

  // Stateful `projects` array
  const [projects, setProjects] = useState(undefined);
  // `setSelectedProjectID()` after `projects` is assigned
  const [selectedProjectID, setSelectedProjectID] = useState(0);
  useEffect(() => {
    // Ensure `projects` has updated
    if (projects && !selectedProjectID) {
      const { _id: projectID } = projects[0];
      // Set selectedProjectID to projectID
      setSelectedProjectID(projectID);
    }
  }, [projects]);
  // Update selectedProjectID when a project is focused
  const handleProjectSelection = (projectID) => { setSelectedProjectID(projectID); };

  /**
  * GET `/projects`
  * Fetches all projects beloinging to a user
  * and assigns them statefully to `projects`
  */
  const getProjects = async () => {
    // Get Bearer Token
    getAccessTokenSilently()
      .then(async (token) => {
        const response = await API.getProjects(token);
        setProjects(response.data);
      })
      .catch((error) => {
        console.error(`fetchProject error: ${error}`);
      });
  };
  // `getProjects()` when <ProjectPage /> is initialized
  useEffect(() => { getProjects(); }, []);

  /**
  * PUT `/projects/:id`
  * Updates a project using `projectData`
  * passed from <EditProjectForm />
  */
  const updateProject = async (projectData) => {
    getAccessTokenSilently()
      .then(async (token) => {
        const response = await API.updateProject(token, selectedProjectID, projectData);
        const { status } = response;
        if (status === 200) {
          getProjects();
        }
      })
      .catch((error) => {
        console.error(`updateProject error: ${error}`);
      });
  };

  /**
  * DELETE `/projects/:id`
  * Deletes a project using `selectedProjectID`
  * Refreshes `projects` then selects new `selectedProjectID`
  */
  const deleteProject = async () => {
    getAccessTokenSilently()
      .then(async (token) => {
        const response = await API.deleteProject(token, selectedProjectID);
        const { status } = response;
        if (status === 200) {
          await getProjects();
          const { _id: projectID } = projects[0];
          handleProjectSelection(projectID);
        }
      })
      .catch((error) => {
        console.error(`deleteProject error: ${error}`);
      });
  };

  /**
  * POST `/projects/`
  * Creates a project using `projectData`
  * passed from <NewProjectModal />
  */
  const createProject = async (projectData) => {
    getAccessTokenSilently()
      .then(async (token) => {
        const response = await API.newProject(token, projectData);
        const { status } = response;
        const projectId = response.data.id;
        if (status === 201) {
          handleProjectSelection(projectId);
          getProjects();
        }
      })
      .catch((error) => {
        console.error(`createProject error: ${error}`);
      });
  };

  return (
    <div>
      <ProjectNavigation
        projects={projects}
        handleProjectSelection={handleProjectSelection}
        createProject={createProject}
      />
      { projects
        && (
          <Container disableGutters maxWidth="md">
            <ProjectDescription
              project={projects.filter((project) => project._id === selectedProjectID)}
            />
            <Container>
              <ProjectStatistics
                project={projects.filter((project) => project._id === selectedProjectID)}
              />
            </Container>
            <EditProjectModal
              project={projects.filter((project) => project._id === selectedProjectID)}
              updateProject={updateProject}
              deleteProject={deleteProject}
            />
          </Container>
        )}
    </div>
  );
}
