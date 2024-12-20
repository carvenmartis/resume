import CardItem from "@/components/card-item";
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
          <CardItem key={index} {...degree} year={degree.endDate} />
        ))}
      </ul>
    </div>
  );
};

export default Education;
