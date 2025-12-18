"use client";

import { Section } from "@/components/ui/section";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import * as React from "react";

const data = [
  { subject: "Frontend", A: 90, fullMark: 100 },
  { subject: "Backend", A: 85, fullMark: 100 },
  { subject: "Mobile", A: 80, fullMark: 100 },
  { subject: "Machine Learning", A: 75, fullMark: 100 },
  { subject: "Tools & CS", A: 85, fullMark: 100 },
];

export function Skills() {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
      return (
          <Section id="skills" className="bg-surface/30">
               <div className="max-w-4xl mx-auto space-y-12">
                <h2 className="text-3xl font-mono font-bold text-primary">
                    <span className="text-secondary mr-2">03.</span>Skills
                </h2>
                <div className="h-[400px] w-full flex items-center justify-center bg-surface/10 rounded-lg animate-pulse" />
               </div>
          </Section>
      ); 
  }

  return (
    <Section id="skills" className="bg-surface/30">
      <div className="max-w-4xl mx-auto space-y-12">
        <h2 className="text-3xl font-mono font-bold text-primary">
          <span className="text-secondary mr-2">03.</span>Skills
        </h2>

        <div className="h-[400px] w-full flex items-center justify-center min-w-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
              <PolarGrid stroke="var(--color-muted)" strokeOpacity={0.3} />
              <PolarAngleAxis
                dataKey="subject"
                tick={{ fill: "var(--color-foreground)", fontSize: 14, fontFamily: "var(--font-mono)" }}
              />
              <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
              <Radar
                name="Skill Level"
                dataKey="A"
                stroke="var(--color-primary)"
                strokeWidth={2}
                fill="var(--color-primary)"
                fillOpacity={0.3}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "var(--color-surface)",
                  borderColor: "var(--color-primary)",
                  color: "var(--color-foreground)",
                  borderRadius: "8px",
                }}
                itemStyle={{ color: "var(--color-primary)" }}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm font-mono text-muted text-center max-w-2xl mx-auto">
             {/* Fallback/Secondary list if chart is too abstract? 
                User asked for "Interactive spider-web / radar chart", avoiding progress bars.
                I will stick to the chart as the main view.
             */}
        </div>
      </div>
    </Section>
  );
}
