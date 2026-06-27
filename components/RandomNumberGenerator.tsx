"use client";

import { useState } from "react";

export default function RandomNumberGenerator() {
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState("");

  const generateNumber = () => {
    setError("");
    setResult(null);

    const minimum = Number(min);
    const maximum = Number(max);

    if (
      isNaN(minimum) ||
      isNaN(maximum) ||
      min === "" ||
      max === ""
    ) {
      setError("Please enter valid numbers.");
      return;
    }

    if (minimum >= maximum) {
      setError("Maximum number must be greater than minimum number.");
      return;
    }

    const random =
      Math.floor(Math.random() * (maximum - minimum + 1)) +
      minimum;

    setResult(random);
  };

  return (
    <div className="border rounded-2xl p-6 space-y-4">
      <div>
        <label className="block font-medium mb-1">
          Minimum Number
        </label>

        <input
          type="number"
          value={min}
          onChange={(e) => setMin(e.target.value)}
          className="border rounded-lg p-3 w-full"
          placeholder="Example: 1"
        />
      </div>

      <div>
        <label className="block font-medium mb-1">
          Maximum Number
        </label>

        <input
          type="number"
          value={max}
          onChange={(e) => setMax(e.target.value)}
          className="border rounded-lg p-3 w-full"
          placeholder="Example: 1000"
        />
      </div>

      <button
        onClick={generateNumber}
        className="bg-black text-white px-6 py-3 rounded-lg"
      >
        Generate Number
      </button>

      {error && (
        <p className="text-red-600 font-medium">
          {error}
        </p>
      )}

      {result !== null && (
        <div className="bg-gray-50 border rounded-xl p-6 space-y-2 text-gray-900">
          <h2 className="text-2xl font-bold mb-2">
            Random Number
          </h2>

          <p className="text-2xl font-bold text-black">
            {result}
          </p>
        </div>
      )}
    </div>
  );
}