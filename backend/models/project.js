const mongoose = require('mongoose');
Event = require('./event')

const ProjectSchema = new mongoose.Schema({
  createdAt: {type: Date},
  title: { type: String, required: true, maxlength: 100 },
  description: { type: String, required: true, maxlength: 280 },
  wordGoal: { type: Number },
  events: [ Event.schema ]
});

ProjectSchema.pre('save', function(next) {
  var now = new Date()
  if ( !this.createdAt ) {
    this.createdAt = now
  } next();
})


module.exports = mongoose.model('Project', ProjectSchema);