# Task 2: Backend API

**Estimated time:** 45–60 minutes

## Objective

Build a small **Node.js/Express** API that exposes REST endpoints and integrates with an Ethereum-compatible network using **ethers.js**. The API will read from the Counter contract (Task 1) and expose a simple health/readiness check.

## Requirements

1. **Framework:** Express.js (or similar). Use plain JavaScript or TypeScript.

2. **Endpoints:**
   - **GET `/health`**  
     Returns `{ "status": "ok" }` with status 200. Use for readiness checks.
   - **GET `/counter/count`**  
     Reads the current `count` from the Counter contract and returns JSON, e.g.  
     `{ "count": 5 }`  
     The contract address and RPC URL should be configurable via environment variables (e.g. `COUNTER_CONTRACT_ADDRESS`, `RPC_URL`). If the read fails, return an appropriate error response (e.g. 502 with a message).

3. **Blockchain integration:**
   - Use **ethers.js** (v5 or v6) to connect to the network and call `getCount()` on the Counter contract.
   - Support a default RPC such as `http://127.0.0.1:8545` (Hardhat node) so we can run a local node and your API together for testing.

4. **Documentation:**
   - In this folder or in root `SUBMISSION.md`, document how to run the API and which env vars are required (e.g. `RPC_URL`, `COUNTER_CONTRACT_ADDRESS`).

## Deliverables

- Express app (e.g. `src/index.js` or `index.js`) that implements the two endpoints.
- `package.json` with dependencies (`express`, `ethers`).
- `.env.example` listing required environment variables (no secrets).
- Short instructions to run (e.g. `npm install`, `npm start`).

## Hints

- For local testing, run Hardhat node (`npx hardhat node`), deploy the Counter contract (Task 1), then set `COUNTER_CONTRACT_ADDRESS` and `RPC_URL=http://127.0.0.1:8545` when starting the API.
- ABI for the Counter contract: you can copy the compiled ABI from Task 1 (`artifacts/contracts/Counter.sol/Counter.json`) or define a minimal ABI with just `getCount()`.
