import React from "react";

const Skills = ({ skills }: { skills: string[] }) => {
  return (
    <div>
      <h3 className="text-black">Skills</h3>
      <div className="w-[42rem]">
        <span className="text-gray-700 text-justify text-2lg text-[2.4rem] leading-snug">
          {skills.join(", ")}
        </span>
      </div>
    </div>
  );
};

export default Skills;
