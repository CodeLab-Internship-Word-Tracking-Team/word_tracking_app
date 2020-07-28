import axios from 'axios';

// Set Headers for Requests
const requestConfig = {
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_BEARER_TOKEN}`,
    'Content-Type': 'application/json',
  },
};

export default {
  // GET all projects -- await API.getProjects()
  getProjects: () => axios.get('/projects', requestConfig),

  // GET 1 project -- await API.getProject(projectId)
  getProject: (projectId) => axios.get(`/project/${projectId}`, requestConfig),

  // POST project -- await API.newProject({ ... })
  newProject: (projectData) => axios.post('/project', projectData, requestConfig),

  // PUT 1 project -- await API.newProject(projectId, { ... })
  updateProject: (projectId, projectData) => axios.put(`/project/${projectId}`, projectData, requestConfig),

  // DELETE 1 project -- await API.deleteProject(projectId)
  deleteProject: (projectId) => axios.delete(`/project/${projectId}`, requestConfig),
};
