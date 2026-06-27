"use client";

import { useState } from "react";

export default function PercentageDecreaseCalculator() {
  const [originalValue, setOriginalValue] = useState("");
  const [decreasePercent, setDecreasePercent] = useState("");
  const [newValue, setNewValue] = useState<number | null>(null);
  const [decreaseAmount, setDecreaseAmount] = useState<number | null>(null);
  const [error, setError] = useState("");

  const calculateDecrease = () => {
    setError("");
    setNewValue(null);
    setDecreaseAmount(null);

    const original = Number(originalValue);
    const decrease = Number(decreasePercent);

    if (
      original < 0 ||
      decrease < 0 ||
      decrease > 100 ||
      originalValue === "" ||
      decreasePercent === ""
    ) {
      setError("Please enter a valid original value and decrease percentage.");
      return;
    }

    const amount = original * (decrease / 100);
    const final = original - amount;

    setDecreaseAmount(Number(amount.toFixed(2)));
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
        <label className="block font-medium mb-1">Decrease Percentage</label>
        <input
          type="number"
          value={decreasePercent}
          onChange={(e) => setDecreasePercent(e.target.value)}
          className="border rounded-lg p-3 w-full"
          placeholder="Example: 20"
        />
      </div>

      <button
        onClick={calculateDecrease}
        className="bg-black text-white px-6 py-3 rounded-lg"
      >
        Calculate Decrease
      </button>

      {error && <p className="text-red-600 font-medium">{error}</p>}

      {newValue !== null && decreaseAmount !== null && (
        <div className="bg-gray-50 border rounded-xl p-6 space-y-2 text-gray-900">
          <h2 className="text-2xl font-bold mb-2">Decrease Result</h2>

          <p className="text-2xl font-bold text-black">
            New value: <strong>{newValue.toLocaleString()}</strong>
          </p>

          <p>
            Decrease amount:{" "}
            <strong>{decreaseAmount.toLocaleString()}</strong>
          </p>
        </div>
      )}
    </div>
  );
}