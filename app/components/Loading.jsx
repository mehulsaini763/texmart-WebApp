import React from "react";

const Loading = () => {
  return (
    <div className="absolute inset-0 grid grid-cols-1 place-content-center">
      <div className="text-white text-6xl text-center">
        <p>Loading....</p>
      </div>
    </div>
  );
};

export default Loading;
