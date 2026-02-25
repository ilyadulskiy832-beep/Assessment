# Task 1: Smart Contract

**Estimated time:** 45–60 minutes

## Objective

Implement a simple **Counter** contract in Solidity that supports incrementing, decrementing, and reading the current value. This mimics a minimal on-chain state component used in dApps.

## Requirements

1. **Contract: `Counter`**
   - State variable: `uint256 count` (starts at 0).
   - Functions:
     - `increment()` — increases `count` by 1.
     - `decrement()` — decreases `count` by 1 (no underflow; do not allow `count` to go below 0).
     - `getCount()` — returns the current `count` (view function).
   - Use Solidity 0.8.x and guard against underflow (e.g., `require` or rely on 0.8+ built-in checks).

2. **Tests**
   - Write at least 3 unit tests (e.g., increment, decrement, no underflow) using Hardhat or Foundry. Place them in a `test/` directory (e.g., `test/Counter.test.js` or `Counter.t.sol`).

3. **Deployment**
   - Provide a simple deploy script (Hardhat or Foundry) that deploys `Counter` and logs the deployed contract address.

## Deliverables

- `contracts/Counter.sol` — your Counter contract.
- `test/` — tests for the contract.
- `scripts/deploy.js` (or equivalent) — deploy script.
- Short note in this folder or in root `SUBMISSION.md` on how to run tests and deploy (e.g., `npx hardhat test`, `npx hardhat run scripts/deploy.js`).

## Hints

- Prefer Hardhat if you are more comfortable with JavaScript/TypeScript tests; Foundry is fine if you prefer Solidity tests.
- For “no underflow,” either use `require(count > 0, "Cannot decrement below zero");` before decrementing or ensure Solidity 0.8+ is used so that reverts happen automatically (and document that choice).
