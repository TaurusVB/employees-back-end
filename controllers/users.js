const { prismadb } = require("../lib/prismadb");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Please fill in all fields!" });
  }

  const user = await prismadb.user.findFirst({
    where: {
      email,
    },
  });

  const isValidPassword =
    user && (await bcrypt.compare(password, user.password));

  const secret = process.env.JWT_SECRET;

  if (isValidPassword && user && secret) {
    res.status(200).json({
      id: user.id,
      email: user.email,
      name: user.name,
      token: jwt.sign({ id: user.id }, secret, { expiresIn: "48h" }),
    });
  } else {
    return res.status(400).json({ message: "Invalid password or login" });
  }
};

const register = async (req, res) => {
  const { email, password, name } = req.body;

  if (!email || !password || !name) {
    return res.status(400).json({ message: "Please fill in all fields!" });
  }

  const existUser = await prismadb.user.findFirst({
    where: {
      email,
    },
  });

  if (existUser) {
    return res.status(400).json({
      message:
        "User with this email already exists. Please navigate to the login page.",
    });
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const registerUser = await prismadb.user.create({
    data: {
      email,
      name,
      password: hashedPassword,
    },
  });

  const secret = process.env.JWT_SECRET;

  if (registerUser && secret) {
    res.status(200).json({
      id: registerUser.id,
      email,
      name,
      token: jwt.sign({ id: registerUser.id }, secret, { expiresIn: "48h" }),
    });
  } else {
    return res.status(400).json({ message: "Something went wrong..." });
  }
};

const current = async (req, res) => {
  res.send("current");
};

module.exports = { login, register, current };
