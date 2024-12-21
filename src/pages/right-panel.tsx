import React from "react";

interface RightPanelProps {
  children: React.ReactNode;
  className?: string;
}

const RightPanel: React.FC<RightPanelProps> = ({ children, className }) => {
  return (
    <section className={`flex-grow h-full ${className}`}>{children}</section>
  );
};

export default RightPanel;
