import React from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import useScreenSize from "@/app/customHook/useScreenSize";

const Specification = ({ specification }) => {
  const screenSize = useScreenSize()
if(screenSize>=1024){
  return (
    <div className="bg-neutral-900 p-8 text-white font-semibold rounded-md text-xl space-y-4">
      <div className="flex justify-between items-center">
        <p>Specification</p>
        <ChevronDownIcon className="w-6 h-6" />
      </div>
      <div className="space-y-4">
        {Object.keys(specification).map((key) => {
          return (
            <>
              <div className="text-lg">{key}</div>
              <div className="grid p-2 grid-cols-3 gap-16">
                {specification[key].map((o) => (
                  <>
                    <div>
                      <p className="font-thin text-base">{o.title}</p>
                      <p className="text-base">{o.data}</p>
                    </div>
                  </>
                ))}
              </div>
              <hr className="border-neutral-600"/>
            </>
          );
        })}
      </div>
    </div>
  );

}else{
  return (
    <div className="bg-neutral-900 p-2 text-white font-semibold rounded-md text-lg space-y-2">
      <div className="flex justify-between px-2">
        <p>Specification</p>
        <ChevronDownIcon className="w-4 h-4" />
      </div>
      <div className="space-y-2 px-2">
        {Object.keys(specification).map((key) => {
          return (
            <>
              <div className="text-base">{key}</div>
              <div className="grid grid-cols-2 gap-12">
                {specification[key].map((o) => (
                  <>
                    <div>
                      <p className="font-thin text-sm">{o.title}</p>
                      <p className="text-sm">{o.data}</p>
                    </div>
                  </>
                ))}
              </div>
              <hr className="border-neutral-600"/>
            </>
          );
        })}
      </div>
    </div>
  );

}
};

export default Specification;
