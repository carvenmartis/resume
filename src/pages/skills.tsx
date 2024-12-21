import React from "react";

const Skills = ({ skills }: { skills: string[] }) => {
  return (
    <div className="w-[42.5rem]">
      <h3 className="text-black">Skills</h3>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="p-3 bg-[#c6d1cd] text-gray-700 text-[2.4rem] truncate rounded-md"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Skills;
