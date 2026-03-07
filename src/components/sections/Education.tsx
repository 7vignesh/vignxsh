import React from "react";

const educationData = [
  {
    id: "1",
    institution: "RV Institute of Technology and Management",
    degree: "Master of Computer Applications (MCA)",
    duration: "2024 - 2026",
    grade: "CGPA: 8.6",
  },
  {
    id: "2",
    institution: "St Joseph's University",
    degree: "Bachelor of Computer Applications (BCA)",
    duration: "2021 - 2024",
    grade: "CGPA: 7.8",
  },
];

const Education: React.FC = () => {
  return (
    <section id="education" className="space-y-6">
      <h2 className="text-xs font-medium uppercase tracking-widest text-muted">education</h2>
      <div className="space-y-4">
        {educationData.map((edu) => (
          <div key={edu.id} className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-white">{edu.institution}</p>
              <p className="text-xs text-zinc-500 mt-0.5">{edu.degree} &middot; {edu.grade}</p>
            </div>
            <span className="text-xs text-muted whitespace-nowrap shrink-0">{edu.duration}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
