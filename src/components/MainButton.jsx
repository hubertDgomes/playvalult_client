import React from "react";

const MainButton = ({ text }) => {
  return (
    <>
      <button className="bg-[#19e5f0] border px-6 py-3 text-black rounded-[8px] cursor-pointer font-extrabold">
        {text}
      </button>
    </>
  );
};

export default MainButton;
