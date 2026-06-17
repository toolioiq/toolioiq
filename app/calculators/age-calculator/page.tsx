import type { Metadata } from "next";
import AgeCalculator from "@/components/AgeCalculator";

export const metadata: Metadata = {
  title: "Age Calculator | ToolioIQ",
  description:
    "Calculate your exact age in years, months, and days with ToolioIQ's free age calculator.",
};

export default function AgeCalculatorPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-4">Age Calculator</h1>

      <p className="text-gray-600 mb-8">
        Use this free age calculator to find your exact age in years, months,
        and days based on your date of birth.
      </p>

      <AgeCalculator />

      <section className="mt-12 space-y-6">
        <div>
          <h2 className="text-2xl font-bold mb-2">How to use this age calculator</h2>
          <p>
            Select your birth date, then click the Calculate Age button. The tool
            will instantly show your current age in years, months, and days.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-2">What is an age calculator?</h2>
          <p>
            An age calculator is a simple tool that determines how much time has
            passed between a birth date and today’s date.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-2">Frequently Asked Questions</h2>

          <h3 className="font-semibold mt-4">Is this age calculator free?</h3>
          <p>Yes. This age calculator is free to use.</p>

          <h3 className="font-semibold mt-4">Does it calculate months and days?</h3>
          <p>Yes. It calculates your age in years, months, and days.</p>
        </div>
      </section>
    </main>
  );
}