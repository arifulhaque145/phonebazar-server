const cors = require("cors");
const dotenv = require("dotenv");
const express = require("express");
const { connectDB } = require("./server/config/database.js");
const authRouter = require("./server/routes/auth.router.js");
const phoneRouter = require("./server/routes/phones.router.js");
const reviewsRouter = require("./server/routes/reviews.router.js");
const testimonialsRouter = require("./server/routes/testimonials.router.js");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Database Conncetion
connectDB();

// Routes
app.use("/api/v1", authRouter);
app.use("/api/v1", phoneRouter);
app.use("/api/v1", reviewsRouter);
app.use("/api/v1", testimonialsRouter);

// Server testing
app.get("/", (_, res) => {
  res.send("I am here to listen from 5000");
});

// Server Running
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
