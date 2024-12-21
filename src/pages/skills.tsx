import { SkillsProps } from "@/types/resume";
import React from "react";

const Skills = ({ skills }: { skills: SkillsProps }) => {
  return (
    <div>
      <h3 className="text-black">Skills</h3>
      <div className="w-[42rem]">
        <span className="text-gray-700 text-justify text-2lg text-[2.4rem] leading-snug">
          {skills.programming.join(", ")}
        </span>
      </div>
    </div>
  );
};

export default Skills;
