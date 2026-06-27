"use client";

import { useState } from "react";

export default function SavingsCalculator() {
  const [startingAmount, setStartingAmount] = useState("");
  const [monthlyContribution, setMonthlyContribution] = useState("");
  const [annualRate, setAnnualRate] = useState("");
  const [years, setYears] = useState("");
  const [futureValue, setFutureValue] = useState<number | null>(null);
  const [totalContributions, setTotalContributions] = useState<number | null>(
    null
  );
  const [interestEarned, setInterestEarned] = useState<number | null>(null);
  const [error, setError] = useState("");

  const calculateSavings = () => {
    setError("");
    setFutureValue(null);
    setTotalContributions(null);
    setInterestEarned(null);

    const start = Number(startingAmount);
    const monthly = Number(monthlyContribution);
    const rate = Number(annualRate) / 100 / 12;
    const months = Number(years) * 12;

    if (start < 0 || monthly < 0 || Number(annualRate) < 0 || months <= 0) {
      setError("Please enter valid savings details.");
      return;
    }

    let balance = start;

    for (let i = 0; i < months; i++) {
      balance = balance * (1 + rate) + monthly;
    }

    const contributed = start + monthly * months;
    const earned = balance - contributed;

    setFutureValue(Number(balance.toFixed(2)));
    setTotalContributions(Number(contributed.toFixed(2)));
    setInterestEarned(Number(earned.toFixed(2)));
  };

  return (
    <div className="border rounded-2xl p-6 space-y-4">
      <div>
        <label className="block font-medium mb-1">Starting amount</label>
        <input
          type="number"
          value={startingAmount}
          onChange={(e) => setStartingAmount(e.target.value)}
          className="border rounded-lg p-3 w-full"
          placeholder="Example: 1000"
        />
      </div>

      <div>
        <label className="block font-medium mb-1">Monthly contribution</label>
        <input
          type="number"
          value={monthlyContribution}
          onChange={(e) => setMonthlyContribution(e.target.value)}
          className="border rounded-lg p-3 w-full"
          placeholder="Example: 200"
        />
      </div>

      <div>
        <label className="block font-medium mb-1">Annual interest rate (%)</label>
        <input
          type="number"
          value={annualRate}
          onChange={(e) => setAnnualRate(e.target.value)}
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

      <button
        onClick={calculateSavings}
        className="bg-black text-white px-6 py-3 rounded-lg"
      >
        Calculate Savings
      </button>

      {error && <p className="text-red-600 font-medium">{error}</p>}

      {futureValue !== null &&
        totalContributions !== null &&
        interestEarned !== null && (
          <div className="bg-gray-50 border rounded-xl p-6 space-y-2 text-gray-900">
            <h2 className="text-2xl font-bold mb-2">Savings Result</h2>

            <p className="text-xl">
              Future value: <strong>${futureValue.toLocaleString()}</strong>
            </p>

            <p>
              Total contributions:{" "}
              <strong>${totalContributions.toLocaleString()}</strong>
            </p>

            <p>
              Interest earned:{" "}
              <strong>${interestEarned.toLocaleString()}</strong>
            </p>
          </div>
        )}
    </div>
  );
}