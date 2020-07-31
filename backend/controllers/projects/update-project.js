require('express').Request;
require('express').Response;
let projectFunc = require('../../models/project');


const handler = async (req, res) => {
  const update = req.body
  try {
    const project = await projectFunc.updateProject(req.params.id, update);
    if (project === null) {
      console.log("Project not found");
      res.status(404).end();
    }
  } catch (err) {
    console.log(err);
    res.status(500).end();
  }
  console.log("Successfully updated a project");
  res.status(200).end();
};

module.exports = handler;
