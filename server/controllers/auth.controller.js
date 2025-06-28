const {
  actionRegister,
  actionGoogleLogin,
  actionAllUsers,
  actionSingleUser,
  actionUpdateUser,
  actionAddSingleUser,
} = require("../services/auth.services");

exports.allUsers = async (req, res) => {
  try {
    const users = await actionAllUsers();
    res
      .status(201)
      .json({ data: users, message: "User registered successfully." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.singleUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await actionSingleUser(userId);

    if (user) {
      return res
        .status(400)
        .json({ data: user, message: "User already exists." });
    }

    res.status(201).json({ message: "User registered successfully." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.addSingleUser = async (req, res) => {
  try {
    const userData = req.body;
    const user = await actionAddSingleUser(userData);

    if (user === null) {
      return res.status(400).json({ message: "User already exsist." });
    }

    res.status(200).json({ data: user, message: "Login successful." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const userData = req.body;
    const res = await actionUpdateUser({ userId, userData });

    res.status(200).json({ data: user, message: "Login successful." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const res = await actionDeleteUser(userId);

    res.status(200).json({ data: user, message: "Login successful." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
