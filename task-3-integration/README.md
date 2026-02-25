# Task 3: Frontend (Next.js dApp)

**Estimated time:** 45–60 minutes

## Objective

Build a **Next.js frontend** that connects to the Counter contract (Task 1) using **ethers.js** and the browser’s injected provider (e.g. MetaMask). Optionally, display the count from your Task 2 API to show integration with the backend.

## Requirements

1. **UI (Next.js + React):**
   - A way to **connect the wallet** (e.g. “Connect wallet” button that calls `provider.request({ method: 'eth_requestAccounts' })`).
   - **Display the current count** from the Counter contract (call `getCount()` via ethers).
   - A button to **increment** the counter (send a transaction via the connected signer).
   - Optional: a section that fetches **GET** `http://localhost:3000/counter/count` (or configurable `API_BASE_URL`) and shows “Count from API: X”.

2. **Blockchain integration:**
   - Use **ethers.js** (v6) with the **browser injected provider** (e.g. `window.ethereum`) in a **client component** (`"use client"`).
   - Contract address and API URL via **environment variables**: `NEXT_PUBLIC_COUNTER_CONTRACT_ADDRESS`, `NEXT_PUBLIC_API_BASE_URL` (see `.env.local.example`).

3. **Running the frontend:**
   - `npm run dev` — development server (default http://localhost:3000; if Task 2 uses 3000, run Next.js on another port, e.g. `PORT=3001 npm run dev`).
   - `npm run build` && `npm start` — production.

## Deliverables

- Next.js app with a main page that includes the counter UI.
- Client component that implements connect wallet, read count, increment, and optional API fetch.
- `.env.local.example` listing `NEXT_PUBLIC_COUNTER_CONTRACT_ADDRESS` and `NEXT_PUBLIC_API_BASE_URL`.
- Brief instructions in this folder or in root `SUBMISSION.md` on how to run.

## Hints

- For local testing: start Hardhat node, deploy Counter (Task 1), then in MetaMask add network `http://127.0.0.1:8545`. Set `NEXT_PUBLIC_COUNTER_CONTRACT_ADDRESS` in `.env.local`.
- Use `ethers.BrowserProvider(window.ethereum)` (ethers v6) in a component with `"use client"`.
- Run Task 2 API on port 3000 and Next.js on 3001 (or vice versa) to avoid port conflicts.
