import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
};

export default function TermsPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>

      <div className="space-y-4 text-gray-700">
        <p>
          ToolioIQ is provided for informational purposes only.
        </p>

        <p>
          While we strive for accuracy, we do not guarantee the correctness
          of all calculations and conversions.
        </p>

        <p>
          Users are responsible for verifying results before making
          financial, legal, medical, or other important decisions.
        </p>

        <p>
          By using ToolioIQ, you agree to these terms.
        </p>
      </div>
    </main>
  );
}