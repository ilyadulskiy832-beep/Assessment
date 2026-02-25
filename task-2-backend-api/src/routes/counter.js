const express = require("express");
const router = express.Router();

// TODO: Use ethers to read getCount() from Counter contract.
// Use env: RPC_URL, COUNTER_CONTRACT_ADDRESS.
// Counter ABI fragment is in ../config/counterAbi.js

/**
 * GET /counter/count
 * Returns current count from the Counter contract.
 * Response: { "count": number }
 * On failure: 502 with error message.
 */
router.get("/count", async (req, res, next) => {
  try {
    // TODO: Create ethers provider, attach to Counter contract, call getCount().
    // Return res.json({ count: value }).
    // On error (e.g. wrong RPC or address), res.status(502).json({ error: "..." }).
    res.json({ count: 0 });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
