"use client";

import { useState } from "react";

const currencies = [
  { code: "USD", label: "US Dollar" },
  { code: "EUR", label: "Euro" },
  { code: "GBP", label: "British Pound" },
  { code: "CAD", label: "Canadian Dollar" },
  { code: "AUD", label: "Australian Dollar" },
  { code: "JPY", label: "Japanese Yen" },
  { code: "CHF", label: "Swiss Franc" },
  { code: "CNY", label: "Chinese Yuan" },
  { code: "INR", label: "Indian Rupee" },
  { code: "NGN", label: "Nigerian Naira" },
];

export default function CurrencyConverter() {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [result, setResult] = useState<number | null>(null);
  const [rateDate, setRateDate] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const convertCurrency = async () => {
    setError("");
    setResult(null);
    setRateDate("");

    const inputAmount = Number(amount);

    if (amount === "" || isNaN(inputAmount) || inputAmount <= 0) {
      setError("Please enter a valid amount.");
      return;
    }

    if (fromCurrency === toCurrency) {
      setResult(Number(inputAmount.toFixed(2)));
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        `https://api.frankfurter.dev/v2/rates?base=${fromCurrency}&quotes=${toCurrency}`
      );

      if (!response.ok) {
        throw new Error("Unable to fetch exchange rate.");
      }

      const data: {
        date: string;
        base: string;
        quote: string;
        rate: number;
      }[] = await response.json();

      const rate = data[0]?.rate;

      if (!rate) {
        throw new Error("Exchange rate not found.");
      }

      setResult(Number((inputAmount * rate).toFixed(2)));
      setRateDate(data[0].date);
    } catch {
      setError("Unable to convert currency right now. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="border rounded-2xl p-6 space-y-4">
      <div>
        <label className="block font-medium mb-1">Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="border rounded-lg p-3 w-full"
          placeholder="Example: 100"
        />
      </div>

      <div>
        <label className="block font-medium mb-1">From</label>
        <select
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
          className="border rounded-lg p-3 w-full"
        >
          {currencies.map((currency) => (
            <option key={currency.code} value={currency.code}>
              {currency.code} — {currency.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block font-medium mb-1">To</label>
        <select
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
          className="border rounded-lg p-3 w-full"
        >
          {currencies.map((currency) => (
            <option key={currency.code} value={currency.code}>
              {currency.code} — {currency.label}
            </option>
          ))}
        </select>
      </div>

      <button
        onClick={convertCurrency}
        disabled={loading}
        className="bg-black text-white px-6 py-3 rounded-lg disabled:opacity-50"
      >
        {loading ? "Converting..." : "Convert Currency"}
      </button>

      {error && <p className="text-red-600 font-medium">{error}</p>}

      {result !== null && (
        <div className="bg-gray-50 border rounded-xl p-6 space-y-2 text-gray-900">
          <h2 className="text-2xl font-bold mb-2">Conversion Result</h2>

          <p className="text-xl">
            {amount} {fromCurrency} ={" "}
            <strong>
              {result.toLocaleString()} {toCurrency}
            </strong>
          </p>

          {rateDate && (
            <p className="text-sm text-gray-500">
              Exchange rate date: {rateDate}
            </p>
          )}
        </div>
      )}
    </div>
  );
}