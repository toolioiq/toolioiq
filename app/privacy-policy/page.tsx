import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>

      <div className="space-y-4 text-gray-700">
        <p>
          ToolioIQ respects your privacy.
        </p>

        <p>
          We do not sell personal information. We may collect anonymous
          analytics data to improve our services.
        </p>

        <p>
          Third-party services such as Google Analytics may collect
          information in accordance with their own privacy policies.
        </p>

        <p>
          By using ToolioIQ, you agree to this Privacy Policy.
        </p>
      </div>
    </main>
  );
}