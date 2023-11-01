import React from "react";

const Loading = () => {
  return (
    <div className="absolute inset-0 grid grid-cols-1 place-content-center">
      <div className="text-white text-4xl text-center">
        <p className="animate-pulse">Loading...</p>
      </div>
    </div>
  );
};

export default Loading;
