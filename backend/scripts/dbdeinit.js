const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
// mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.connect(process.env.DB_URI, {useNewUrlParser: true});

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

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

Project.deleteMany({}, function (err) {
    if(err) console.log(err);
    console.log("Successful deletion");
});
