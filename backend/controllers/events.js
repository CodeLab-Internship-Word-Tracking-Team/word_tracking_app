const Project = require('../models/project');
const Event = require('../models/event')

module.exports = (app, checkJwt) => {

    // Save an event using projectId as a field and project will append new event to an array
    app.post('/projects/:id/createEvent', checkJwt, (req, res) => {

        // Destructuring req.body to get content and append projectId to schema
        const {wordCount} = req.body
        const event = new Event({wordCountChange: wordCount, projectId: req.params.id})

        Event.save().then(event=> {
            return Project.findById(req.params.id)
        }).then(project => {
            // create event and append to beginning to event array with unshift to make pulling data easier
            project.events.unshift(event)
            return project.save()
        }).then(project => {
            // sending back eventId incase AuthO need to create new collection for it
            res.status(201).send({ message: 'New event created', id: event._id });
            res.redirect(`/project/` + project._id)
        }).catch((err) => {
            // Respond Server Error, return error message
            res.status(500).send({ message: err.message });
            new Error(err.message);
          })
    })

    // Return all events of an object by its ID
    app.get('/project/:id/events', checkJwt, (req, res) => {
        Event.find({projectId: req.params.id})
            .then((events) => {
                if (Object.keys(events).length === 0) {
                    // Respond Not Found, return message
                    res.status(404).send({ message: 'No projects found' });
                }
                // Send back events json objects
                res.status(200).json(events);
            })
    })

}