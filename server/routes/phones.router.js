const express = require("express");
const {
  allPhones,
  singlePhone,
  addPhone,
  updatePhone,
  deletePhone,
} = require("../controllers/phone.controller");
const router = express.Router();

router.get("/phones", allPhones);
router.get("/phones/:id", singlePhone);
router.post("/phones", addPhone);
router.patch("/phones/:id", updatePhone);
router.delete("/phones/:id", deletePhone);

module.exports = router;
