const express = require("express");
const {
  allUsers,
  singleUser,
  register,
  updateUser,
  deleteUser,
  googleLogin,
  addSingleUser,
} = require("../controllers/auth.controller");
const router = express.Router();

router.get("/users", allUsers);
router.get("/users/:id", singleUser);
router.post("/users", addSingleUser);
router.patch("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

module.exports = router;
