"use client";

import { useState } from "react";

const timeUnits = {
  milliseconds: {
    label: "Milliseconds",
    seconds: 0.001,
  },
  seconds: {
    label: "Seconds",
    seconds: 1,
  },
  minutes: {
    label: "Minutes",
    seconds: 60,
  },
  hours: {
    label: "Hours",
    seconds: 3600,
  },
  days: {
    label: "Days",
    seconds: 86400,
  },
  weeks: {
    label: "Weeks",
    seconds: 604800,
  },
  months: {
    label: "Months",
    seconds: 2629800,
  },
  years: {
    label: "Years",
    seconds: 31557600,
  },
};

type TimeUnit = keyof typeof timeUnits;

export default function TimeConverter() {
  const [value, setValue] = useState("");
  const [fromUnit, setFromUnit] = useState<TimeUnit>("hours");
  const [toUnit, setToUnit] = useState<TimeUnit>("minutes");
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState("");

  const convertTime = () => {
    setError("");
    setResult(null);

    const inputValue = Number(value);

    if (value === "" || isNaN(inputValue)) {
      setError("Please enter a valid time value.");
      return;
    }

    const seconds = inputValue * timeUnits[fromUnit].seconds;
    const converted = seconds / timeUnits[toUnit].seconds;

    setResult(Number(converted.toFixed(6)));
  };

  return (
    <div className="border rounded-2xl p-6 space-y-4">
      <div>
        <label className="block font-medium mb-1">Time</label>
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="border rounded-lg p-3 w-full"
          placeholder="Example: 24"
        />
      </div>

      <div>
        <label className="block font-medium mb-1">From</label>
        <select
          value={fromUnit}
          onChange={(e) => setFromUnit(e.target.value as TimeUnit)}
          className="border rounded-lg p-3 w-full"
        >
          {Object.entries(timeUnits).map(([key, unit]) => (
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
          onChange={(e) => setToUnit(e.target.value as TimeUnit)}
          className="border rounded-lg p-3 w-full"
        >
          {Object.entries(timeUnits).map(([key, unit]) => (
            <option key={key} value={key}>
              {unit.label}
            </option>
          ))}
        </select>
      </div>

      <button
        onClick={convertTime}
        className="bg-black text-white px-6 py-3 rounded-lg"
      >
        Convert Time
      </button>

      {error && <p className="text-red-600 font-medium">{error}</p>}

      {result !== null && (
        <div className="bg-gray-50 border rounded-xl p-6 space-y-2 text-gray-900">
          <h2 className="text-2xl font-bold mb-2">Conversion Result</h2>
          <p className="text-xl">
            {value} {timeUnits[fromUnit].label} ={" "}
            <strong>
              {result.toLocaleString()} {timeUnits[toUnit].label}
            </strong>
          </p>
        </div>
      )}
    </div>
  );
}