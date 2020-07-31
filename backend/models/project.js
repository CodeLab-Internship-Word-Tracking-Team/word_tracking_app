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

const Project = mongoose.model('project', ProjectSchema, 'projects');

fetchProject = async (id) => await Project.find({_id: id});
fetchProjects = async () => await Project.find({});
addProject = (name, description, author, word_count, word_goal) =>
  new Project({ name, description, author, word_count, word_goal }).save();
updateProject = async (id, update) => await Project.findByIdAndUpdate({_id: id}, {$set: update});
deleteProject = async (id) => await Project.findByIdAndDelete({_id: id});

module.exports = {
  fetchProject,
  fetchProjects,
  addProject,
  updateProject,
  deleteProject
};
