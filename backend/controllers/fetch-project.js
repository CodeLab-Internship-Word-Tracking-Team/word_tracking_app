require('express').Request;
require('express').Response;
let projectFunc = require('../models/project');


const handler = async (req, res) => {
  try {
    const project = await projectFunc.fetchProject(req.params.id);
    res.json(project);
  } catch (err) {
    console.log(err);
    res.status(500).end();
  }
};

module.exports = handler;
