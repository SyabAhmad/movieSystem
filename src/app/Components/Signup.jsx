import React from "react";

const Signup = () => {
  return (
    <>
      <div className="w-[280px] h-[280px] bg-[#9E2F93] blur-[25px] opacity-[0.6] border border-white rounded-full ml-48 mt-[-200px] absolute z-0"></div>
      <div className="w-[280px] h-[280px] bg-[#C11B1B] blur-[25px] opacity-[0.6] border border-white rounded-full ml-48 mt-[400px] absolute z-0"></div>
      <div className="w-[280px] h-[280px] bg-[#2F479E] blur-[25px] opacity-[0.6] border border-white rounded-full ml-[-200px] mt-[100px] absolute z-0"></div>
      <div className="border w-[400px] h-[500px] p-8 rounded-xl bg-[#2f479e]">
        <div className="flex flex-col gap-2 ">
          <input
            type="text"
            id="userName"
            className="border border-[#9E2F93]"
          />
          <input type="mail" id="mail" className="border border-[#9E2F93]" />
          <input
            type="password"
            id="password"
            className="border border-[#9E2F93]"
          />
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Signup;
