import type { Metadata } from "next";
import PasswordGenerator from "@/components/PasswordGenerator";
import CalculatorPageLayout from "@/components/CalculatorPageLayout";

export const metadata: Metadata = {
  title: "Password Generator | ToolioIQ",
  description:
    "Generate strong secure passwords instantly with ToolioIQ.",
};

export default function PasswordGeneratorPage() {
  return (
    <CalculatorPageLayout
      title="Password Generator"
      description="Create strong secure passwords instantly."
      howToUse={
        <p>
          Choose a password length and click Generate
          Password. Copy the generated password for
          use on websites and apps.
        </p>
      }
      explanation={
        <p>
          Strong passwords help protect online
          accounts from unauthorized access.
        </p>
      }
      faqs={
        <>
          <h3 className="font-semibold mt-4">
            Is this password generator free?
          </h3>

          <p>Yes. It is completely free.</p>

          <h3 className="font-semibold mt-4">
            Are passwords stored?
          </h3>

          <p>
            No. Passwords are generated locally in
            your browser.
          </p>
        </>
      }
      relatedTools={[
        {
          title: "Percentage Calculator",
          href: "/calculators/percentage-calculator",
          description: "Calculate percentages quickly.",
        },
        {
          title: "Loan Calculator",
          href: "/calculators/loan-calculator",
          description: "Estimate loan payments.",
        },
      ]}
    >
      <PasswordGenerator />
    </CalculatorPageLayout>
  );
}