import type { Metadata } from "next";
import BmiCalculator from "@/components/BmiCalculator";

export const metadata: Metadata = {
  title: "BMI Calculator | ToolioIQ",
  description:
    "Calculate your body mass index with ToolioIQ's free BMI calculator.",
};

export default function BmiCalculatorPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-4">BMI Calculator</h1>

      <p className="text-gray-600 mb-8">
        Use this free BMI calculator to estimate your body mass index based on
        your height and weight.
      </p>

      <BmiCalculator />

      <section className="mt-12 space-y-6">
        <div>
          <h2 className="text-2xl font-bold mb-2">How to use this BMI calculator</h2>
          <p>
            Enter your height in inches and your weight in pounds, then click
            Calculate BMI. The tool will show your BMI and general category.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-2">What is BMI?</h2>
          <p>
            BMI stands for body mass index. It is a simple estimate based on
            height and weight. It is not a medical diagnosis, but it can be a
            useful general screening tool.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-2">Frequently Asked Questions</h2>

          <h3 className="font-semibold mt-4">Is this BMI calculator free?</h3>
          <p>Yes. This BMI calculator is free to use.</p>

          <h3 className="font-semibold mt-4">Is BMI a medical diagnosis?</h3>
          <p>
            No. BMI is only a general estimate. Speak with a qualified medical
            professional for health advice.
          </p>
        </div>
      </section>
    </main>
  );
}