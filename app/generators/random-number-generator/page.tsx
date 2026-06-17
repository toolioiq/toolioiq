import type { Metadata } from "next";
import RandomNumberGenerator from "@/components/RandomNumberGenerator";
import CalculatorPageLayout from "@/components/CalculatorPageLayout";

export const metadata: Metadata = {
  title: "Random Number Generator | ToolioIQ",
  description:
    "Generate random numbers instantly with ToolioIQ's free random number generator.",
};

export default function RandomNumberGeneratorPage() {
  return (
    <CalculatorPageLayout
      title="Random Number Generator"
      description="Generate random numbers between any minimum and maximum value."
      howToUse={
        <p>
          Enter a minimum number and a maximum number,
          then click Generate Number.
        </p>
      }
      explanation={
        <p>
          A random number generator produces a number
          selected at random from a specified range.
        </p>
      }
      faqs={
        <>
          <h3 className="font-semibold mt-4">
            Is this random number generator free?
          </h3>

          <p>Yes. It is completely free.</p>

          <h3 className="font-semibold mt-4">
            Can I generate lottery numbers?
          </h3>

          <p>
            Yes. You can generate random numbers for
            games, drawings, giveaways, and more.
          </p>
        </>
      }
      relatedTools={[
        {
          title: "Password Generator",
          href: "/generators/password-generator",
          description:
            "Generate secure passwords instantly.",
        },
        {
          title: "Percentage Calculator",
          href: "/calculators/percentage-calculator",
          description:
            "Calculate percentages quickly.",
        },
        {
          title: "Savings Calculator",
          href: "/calculators/savings-calculator",
          description:
            "Estimate future savings growth.",
        },
      ]}
    >
      <RandomNumberGenerator />
    </CalculatorPageLayout>
  );
}