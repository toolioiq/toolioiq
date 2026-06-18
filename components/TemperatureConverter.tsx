"use client";

import { useState } from "react";

export default function TemperatureConverter() {
  const [temperature, setTemperature] = useState("");
  const [fromUnit, setFromUnit] = useState("celsius");
  const [toUnit, setToUnit] = useState("fahrenheit");
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState("");

  const convertTemperature = () => {
    setError("");
    setResult(null);

    const value = Number(temperature);

    if (temperature === "" || isNaN(value)) {
      setError("Please enter a valid temperature.");
      return;
    }

    let celsiusValue = value;

    if (fromUnit === "fahrenheit") {
      celsiusValue = (value - 32) * (5 / 9);
    } else if (fromUnit === "kelvin") {
      celsiusValue = value - 273.15;
    }

    let converted = celsiusValue;

    if (toUnit === "fahrenheit") {
      converted = celsiusValue * (9 / 5) + 32;
    } else if (toUnit === "kelvin") {
      converted = celsiusValue + 273.15;
    }

    setResult(Number(converted.toFixed(2)));
  };

  return (
    <div className="border rounded-2xl p-6 space-y-4">
      <div>
        <label className="block font-medium mb-1">Temperature</label>
        <input
          type="number"
          value={temperature}
          onChange={(e) => setTemperature(e.target.value)}
          className="border rounded-lg p-3 w-full"
          placeholder="Example: 100"
        />
      </div>

      <div>
        <label className="block font-medium mb-1">From</label>
        <select
          value={fromUnit}
          onChange={(e) => setFromUnit(e.target.value)}
          className="border rounded-lg p-3 w-full"
        >
          <option value="celsius">Celsius</option>
          <option value="fahrenheit">Fahrenheit</option>
          <option value="kelvin">Kelvin</option>
        </select>
      </div>

      <div>
        <label className="block font-medium mb-1">To</label>
        <select
          value={toUnit}
          onChange={(e) => setToUnit(e.target.value)}
          className="border rounded-lg p-3 w-full"
        >
          <option value="celsius">Celsius</option>
          <option value="fahrenheit">Fahrenheit</option>
          <option value="kelvin">Kelvin</option>
        </select>
      </div>

      <button
        onClick={convertTemperature}
        className="bg-black text-white px-6 py-3 rounded-lg"
      >
        Convert Temperature
      </button>

      {error && <p className="text-red-600 font-medium">{error}</p>}

      {result !== null && (
        <div className="bg-gray-50 border rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-2">Conversion Result</h2>
          <p className="text-xl">
            Result: <strong>{result.toLocaleString()}</strong>
          </p>
        </div>
      )}
    </div>
  );
}