"use client";
import { useEffect, useState } from "react";
import { IResumeProps } from "./IResumeProps";

export default function Home() {
  const [data, setData] = useState(null as IResumeProps | null);

  useEffect(() => {
    fetch("/resume.json")
      .then((res) => res.json())
      .then(setData)
      .catch((err) => console.error("Error loading JSON:", err));
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div className="w-[840mm] h-[1188mm] mx-auto shadow-lg">
      {/* Header */}
      <header className="relative pb-[20rem] pt-[10rem] px-32">
        <div className="clip-path-header w-full h-full absolute top-0 left-0 bg-[#8ea59b]"></div>
        <div className="relative justify-start items-center">
          <h1 className="text-[10rem] font-normal letter-spacing uppercase text-black">
            {data.header.name}
          </h1>
          <h2 className="text-[5rem] font-light uppercase letter-spacing text-black ">
            {data.header.title}
          </h2>
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

      {/* Content */}
      <div className="flex w-full h-full pt-[5rem] px-[15rem]">
        {/* Left Column */}
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

        {/* Right Column */}
        <section className="flex-grow h-full bg-orange-300">
          <h3 className="text-[6rem] font-bold text-black mb-4 uppercase letter-spacing">
            {data.profile.heading}
          </h3>
          <p className="text-gray-600 leading-relaxed text-justify">
            {data.profile.description}
          </p>
        </section>
      </div>
    </div>
  );
}
