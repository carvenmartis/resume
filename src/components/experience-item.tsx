import { Experience } from "@/types/resume";
import React from "react";

interface ExperienceItemProps {
  experience: Experience;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ experience }) => {
  return (
    <li>
      <div className="flex justify-between items-center">
        <h4 className="text-black text-[3rem] font-bold">
          {experience.position} ({experience.company})
        </h4>
        <p className="text-black font-bold text-[3rem] uppercase">
          {experience.period}
        </p>
      </div>

      <p className="text-gray-700 mb-5 text-justify text-[2.75rem] leading-snug">
        {experience.description}
      </p>

      <div className="">
        <span className="font-bold text-[2.4rem]">Keywords:</span>{" "}
        <span className="text-gray-700 text-justify text-2lg text-[2.4rem] leading-snug">
          {experience.technologies.join(", ")}
        </span>
      </div>
    </li>
  );
};

export default ExperienceItem;
