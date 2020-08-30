const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
    createdAt: {type: Date},
    wordCountChange: {type: Number, require: true},
    // totalWordCount: {type: Number},
    projectId: {type: mongoose.Schema.Types.ObjectId, ref: 'Project', require: true }
})

EventSchema.pre('save', function(next) {
    var now = new Date()
    if ( !this.createdAt ) {
        this.createdAt = now
    }
    next()
})

module.exports = mongoose.model('Event', EventSchema)