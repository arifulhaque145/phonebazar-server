const express = require("express");
const {
  allReviews,
  singleProductReviews,
  addReviews,
  updateReviews,
  deleteReviews,
} = require("../controllers/reviews.controller");
const router = express.Router();

router.get("/reviews", allReviews);
router.get("/reviews/:id", singleProductReviews);
router.post("/reviews", addReviews);
router.patch("/reviews/:id", updateReviews);
router.delete("/reviews/:id", deleteReviews);

console.log("hello");

module.exports = router;
