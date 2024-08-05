import React from "react";
type HeadingProps = {
  children: React.ReactNode;
};

const Heading: React.FC<HeadingProps> = ({ children }) => {
  return (
    <h1 className="text-4xl font-semibold text-center text-gray-400 p-6 rounded-xl ">
      {children}
    </h1>
  );
};

export default Heading;
