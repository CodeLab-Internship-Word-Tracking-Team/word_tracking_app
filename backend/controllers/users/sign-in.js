require('express').Request;
require('express').Response;
let userFunc = require('../../models/user');

const handler = async (req, res) => {
  try {
    const { email } = req.body;
    console.log(req.body)
    const user = await userFunc.signinUser(email);
    console.log(Object.keys(user))
    if (Object.keys(user).length === 0) {
      console.log("User not found");
      res.status(404).end();
      return
    } else {
      res.json(user)
    }
  } catch (err) {
    console.log(err);
    res.status(500).end();
  }
  console.log("Successfully fetched a user");
  res.status(200).end();
};

module.exports = handler;
