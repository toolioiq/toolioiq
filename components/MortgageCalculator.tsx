"use client";

import { useState } from "react";

export default function MortgageCalculator() {
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanTerm, setLoanTerm] = useState("30");
  const [monthlyPayment, setMonthlyPayment] = useState<number | null>(null);
  const [totalPayment, setTotalPayment] = useState<number | null>(null);
  const [totalInterest, setTotalInterest] = useState<number | null>(null);
  const [error, setError] = useState("");

  const calculateMortgage = () => {
    setError("");
    setMonthlyPayment(null);
    setTotalPayment(null);
    setTotalInterest(null);

    const principal = Number(loanAmount);
    const annualRate = Number(interestRate);
    const years = Number(loanTerm);

    if (principal <= 0 || annualRate < 0 || years <= 0) {
      setError("Please enter valid mortgage details.");
      return;
    }

    const monthlyRate = annualRate / 100 / 12;
    const numberOfPayments = years * 12;

    let payment: number;

    if (monthlyRate === 0) {
      payment = principal / numberOfPayments;
    } else {
      payment =
        principal *
        (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
        (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    }

    const total = payment * numberOfPayments;
    const interest = total - principal;

    setMonthlyPayment(Number(payment.toFixed(2)));
    setTotalPayment(Number(total.toFixed(2)));
    setTotalInterest(Number(interest.toFixed(2)));
  };

  return (
    <div className="border rounded-2xl p-6 space-y-4">
      <div>
        <label className="block font-medium mb-1">Loan amount</label>
        <input
          type="number"
          value={loanAmount}
          onChange={(e) => setLoanAmount(e.target.value)}
          className="border rounded-lg p-3 w-full"
          placeholder="Example: 300000"
        />
      </div>

      <div>
        <label className="block font-medium mb-1">Annual interest rate (%)</label>
        <input
          type="number"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
          className="border rounded-lg p-3 w-full"
          placeholder="Example: 6.5"
        />
      </div>

      <div>
        <label className="block font-medium mb-1">Loan term</label>
        <select
          value={loanTerm}
          onChange={(e) => setLoanTerm(e.target.value)}
          className="border rounded-lg p-3 w-full"
        >
          <option value="15">15 years</option>
          <option value="20">20 years</option>
          <option value="30">30 years</option>
        </select>
      </div>

      <button
        onClick={calculateMortgage}
        className="bg-black text-white px-6 py-3 rounded-lg"
      >
        Calculate Mortgage
      </button>

      {error && <p className="text-red-600 font-medium">{error}</p>}

      {monthlyPayment !== null &&
        totalPayment !== null &&
        totalInterest !== null && (
          <div className="bg-gray-50 border rounded-xl p-6 space-y-2 text-gray-900">
            <h2 className="text-2xl font-bold mb-2">Mortgage Result</h2>

            <p className="text-xl">
              Monthly payment:{" "}
              <strong>${monthlyPayment.toLocaleString()}</strong>
            </p>

            <p>
              Total payment: <strong>${totalPayment.toLocaleString()}</strong>
            </p>

            <p>
              Total interest:{" "}
              <strong>${totalInterest.toLocaleString()}</strong>
            </p>
          </div>
        )}
    </div>
  );
}