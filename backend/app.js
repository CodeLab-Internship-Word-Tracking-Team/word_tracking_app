
// import addProjectController from './controllers/add-project'
const dotenv = require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

const addProjectController = require('./controllers/add-project');
const fetchProjectController = require('./controllers/fetch-project');
const fetchProjectsController = require('./controllers/fetch-projects');
const updateProjectController = require('./controllers/update-project');
const deleteProjectController = require('./controllers/delete-project');

/* Start DB section */
//Set up default mongoose connection
mongoose.connect(process.env.DB_URI, {useNewUrlParser: true});

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

/* End DB section */

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(function(req, res, next) {
   // Website you wish to allow to connect
   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');

   // Request methods you wish to allow
   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

   // Request headers you wish to allow
   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

   // Set to true if you need the website to include cookies in the requests sent
   // to the API (e.g. in case you use sessions)
   res.setHeader('Access-Control-Allow-Credentials', true);

   // Pass to next layer of middleware
   next();
 });

// routes
app.get('/', fetchProjectsController);
app.get('/projects', fetchProjectsController);
app.get('/project/:id', fetchProjectController);
app.post('/project', addProjectController);
app.put('/project/:id', updateProjectController);
app.delete('/project/:id', deleteProjectController);

app.listen(process.env.PORT, () =>
   console.log(`Example app listening on port ${process.env.PORT}!`),
);
