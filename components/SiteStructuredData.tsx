export default function SiteStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://toolioiq.com/#organization",
        name: "ToolioIQ",
        url: "https://toolioiq.com",
        logo: "https://toolioiq.com/logo.png",
      },
      {
        "@type": "WebSite",
        "@id": "https://toolioiq.com/#website",
        url: "https://toolioiq.com",
        name: "ToolioIQ",
        description:
          "Free calculators, converters, generators, and word tools designed to help you get quick answers fast.",
        publisher: {
          "@id": "https://toolioiq.com/#organization",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}