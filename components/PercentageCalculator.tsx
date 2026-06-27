"use client";

import { useState } from "react";

export default function PercentageCalculator() {
  const [percent, setPercent] = useState("");
  const [number, setNumber] = useState("");
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState("");

  const calculatePercentage = () => {
    setError("");
    setResult(null);

    const percentValue = Number(percent);
    const numberValue = Number(number);

    if (percent === "" || number === "" || isNaN(percentValue) || isNaN(numberValue)) {
      setError("Please enter valid numbers.");
      return;
    }

    const answer = (percentValue / 100) * numberValue;
    setResult(Number(answer.toFixed(2)));
  };

  return (
    <div className="border rounded-2xl p-6 space-y-4">
      <div>
        <label className="block font-medium mb-1">Percentage</label>
        <input
          type="number"
          value={percent}
          onChange={(e) => setPercent(e.target.value)}
          className="border rounded-lg p-3 w-full"
          placeholder="Example: 20"
        />
      </div>

      <div>
        <label className="block font-medium mb-1">Number</label>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          className="border rounded-lg p-3 w-full"
          placeholder="Example: 150"
        />
      </div>

      <button
        onClick={calculatePercentage}
        className="bg-black text-white px-6 py-3 rounded-lg"
      >
        Calculate
      </button>

      {error && <p className="text-red-600 font-medium">{error}</p>}

      {result !== null && (
        <div className="bg-gray-50 border rounded-xl p-6 space-y-2 text-gray-900">
          <h2 className="text-2xl font-bold mb-2">Result</h2>
          <p className="text-2xl font-bold text-black">
            {percent}% of {number} is <strong>{result}</strong>
          </p>
        </div>
      )}
    </div>
  );
}