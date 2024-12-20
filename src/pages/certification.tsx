import CardItem from "@/components/card-item";
import { CertificationProps } from "@/types/resume";
import React from "react";

interface CertificationComponentProps {
  certifications: CertificationProps[];
}

const Certification: React.FC<CertificationComponentProps> = ({
  certifications,
}) => {
  return (
    <div>
      <h3 className="text-black">Education</h3>
      <ul className="space-y-10">
        {certifications.map((certification, index) => (
          <CardItem
            key={index}
            {...certification}
            organization={certification.company}
            year={certification.date}
          />
        ))}
      </ul>
    </div>
  );
};

export default Certification;
