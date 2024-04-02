const express = require("express");
const router = express.Router();
const signup = require("../models/signup");
const getNo = require("../assets/no");
const getEmail = require("../assets/email");
const getUsername = require("../assets/username");

router.get("/data", async (req, res) => {
  try {
    const data = await signup.find();
    console.log(data);
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});
router.get("/data/id:username", async (req, res) => {
  try {
    const data = await signup.find({ username: req.params.username });
    console.log(data);
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

router.post("/newUser", async (req, res) => {
  var checkNo = await getNo(req.body.no);
  var checkEmail = await getEmail(req.body.email);
  var checkUname = await getUsername(req.body.username);
  var check = checkNo || checkEmail || checkUname;

  if (check) {
    switch (check) {
      case checkEmail:
        res.status(400).json({
          message: "Email already associated with another account",
          display: "Login please",
        });
        return;
      case checkNo:
        res.status(400).json({
          message: "Number already associated with another account",
          display: "Login please",
        });
        return;
      case checkUname:
        res.status(400).json({
          message: "Username already exists",
          display: "Login please",
        });
        return;
    }
    return;
  } else {
    const data = new signup({
      _id: req.body._id,
      name: req.body.name,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      no: req.body.no,
    });
    try {
      const savedData = await data.save();
      res.status(201).json({
        success: true,
        userData: savedData,
        message: "User created successfully",
        redirect: "/login",
      });
    } catch (err) {
      res.status(400).json({ 
        success: false, 
        userData: null, 
        message: err, 
        redirect: null,
        });
    }
  }
});

module.exports = router;
