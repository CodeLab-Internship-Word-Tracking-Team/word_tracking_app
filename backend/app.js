// Modules
const dotenv = require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

// Connect to MongoDB Atlas Database
mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Use BodyParser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

// CORS Configuation
app.use((req, res, next) => {
  // Allowed client port
  res.setHeader('Access-Control-Allow-Origin', process.env.CLIENT_PORT);
  // Allowed HTTP verbs
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  // Allowed headers
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  // Next layer
  next();
});

require('./controllers/projects.js')(app);

// Start Server
app.listen(process.env.PORT, () => {
  console.info(
    `🌎🚀 Server now listening on Port: ${process.env.PORT} | Environment: ${app.get('env')}`
  );
});