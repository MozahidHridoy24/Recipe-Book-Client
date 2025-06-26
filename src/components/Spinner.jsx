import React from "react";

const Spinner = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/10 backdrop-blur-sm">
      <span className="loading loading-spinner loading-lg text-orange-500"></span>
    </div>
  );
};

export default Spinner;
