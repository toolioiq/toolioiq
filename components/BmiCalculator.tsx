"use client";

import { useState } from "react";

export default function BmiCalculator() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState<number | null>(null);
  const [category, setCategory] = useState("");
  const [error, setError] = useState("");

  const calculateBmi = () => {
    setError("");
    setBmi(null);
    setCategory("");

    const heightInInches = Number(height);
    const weightInPounds = Number(weight);

    if (!height || !weight || heightInInches <= 0 || weightInPounds <= 0) {
      setError("Please enter a valid height and weight.");
      return;
    }

    const result = (weightInPounds / (heightInInches * heightInInches)) * 703;
    const rounded = Number(result.toFixed(1));

    setBmi(rounded);

    if (rounded < 18.5) setCategory("Underweight");
    else if (rounded < 25) setCategory("Normal weight");
    else if (rounded < 30) setCategory("Overweight");
    else setCategory("Obese");
  };

  return (
    <div className="border rounded-2xl p-6 space-y-4">
      <div>
        <label className="block font-medium mb-1">Height in inches</label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          className="border rounded-lg p-3 w-full"
          placeholder="Example: 70"
        />
      </div>

      <div>
        <label className="block font-medium mb-1">Weight in pounds</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="border rounded-lg p-3 w-full"
          placeholder="Example: 180"
        />
      </div>

      <button
        onClick={calculateBmi}
        className="bg-black text-white px-6 py-3 rounded-lg"
      >
        Calculate BMI
      </button>

      {error && <p className="text-red-600 font-medium">{error}</p>}

      {bmi !== null && (
        <div className="bg-gray-50 border rounded-xl p-6 space-y-2 text-gray-900">
          <h2 className="text-2xl font-bold mb-2">Your BMI</h2>
          <p className="text-xl">
            {bmi} — <strong>{category}</strong>
          </p>
        </div>
      )}
    </div>
  );
}