require("dotenv").config();

/**
 * Task 2: Server entry point.
 * Implement GET /counter/count in routes/counter.js (read from Counter contract via ethers).
 */
const app = require("./app");

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`);
});
