var express = require('express');
var app = express();

app.get('/', function(req, res){
   res.json({ user: 'tobi' });
});


app.get('/projects', function(req, res){
   res.json({
      "name" : "Less Than Charming",
      "description" : "really funny",
      "progress" : {
         "word count" : 100,
         "word goal" : 10000
      },
      "author" : "Clark Ngo"
   });
});

app.listen(3000);
