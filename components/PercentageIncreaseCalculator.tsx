"use client";

import { useState } from "react";

export default function PercentageIncreaseCalculator() {
  const [originalValue, setOriginalValue] = useState("");
  const [increasePercent, setIncreasePercent] = useState("");
  const [newValue, setNewValue] = useState<number | null>(null);
  const [increaseAmount, setIncreaseAmount] = useState<number | null>(null);
  const [error, setError] = useState("");

  const calculateIncrease = () => {
    setError("");
    setNewValue(null);
    setIncreaseAmount(null);

    const original = Number(originalValue);
    const increase = Number(increasePercent);

    if (original < 0 || increase < 0 || originalValue === "" || increasePercent === "") {
      setError("Please enter a valid original value and increase percentage.");
      return;
    }

    const amount = original * (increase / 100);
    const final = original + amount;

    setIncreaseAmount(Number(amount.toFixed(2)));
    setNewValue(Number(final.toFixed(2)));
  };

  return (
    <div className="border rounded-2xl p-6 space-y-4">
      <div>
        <label className="block font-medium mb-1">Original Value</label>
        <input
          type="number"
          value={originalValue}
          onChange={(e) => setOriginalValue(e.target.value)}
          className="border rounded-lg p-3 w-full"
          placeholder="Example: 100"
        />
      </div>

      <div>
        <label className="block font-medium mb-1">Increase Percentage</label>
        <input
          type="number"
          value={increasePercent}
          onChange={(e) => setIncreasePercent(e.target.value)}
          className="border rounded-lg p-3 w-full"
          placeholder="Example: 20"
        />
      </div>

      <button
        onClick={calculateIncrease}
        className="bg-black text-white px-6 py-3 rounded-lg"
      >
        Calculate Increase
      </button>

      {error && <p className="text-red-600 font-medium">{error}</p>}

      {newValue !== null && increaseAmount !== null && (
        <div className="bg-gray-50 border rounded-xl p-6 space-y-2">
          <h2 className="text-2xl font-bold mb-2">Increase Result</h2>

          <p className="text-xl">
            New value: <strong>{newValue.toLocaleString()}</strong>
          </p>

          <p>
            Increase amount: <strong>{increaseAmount.toLocaleString()}</strong>
          </p>
        </div>
      )}
    </div>
  );
}