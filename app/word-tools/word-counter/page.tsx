import type { Metadata } from "next";
import WordCounter from "@/components/WordCounter";
import CalculatorPageLayout from "@/components/CalculatorPageLayout";

export const metadata: Metadata = {
  title: "Word Counter | ToolioIQ",
  description:
    "Count words, characters, sentences, and characters without spaces with ToolioIQ's free word counter.",
};

export default function WordCounterPage() {
  return (
    <CalculatorPageLayout
      title="Word Counter"
      description="Count words, characters, sentences, and characters without spaces instantly."
      howToUse={
        <p>
          Paste or type your text into the box. The tool will automatically count
          the number of words, characters, characters without spaces, and
          sentences.
        </p>
      }
      explanation={
        <p>
          A word counter is useful for essays, blog posts, social media captions,
          articles, applications, and any writing task with length requirements.
        </p>
      }
      faqs={
        <>
          <h3 className="font-semibold mt-4">Is this word counter free?</h3>
          <p>Yes. This word counter is completely free to use.</p>

          <h3 className="font-semibold mt-4">
            Does this count characters too?
          </h3>
          <p>
            Yes. It counts total characters and characters excluding spaces.
          </p>

          <h3 className="font-semibold mt-4">
            Do I need to click a button?
          </h3>
          <p>No. The counts update automatically as you type or paste text.</p>
        </>
      }
      relatedTools={[
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
        {
          title: "Percentage Calculator",
          href: "/calculators/percentage-calculator",
          description: "Calculate percentages quickly.",
        },
      ]}
    >
      <WordCounter />
    </CalculatorPageLayout>
  );
}