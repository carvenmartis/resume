import { LanguageItemProps } from "@/types/resume";
import React from "react";

const LanguageItem = ({ language }: { language: LanguageItemProps }) => {
  return (
    <li className="text-gray-700 text-justify text-2lg text-[2.4rem] w-full">
      <div className="flex items-center justify-between w-full">
        <p> {language.title}</p>
        <div className="flex gap-4">
          {[...Array(5)].map((_, index) => (
            <span
              key={index}
              className={`w-10 h-10 rounded-full mx-1 ${
                index < language.level ? "bg-[#8ea59b]" : "bg-[#c6d1cd]"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </li>
  );
};

export default LanguageItem;
