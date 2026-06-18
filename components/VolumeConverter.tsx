"use client";

import { useState } from "react";

const volumeUnits = {
  milliliters: {
    label: "Milliliters (mL)",
    liters: 0.001,
  },
  liters: {
    label: "Liters (L)",
    liters: 1,
  },
  cubicMeters: {
    label: "Cubic Meters (m³)",
    liters: 1000,
  },
  teaspoons: {
    label: "Teaspoons (tsp)",
    liters: 0.00492892159375,
  },
  tablespoons: {
    label: "Tablespoons (tbsp)",
    liters: 0.01478676478125,
  },
  fluidOunces: {
    label: "Fluid Ounces (fl oz)",
    liters: 0.0295735295625,
  },
  cups: {
    label: "Cups",
    liters: 0.2365882365,
  },
  pints: {
    label: "Pints",
    liters: 0.473176473,
  },
  quarts: {
    label: "Quarts",
    liters: 0.946352946,
  },
  gallons: {
    label: "Gallons",
    liters: 3.785411784,
  },
};

type VolumeUnit = keyof typeof volumeUnits;

export default function VolumeConverter() {
  const [value, setValue] = useState("");
  const [fromUnit, setFromUnit] = useState<VolumeUnit>("liters");
  const [toUnit, setToUnit] = useState<VolumeUnit>("gallons");
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState("");

  const convertVolume = () => {
    setError("");
    setResult(null);

    const inputValue = Number(value);

    if (value === "" || isNaN(inputValue)) {
      setError("Please enter a valid volume.");
      return;
    }

    const liters = inputValue * volumeUnits[fromUnit].liters;
    const converted = liters / volumeUnits[toUnit].liters;

    setResult(Number(converted.toFixed(6)));
  };

  return (
    <div className="border rounded-2xl p-6 space-y-4">
      <div>
        <label className="block font-medium mb-1">Volume</label>
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="border rounded-lg p-3 w-full"
          placeholder="Example: 10"
        />
      </div>

      <div>
        <label className="block font-medium mb-1">From</label>
        <select
          value={fromUnit}
          onChange={(e) => setFromUnit(e.target.value as VolumeUnit)}
          className="border rounded-lg p-3 w-full"
        >
          {Object.entries(volumeUnits).map(([key, unit]) => (
            <option key={key} value={key}>
              {unit.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block font-medium mb-1">To</label>
        <select
          value={toUnit}
          onChange={(e) => setToUnit(e.target.value as VolumeUnit)}
          className="border rounded-lg p-3 w-full"
        >
          {Object.entries(volumeUnits).map(([key, unit]) => (
            <option key={key} value={key}>
              {unit.label}
            </option>
          ))}
        </select>
      </div>

      <button
        onClick={convertVolume}
        className="bg-black text-white px-6 py-3 rounded-lg"
      >
        Convert Volume
      </button>

      {error && <p className="text-red-600 font-medium">{error}</p>}

      {result !== null && (
        <div className="bg-gray-50 border rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-2">Conversion Result</h2>
          <p className="text-xl">
            {value} {volumeUnits[fromUnit].label} ={" "}
            <strong>
              {result.toLocaleString()} {volumeUnits[toUnit].label}
            </strong>
          </p>
        </div>
      )}
    </div>
  );
}