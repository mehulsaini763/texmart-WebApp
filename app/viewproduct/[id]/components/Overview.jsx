import React from "react";

const Overview = ({ overview }) => {
  return (
    <div className="bg-neutral-900 p-2 text-white font-semibold rounded-md text-lg  lg:p-4 space-y-2">
      <div className="flex justify-between px-2 items-center lg:text-2xl">
        <p>Overview</p>
      </div>
      <div className="whitespace-break-spaces font-thin lg:text-base text-sm px-2">
        {`${overview}`}
      </div>
    </div>
  );
};

export default Overview;
