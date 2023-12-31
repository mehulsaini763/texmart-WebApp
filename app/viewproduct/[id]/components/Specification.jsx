import React, { useState } from "react";

const Specification = ({ specification }) => {
  const [fullView, setFullView] = useState(false);
  return (
    <div
      className={`relative bg-neutral-900 p-4 lg:p-8 text-white font-semibold rounded-md text-xl space-y-4 ${
        fullView ? "h-fit" : "h-96"
      } overflow-hidden`}
    >
      <div className="space-y-2">
        <p>Specification</p>
        <hr className="border-neutral-700" />
      </div>
      <div className="space-y-4">
        {Object.keys(specification).map((key, i) => {
          if (!fullView) {
            if (i > Object.keys(specification).length / 5) {
              return;
            }
          }
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
        <div className="absolute bottom-0 inset-x-0 bg-neutral-900 p-4">
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

export default Specification;
