"use client";

import { useState } from "react";

export default function CompoundInterestCalculator() {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [years, setYears] = useState("");
  const [timesCompounded, setTimesCompounded] = useState("12");
  const [result, setResult] = useState<number | null>(null);
  const [interestEarned, setInterestEarned] = useState<number | null>(null);
  const [error, setError] = useState("");

  const calculateCompoundInterest = () => {
    setError("");
    setResult(null);
    setInterestEarned(null);

    const p = Number(principal);
    const r = Number(rate) / 100;
    const t = Number(years);
    const n = Number(timesCompounded);

    if (p <= 0 || r < 0 || t <= 0 || n <= 0) {
      setError("Please enter valid values.");
      return;
    }

    const amount = p * Math.pow(1 + r / n, n * t);
    const roundedAmount = Number(amount.toFixed(2));
    const roundedInterest = Number((amount - p).toFixed(2));

    setResult(roundedAmount);
    setInterestEarned(roundedInterest);
  };

  return (
    <div className="border rounded-2xl p-6 space-y-4">
      <div>
        <label className="block font-medium mb-1">Initial amount</label>
        <input
          type="number"
          value={principal}
          onChange={(e) => setPrincipal(e.target.value)}
          className="border rounded-lg p-3 w-full"
          placeholder="Example: 1000"
        />
      </div>

      <div>
        <label className="block font-medium mb-1">Annual interest rate (%)</label>
        <input
          type="number"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
          className="border rounded-lg p-3 w-full"
          placeholder="Example: 5"
        />
      </div>

      <div>
        <label className="block font-medium mb-1">Years</label>
        <input
          type="number"
          value={years}
          onChange={(e) => setYears(e.target.value)}
          className="border rounded-lg p-3 w-full"
          placeholder="Example: 10"
        />
      </div>

      <div>
        <label className="block font-medium mb-1">Compounding frequency</label>
        <select
          value={timesCompounded}
          onChange={(e) => setTimesCompounded(e.target.value)}
          className="border rounded-lg p-3 w-full"
        >
          <option value="1">Annually</option>
          <option value="2">Semiannually</option>
          <option value="4">Quarterly</option>
          <option value="12">Monthly</option>
          <option value="365">Daily</option>
        </select>
      </div>

      <button
        onClick={calculateCompoundInterest}
        className="bg-black text-white px-6 py-3 rounded-lg"
      >
        Calculate
      </button>

      {error && <p className="text-red-600 font-medium">{error}</p>}

      {result !== null && interestEarned !== null && (
        <div className="bg-gray-50 border rounded-xl p-6 space-y-2 text-gray-900">
          <h2 className="text-2xl font-bold mb-2">Result</h2>
          <p className="text-xl">
            Final amount: <strong>${result.toLocaleString()}</strong>
          </p>
          <p className="text-xl">
            Interest earned: <strong>${interestEarned.toLocaleString()}</strong>
          </p>
        </div>
      )}
    </div>
  );
}