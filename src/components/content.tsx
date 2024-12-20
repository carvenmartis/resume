import React, { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="flex w-full h-full pt-[5rem] px-[15rem] gap-10">
      {children}
    </div>
  );
};

export default Container;
