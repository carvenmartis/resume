import React, { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="flex w-full h-[85%] px-[11rem] gap-10">{children}</div>
  );
};

export default Container;
