import { ProfileProps } from "@/types/resume";
import React from "react";
import Image from "next/image";

interface HeaderProps {
  profile: ProfileProps;
  isImage?: boolean;
}

const Header: React.FC<HeaderProps> = ({ profile, isImage }) => {
  return (
    <header className="relative pb-[15rem] pt-[5rem] px-32">
      <div className="clip-path-header w-full h-full absolute top-0 left-0 bg-[#8ea59b]"></div>
      <div className="relative justify-start items-center pl-14">
        <h1 className="text-[8rem] font-normal text-black">{profile.name}</h1>
        <h2 className="text-[4.5rem] font-light text-black">
          {profile.prefix}
        </h2>
      </div>

      {isImage && (
        <div className="absolute top-[12rem] right-[30rem] w-[25rem] h-[25rem] rounded-full border-[1.5rem] border-[#fff] overflow-hidden z-10">
          <Image
            src="/bg-img.jpg"
            alt="Profile"
            className="w-full h-full object-cover "
            layout="fill"
          />
        </div>
      )}
    </header>
  );
};

export default Header;
