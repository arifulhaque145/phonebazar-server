const express = require("express");
const {
  allTestimonials,
  addTestimonials,
  updateTestimonials,
  deleteTestimonials,
} = require("../controllers/testimonials.controller.js");
const router = express.Router();

router.get("/testimonials", allTestimonials);
router.post("/testimonials", addTestimonials);
router.patch("/testimonials", updateTestimonials);
router.delete("/testimonials/:id", deleteTestimonials);

module.exports = router;
