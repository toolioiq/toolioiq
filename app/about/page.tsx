import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About ToolioIQ",
  description:
    "Learn more about ToolioIQ and our mission to provide free online tools.",
};

export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-6">About ToolioIQ</h1>

      <div className="space-y-6 text-gray-700">
        <p>
          ToolioIQ is a growing collection of free online calculators,
          converters, generators, and productivity tools designed to help
          people solve everyday problems quickly.
        </p>

        <p>
          Our mission is simple: provide accurate, easy-to-use tools that are
          accessible to everyone without requiring downloads, registrations,
          or subscriptions.
        </p>

        <p>
          Whether you're calculating a mortgage, converting units, generating
          passwords, or counting words, ToolioIQ aims to make the process
          fast and straightforward.
        </p>

        <p>
          We continue to expand our library of tools and improve existing
          features based on user feedback.
        </p>
      </div>
    </main>
  );
}