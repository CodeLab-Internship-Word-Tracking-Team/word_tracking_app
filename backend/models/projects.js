const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true, maxlength: 100 },
  description: { type: String, required: true, maxlength: 280 },
  author: { type: String, required: true, maxlength: 100 },
  wordCount: { type: Number },
  wordGoal: { type: Number },
});

module.exports = mongoose.model('Project', ProjectSchema, 'Projects');