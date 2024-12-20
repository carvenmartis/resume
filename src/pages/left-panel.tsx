import { ResumeProps } from "@/types/resume";
import React from "react";
import Contact from "./contact";

const LeftPanel = ({ resume: data }: { resume: ResumeProps }) => {
  return (
    <section className="w-1/3 h-full mr-4 space-y-4 text-gray-600 pt-16 bg-cyan-200">
      <Contact contact={data.contact} />
    </section>
  );
};

export default LeftPanel;
