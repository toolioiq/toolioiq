import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact ToolioIQ",
  description: "Get in touch with the ToolioIQ team.",
};

export default function ContactPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-6">Contact</h1>

      <div className="space-y-6 text-gray-700">
        <p>
          We'd love to hear your feedback, suggestions, and bug reports.
        </p>

        <p>
          For questions about ToolioIQ, please contact:
        </p>

        <p className="font-semibold">
          support@toolioiq.com
        </p>

        <p>
          We do our best to respond as quickly as possible.
        </p>
      </div>
    </main>
  );
}