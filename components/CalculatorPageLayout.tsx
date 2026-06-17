import Link from "next/link";
import type { ReactNode } from "react";

type RelatedTool = {
  title: string;
  href: string;
  description: string;
};

type CalculatorPageLayoutProps = {
  title: string;
  description: string;
  children: ReactNode;
  howToUse: ReactNode;
  explanation: ReactNode;
  faqs: ReactNode;
  relatedTools?: RelatedTool[];
};

export default function CalculatorPageLayout({
  title,
  description,
  children,
  howToUse,
  explanation,
  faqs,
  relatedTools = [],
}: CalculatorPageLayoutProps) {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>

      <p className="text-gray-600 mb-8">{description}</p>

      {children}

      <section className="mt-12 space-y-6">
        <div>
          <h2 className="text-2xl font-bold mb-2">How to use this calculator</h2>
          {howToUse}
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-2">About this calculator</h2>
          {explanation}
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-2">Frequently Asked Questions</h2>
          {faqs}
        </div>

        {relatedTools.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Related Calculators</h2>

            <div className="grid gap-4">
              {relatedTools.map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="border rounded-xl p-4 hover:bg-gray-50"
                >
                  <h3 className="font-semibold">{tool.title}</h3>
                  <p className="text-gray-600">{tool.description}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>
    </main>
  );
}