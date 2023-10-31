import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import React from "react";

const ButtonLeft = () => {
  return (
    <div className="bg-neutral-950 p-2 h-full rounded-md flex items-center">
      <ChevronLeftIcon className="w-6 h-6 text-white" />
    </div>
  );
};

export default ButtonLeft;
