import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Andre Santos – Frontend Developer",
  description:
    "Portfolio of Andre Santos, a Senior Frontend Developer crafting modern, performant, and accessible web applications using React, Vue, and other cutting-edge technologies.",
  openGraph: {
    type: 'website',
    title: 'Andre Santos – Frontend Developer',
    description: 'Portfolio of Andre Santos, a Senior Frontend Developer crafting modern, performant, and accessible web applications using React, Vue, and other cutting-edge technologies.',
    images: [{
      url: '/screenshots/hero-preview.png',
      width: 1200,
      height: 630,
      alt: 'Andre Santos - Portfolio Hero Section'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Andre Santos – Frontend Developer',
    description: 'Portfolio of Andre Santos, a Senior Frontend Developer crafting modern, performant, and accessible web applications using React, Vue, and other cutting-edge technologies.',
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
