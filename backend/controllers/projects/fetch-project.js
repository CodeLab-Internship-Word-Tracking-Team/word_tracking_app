require('express').Request;
require('express').Response;
let projectFunc = require('../../models/project');


const handler = async (req, res) => {
  try {
    const project = await projectFunc.fetchProject(req.params.id);
    if (Object.keys(project).length === 0) {
      console.log("Project not found");
      res.status(404).end();
    } else {
      res.json(project)
    }
  } catch (err) {
    console.log(err);
    res.status(500).end();
  }
  console.log("Successfully fetched a project");
  res.status(200).end();
};

module.exports = handler;
