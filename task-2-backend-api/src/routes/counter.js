const express = require("express");
const { ethers } = require("ethers");
const router = express.Router();
const COUNTER_ABI = require("../config/counterAbi");
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
    this.provider = new ethers.JsonRpcProvider(process.env.RPC_URL);

    this.contract = new ethers.Contract(
      process.env.COUNTER_CONTRACT_ADDRESS,
      COUNTER_ABI,
      this.provider
    );
    const count = await this.contract.getCount();
    console.log('Count :', count);
    res.json({ count: Number(count) });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
