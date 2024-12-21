import LanguageItem from "@/components/language-item";
import { SkillsProps } from "@/types/resume";
import React from "react";

const Languages = ({ skills }: { skills: SkillsProps }) => {
  return (
    <div>
      <h3 className="text-black mb-10">Languages</h3>
      <ul className="space-y-10">
        {skills.languages.map((language, index) => (
          <LanguageItem key={index} language={language} />
        ))}
      </ul>
    </div>
  );
};

export default Languages;
