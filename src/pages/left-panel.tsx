import { ResumeProps } from "@/types/resume";
import React from "react";

const LeftPanel = ({ resume: data }: { resume: ResumeProps }) => {
  return (
    <section className="w-1/3 h-full mr-4 space-y-4 text-gray-600 pt-16 bg-cyan-200">
      <div className="flex items-center gap-3 pt-[6rem]">
        <div className="p-2 bg-[#8ea59b] text-white rounded-full flex justify-center items-center">
          <i className="bx bxs-map"></i>
        </div>
        <p className="">{data.contact.location}</p>
      </div>
      <div className="flex items-center gap-3">
        <div className="p-2 theme-bg-color text-white rounded-full flex justify-center items-center">
          <i className="bx bxs-phone"></i>
        </div>
        <p className="">{data.contact.phone}</p>
      </div>
      <div className="flex items-center gap-3">
        <div className="p-2 theme-bg-color text-white rounded-full flex justify-center items-center">
          <i className="bx bxs-envelope "></i>
        </div>
        <p className="">{data.contact.email}</p>
      </div>
    </section>
  );
};

export default LeftPanel;
