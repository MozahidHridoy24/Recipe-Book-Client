import React from "react";

const Spinner = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 rounded-full border-t-4 border-orange-500 animate-spin" />
        <div className="absolute inset-2 rounded-full bg-orange-100" />
      </div>
    </div>
  );
};

export default Spinner;
