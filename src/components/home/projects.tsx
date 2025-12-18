"use client";

import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Code } from "lucide-react";
import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "@/lib/utils";

const Tabs = TabsPrimitive.Root;
const TabsList = TabsPrimitive.List;
const TabsTrigger = TabsPrimitive.Trigger;
const TabsContent = TabsPrimitive.Content;

const fullStackProjects = [
  {
    title: "Phevon the Grand Hotel and Spa",
    description: "A comprehensive solution for managing hotel bookings, services, and guest experiences.",
    tech: ["React", "TypeScript", "Tailwind", "Node.js", "Prisma", "SQLite"],
    links: { 
      code: "https://github.com/FEBEN-G/Phevon-the-Grand-Hotel-and-Spa.git", 
      demo: "https://phevon-the-grand-hotel-and-spa.vercel.app/" 
    }
  },
  {
    title: "Phevon Car Rental Booking Website",
    description: "A seamless platform for vehicle rentals, featuring real-time booking and inventory management.",
    tech: ["React", "TypeScript", "Django"],
    links: { 
      code: "https://github.com/FEBEN-G/Phevon-Car-Booking-website", 
      demo: "https://phevon-car-booking-website.vercel.app" 
    }
  },
  {
    title: "Kotlin Car Inventory App",
    description: "Mobile application for tracking car inventory and rental status.",
    tech: ["Kotlin", "Firebase", "Android"],
    links: { code: "https://github.com", demo: "#" }
  },
  {
    title: "Academic Portfolio",
    description: "Collection of various full-stack academic projects demonstrating core concepts.",
    tech: ["React", "Express", "MongoDB"],
    links: { code: "https://github.com", demo: "#" }
  }
];

const mlProjects = [
  {
    title: "Predictive Analytics Model",
    description: "Machine learning model to predict user churn based on behavioral data.",
    tech: ["Python", "Scikit-Learn", "Pandas"],
    links: { code: "https://github.com" }
  },
  {
    title: "Image Classification API",
    description: "Deep learning model served via REST API for classifying industrial patterns.",
    tech: ["TensorFlow", "FastAPI", "Docker"],
    links: { code: "https://github.com" }
  }
];

export function Projects() {
  return (
    <Section id="projects">
      <div className="max-w-6xl mx-auto space-y-12">
        <h2 className="text-3xl font-mono font-bold text-primary mb-8">
          <span className="text-secondary mr-2">04.</span>Projects
        </h2>

        <Tabs defaultValue="fullstack" className="w-full flex flex-col items-center">
          <TabsList className="flex items-center justify-center p-1 bg-surface rounded-full mb-12">
            <TabsTrigger
              value="fullstack"
              className={cn(
                "px-6 py-2 rounded-full text-sm font-medium transition-all",
                "data-[state=active]:bg-primary data-[state=active]:text-white",
                "data-[state=inactive]:text-muted hover:text-foreground"
              )}
            >
              Full-Stack Apps
            </TabsTrigger>
            <TabsTrigger
              value="ml"
              className={cn(
                "px-6 py-2 rounded-full text-sm font-medium transition-all",
                "data-[state=active]:bg-primary data-[state=active]:text-white",
                "data-[state=inactive]:text-muted hover:text-foreground"
              )}
            >
              ML Projects
            </TabsTrigger>
          </TabsList>

          <TabsContent value="fullstack" className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {fullStackProjects.map((project, i) => (
              <ProjectCard key={i} project={project} />
            ))}
          </TabsContent>

          <TabsContent value="ml" className="w-full grid md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {mlProjects.map((project, i) => (
              <ProjectCard key={i} project={project} />
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </Section>
  );
}

function ProjectCard({ project }: { project: any }) {
  return (
    <div className="group relative bg-surface p-6 rounded-lg border border-primary/10 hover:border-primary/50 transition-colors flex flex-col h-full">
      <div className="flex justify-between items-start mb-4">
        <div className="p-2 bg-primary/10 rounded-md text-primary">
            {/* Simple folder or code icon */}
            <Code className="w-6 h-6" />
        </div>
        <div className="flex gap-4">
          {project.links.code && (
            <a href={project.links.code} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-primary transition-colors">
              <Github className="w-5 h-5" />
            </a>
          )}
          {project.links.demo && (
            <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-primary transition-colors">
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>

      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
        {project.title}
      </h3>
      
      <p className="text-muted text-sm mb-6 flex-grow">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tech.map((t: string) => (
          <span key={t} className="text-xs font-mono text-secondary">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
