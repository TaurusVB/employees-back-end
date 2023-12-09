const express = require("express");

const { auth } = require("../middleware/auth");
const {
  getEmployees,
  getEmployee,
  addEmployee,
  removeEmlpoyee,
  updateEmployee,
} = require("../controllers/employees");

const router = express.Router();

router.get("/", auth, getEmployees);

router.get("/:id", auth, getEmployee);

router.post("/add", auth, addEmployee);

router.delete("/remove/:id", auth, removeEmlpoyee);

router.patch("/edit/:id", auth, updateEmployee);

module.exports = router;
