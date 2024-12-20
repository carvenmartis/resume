import React from "react";

const Footer = ({ pageNumber }: { pageNumber: number }) => {
  return (
    <div className="mx-auto w-[80%] flex justify-end">
      <p className="text-[2.5rem] text-gray-600">{pageNumber}</p>
    </div>
  );
};

export default Footer;
