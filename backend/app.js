var express = require('express');
var app = express();

var mongoose = require('mongoose');

/* 
   The following section is pulled from 
   https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose
   and is an example of making a db connection using mongoose.
   You'll need your Atlas credentials for a real version, and
   your user name and password should be stored in a separate
   file that is not committed to the repo. More information
   can be found at https://mongoosejs.com/docs/connections.html
   - json
*/

//Set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1/my_database';
mongoose.connect(mongoDB, { useNewUrlParser: true });

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

/* End DB section */

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

app.get('/', function(req, res){
   res.json({ user: 'tobi' });
});

app.get('/projects', function(req, res){
   res.json(
      {
         "projects" : [

            {
               "id" : 1,
               "name" : "Less Than Charming",
               "description" : "really funny",
               "progress" : {
                  "word count" : 100,
                  "word goal" : 10000
               },
               "author" : "Clark Ngo"
            },
            {
               "id" : 2,
               "name" : "More Than Charming",
               "description" : "really sad",
               "progress" : {
                  "word count" : 200,
                  "word goal" : 1000
               },
               "author" : "Tori Murray"
            }
         ]
      }
   );
});

app.listen(3000);
