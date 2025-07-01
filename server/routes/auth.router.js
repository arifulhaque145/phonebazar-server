const express = require("express");
const {
  allUsers,
  singleUser,
  updateUser,
  deleteUser,
  addSingleUser,
} = require("../controllers/auth.controller.js");

const router = express.Router();

router.get("/users", allUsers);
router.get("/users/:id", singleUser);
router.post("/users", addSingleUser);
router.patch("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

module.exports = router;
