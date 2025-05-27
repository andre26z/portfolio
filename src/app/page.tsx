import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Andre Santos - Senior Data Scientist & Cloud Solutions Architect",
  description:
    "Portfolio of Andre Santos, a Senior Data Scientist and Cloud Solutions Architect specializing in AI/ML solutions, GenAI innovation, and cloud-native architectures. 6x AWS Certified professional with expertise in machine learning and scalable cloud solutions.",
  openGraph: {
    type: 'website',
    title: 'Andre Santos - Senior Data Scientist & Cloud Solutions Architect',
    description: 'Portfolio of Andre Santos, a Senior Data Scientist and Cloud Solutions Architect specializing in AI/ML solutions, GenAI innovation, and cloud-native architectures.',
    images: [{
      url: '/screenshots/hero-preview.png',
      width: 1200,
      height: 630,
      alt: 'Andre Santos - Portfolio Hero Section'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Andre Santos - Senior Data Scientist & Cloud Solutions Architect',
    description: 'Portfolio of Andre Santos, a Senior Data Scientist and Cloud Solutions Architect specializing in AI/ML solutions, GenAI innovation, and cloud-native architectures.',
    images: ['/screenshots/hero-preview.png']
  }
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <About />
      <FeaturedProjects />
    </main>
  );
}
