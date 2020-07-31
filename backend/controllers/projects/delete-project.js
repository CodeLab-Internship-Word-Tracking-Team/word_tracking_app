require('express').Request;
require('express').Response;
let projectFunc = require('../../models/project');


const handler = async (req, res) => {
  try {
    const project = await projectFunc.deleteProject(req.params.id);
    if (project === null) {
      console.log("Project not found");
      res.status(404).end();
    } else {
      res.json(project)
    }
  } catch (err) {
    console.log(err);
    res.status(500).end();
  }
  console.log("Successfully deleted a project");
  res.status(200).end();
};

module.exports = handler;
