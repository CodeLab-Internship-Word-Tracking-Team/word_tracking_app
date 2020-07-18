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
var mongoose = require('mongoose');
var ProjectSchema = new mongoose.Schema({ 
    project_name: String, 
    project_description: String, 
    some_value: Number
}); // update to reflect your test data needs

var ProjectModel = mongoose.model('Project', ProjectSchema);

const dummyProjects = [
    { project_name: "Less Than Charming", project_description: "Super good novel", some_value: 1000 },
    { project_name: "More Than Charming", project_description: "An acceptable novel", some_value: 10000 },
    { project_name: "Equal to Charming", project_description: "Okay novel", some_value: 100000 },
    { project_name: "Inverser of Charming", project_description: "Super bad novel", some_value: 1000000 }
];

function initializeRepo() {
    debug('started insertion');
    ProjectModel.insertMany(encounters, (err) => {
        if (err) {
            debug("database insert error" + err);
        }
        else {
            debug('database insertion sucessful!')
        }
    });
}

mongoose.connect('mongodb://localhost:27017/', 
    {useNewUrlParser: true, user: process.env.MONGO_USER, pass: process.env.MONGO_PASSWORD}).then(() => {
        initializeRepo();
});