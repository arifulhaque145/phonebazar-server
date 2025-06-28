const express = require("express");
const cors = require("cors");
const { connectDB } = require("./server/config/database");
const authRouter = require("./server/routes/auth.router");
const phoneRouter = require("./server/routes/phones.router");
const reviewsRouter = require("./server/routes/reviews.router");
const tesmonialsRouter = require("./server/routes/testimonials.router");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// Database Conncetion
connectDB();

// Routes
app.use("/api/v1", authRouter);
app.use("/api/v1", phoneRouter);
app.use("/api/v1", reviewsRouter);
app.use("/api/v1", tesmonialsRouter);

// Server testing
app.get("/", (req, res) => {
  res.send("I am here to listen from 5000");
});

// Server Running
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
