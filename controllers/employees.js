const { prismadb } = require("../lib/prismadb");

const getEmployees = async (req, res) => {
  const employees = await prismadb.employee.findMany();

  return res.status(200).json(employees);
};

const getEmployee = async (req, res) => {
  const { id } = req.params;

  const employee = await prismadb.employee.findUnique({
    where: {
      id,
    },
  });

  return res.status(200).json(employee);
};

const addEmployee = async (req, res) => {
  const { firstName, lastName, address, age } = req.body;

  if (!firstName || !lastName || !address || !age) {
    return res.status(400).json({ message: "Please fill in all fields!" });
  }

  const employee = await prismadb.employee.create({
    data: {
      firstName,
      lastName,
      address,
      age,
      userId: req.user.id,
    },
  });

  return res.status(201).json(employee);
};

const removeEmlpoyee = async (req, res) => {
  const { id } = req.params;

  await prismadb.employee.delete({
    where: {
      id,
    },
  });

  return res.status(200).json("Employee successfully removed");
};

const updateEmployee = async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  const updatedEmployee = await prismadb.employee.update({
    where: {
      id,
    },
    data: {
      ...data,
    },
  });

  return res.status(200).json(updatedEmployee);
};

module.exports = {
  getEmployees,
  getEmployee,
  addEmployee,
  removeEmlpoyee,
  updateEmployee,
};
