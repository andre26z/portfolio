"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary/10">
              <Image
                src="/headshot/headshot-2024.jpg"
                alt="Andre Santos"
                fill
                sizes="(max-width: 768px) 192px, 256px"
                priority
                className="object-cover"
              />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Hi, I&apos;m Andre Santos
            </h1>
            <p className="mt-6 text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl">
              Software Engineer | Frontend Developer | Solving problems with code since 2019
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
             
              <Link
                href="/projects"
                className="inline-flex h-12 items-center justify-center rounded-lg border border-input bg-background px-8 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                View Projects
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
