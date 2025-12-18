"use client";

import { Section } from "@/components/ui/section";

const experiences = [
  {
    company: "Prodigy Infotech",
    role: "Frontend Developer",
    period: "October 2024 – November 2024",
    type: "Internship",
    description: [
      "Designed and implemented responsive web interfaces using HTML, CSS, and JavaScript.",
      "Collaborated with backend developers to integrate REST APIs and improve user flows.",
      "Built mini web applications including Stopwatch, Tic-Tac-Toe, and Weather App, handling dynamic UI updates and API integration.",
      "Collaborated with cross-functional teams to implement interactive features across multiple projects.",
      "Gained exposure to different frontend technologies."
    ],
    tech: ["React", "HTML", "CSS", "JavaScript", "REST APIs"]
  },
  {
    company: "Addis Ababa University",
    role: "Africa Mobile Developer",
    period: "2025",
    type: "Full-time",
    description: [
      "Flutter developer for a car booking and inventory management system.",
      "Led a development team, assigning tasks and ensuring on-time delivery.",
      "Used Flutter, Riverpod (state management), and Dio (API integration)."
    ],
    tech: ["Flutter", "Riverpod", "Dio", "Dart"]
  },
  {
    company: "Addis Ababa University",
    role: "Various Software Development Projects",
    period: "Various",
    type: "Academic",
    description: [
      "Worked across the full software development lifecycle.",
      "Designed and implemented full-stack web applications using React, Angular, and Node.js.",
      "Built and optimized databases using MySQL and MongoDB.",
      "Applied best practices: Git, CI/CD, Agile methodologies.",
      "Collaborated in team environments, strengthening communication and leadership skills."
    ],
    tech: ["React", "Angular", "Node.js", "MySQL", "MongoDB"]
  }
];

import { motion } from "framer-motion";

export function Experience() {
  return (
    <Section id="experience">
      <div className="max-w-4xl mx-auto space-y-12">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-mono font-bold text-primary"
        >
          <span className="text-secondary mr-2">02.</span>Experience
        </motion.h2>

        <div className="space-y-12 border-l border-primary/20 pl-8 ml-4">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index} 
              className="relative group"
              initial={{ opacity: 0, x: -20, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-surface border-2 border-primary group-hover:bg-primary transition-colors" />
              
              <div className="space-y-2 mb-4">
                <h3 className="text-xl font-bold text-foreground">
                  {exp.role} <span className="text-primary">@ {exp.company}</span>
                </h3>
                <p className="font-mono text-sm text-secondary">
                  {exp.period} | {exp.type}
                </p>
              </div>

              <ul className="space-y-2 mb-4 list-disc list-inside text-muted">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono px-2 py-1 rounded bg-primary/10 text-primary border border-primary/20"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
