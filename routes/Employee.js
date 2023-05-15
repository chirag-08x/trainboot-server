const express = require("express");
const mongoose = require("mongoose");
const Employees = require("../models/employee");
const router = express.Router();

// Employee Routes
router.get("/all", async (req, res) => {
  try {
    const employeeData = await Employees.find({});
    res.send(employeeData);
  } catch (err) {
    console.log(err);
  }
});
router.get("/getOne/:email", async (req, res) => {
  try {
    const email = req.params.email;
    const employeeData = await Employees.findOne({ email: email });
    res.send(employeeData);
  } catch (err) {
    console.log(err);
  }
});
router.post("/addEmployee", async (req, res) => {
  const { firstName, lastName, email, empId, deptId, deptName } = req.body;
  const userAlreadyExists = await Employees.findOne({ email });

  if (userAlreadyExists) {
    return res.json({ success: true, message: "user already exists" });
  }

  try {
    const employeeData = new Employees({
      firstName: firstName,
      lastName: lastName,
      email: email,
    });
    await employeeData.save();
    res.json(employeeData);
  } catch (err) {
    console.log(err);
  }
});

// Export module router
module.exports = router;
