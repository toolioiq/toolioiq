import type { Metadata } from "next";
import CompoundInterestCalculator from "@/components/CompoundInterestCalculator";

export const metadata: Metadata = {
  title: "Compound Interest Calculator | ToolioIQ",
  description:
    "Calculate compound interest and future value with ToolioIQ's free compound interest calculator.",
};

export default function CompoundInterestCalculatorPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-4">
        Compound Interest Calculator
      </h1>

      <p className="text-gray-600 mb-8">
        Use this free compound interest calculator to estimate how your money
        can grow over time with interest that compounds.
      </p>

      <CompoundInterestCalculator />

      <section className="mt-12 space-y-6">
        <div>
          <h2 className="text-2xl font-bold mb-2">
            How to use this compound interest calculator
          </h2>
          <p>
            Enter your starting amount, annual interest rate, number of years,
            and compounding frequency. The calculator will estimate your final
            balance and total interest earned.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-2">
            What is compound interest?
          </h2>
          <p>
            Compound interest is interest earned on both your original money and
            the interest that has already been added. Over time, this can help
            savings and investments grow faster.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-2">
            Frequently Asked Questions
          </h2>

          <h3 className="font-semibold mt-4">
            Is this compound interest calculator free?
          </h3>
          <p>Yes. This calculator is free to use.</p>

          <h3 className="font-semibold mt-4">
            Does this calculator include monthly contributions?
          </h3>
          <p>
            Not yet. This version calculates compound growth from a starting
            amount only. We can add monthly contributions later.
          </p>
        </div>
      </section>
    </main>
  );
}