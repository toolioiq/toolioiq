import Link from "next/link";

export default function WordToolsPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-8">Word Tools</h1>

      <div className="grid gap-6">
        <Link
          href="/word-tools/word-counter"
          className="border rounded-xl p-6 hover:bg-gray-50"
        >
          <h2 className="text-xl font-semibold">Word Counter</h2>
          <p>Count words, characters, and sentences instantly.</p>
        </Link>
        <Link
          href="/word-tools/character-counter"
          className="border rounded-xl p-6 hover:bg-gray-50"
        >
          <h2 className="text-xl font-semibold">Character Counter</h2>
          <p>Count characters, words, and paragraphs instantly.</p>
        </Link>
      </div>
    </main>
  );
}