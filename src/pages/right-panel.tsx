import React from "react";
import Profile from "./profile";
import { ResumeProps } from "@/types/resume";
import Experience from "./experience";

const RightPanel = ({ resume }: { resume: ResumeProps }) => {
  return (
    <section className="flex-grow h-full ">
      <Profile profile={resume.profile} className="mb-10" />

      <Experience experiences={resume.experiences} />
    </section>
  );
};

export default RightPanel;
