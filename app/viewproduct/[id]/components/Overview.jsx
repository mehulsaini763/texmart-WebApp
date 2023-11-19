import React, { useState } from "react";

const Overview = ({ overview }) => {
  const [fullView, setFullView] = useState(false);

  return (
    <div
      className={`relative bg-neutral-900 p-4 lg:p-8 text-white font-semibold rounded-md text-xl space-y-4 ${
        fullView ? "h-fit" : "h-96"
      } overflow-hidden`}
    >
      <div className="space-y-2">
        <p>Overview</p>
        <hr className="border-neutral-700" />
      </div>
      <div className="whitespace-break-spaces font-thin lg:text-base text-sm">
        {overview}
        <hr className="border-neutral-700 my-2" />
        <div className="absolute bottom-0 inset-x-0 bg-neutral-900 p-4 font-semibold">
          {!fullView ? (
            <button
              className="border rounded-md w-full text-base p-2 lg:text-xl"
              onClick={() => setFullView(true)}
            >
              View More
            </button>
          ) : (
            <button
              className="border rounded-md w-full text-base p-2 lg:text-xl"
              onClick={() => setFullView(false)}
            >
              View Less
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Overview;
