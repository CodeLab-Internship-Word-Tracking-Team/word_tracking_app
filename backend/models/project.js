const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema(
  {
    name: {type: String, required: true, maxlength: 100},
    description: {type: String, required: true, maxlength: 280},
    author: {type: String, required: true, maxlength: 100},
    word_count: {type: Number},
    word_goal: {type: Number},
  }
);

//Export model
const Project = mongoose.model('project', ProjectSchema, 'projects');

fetchProject = async (id) => await Project.find({_id: id});
fetchProjects = async () => await Project.find({});
addProject = (name, description, author, word_count, word_goal) =>
  new Project({ name, description, author, word_count, word_goal}).save();

module.exports = {
  fetchProject,
  fetchProjects,
  addProject
};
