import { ProfileProps } from "@/types/resume";
import React from "react";

interface HeaderProps {
  profile: ProfileProps;
  image?: string;
}

const Header: React.FC<HeaderProps> = ({ profile, image }) => {
  return (
    <header className="relative pb-60 pt-20 px-32">
      <div className="clip-path-header w-full h-full absolute top-0 left-0 theme-bg-color"></div>
      <div className="relative justify-start items-center pl-14">
        <h1 className="text-[8rem] font-normal">
          {profile.firstName} {profile.lastName}
        </h1>
        <h2 className="text-[4.5rem] font-light">{profile.prefix}</h2>
      </div>

      {image && (
        <div className="absolute top-48 right-120 w-100 h-100 rounded-full border-[1.5rem] border-white overflow-hidden z-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image}
            alt="Profile"
            className="object-cover w-full h-full"
          />
        </div>
      )}
    </header>
  );
};

export default Header;
