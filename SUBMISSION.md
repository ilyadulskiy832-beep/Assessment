# Submission — Blockchain Full-Stack Developer Assessment

**Candidate:** [Your name]  
**Email:** [Your email]  
**Total time spent:** [e.g. 2h 30m]

---

## How to run

### Task 1: Smart contract
```bash
cd task-1-smart-contract
npm install
npm run compile
npm test
npm run deploy   # optional: for local node
```

### Task 2: Backend API
```bash
cd task-2-backend-api
npm install
# Set RPC_URL and COUNTER_CONTRACT_ADDRESS (e.g. in .env)
npm start
```

### Task 3: Frontend (Next.js)
```bash
cd task-3-integration
npm install
# Copy .env.local.example to .env.local and set NEXT_PUBLIC_COUNTER_CONTRACT_ADDRESS (and optional NEXT_PUBLIC_API_BASE_URL)
npm run dev
# Open http://localhost:3000 (or 3001 if API uses 3000) and connect wallet
```

**Full flow (local):** Start Hardhat node → deploy Counter (Task 1) → start API (Task 2) → start frontend (Task 3) → connect wallet and use the dApp.

---

## Assumptions / notes

[Describe any assumptions, shortcuts, or environment details.]
