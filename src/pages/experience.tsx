import ExperienceItem from "@/components/experience-item";
import type { Experience } from "@/types/resume";
import React from "react";

const Experience = ({ experiences }: { experiences: Experience[] }) => {
  return (
    <div>
      <h3 className="text-black">Experience</h3>
      <ul className="space-y-10">
        {experiences.map((exp, index) => (
          <ExperienceItem key={index} experience={exp} />
        ))}
      </ul>
    </div>
  );
};

export default Experience;
