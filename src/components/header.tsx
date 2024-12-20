import { ProfileProps } from "@/types/resume";
import React from "react";

const header = ({ profile }: { profile: ProfileProps }) => {
  return (
    <header className="relative pb-[20rem] pt-[10rem] px-32">
      <div className="clip-path-header w-full h-full absolute top-0 left-0 bg-[#8ea59b]"></div>
      <div className="relative justify-start items-center">
        <h1 className="text-[10rem] font-normal text-black">{profile.name}</h1>
        <h2 className="text-[5rem] font-light text-black ">{profile.prefix}</h2>
      </div>

      {/* Profile Picture */}
      <div className="absolute top-[20rem] right-[25rem] w-[25rem] h-[25rem] rounded-full border-[1.5rem] border-[#fff] overflow-hidden z-10">
        <img
          src="https://via.placeholder.com/120"
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>
    </header>
  );
};

export default header;
