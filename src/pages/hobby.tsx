import ExperienceItem from "@/components/experience-item";
import type { HobbyProps } from "@/types/resume";
import React from "react";

const Hobby = ({ experiences }: { experiences: HobbyProps[] }) => {
  return (
    <div className="mb-20">
      <h3 className="text-black">Hobby&apos;s</h3>
      <ul className="space-y-10">
        {experiences.map((exp, index) => (
          <ExperienceItem
            key={index}
            name={exp.name}
            description={exp.description}
            technologies={exp.technologies}
          />
        ))}
      </ul>
    </div>
  );
};

export default Hobby;
