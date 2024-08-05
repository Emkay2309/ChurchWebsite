import React from "react";
type HeadingProps = {
  children: React.ReactNode;
};

const Shadow: React.FC<HeadingProps> = ({ children }) => {
  return (
    <h1 className="text-4xl font-bold text-center text-gray-800 bg-[#d5d1d1] p-6 rounded-lg shadow-lg shadow-gray-200">
      {children}
    </h1>
  );
};

export default Shadow;
