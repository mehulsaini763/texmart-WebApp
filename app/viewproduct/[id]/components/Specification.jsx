import React from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const Specification = ({ specification }) => {
  return (
    <div className="bg-neutral-900 p-4 lg:p-8 text-white font-semibold rounded-md text-xl space-y-4">
      <div className="flex justify-between items-center">
        <p>Specification</p>
        <ChevronDownIcon className="w-6 h-6" />
      </div>
      <div className="space-y-4">
        {Object.keys(specification).map((key) => {
          return (
            <div key={key}>
              <div className="text-base lg:text-lg">{key}</div>
              <div className="grid p-2 grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16">
                {specification[key].map((o) => (
                  <div key={o.title}>
                    <div>
                      <p className="text-sm lg:text-base">{o.title}</p>
                      <p className="font-thin text-sm lg:text-base">{o.data}</p>
                    </div>
                  </div>
                ))}
              </div>
              <hr className="border-neutral-600" />
            </div>
          );
        })}
      </div>
    </div>
  );

};

export default Specification;
