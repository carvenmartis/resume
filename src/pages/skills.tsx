import React from "react";

const Skills = ({ skills }: { skills: string[] }) => {
  return (
    <div>
      <h3 className="text-black">Skills</h3>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <span
            key={index}
            className={`p-3 bg-[#c6d1cd] text-gray-700 text-[2.4rem] rounded-md flex-none text-center ${
              index === 0
                ? "ml-auto"
                : index === skills.length - 1
                ? "mr-auto"
                : "flex-grow"
            }`}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Skills;
