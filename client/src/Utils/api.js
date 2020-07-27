import axios from 'axios';

export default {
  // GET all projects
  getProjects: () => {
    return axios.get('/projects');
  },

  // GET 1 project
  getProject: (id) => {
    return axios.get(`/project/${id}`);
  },

  // POST project
  postProject: (projectData) => {
    return axios.post('/project', projectData);
  },

  // PUT 1 project
  updateProject: (projectData) => {
    return axios.put('/project', projectData);
  },

  // DELETE 1 project
  deleteProject: (id) => {
    return axios.delete(`/project/${id}`);
  },
}