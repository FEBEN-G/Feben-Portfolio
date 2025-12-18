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
            I’m a full-stack developer experienced with Node.js, Django, and the .NET framework, building scalable web and mobile applications from end to end. I enjoy working across the stack—designing clean interfaces, developing reliable APIs, and solving real-world problems with code.
          </p>
          <p>
            I’m currently exploring Machine Learning with a strong interest in becoming an ML Engineer, combining software engineering fundamentals with data-driven systems. I’m passionate about clean architecture, accessible UI, and continuous learning, and I enjoy collaborating to build impactful digital products.
          </p>
        </motion.div>
      </motion.div>
    </Section>
  );
}
