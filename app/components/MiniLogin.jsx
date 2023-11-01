import React from "react";

const MiniLogin = ({ setShowUser, setShowLogin }) => {
  function handleClick() {
    setShowUser(false);
    setShowLogin(true);
  }
  return (
    <div className="absolute right-0 z-20">
      <div className="bg-neutral-900 text-white h-max w-max my-5 rounded-md px-6 py-4 space-y-4">
        <button
          className="bg-yellow-300 text-black font-bold px-4 py-2 rounded-md"
          onClick={handleClick}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default MiniLogin;
