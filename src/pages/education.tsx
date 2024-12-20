import { DegreeProps } from "@/types/resume";
import React from "react";

interface EducationProps {
  degrees: DegreeProps[];
}

const Education: React.FC<EducationProps> = ({ degrees }) => {
  return (
    <div>
      <h3 className="text-black">Education</h3>
      <ul>
        {degrees.map((degree, index) => (
          <li key={index}>
            <div>
              <p className="font-bold">{degree.degree}</p>
              <p>
                {degree.school}, {degree.city}
              </p>
              <p>{degree.endDate}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Education;
