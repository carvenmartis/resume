import React from "react";

const Footer = ({ pageNumber }: { pageNumber: number }) => {
  return (
    <footer className="h-[12rem] flex justify-end pr-[12rem]">
      <p className="text-[2.5rem] text-gray-600">{pageNumber}</p>
    </footer>
  );
};

export default Footer;
