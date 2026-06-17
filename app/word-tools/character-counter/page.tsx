import type { Metadata } from "next";
import CharacterCounter from "@/components/CharacterCounter";
import CalculatorPageLayout from "@/components/CalculatorPageLayout";

export const metadata: Metadata = {
  title: "Character Counter | ToolioIQ",
  description:
    "Count characters, words, paragraphs, and characters without spaces with ToolioIQ's free character counter.",
};

export default function CharacterCounterPage() {
  return (
    <CalculatorPageLayout
      title="Character Counter"
      description="Count characters, words, paragraphs, and characters without spaces instantly."
      howToUse={
        <p>
          Paste or type your text into the box. The counts update automatically
          as you type.
        </p>
      }
      explanation={
        <p>
          A character counter helps you measure text length for social media
          posts, essays, SEO titles, meta descriptions, forms, and other writing
          limits.
        </p>
      }
      faqs={
        <>
          <h3 className="font-semibold mt-4">
            Is this character counter free?
          </h3>
          <p>Yes. This character counter is completely free to use.</p>

          <h3 className="font-semibold mt-4">
            Does it count spaces?
          </h3>
          <p>
            Yes. It shows total characters and characters excluding spaces.
          </p>

          <h3 className="font-semibold mt-4">
            Does it count words too?
          </h3>
          <p>Yes. It also counts words and paragraphs.</p>
        </>
      }
      relatedTools={[
        {
          title: "Word Counter",
          href: "/word-tools/word-counter",
          description: "Count words, characters, and sentences instantly.",
        },
        {
          title: "Password Generator",
          href: "/generators/password-generator",
          description: "Generate secure passwords instantly.",
        },
        {
          title: "Random Number Generator",
          href: "/generators/random-number-generator",
          description: "Generate random numbers between any range.",
        },
      ]}
    >
      <CharacterCounter />
    </CalculatorPageLayout>
  );
}