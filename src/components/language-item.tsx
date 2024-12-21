import { LanguageItemProps } from "@/types/resume";
import React from "react";

const LanguageItem = ({ language }: { language: LanguageItemProps }) => {
  return (
    <li className="text-gray-700 text-justify text-2lg text-[2.4rem] w-full">
      <div className="flex items-center justify-between w-full">
        <span className="font-bold"> {language.title}</span>
        <div className="flex mr-10 gap-4">
          {[...Array(5)].map((_, index) => (
            <span
              key={index}
              className={`w-8 h-8 rounded-full mx-1 ${
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
