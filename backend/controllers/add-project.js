require('express').Request;
require('express').Response;
let projectFunc = require('../models/project');


const handler = (req, res) => {
  const { name, description, author, word_count, word_goal } = req.body;
  console.log(req.body)
  try {
    projectFunc.addProject(name, description, author, word_count, word_goal);
  } catch (err) {
    console.log(err);
    res.status(500).end();
  }
  console.log("Successfully inserted a project");
  res.status(201).end();
};

module.exports = handler;
