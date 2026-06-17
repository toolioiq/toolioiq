"use client";

import Link from "next/link";
import { useState } from "react";
import { tools } from "@/data/tools";

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