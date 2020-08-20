const dotenv = require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const jwt = require('express-jwt');
const jwtAuthz = require('express-jwt-authz');
const jwksRsa = require('jwks-rsa');

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

/* Start Auth Section */
// Authentication middleware. When used, the
// Access Token must exist and be verified against
// the Auth0 JSON Web Key Set
const checkJwt = jwt({
   // Dynamically provide a signing key
   // based on the kid in the header and
   // the signing keys provided by the JWKS endpoint.
   secret: jwksRsa.expressJwtSecret({
     cache: true,
     rateLimit: true,
     jwksRequestsPerMinute: 5,
     jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`
   }),

   // Validate the audience and the issuer.
   audience: process.env.AUTH0_API_IDENTIFIER,
   issuer: `https://${process.env.AUTH0_DOMAIN}/`,
   algorithms: ['RS256']
 });

/* End Auth Section */

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

// protected routes
app.get('/');
app.get('/projects', checkJwt, fetchProjectsController);
app.get('/project/:id', checkJwt, fetchProjectController);
app.post('/project', checkJwt, addProjectController);
app.put('/project/:id', checkJwt, updateProjectController);
app.delete('/project/:id', checkJwt, deleteProjectController);

app.listen(process.env.PORT, () =>
   console.log(`Example app listening on port ${process.env.PORT}!`),
);
