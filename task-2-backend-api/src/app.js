/**
 * Task 2: Express application.
 * Mounts routes and middleware. Implement /counter/count in routes/counter.js.
 */
const express = require("express");
const cors = require("cors");
const healthRouter = require("./routes/health");
const counterRouter = require("./routes/counter");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request logging (development-friendly)
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} ${req.method} ${req.path}`);
  next();
});

// Routes
app.use("/health", healthRouter);
app.use("/counter", counterRouter);

// 404
app.use((req, res) => {
  res.status(404).json({ error: "Not found", path: req.path });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({
    error: err.message || "Internal server error",
  });
});

module.exports = app;
