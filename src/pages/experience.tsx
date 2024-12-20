import ExperienceCard from "@/components/experience-card";
import type { ExperienceProps } from "@/types/resume";
import React from "react";

const Experience = ({ experiences }: { experiences: ExperienceProps[] }) => {
  return (
    <div>
      <h3 className="text-black">Experience</h3>
      <div>
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} experience={exp} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
