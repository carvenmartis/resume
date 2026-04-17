import React from "react";

const Footer = ({ pageNumber }: { pageNumber: number }) => {
  return (
    <footer className="h-48 flex justify-end pr-48">
      <p className="text-[2.5rem] text-gray-600 dark:text-gray-400">
        {pageNumber}
      </p>
    </footer>
  );
};

export default Footer;
