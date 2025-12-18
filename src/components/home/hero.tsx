"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight } from "lucide-react";
import Link from "next/link"; 
import Image from "next/image";

const roles = ["Full-Stack Engineer", "ML Enthusiast"];

export function Hero() {
  const [roleIndex, setRoleIndex] = React.useState(0);
  const [text, setText] = React.useState("");
  const [isDeleting, setIsDeleting] = React.useState(false);

  React.useEffect(() => {
    const currentRole = roles[roleIndex];
    const typeSpeed = isDeleting ? 50 : 150;

    const timeout = setTimeout(() => {
      if (!isDeleting && text === currentRole) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        setText(
          currentRole.substring(0, text.length + (isDeleting ? -1 : 1))
        );
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-6 container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl w-full">
        {/* Text Column */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <p className="text-secondary font-mono text-lg mb-4">
              Hello, welcome to my portfolio.
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-mono tracking-tight text-foreground">
              Hi, I’m <span className="text-primary">Feben</span>.
              <br />
              <span className="text-xl md:text-3xl lg:text-4xl text-muted mt-2 block font-sans font-medium">
                Software Engineer & Machine Learning Enthusiast
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="h-8 md:h-12 flex items-center font-mono text-xl md:text-3xl text-secondary"
          >
            <span>{">"} </span>
            <span className="ml-2">{text}</span>
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="w-2 h-6 md:h-8 bg-primary ml-1 block"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <Button asChild size="lg" className="group">
              <Link href="#projects">
                View Projects
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="/resume.pdf" download>
                Download CV
                <Download className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </motion.div>
        </div>

        {/* Image Column - Hidden on mobile, visible on desktop */}
        <motion.div
           initial={{ opacity: 0, x: 50 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.5 }}
           className="hidden md:flex justify-center md:justify-end"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/20 bg-surface/50">
             <Image
              src="/profile.jpg"
              alt="Feben Getachew"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
