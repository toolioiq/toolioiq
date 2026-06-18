"use client";

import { useState } from "react";

const weightUnits = {
  milligrams: {
    label: "Milligrams (mg)",
    kilograms: 0.000001,
  },
  grams: {
    label: "Grams (g)",
    kilograms: 0.001,
  },
  kilograms: {
    label: "Kilograms (kg)",
    kilograms: 1,
  },
  metricTons: {
    label: "Metric Tons (t)",
    kilograms: 1000,
  },
  ounces: {
    label: "Ounces (oz)",
    kilograms: 0.028349523125,
  },
  pounds: {
    label: "Pounds (lb)",
    kilograms: 0.45359237,
  },
  stone: {
    label: "Stone (st)",
    kilograms: 6.35029318,
  },
  usTons: {
    label: "US Tons",
    kilograms: 907.18474,
  },
};

type WeightUnit = keyof typeof weightUnits;

export default function WeightConverter() {
  const [value, setValue] = useState("");
  const [fromUnit, setFromUnit] =
    useState<WeightUnit>("kilograms");
  const [toUnit, setToUnit] =
    useState<WeightUnit>("pounds");
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState("");

  const convertWeight = () => {
    setError("");
    setResult(null);

    const inputValue = Number(value);

    if (value === "" || isNaN(inputValue)) {
      setError("Please enter a valid weight.");
      return;
    }

    const kilograms =
      inputValue * weightUnits[fromUnit].kilograms;

    const converted =
      kilograms / weightUnits[toUnit].kilograms;

    setResult(Number(converted.toFixed(6)));
  };

  return (
    <div className="border rounded-2xl p-6 space-y-4">
      <div>
        <label className="block font-medium mb-1">
          Weight
        </label>

        <input
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="border rounded-lg p-3 w-full"
          placeholder="Example: 100"
        />
      </div>

      <div>
        <label className="block font-medium mb-1">
          From
        </label>

        <select
          value={fromUnit}
          onChange={(e) =>
            setFromUnit(e.target.value as WeightUnit)
          }
          className="border rounded-lg p-3 w-full"
        >
          {Object.entries(weightUnits).map(
            ([key, unit]) => (
              <option key={key} value={key}>
                {unit.label}
              </option>
            )
          )}
        </select>
      </div>

      <div>
        <label className="block font-medium mb-1">
          To
        </label>

        <select
          value={toUnit}
          onChange={(e) =>
            setToUnit(e.target.value as WeightUnit)
          }
          className="border rounded-lg p-3 w-full"
        >
          {Object.entries(weightUnits).map(
            ([key, unit]) => (
              <option key={key} value={key}>
                {unit.label}
              </option>
            )
          )}
        </select>
      </div>

      <button
        onClick={convertWeight}
        className="bg-black text-white px-6 py-3 rounded-lg"
      >
        Convert Weight
      </button>

      {error && (
        <p className="text-red-600 font-medium">
          {error}
        </p>
      )}

      {result !== null && (
        <div className="bg-gray-50 border rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-2">
            Conversion Result
          </h2>

          <p className="text-xl">
            {value} {weightUnits[fromUnit].label} ={" "}
            <strong>
              {result.toLocaleString()}{" "}
              {weightUnits[toUnit].label}
            </strong>
          </p>
        </div>
      )}
    </div>
  );
}