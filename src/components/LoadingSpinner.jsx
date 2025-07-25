import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center mt-6">
      <div className="w-10 h-10 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export default LoadingSpinner;
