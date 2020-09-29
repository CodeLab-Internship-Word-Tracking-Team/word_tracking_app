import axios from 'axios';

// Set Headers for Requests
const requestConfig = (token) => ({
  headers: {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  },
});

export default {
  // GET all projects -- await API.getProjects()
  getProjects: (token) => axios.get('/projects', requestConfig(token)),

  // GET 1 project -- await API.getProject(projectId)
  getProject: (token, projectId) => axios.get(`/projects/${projectId}`, requestConfig(token)),

  // POST project -- await API.newProject({ ... })
  // newProject: (token, projectData) => axios.post('/projects', projectData, requestConfig(token)),
  newProject: (token, projectData, userId) => axios.post(`/project/${userId}`, projectData, requestConfig(token)),

  // PUT 1 project -- await API.newProject(projectId, { ... })
  updateProject: (token, projectId, projectData) => axios.put(`/projects/${projectId}`, projectData, requestConfig(token)),

  // DELETE 1 project -- await API.deleteProject(projectId)
  deleteProject: (token, projectId) => axios.delete(`/projects/${projectId}`, requestConfig(token)),
};
