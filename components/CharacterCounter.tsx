"use client";

import { useState } from "react";

export default function CharacterCounter() {
  const [text, setText] = useState("");

  const characterCount = text.length;
  const characterCountNoSpaces = text.replace(/\s/g, "").length;
  const wordCount =
    text.trim() === "" ? 0 : text.trim().split(/\s+/).filter(Boolean).length;
  const paragraphCount =
    text.trim() === ""
      ? 0
      : text.split(/\n+/).filter((paragraph) => paragraph.trim()).length;

  return (
    <div className="border rounded-2xl p-6 space-y-4">
      <div>
        <label className="block font-medium mb-1">
          Enter or paste your text
        </label>

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="border rounded-lg p-3 w-full min-h-52"
          placeholder="Type or paste your text here..."
        />
      </div>

      <div className="grid md:grid-cols-4 gap-4">
        <div className="bg-gray-50 border rounded-xl p-4">
          <h2 className="font-semibold">Characters</h2>
          <p className="text-3xl font-bold">{characterCount}</p>
        </div>

        <div className="bg-gray-50 border rounded-xl p-4">
          <h2 className="font-semibold">No Spaces</h2>
          <p className="text-3xl font-bold">{characterCountNoSpaces}</p>
        </div>

        <div className="bg-gray-50 border rounded-xl p-4">
          <h2 className="font-semibold">Words</h2>
          <p className="text-3xl font-bold">{wordCount}</p>
        </div>

        <div className="bg-gray-50 border rounded-xl p-4">
          <h2 className="font-semibold">Paragraphs</h2>
          <p className="text-3xl font-bold">{paragraphCount}</p>
        </div>
      </div>
    </div>
  );
}