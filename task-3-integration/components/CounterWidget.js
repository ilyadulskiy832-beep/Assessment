"use client";

/**
 * Task 3: Frontend — connect wallet, read count, increment, optional API.
 * Use ethers v6 with window.ethereum. Set NEXT_PUBLIC_ vars in .env.local.
 */
import { useState, useCallback, useRef } from "react";
import { ethers } from "ethers";

const COUNTER_ABI = [
  "function getCount() view returns (uint256)",
  "function increment()",
];

const CONFIG = {
  COUNTER_CONTRACT_ADDRESS: process.env.NEXT_PUBLIC_COUNTER_CONTRACT_ADDRESS || "",
  API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000",
};

export default function CounterWidget() {
  const [account, setAccount] = useState("");
  const [count, setCount] = useState(null);
  const [apiCount, setApiCount] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const contractRef = useRef(null);

  const refreshCount = useCallback(async () => {
    if (!contractRef.current) return;
    try {
      const value = await contractRef.current.getCount();
      setCount(value.toString());
    } catch (e) {
      setError(e.message || "Failed to read count");
    }
  }, []);

  const connectWallet = async () => {
    setError("");
    if (typeof window === "undefined" || !window.ethereum) {
      setError("No wallet found. Install MetaMask or another Web3 wallet.");
      return;
    }
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const accounts = await provider.send("eth_requestAccounts", []);
      const signer = await provider.getSigner();
      if (!CONFIG.COUNTER_CONTRACT_ADDRESS) {
        setError("Set NEXT_PUBLIC_COUNTER_CONTRACT_ADDRESS in .env.local");
        return;
      }
      
      const network = await provider.getNetwork();

      if (network.chainId !== 31337n) {
        alert("Switch MetaMask to Hardhat Local network");
      }
      const contract = new ethers.Contract(
        CONFIG.COUNTER_CONTRACT_ADDRESS,
        COUNTER_ABI,
        signer
      );
      contractRef.current = contract;
      setAccount(accounts[0] || "");
      await refreshCount();
    } catch (e) {
      setError(e.message || "Failed to connect");
    }
  };

  const increment = async () => {
    if (!contractRef.current) return;
    setLoading(true);
    setError("");
    try {
      const tx = await contractRef.current.increment();
      await tx.wait();
      await refreshCount();
    } catch (e) {
      setError(e.message || "Transaction failed");
    } finally {
      setLoading(false);
    }
  };

  const refreshApi = async () => {
    try {
      const res = await fetch(`${CONFIG.API_BASE_URL}/counter/count`);
      const data = await res.json();
      setApiCount(data.count != null ? data.count : "—");
    } catch (e) {
      setApiCount("Error");
    }
  };

  return (
    <>
      <div className="card">
        <button type="button" onClick={connectWallet}>
          Connect wallet
        </button>
        {account && <p className="account">{account}</p>}
      </div>

      <div className="card">
        <p>Count from contract: <strong>{count ?? "—"}</strong></p>
        <button
          type="button"
          onClick={increment}
          disabled={!account || loading}
        >
          {loading ? "Confirming…" : "Increment"}
        </button>
      </div>

      <div className="card">
        <p>Count from API: <strong>{apiCount ?? "—"}</strong></p>
        <button type="button" onClick={refreshApi}>Refresh from API</button>
      </div>

      {error && <p style={{ color: "#e94560" }}>{error}</p>}
    </>
  );
}
