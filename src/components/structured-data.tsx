export function generatePersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Andre Santos",
    jobTitle: "Front-end Developer",
    description:
      "I'm a frontend developer with over 6 years of experience in building, maintaining, and optimizing web applications across diverse industries. My expertise spans iGaming platforms, gambling sites, ecommerce solutions, and complex legacy monolith systems. From creating responsive UIs to solving complex development challenges, I strive to deliver high-quality, scalable solutions. I've worked with both startups and established companies, developing MVPs and building projects from scratch through to deployment for both national and international clients. I'm fluent in Portuguese and English, enabling me to collaborate effectively with global teams and clients.",
  };
}

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Andre Santos - Portfolio",
    description:
      "Personal portfolio of Andre Santos, frontend developer since 2019.",
    author: {
      "@type": "Person",
      name: "Andre Santos",
    },
  };
}

interface StructuredDataProps {
  type: "person" | "website" | "both";
}

export default function StructuredData({ type }: StructuredDataProps) {
  const schemas = [];

  if (type === "person" || type === "both") {
    schemas.push(generatePersonSchema());
  }

  if (type === "website" || type === "both") {
    schemas.push(generateWebsiteSchema());
  }

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
