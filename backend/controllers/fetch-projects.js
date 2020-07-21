require('express').Request;
require('express').Response;
let projectFunc = require('../models/project');


const handler = async (req, res) => {
  try {
    const projects = await projectFunc.fetchProjects();
    res.json(projects);
  } catch (err) {
    console.log(err);
    res.status(500).end();
  }
};

module.exports = handler;
