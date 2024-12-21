import LanguageItem from "@/components/language-item";
import { LanguageItemProps } from "@/types/resume";
import React from "react";

const Languages = ({ languages }: { languages: LanguageItemProps[] }) => {
  return (
    <div>
      <h3 className="text-black mb-10">Languages</h3>
      <ul className="space-y-10">
        {languages.map((language, index) => (
          <LanguageItem key={index} language={language} />
        ))}
      </ul>
    </div>
  );
};

export default Languages;
