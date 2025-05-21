import React from "react";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-60">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 border-4 border-orange-400 rounded-full border-t-transparent animate-spin"></div>
        <div className="absolute inset-2 border-4 border-yellow-300 rounded-full border-b-transparent animate-spin-reverse"></div>
      </div>
    </div>
  );
};

export default Spinner;
