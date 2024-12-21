import React from "react";

interface LeftPanelProps {
  children: React.ReactNode;
  className?: string;
}

const LeftPanel: React.FC<LeftPanelProps> = ({ children, className }) => {
  return (
    <section
      className={`w-1/3 h-full mr-4 space-y-[10rem] text-gray-600 ${className}`}
    >
      {children}
    </section>
  );
};

export default LeftPanel;
