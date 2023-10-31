import { ChevronRightIcon } from "@heroicons/react/24/solid";
import React from "react";

const ButtonRight = () => {
  return (
    <div className="bg-neutral-950 p-2 h-full rounded-md flex items-center">
      <ChevronRightIcon className="w-6 h-6 text-white" />
    </div>
  );
};

export default ButtonRight;
