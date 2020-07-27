require('express').Request;
require('express').Response;
let projectFunc = require('../models/project');


const handler = async (req, res) => {
  try {
    const projects = await projectFunc.fetchProjects();
    if (Object.keys(projects).length === 0) {
      console.log("No projects not found");
      res.status(404).end();
    } else {
      res.json(projects)
    }
  } catch (err) {
    console.log(err);
    res.status(500).end();
  }
  console.log("Successfully fetched all projects");
  res.status(200).end();
};

module.exports = handler;
