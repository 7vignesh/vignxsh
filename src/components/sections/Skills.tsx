import React from "react";
import { skills } from "@/data/portfolio";

const Skills: React.FC = () => {
  return (
    <section id="skills" className="space-y-4">
      <h2 className="text-xs font-medium uppercase tracking-widest text-muted">skills</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill.name}
            className="text-xs px-2.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400"
          >
            {skill.name.toLowerCase()}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
