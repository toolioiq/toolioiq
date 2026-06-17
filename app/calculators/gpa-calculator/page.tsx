import type { Metadata } from "next";
import GpaCalculator from "@/components/GpaCalculator";

export const metadata: Metadata = {
  title: "GPA Calculator | ToolioIQ",
  description:
    "Calculate your grade point average with ToolioIQ's free GPA calculator.",
};

export default function GpaCalculatorPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-4">GPA Calculator</h1>

      <p className="text-gray-600 mb-8">
        Use this free GPA calculator to estimate your grade point average based
        on your course grades and credit hours.
      </p>

      <GpaCalculator />

      <section className="mt-12 space-y-6">
        <div>
          <h2 className="text-2xl font-bold mb-2">How to use this GPA calculator</h2>
          <p>
            Enter each course grade and the number of credit hours. Add or remove
            courses as needed, then click Calculate GPA.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-2">How GPA is calculated</h2>
          <p>
            GPA is calculated by multiplying each course grade point by its credit
            hours, adding those values together, and dividing by the total number
            of credit hours.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-2">Frequently Asked Questions</h2>

          <h3 className="font-semibold mt-4">Is this GPA calculator free?</h3>
          <p>Yes. This GPA calculator is free to use.</p>

          <h3 className="font-semibold mt-4">Does this use a 4.0 scale?</h3>
          <p>Yes. This calculator uses a standard 4.0 GPA scale.</p>
        </div>
      </section>
    </main>
  );
}