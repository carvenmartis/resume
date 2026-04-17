import CardItem from "@/components/card-item";
import { DegreeProps } from "@/types/resume";
import React from "react";

interface EducationProps {
  degrees: DegreeProps[];
}

const Education: React.FC<EducationProps> = ({ degrees }) => {
  return (
    <div>
      <h3>Education</h3>
      <ul className="space-y-10">
        {degrees.map((degree, index) => (
          <CardItem
            key={index}
            {...degree}
            organization={degree.school}
            year={degree.endDate}
          />
        ))}
      </ul>
    </div>
  );
};

export default Education;
