"use client";

import { useState } from "react";

const storageUnits = {
  bits: {
    label: "Bits (b)",
    bytes: 0.125,
  },
  bytes: {
    label: "Bytes (B)",
    bytes: 1,
  },
  kilobytes: {
    label: "Kilobytes (KB)",
    bytes: 1000,
  },
  megabytes: {
    label: "Megabytes (MB)",
    bytes: 1000 ** 2,
  },
  gigabytes: {
    label: "Gigabytes (GB)",
    bytes: 1000 ** 3,
  },
  terabytes: {
    label: "Terabytes (TB)",
    bytes: 1000 ** 4,
  },
  kibibytes: {
    label: "Kibibytes (KiB)",
    bytes: 1024,
  },
  mebibytes: {
    label: "Mebibytes (MiB)",
    bytes: 1024 ** 2,
  },
  gibibytes: {
    label: "Gibibytes (GiB)",
    bytes: 1024 ** 3,
  },
  tebibytes: {
    label: "Tebibytes (TiB)",
    bytes: 1024 ** 4,
  },
};

type StorageUnit = keyof typeof storageUnits;

export default function DataStorageConverter() {
  const [value, setValue] = useState("");
  const [fromUnit, setFromUnit] = useState<StorageUnit>("gigabytes");
  const [toUnit, setToUnit] = useState<StorageUnit>("megabytes");
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState("");

  const convertStorage = () => {
    setError("");
    setResult(null);

    const inputValue = Number(value);

    if (value === "" || isNaN(inputValue)) {
      setError("Please enter a valid storage value.");
      return;
    }

    const bytes = inputValue * storageUnits[fromUnit].bytes;
    const converted = bytes / storageUnits[toUnit].bytes;

    setResult(Number(converted.toFixed(6)));
  };

  return (
    <div className="border rounded-2xl p-6 space-y-4">
      <div>
        <label className="block font-medium mb-1">Storage</label>
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
          onChange={(e) => setFromUnit(e.target.value as StorageUnit)}
          className="border rounded-lg p-3 w-full"
        >
          {Object.entries(storageUnits).map(([key, unit]) => (
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
          onChange={(e) => setToUnit(e.target.value as StorageUnit)}
          className="border rounded-lg p-3 w-full"
        >
          {Object.entries(storageUnits).map(([key, unit]) => (
            <option key={key} value={key}>
              {unit.label}
            </option>
          ))}
        </select>
      </div>

      <button
        onClick={convertStorage}
        className="bg-black text-white px-6 py-3 rounded-lg"
      >
        Convert Storage
      </button>

      {error && <p className="text-red-600 font-medium">{error}</p>}

      {result !== null && (
        <div className="bg-gray-50 border rounded-xl p-6 space-y-2 text-gray-900">
          <h2 className="text-2xl font-bold mb-2">Conversion Result</h2>
          <p className="text-2xl font-bold text-black">
            {value} {storageUnits[fromUnit].label} ={" "}
            <strong>
              {result.toLocaleString()} {storageUnits[toUnit].label}
            </strong>
          </p>
        </div>
      )}
    </div>
  );
}