"use client";

import { useState } from "react";

const lengthUnits = {
  millimeters: {
    label: "Millimeters",
    meters: 0.001,
  },
  centimeters: {
    label: "Centimeters",
    meters: 0.01,
  },
  meters: {
    label: "Meters",
    meters: 1,
  },
  kilometers: {
    label: "Kilometers",
    meters: 1000,
  },
  inches: {
    label: "Inches",
    meters: 0.0254,
  },
  feet: {
    label: "Feet",
    meters: 0.3048,
  },
  yards: {
    label: "Yards",
    meters: 0.9144,
  },
  miles: {
    label: "Miles",
    meters: 1609.344,
  },
};

type LengthUnit = keyof typeof lengthUnits;

export default function LengthConverter() {
  const [value, setValue] = useState("");
  const [fromUnit, setFromUnit] = useState<LengthUnit>("meters");
  const [toUnit, setToUnit] = useState<LengthUnit>("feet");
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState("");

  const convertLength = () => {
    setError("");
    setResult(null);

    const inputValue = Number(value);

    if (value === "" || isNaN(inputValue)) {
      setError("Please enter a valid length.");
      return;
    }

    const meters = inputValue * lengthUnits[fromUnit].meters;
    const converted = meters / lengthUnits[toUnit].meters;

    setResult(Number(converted.toFixed(6)));
  };

  return (
    <div className="border rounded-2xl p-6 space-y-4">
      <div>
        <label className="block font-medium mb-1">Length</label>
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="border rounded-lg p-3 w-full"
          placeholder="Example: 100"
        />
      </div>

      <div>
        <label className="block font-medium mb-1">From</label>
        <select
          value={fromUnit}
          onChange={(e) => setFromUnit(e.target.value as LengthUnit)}
          className="border rounded-lg p-3 w-full"
        >
          {Object.entries(lengthUnits).map(([key, unit]) => (
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
          onChange={(e) => setToUnit(e.target.value as LengthUnit)}
          className="border rounded-lg p-3 w-full"
        >
          {Object.entries(lengthUnits).map(([key, unit]) => (
            <option key={key} value={key}>
              {unit.label}
            </option>
          ))}
        </select>
      </div>

      <button
        onClick={convertLength}
        className="bg-black text-white px-6 py-3 rounded-lg"
      >
        Convert Length
      </button>

      {error && <p className="text-red-600 font-medium">{error}</p>}

      {result !== null && (
        <div className="bg-gray-50 border rounded-xl p-6 space-y-2 text-gray-900">
          <h2 className="text-2xl font-bold mb-2">Conversion Result</h2>
          <p className="text-xl">
            {value} {lengthUnits[fromUnit].label} ={" "}
            <strong>
              {result.toLocaleString()} {lengthUnits[toUnit].label}
            </strong>
          </p>
        </div>
      )}
    </div>
  );
}