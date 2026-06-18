"use client";

import { useState } from "react";

const speedUnits = {
  metersPerSecond: {
    label: "Meters per Second (m/s)",
    metersPerSecond: 1,
  },
  kilometersPerHour: {
    label: "Kilometers per Hour (km/h)",
    metersPerSecond: 0.2777777778,
  },
  milesPerHour: {
    label: "Miles per Hour (mph)",
    metersPerSecond: 0.44704,
  },
  feetPerSecond: {
    label: "Feet per Second (ft/s)",
    metersPerSecond: 0.3048,
  },
  knots: {
    label: "Knots",
    metersPerSecond: 0.5144444444,
  },
};

type SpeedUnit = keyof typeof speedUnits;

export default function SpeedConverter() {
  const [value, setValue] = useState("");
  const [fromUnit, setFromUnit] = useState<SpeedUnit>("milesPerHour");
  const [toUnit, setToUnit] = useState<SpeedUnit>("kilometersPerHour");
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState("");

  const convertSpeed = () => {
    setError("");
    setResult(null);

    const inputValue = Number(value);

    if (value === "" || isNaN(inputValue)) {
      setError("Please enter a valid speed.");
      return;
    }

    const metersPerSecond =
      inputValue * speedUnits[fromUnit].metersPerSecond;

    const converted =
      metersPerSecond / speedUnits[toUnit].metersPerSecond;

    setResult(Number(converted.toFixed(6)));
  };

  return (
    <div className="border rounded-2xl p-6 space-y-4">
      <div>
        <label className="block font-medium mb-1">Speed</label>
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="border rounded-lg p-3 w-full"
          placeholder="Example: 60"
        />
      </div>

      <div>
        <label className="block font-medium mb-1">From</label>
        <select
          value={fromUnit}
          onChange={(e) => setFromUnit(e.target.value as SpeedUnit)}
          className="border rounded-lg p-3 w-full"
        >
          {Object.entries(speedUnits).map(([key, unit]) => (
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
          onChange={(e) => setToUnit(e.target.value as SpeedUnit)}
          className="border rounded-lg p-3 w-full"
        >
          {Object.entries(speedUnits).map(([key, unit]) => (
            <option key={key} value={key}>
              {unit.label}
            </option>
          ))}
        </select>
      </div>

      <button
        onClick={convertSpeed}
        className="bg-black text-white px-6 py-3 rounded-lg"
      >
        Convert Speed
      </button>

      {error && <p className="text-red-600 font-medium">{error}</p>}

      {result !== null && (
        <div className="bg-gray-50 border rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-2">Conversion Result</h2>
          <p className="text-xl">
            {value} {speedUnits[fromUnit].label} ={" "}
            <strong>
              {result.toLocaleString()} {speedUnits[toUnit].label}
            </strong>
          </p>
        </div>
      )}
    </div>
  );
}