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
      {contact.location && (
        <div className="flex items-center gap-5 pt-[6rem]">
          <div className="w-16 h-16 bg-[#8ea59b] text-white rounded-full flex justify-center items-center">
            <i className="bx bxs-map text-[2rem]"></i>
          </div>
          <p className="">{contact.location}</p>
        </div>
      )}

      {contact.phone && (
        <div className="flex items-center gap-5">
          <div className="w-16 h-16 theme-bg-color text-white rounded-full flex justify-center items-center">
            <i className="bx bxs-phone text-[2rem]"></i>
          </div>
          <p className="">{contact.phone}</p>
        </div>
      )}

      {contact.email && (
        <div className="flex items-center gap-5">
          <div className="w-16 h-16 theme-bg-color text-white rounded-full flex justify-center items-center">
            <i className="bx bxs-envelope text-[2rem]"></i>
          </div>
          <p className="">{contact.email}</p>
        </div>
      )}
    </div>
  );
};

export default Contact;
