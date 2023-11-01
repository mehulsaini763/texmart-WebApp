import React from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const Overview = ({overview}) => {
  return (
    <div className="bg-neutral-900 p-2 text-white font-semibold rounded-md text-lg space-y-2">
      <div className="flex justify-between px-2 items-center">
        <p>Overview</p>
        <ChevronDownIcon className="w-4 h-4" />
      </div>
      <div className="whitespace-break-spaces font-thin text-sm px-2">
      {`${overview}`}
      </div>
    </div>
  );
};

export default Overview;
