"use client";

import { useState } from "react";

const unitGroups = {
  length: {
    label: "Length",
    units: {
      millimeters: { label: "Millimeters", base: 0.001 },
      centimeters: { label: "Centimeters", base: 0.01 },
      meters: { label: "Meters", base: 1 },
      kilometers: { label: "Kilometers", base: 1000 },
      inches: { label: "Inches", base: 0.0254 },
      feet: { label: "Feet", base: 0.3048 },
      yards: { label: "Yards", base: 0.9144 },
      miles: { label: "Miles", base: 1609.344 },
    },
  },

  weight: {
    label: "Weight",
    units: {
      milligrams: { label: "Milligrams", base: 0.000001 },
      grams: { label: "Grams", base: 0.001 },
      kilograms: { label: "Kilograms", base: 1 },
      metricTons: { label: "Metric Tons", base: 1000 },
      ounces: { label: "Ounces", base: 0.028349523125 },
      pounds: { label: "Pounds", base: 0.45359237 },
      stone: { label: "Stone", base: 6.35029318 },
      usTons: { label: "US Tons", base: 907.18474 },
    },
  },

  temperature: {
    label: "Temperature",
    units: {
      celsius: { label: "Celsius" },
      fahrenheit: { label: "Fahrenheit" },
      kelvin: { label: "Kelvin" },
    },
  },
};

type Category = keyof typeof unitGroups;

export default function UnitConverter() {
  const [category, setCategory] = useState<Category>("length");
  const [value, setValue] = useState("");
  const [fromUnit, setFromUnit] = useState("meters");
  const [toUnit, setToUnit] = useState("feet");
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState("");

  const currentUnits = unitGroups[category].units;

  const resetUnits = (newCategory: Category) => {
    const unitKeys = Object.keys(unitGroups[newCategory].units);
    setCategory(newCategory);
    setFromUnit(unitKeys[0]);
    setToUnit(unitKeys[1] || unitKeys[0]);
    setResult(null);
    setError("");
  };

  const convertTemperature = (
    inputValue: number,
    from: string,
    to: string
  ) => {
    let celsiusValue = inputValue;

    if (from === "fahrenheit") {
      celsiusValue = (inputValue - 32) * (5 / 9);
    } else if (from === "kelvin") {
      celsiusValue = inputValue - 273.15;
    }

    if (to === "fahrenheit") {
      return celsiusValue * (9 / 5) + 32;
    }

    if (to === "kelvin") {
      return celsiusValue + 273.15;
    }

    return celsiusValue;
  };

  const convertUnit = () => {
    setError("");
    setResult(null);

    const inputValue = Number(value);

    if (value === "" || isNaN(inputValue)) {
      setError("Please enter a valid value.");
      return;
    }

    if (category === "temperature") {
      const converted = convertTemperature(inputValue, fromUnit, toUnit);
      setResult(Number(converted.toFixed(6)));
      return;
    }

    const from = currentUnits[fromUnit as keyof typeof currentUnits];
    const to = currentUnits[toUnit as keyof typeof currentUnits];

    if (!("base" in from) || !("base" in to)) {
      setError("Invalid unit selection.");
      return;
    }

    const baseValue = inputValue * from.base;
    const converted = baseValue / to.base;

    setResult(Number(converted.toFixed(6)));
  };

  return (
    <div className="border rounded-2xl p-6 space-y-4">
      <div>
        <label className="block font-medium mb-1">Category</label>
        <select
          value={category}
          onChange={(e) => resetUnits(e.target.value as Category)}
          className="border rounded-lg p-3 w-full"
        >
          {Object.entries(unitGroups).map(([key, group]) => (
            <option key={key} value={key}>
              {group.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block font-medium mb-1">Value</label>
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
          onChange={(e) => setFromUnit(e.target.value)}
          className="border rounded-lg p-3 w-full"
        >
          {Object.entries(currentUnits).map(([key, unit]) => (
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
          onChange={(e) => setToUnit(e.target.value)}
          className="border rounded-lg p-3 w-full"
        >
          {Object.entries(currentUnits).map(([key, unit]) => (
            <option key={key} value={key}>
              {unit.label}
            </option>
          ))}
        </select>
      </div>

      <button
        onClick={convertUnit}
        className="bg-black text-white px-6 py-3 rounded-lg"
      >
        Convert Unit
      </button>

      {error && <p className="text-red-600 font-medium">{error}</p>}

      {result !== null && (
        <div className="bg-gray-50 border rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-2">Conversion Result</h2>

          <p className="text-xl">
            {value}{" "}
            {currentUnits[fromUnit as keyof typeof currentUnits].label} ={" "}
            <strong>
              {result.toLocaleString()}{" "}
              {currentUnits[toUnit as keyof typeof currentUnits].label}
            </strong>
          </p>
        </div>
      )}
    </div>
  );
}