const express = require("express");
const {
  allReviews,
  singleProductReviews,
  addReviews,
  updateReviews,
  deleteReviews,
} = require("../controllers/reviews.controller.js");
const router = express.Router();

router.get("/reviews", allReviews);
router.get("/reviews/:id", singleProductReviews);
router.post("/reviews", addReviews);
router.patch("/reviews", updateReviews);
router.delete("/reviews/:id", deleteReviews);

module.exports = router;
