const mongoose = require("mongoose");

const employeeSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: false,
  },
  empId: {
    type: String,
    required: false,
  },
  deptId: {
    type: String,
    required: false,
  },
  deptName: {
    type: String,
    required: false,
  },
  trngsCompleted: {
    type: Number,
    required: false,
    default: 0,
  },
  completedTrainings: {
    type: Array,
    required: false,
    default: [],
  },
  ongoingTrainings: {
    type: Array,
    required: false,
    default: [],
  },
  trngsOngoing: {
    type: Number,
    required: false,
    default: 0,
  },
  tasksCompleted: {
    type: Number,
    required: false,
    default: 0,
  },
});

module.exports = mongoose.model("Employees", employeeSchema);
