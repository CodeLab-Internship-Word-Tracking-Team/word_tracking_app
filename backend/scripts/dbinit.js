

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

const dummyProjects = [
    { name: "Less Than Charming", description: "Super good novel", author: "Jason", word_count: 123, word_goal: 500 },
    { name: "More Than Charming", description: "An acceptable novel", author: "Clark", word_count: 342, word_goal: 350 },
    { name: "Equal to Charming", description: "Okay novel", author: "Melanie", word_count: 24, word_goal: 2500 },
    { name: "Inverser of Charming", description: "Super bad novel", author: "Tori", word_count: 145, word_goal: 1500 }
];

Project.insertMany(dummyProjects, function (err) {
    if(err) console.log(err);
    console.log("Successful multiple insertion");
});
