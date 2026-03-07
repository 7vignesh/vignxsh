import React from "react";
import { personalInfo } from "@/data/portfolio";

const About: React.FC = () => {
  return (
    <section id="about" className="space-y-4">
      <h2 className="text-xs font-medium uppercase tracking-widest text-muted">about</h2>
      <p className="text-sm text-zinc-400 leading-relaxed">{personalInfo.bio}</p>
    </section>
  );
};

export default About;
