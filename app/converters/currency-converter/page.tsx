import type { Metadata } from "next";
import CurrencyConverter from "@/components/CurrencyConverter";
import CalculatorPageLayout from "@/components/CalculatorPageLayout";

export const metadata: Metadata = {
  title: "Currency Converter | ToolioIQ",
  description:
    "Convert currencies using live exchange rates with ToolioIQ's free currency converter.",
};

export default function CurrencyConverterPage() {
  return (
    <CalculatorPageLayout
      title="Currency Converter"
      description="Use this free currency converter to convert between popular currencies using live exchange rates."
      howToUse={
        <p>
          Enter an amount, choose the currency you are converting from, choose
          the currency you want to convert to, then click Convert Currency.
        </p>
      }
      breadcrumbItems={[
            { name: "Home", url: "https://toolioiq.com" },
            { name: "Converters", url: "https://toolioiq.com/converters" },
            {
                name: "Currency Converter",
                url: "https://toolioiq.com/converters/currency-converter",
            },
        ]}
        faqItems={[
            {
                question: "Is this currency converter free?",
                answer: "Yes. This currency converter is free to use.",
            },
            {
                question: "Are the exchange rates live?",
                answer:
                "The converter uses recent exchange rates from Frankfurter. Rates are updated regularly but may not reflect real-time market prices.",
            },
            {
                question: "Should I use this for financial decisions?",
                answer:
                "This tool is for informational purposes only. Always verify rates with your bank, broker, or payment provider before making financial decisions.",
            },
        ]}
      explanation={
        <p>
          A currency converter uses exchange rates to estimate how much one
          currency is worth in another currency. Rates can change over time, so
          results should be treated as estimates.
        </p>
      }
      faqs={
        <>
          <h3 className="font-semibold mt-4">
            Is this currency converter free?
          </h3>
          <p>Yes. This currency converter is free to use.</p>

          <h3 className="font-semibold mt-4">
            Are the exchange rates live?
          </h3>
          <p>
            The converter uses recent exchange rates from Frankfurter. Rates are
            updated regularly but may not reflect real-time market prices.
          </p>

          <h3 className="font-semibold mt-4">
            Should I use this for financial decisions?
          </h3>
          <p>
            This tool is for informational purposes only. Always verify rates
            with your bank, broker, or payment provider before making financial
            decisions.
          </p>
        </>
      }
      relatedTools={[
        {
          title: "Unit Converter",
          href: "/converters/unit-converter",
          description:
            "Convert length, weight, and temperature units in one place.",
        },
        {
          title: "Data Storage Converter",
          href: "/converters/data-storage-converter",
          description:
            "Convert bits, bytes, kilobytes, megabytes, gigabytes, terabytes, and binary storage units.",
        },
        {
          title: "Percentage Calculator",
          href: "/calculators/percentage-calculator",
          description: "Calculate percentages quickly and easily.",
        },
      ]}
      
    >
    
      <CurrencyConverter />
    </CalculatorPageLayout>
  );
}