"use client";

import Link from "next/link";
import { useState } from "react";

const tools = [
  {
    title: "Age Calculator",
    href: "/calculators/age-calculator",
    category: "Calculators",
  },
  {
    title: "BMI Calculator",
    href: "/calculators/bmi-calculator",
    category: "Calculators",
  },
  {
    title: "Percentage Calculator",
    href: "/calculators/percentage-calculator",
    category: "Calculators",
  },
  {
    title: "GPA Calculator",
    href: "/calculators/gpa-calculator",
    category: "Calculators",
  },
  {
    title: "Compound Interest Calculator",
    href: "/calculators/compound-interest-calculator",
    category: "Calculators",
  },
  {
    title: "Mortgage Calculator",
    href: "/calculators/mortgage-calculator",
    category: "Calculators",
  },
  {
    title: "Loan Calculator",
    href: "/calculators/loan-calculator",
    category: "Calculators",
  },
  {
    title: "Savings Calculator",
    href: "/calculators/savings-calculator",
    category: "Calculators",
  },
  {
    title: "Password Generator",
    href: "/generators/password-generator",
    category: "Generators",
  },
  {
    title: "Random Number Generator",
    href: "/generators/random-number-generator",
    category: "Generators",
  },
  {
    title: "Word Counter",
    href: "/word-tools/word-counter",
    category: "Word Tools",
  },
  {
    title: "Character Counter",
    href: "/word-tools/character-counter",
    category: "Word Tools",
  },
];

export default function ToolSearch() {
  const [query, setQuery] = useState("");

  const filteredTools = tools.filter((tool) =>
    tool.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="max-w-2xl mx-auto mt-10 text-left">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a tool..."
        className="w-full border rounded-xl px-4 py-4"
      />

      {query && (
        <div className="mt-3 border rounded-xl bg-white overflow-hidden">
          {filteredTools.length > 0 ? (
            filteredTools.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="block px-4 py-3 hover:bg-gray-50 border-b last:border-b-0"
              >
                <div className="font-medium">{tool.title}</div>
                <div className="text-sm text-gray-500">{tool.category}</div>
              </Link>
            ))
          ) : (
            <p className="px-4 py-3 text-gray-500">No tools found.</p>
          )}
        </div>
      )}
    </div>
  );
}