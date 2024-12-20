import { Experience } from "@/types/resume";
import React from "react";

interface ExperienceItemProps {
  experience: Experience;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ experience }) => {
  return (
    <li className="mb-5">
      <div className="flex justify-between items-center">
        <h4 className="text-black text-[3rem] font-bold">
          {experience.position} ({experience.company})
        </h4>
        <p className="text-black font-bold text-[2.8em] uppercase">
          {experience.period}
        </p>
      </div>

      <p className="text-gray-700 mb-5 text-justify ">
        {experience.description}
      </p>

      <p className="text-[2.4rem]">
        <span className="font-bold">Keywords:</span>{" "}
        <span className="text-gray-700 text-justify">
          {experience.technologies.join(", ")}
        </span>
      </p>
    </li>
  );
};

export default ExperienceItem;
