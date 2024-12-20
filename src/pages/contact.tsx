import { ContactProps } from "@/types/resume";
import React from "react";

const Contact = ({
  contact,
  className,
}: {
  contact: ContactProps;
  className?: string | "";
}) => {
  return (
    <div className={className}>
      <div className="flex items-center gap-3 pt-[6rem]">
        <div className="p-2 bg-[#8ea59b] text-white rounded-full flex justify-center items-center">
          <i className="bx bxs-map"></i>
        </div>
        <p className="">{contact.location}</p>
      </div>
      <div className="flex items-center gap-3">
        <div className="p-2 theme-bg-color text-white rounded-full flex justify-center items-center">
          <i className="bx bxs-phone"></i>
        </div>
        <p className="">{contact.phone}</p>
      </div>
      <div className="flex items-center gap-3">
        <div className="p-2 theme-bg-color text-white rounded-full flex justify-center items-center">
          <i className="bx bxs-envelope "></i>
        </div>
        <p className="">{contact.email}</p>
      </div>
    </div>
  );
};

export default Contact;
