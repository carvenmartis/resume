export const Panel = ({
  side,
  className = "",
  children,
}: {
  side: "left" | "right";
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={`flex flex-col ${
        side === "left" ? "w-1/4" : "w-3/4 "
      } ${className}`}
    >
      {children}
    </div>
  );
};
