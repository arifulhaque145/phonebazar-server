const {
  actionAllReviews,
  actionSingleProductReviews,
  actionAddReviews,
  actionUpdateReviews,
  actionDeleteReviews,
} = require("../services/reviews.services");

exports.allReviews = async (req, res) => {
  try {
    const reviews = await actionAllReviews();
    res
      .status(201)
      .json({
        data: reviews,
        message: "All review data fetched successfully.",
      });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.singleProductReviews = async (req, res) => {
  try {
    const id = req.params.id;
    const review = await actionSingleProductReviews(id);

    res.status(201).json({
      data: review,
      message: "Single review data fetched successfully.",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.addReviews = async (req, res) => {
  try {
    const reviewData = req.body;
    const review = await actionAddReviews(reviewData);

    res.status(201).json({
      data: review,
      message: "Single review data fetched successfully.",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateReviews = async (req, res) => {
  try {
    const reviewData = req.body;
    const review = await actionUpdateReviews(reviewData);

    res.status(201).json({
      data: review,
      message: "Single review data updated successfully.",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteReviews = async (req, res) => {
  try {
    const reviewId = req.params.id;
    const review = await actionDeleteReviews(reviewId);

    res.status(201).json({
      data: review,
      message: "Single review data deleted successfully.",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
