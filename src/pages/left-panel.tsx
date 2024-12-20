import { ResumeProps } from "@/types/resume";
import React from "react";
import Contact from "./contact";
import Education from "./education";
import Certification from "./certification";

const LeftPanel = ({ resume }: { resume: ResumeProps }) => {
  return (
    <section className="w-1/3 h-full mr-4 space-y-[10rem] text-gray-600 pt-16 ">
      <Contact contact={resume.contact} className="space-y-5" />

      <Education degrees={resume.degrees} />
      <Certification certifications={resume.certifications} />
    </section>
  );
};

export default LeftPanel;
