const express = require("express");
const {
  allUsers,
  singleUser,
  register,
  login,
} = require("../controllers/auth.controller");
const router = express.Router();

router.get("/users", allUsers);
router.get("/users/:id", singleUser);
router.get("/login", login);
router.post("/register", register);

module.exports = router;
