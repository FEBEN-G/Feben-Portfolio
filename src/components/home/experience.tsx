"use client";

import { Section } from "@/components/ui/section";

const experiences = [
  {
    company: "10 Academy / Kifiya AI Mastery",
    role: "AI/ML Trainee",
    period: "Oct 2025 – Present",
    type: "Remote",
    description: [
      "Participating in an intensive 3-month program focused on AI/ML foundations, NLP, and model deployment.",
      "Working on weekly real-world challenges such as sentiment analysis, NER, model evaluation, and interpretability using Python and Hugging Face.",
      "Collaborating with peers and mentors in a fast-paced remote setting."
    ],
    tech: ["Python", "Hugging Face", "NLP", "AI/ML"]
  },
  {
    company: "Brana Software Solution",
    role: "Frontend Developer",
    period: "Oct 2024 – Nov 2024",
    type: "Inperson",
    description: [
      "Active front-end contributor to the Brana ERP project, implementing design mockups into functional components using Next.js.",
      "Engaging in iterative UX/UI refinement to improve user experience.",
      "Managed project timelines and task allocation, ensuring the successful on-time delivery of a functional product."
    ],
    tech: ["Next.js", "UX/UI", "ERP"]
  },
  {
    company: "Prodigy Infotech",
    role: "Frontend Developer",
    period: "Oct 2024 – Nov 2024",
    type: "Remote",
    description: [
      "Developed and integrated multiple interactive web applications, enhancing user engagement and functionality.",
      "Collaborated in an Agile team to design responsive UIs and connect front-end components to back-end services via REST APIs."
    ],
    tech: ["React", "Agile", "REST APIs"]
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
