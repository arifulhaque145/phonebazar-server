const {
  actionAllTestimonials,
  actionAddTestimonials,
  actionUpdateTestimonials,
  actionDeleteTestimonials,
} = require("../services/testimonials.services.js");

const allTestimonials = async (_req, res) => {
  try {
    const reviews = await actionAllTestimonials();
    res.status(201).json({
      data: reviews,
      message: "All testimonial data fetched successfully.",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addTestimonials = async (_req, res) => {
  try {
    const testimonialsData = _req.body;
    const testimonials = await actionAddTestimonials(testimonialsData);

    res.status(201).json({
      data: testimonials,
      message: "Single testimonial data fetched successfully.",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateTestimonials = async (_req, res) => {
  try {
    const updatedReviewData = _req.body;
    const result = await actionUpdateTestimonials(updatedReviewData);

    res.status(201).json({
      data: result,
      message: "Single testimonial data updated successfully.",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteTestimonials = async (_req, res) => {
  try {
    const testimonialId = _req.params.id;
    const result = await actionDeleteTestimonials(testimonialId);

    res.status(201).json({
      data: result,
      message: "Single testimonial data deleted successfully.",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  allTestimonials,
  addTestimonials,
  updateTestimonials,
  deleteTestimonials,
};
