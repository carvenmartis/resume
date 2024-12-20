import { ResumeProps } from "@/types/resume";
import React from "react";
import Contact from "./contact";
import Education from "./education";

const LeftPanel = ({ resume }: { resume: ResumeProps }) => {
  return (
    <section className="w-1/3 h-full mr-4 space-y-4 text-gray-600 pt-16 ">
      <Contact contact={resume.contact} className="mb-[10rem]" />

      <Education degrees={resume.degrees} />
    </section>
  );
};

export default LeftPanel;
