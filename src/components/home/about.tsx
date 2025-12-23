"use client";

import { Section } from "@/components/ui/section";

import { motion } from "framer-motion";

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2 
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <Section id="about" className="bg-surface/30">
      <motion.div 
        className="max-w-4xl mx-auto space-y-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.h2 variants={itemVariants} className="text-3xl font-mono font-bold text-primary">
          <span className="text-secondary mr-2">01.</span>About Me
        </motion.h2>
        <motion.div variants={itemVariants} className="prose dark:prose-invert prose-lg text-muted">
          <p>
            I am a 4th-year Software Engineering student at Addis Ababa University and a full-stack developer skilled in Node.js, Django, and .NET. I build scalable, user-centric web applications from clean interfaces to robust APIs, with a strong focus on solving real-world problems. Eager to evolve into an ML Engineer, I am actively exploring TensorFlow and PyTorch to integrate data-driven intelligence into the impactful products I love to create through collaboration and continuous learning.
          </p>
        </motion.div>
      </motion.div>
    </Section>
  );
}
