import type { Metadata } from "next";
import PercentageCalculator from "@/components/PercentageCalculator";

export const metadata: Metadata = {
  title: "Percentage Calculator | ToolioIQ",
  description:
    "Calculate percentages quickly with ToolioIQ's free percentage calculator.",
};

export default function PercentageCalculatorPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-4">Percentage Calculator</h1>

      <p className="text-gray-600 mb-8">
        Use this free percentage calculator to find what percentage of a number
        equals.
      </p>

      <PercentageCalculator />

      <section className="mt-12 space-y-6">
        <div>
          <h2 className="text-2xl font-bold mb-2">
            How to use this percentage calculator
          </h2>
          <p>
            Enter the percentage and the number, then click Calculate. For
            example, entering 20 and 150 will calculate 20% of 150.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-2">What is a percentage?</h2>
          <p>
            A percentage is a number expressed as a fraction of 100. For example,
            20% means 20 out of 100.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-2">
            Frequently Asked Questions
          </h2>

          <h3 className="font-semibold mt-4">
            Is this percentage calculator free?
          </h3>
          <p>Yes. This calculator is free to use.</p>

          <h3 className="font-semibold mt-4">
            What does this calculator solve?
          </h3>
          <p>
            It calculates what a percentage of a number is, such as 15% of 200.
          </p>
        </div>
      </section>
    </main>
  );
}