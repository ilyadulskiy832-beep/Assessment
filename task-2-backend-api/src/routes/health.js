const express = require("express");
const router = express.Router();

/**
 * GET /health
 * Returns service readiness. No blockchain dependency.
 */
router.get("/", (req, res) => {
  res.status(200).json({ status: "ok" });
});

module.exports = router;
