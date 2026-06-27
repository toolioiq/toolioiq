"use client";

import { useState } from "react";

const areaUnits = {
  squareMillimeters: {
    label: "Square Millimeters",
    squareMeters: 0.000001,
  },
  squareCentimeters: {
    label: "Square Centimeters",
    squareMeters: 0.0001,
  },
  squareMeters: {
    label: "Square Meters",
    squareMeters: 1,
  },
  squareKilometers: {
    label: "Square Kilometers",
    squareMeters: 1_000_000,
  },
  squareInches: {
    label: "Square Inches",
    squareMeters: 0.00064516,
  },
  squareFeet: {
    label: "Square Feet",
    squareMeters: 0.09290304,
  },
  squareYards: {
    label: "Square Yards",
    squareMeters: 0.83612736,
  },
  acres: {
    label: "Acres",
    squareMeters: 4046.8564224,
  },
  squareMiles: {
    label: "Square Miles",
    squareMeters: 2_589_988.110336,
  },
};

type AreaUnit = keyof typeof areaUnits;

export default function AreaConverter() {
  const [value, setValue] = useState("");
  const [fromUnit, setFromUnit] = useState<AreaUnit>("squareMeters");
  const [toUnit, setToUnit] = useState<AreaUnit>("squareFeet");
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState("");

  const convertArea = () => {
    setError("");
    setResult(null);

    const inputValue = Number(value);

    if (value === "" || isNaN(inputValue)) {
      setError("Please enter a valid area.");
      return;
    }

    const squareMeters = inputValue * areaUnits[fromUnit].squareMeters;
    const converted = squareMeters / areaUnits[toUnit].squareMeters;

    setResult(Number(converted.toFixed(6)));
  };

  return (
    <div className="border rounded-2xl p-6 space-y-4">
      <div>
        <label className="block font-medium mb-1">Area</label>
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
          onChange={(e) => setFromUnit(e.target.value as AreaUnit)}
          className="border rounded-lg p-3 w-full"
        >
          {Object.entries(areaUnits).map(([key, unit]) => (
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
          onChange={(e) => setToUnit(e.target.value as AreaUnit)}
          className="border rounded-lg p-3 w-full"
        >
          {Object.entries(areaUnits).map(([key, unit]) => (
            <option key={key} value={key}>
              {unit.label}
            </option>
          ))}
        </select>
      </div>

      <button
        onClick={convertArea}
        className="bg-black text-white px-6 py-3 rounded-lg"
      >
        Convert Area
      </button>

      {error && <p className="text-red-600 font-medium">{error}</p>}

      {result !== null && (
        <div className="bg-gray-50 border rounded-xl p-6 space-y-2 text-gray-900">
          <h2 className="text-2xl font-bold mb-2">Conversion Result</h2>
          <p className="text-2xl font-bold text-black">
            {value} {areaUnits[fromUnit].label} ={" "}
            <strong>
              {result.toLocaleString()} {areaUnits[toUnit].label}
            </strong>
          </p>
        </div>
      )}
    </div>
  );
}