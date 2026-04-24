import ExperienceItem from "@/components/experience-item";
import type { Experience } from "@/types/resume";
import React from "react";

const Experience = ({ experiences }: { experiences: Experience[] }) => {
  return (
    <div className="experience-section">
      <h3>Experience</h3>
      <ul className="space-y-10 experience-list">
        {experiences.map((exp, index) => (
          <ExperienceItem
            key={index}
            name={exp.position}
            company={exp.company}
            location={exp.location}
            period={exp.period}
            description={exp.description}
            technologies={exp.technologies}
          />
        ))}
      </ul>
    </div>
  );
};

export default Experience;
