/*
    Example of database initialization with mongoose. There are two important
    things to note here. First is the use of the `debug` npm module. Documen-
    tation can be found here: https://www.npmjs.com/package/debug. This
    package allows you to emit useful debug statements, and I highly
    encourage using it.
    Second is the use of `process.env.MONGO_USER`. This allows access to
    environment variables on your host platform, and is a convenient way to
    manage secrets. You can set those variables in node or in a bash script.
    - json
*/
// var mongoose = require('mongoose');
// var ProjectSchema = new mongoose.Schema({
//     project_name: String,
//     project_description: String,
//     some_value: Number
// }); // update to reflect your test data needs

// var ProjectModel = mongoose.model('Project', ProjectSchema);

// const dummyProjects = [
//     { project_name: "Less Than Charming", project_description: "Super good novel", some_value: 1000 },
//     { project_name: "More Than Charming", project_description: "An acceptable novel", some_value: 10000 },
//     { project_name: "Equal to Charming", project_description: "Okay novel", some_value: 100000 },
//     { project_name: "Inverser of Charming", project_description: "Super bad novel", some_value: 1000000 }
// ];

// function initializeRepo() {
//     debug('started insertion');
//     ProjectModel.insertMany(encounters, (err) => {
//         if (err) {
//             debug("database insert error" + err);
//         }
//         else {
//             debug('database insertion sucessful!')
//         }
//     })
//     .then (() => { process.exit; });
// }

// // mongoose.connect(
// //             'mongodb://localhost:27017/',
// //             {useNewUrlParser: true, user: process.env.MONGO_USER, pass: process.env.MONGO_PASSWORD}
// //         )
// //         .then(() => { initializeRepo();});


// const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.4jvgn.mongodb.net/<dbname>?retryWrites=true&w=majority`;

// mongoose.connect(
//     uri,
//     {useNewUrlParser: true, user: process.env.MONGO_USER, pass: process.env.MONGO_PASSWORD}
// )
// .then(() => { initializeRepo();});

// // client.connect(err => {
// //     const collection = client.db("test").collection("devices");
// //     // perform actions on the collection object


// //   client.close();
// // }).then(() => { initializeRepo();});



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

// Project.insertMany(dummyProjects, (err) => {
//     if (err) {
//         debug("database insert error" + err);
//     }
//     else {
//         debug('database insertion sucessful!')
//     }
// }).then (() => { process.exit; });

Project.insertMany(dummyProjects, function (err) {
    if(err) console.log(err);
    console.log("Successful multiple insertion");
});
