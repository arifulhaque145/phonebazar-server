const {
  actionRegister,
  actionLogin,
  actionAllUsers,
  actionSingleUser,
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

exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await actionRegister({ name, email, password });

    if (user === null) {
      return res.status(400).json({ message: "User already exists." });
    }

    res
      .status(201)
      .json({ data: user, message: "User registered successfully." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const userData = req.body;
    const { user, isMatch } = await actionLogin(userData);

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials." });
    }

    res.status(200).json({ data: user, message: "Login successful." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
