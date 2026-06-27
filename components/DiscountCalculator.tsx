"use client";

import { useState } from "react";

export default function DiscountCalculator() {
  const [originalPrice, setOriginalPrice] = useState("");
  const [discountPercent, setDiscountPercent] = useState("");
  const [finalPrice, setFinalPrice] = useState<number | null>(null);
  const [amountSaved, setAmountSaved] = useState<number | null>(null);
  const [error, setError] = useState("");

  const calculateDiscount = () => {
    setError("");
    setFinalPrice(null);
    setAmountSaved(null);

    const price = Number(originalPrice);
    const discount = Number(discountPercent);

    if (price <= 0 || discount < 0 || discount > 100) {
      setError("Please enter a valid price and discount percentage.");
      return;
    }

    const saved = price * (discount / 100);
    const final = price - saved;

    setAmountSaved(Number(saved.toFixed(2)));
    setFinalPrice(Number(final.toFixed(2)));
  };

  return (
    <div className="border rounded-2xl p-6 space-y-4">
      <div>
        <label className="block font-medium mb-1">Original Price</label>
        <input
          type="number"
          value={originalPrice}
          onChange={(e) => setOriginalPrice(e.target.value)}
          className="border rounded-lg p-3 w-full"
          placeholder="Example: 100"
        />
      </div>

      <div>
        <label className="block font-medium mb-1">Discount Percentage</label>
        <input
          type="number"
          value={discountPercent}
          onChange={(e) => setDiscountPercent(e.target.value)}
          className="border rounded-lg p-3 w-full"
          placeholder="Example: 20"
        />
      </div>

      <button
        onClick={calculateDiscount}
        className="bg-black text-white px-6 py-3 rounded-lg"
      >
        Calculate Discount
      </button>

      {error && <p className="text-red-600 font-medium">{error}</p>}

      {finalPrice !== null && amountSaved !== null && (
        <div className="bg-gray-50 border rounded-xl p-6 space-y-2 text-gray-900">
          <h2 className="text-2xl font-bold mb-2">Discount Result</h2>

          <p className="text-2xl font-bold text-black">
            Final price: <strong>${finalPrice.toLocaleString()}</strong>
          </p>

          <p>
            You save: <strong>${amountSaved.toLocaleString()}</strong>
          </p>
        </div>
      )}
    </div>
  );
}