// React Imports
import React, { useState, useEffect } from 'react';

// Auth0 Import
import { useAuth0 } from '@auth0/auth0-react';

// Material UI Imports
import { Container } from '@material-ui/core';

// API Import
import API from '../../Utils/APIHandler';

// Import Components
import ProjectNavigation from './Navigation/ProjectNavigation/ProjectNavigation';
import ProjectDescription from './Components/ProjectDescription/ProjectDescription';
import ProjectStatistics from './Components/ProjectStatistics/ProjectStatistics';

export default function ProjectPage() {
  // Auth0 Methods
  const { getAccessTokenSilently } = useAuth0();

  /**
  * GET `/projects`
  * Fetches all projects beloinging to a user
  * and assigns them statefully to `projects`
  */
  const [projects, setProjects] = useState(undefined);
  const getProjects = async () => {
    // Get Bearer Token
    getAccessTokenSilently()
      .then(async (token) => {
        const response = await API.getProjects(token);
        setProjects(response.data);
      })
      .catch((error) => {
        console.log(`fetchProject error: ${error}`);
      });
  };
  // `getProjects()` when <ProjectPage /> is initialized
  useEffect(() => { getProjects(); }, []);

  // `setSelectedProjectID()` after `projects` is assigned
  const [selectedProjectID, setSelectedProjectID] = useState(0);
  useEffect(() => {
    // Ensure `projects` has updated
    if (projects) {
      const { _id: projectID } = projects[0];
      // Set selectedProjectID to projectID
      setSelectedProjectID(projectID);
    }
  }, [projects]);
  // Update selectedProjectID when a project is focused
  const handleProjectSelection = (projectID) => { setSelectedProjectID(projectID); };

  return (
    <div>
      <ProjectNavigation projects={projects} handleProjectSelection={handleProjectSelection} />
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
          </Container>
        )}
    </div>
  );
}

// function old() {
//   // GET Project from `projectId`
//   const [project, setProject] = useState([]);
//   const fetchProject = async () => {
//     console.log('fetchProject called with projectId:', projectId);
//     if (!projectId === undefined) {
//       console.log('fetchProject(), projectId not undefined.');
//       getAccessTokenSilently()
//         .then(async (tokenString) => {
//           const response = await API.getProject(tokenString, projectId);
//           setProject(response.data[0]);
//         })
//         .catch((error) => {
//           console.log('fetchproject error: ${error}');
//         });
//     }
//   };

//   const updateProject = async (projectData) => {
//     getAccessTokenSilently()
//       .then(async (tokenString) => {
//         const response = await API.updateProject(tokenString, projectId, projectData);
//         const { status } = response;
//         if (status === 200) {
//           fetchProject();
//         }
//       })
//       .catch((error) => {
//         console.log('updateProject error: ${error}');
//       });

//   };

//   const [projectDeleted, setProjectDeleted] = React.useState(false);
//   // DELETE Project from `projectId`
//   const deleteProject = async () => {
//     getAccessTokenSilently()
//       .then(async (tokenString) => {
//         const response = await API.deleteProject(tokenString, projectId);
//         // Use response code for error handling
//         const { status } = response;
//         if (status === 200) {
//           // Set projectDeleted to `true`
//           setProjectDeleted(true);
//         }
//       })
//       .catch((error) => {
//         console.log('deleteproject error: ${error}');
//       });
//   };
// }