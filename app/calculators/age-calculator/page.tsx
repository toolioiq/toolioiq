"use client";

import { useState } from "react";

type AgeResult = {
  years: number;
  months: number;
  days: number;
};

export default function AgeCalculatorPage() {
  const [birthDate, setBirthDate] = useState("");
  const [result, setResult] = useState<AgeResult | null>(null);
  const [error, setError] = useState("");

  const calculateAge = () => {
    setError("");
    setResult(null);

    if (!birthDate) {
      setError("Please select your birth date.");
      return;
    }

    const birth = new Date(birthDate);
    const today = new Date();

    if (birth > today) {
      setError("Birth date cannot be in the future.");
      return;
    }

    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();

    if (days < 0) {
      months--;
      const previousMonth = new Date(
        today.getFullYear(),
        today.getMonth(),
        0
      );
      days += previousMonth.getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    setResult({ years, months, days });
  };

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-4">Age Calculator</h1>

      <p className="text-gray-600 mb-8">
        Calculate your exact age in years, months, and days.
      </p>

      <div className="border rounded-2xl p-6 space-y-4">
        <label className="block font-medium">
          Enter your birth date
        </label>

        <input
          type="date"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
          className="border rounded-lg p-3 w-full"
        />

        <button
          onClick={calculateAge}
          className="bg-black text-white px-6 py-3 rounded-lg"
        >
          Calculate Age
        </button>

        {error && (
          <p className="text-red-600 font-medium">{error}</p>
        )}

        {result && (
          <div className="bg-gray-50 border rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-2">
              Your Age
            </h2>

            <p className="text-xl">
              {result.years} years, {result.months} months,
              and {result.days} days
            </p>
          </div>
        )}
      </div>
    </main>
  );
}