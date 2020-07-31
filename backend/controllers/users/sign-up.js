require('express').Request;
require('express').Response;
let userFunc = require('../../models/user');

const handler = async (req, res) => {
  try {
    const { email, first_name, last_name } = req.body;
    console.log(req.body.email)
    const user = await userFunc.signupUserHelper(email);
    console.log(Object.keys(user))
    if (Object.keys(user).length === 0) {
      console.log("User not found");

      try {
        userFunc.signupUser(email, first_name, last_name)
        console.log(email, first_name, last_name)
      } catch (err) {
        console.log(err);
        res.status(500).end();
      }
      console.log("Successfully created a user");
      res.status(201).end();
      return

    } else {
      console.log("User exists");
      res.status(409).end();
    }

  } catch (err) {
    console.log(err);
    res.status(500).end();
  }
};

module.exports = handler;
