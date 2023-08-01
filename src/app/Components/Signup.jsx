import React from "react";

const Signup = () => {
  return (
    <>
      <div className="md:w-[280px] md:h-[280px] w-[120px] h-[120px] bg-[#9E2F93] blur-[25px] opacity-[0.6] border border-white rounded-full ml-36 mt-[-100px] md:ml-36 md:mt-[-200px] absolute z-0"></div>
      <div className="md:w-[280px] md:h-[280px] w-[120px] h-[120px] bg-[#C11B1B] blur-[25px] opacity-[0.6] border border-white rounded-full ml-60 mt-[250px] md:ml-60 md:mt-[400px] absolute z-0"></div>
      <div className="md:w-[280px] md:h-[280px] w-[120px] h-[120px] bg-[#2F479E] blur-[25px] opacity-[0.6] border border-white rounded-full ml-[-50px] mt-[100px] md:ml-[-100px] md:mt-[200px] absolute z-0"></div>

      <div className="flex flex-col flex-wrap justify-center items-center  gap-8 border md:w-[400px] md:h-[500px] p-8 rounded-xl bg-[#2f479e] ">
        <div className="flex flex-col flex-wrap gap-2 ">
          <input
            type="text"
            id="userName"
            className="border-b border-white p-1 pl-3 bg-transparent focus:bg-transparent focus:outline-none text-white"
            placeholder="User Name"
          />
          <input
            type="mail"
            id="mail"
            className="border-b border-white p-1 pl-3 bg-transparent focus:bg-transparent focus:outline-none text-white"
            placeholder="Email address"
          />
          <input
            type="password"
            id="password"
            className="border-b border-white p-1 pl-3 bg-transparent focus:bg-transparent focus:outline-none text-white"
            placeholder="Password"
          />
        </div>
        <div>
          <div>
            <hr />
          </div>
          <div className="flex gap-2 justify-center items-center mt-10">
            <img
              className="border rounded-full w-16 h-16"
              src="https://th.bing.com/th?q=LinkedIn+New+Logo&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-WW&cc=PK&setlang=en&adlt=moderate&t=1&mw=247"
              alt=""
            />
            <img
              className="border rounded-full w-20 h-20"
              src="https://th.bing.com/th?q=LinkedIn+New+Logo&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-WW&cc=PK&setlang=en&adlt=moderate&t=1&mw=247"
              alt=""
            />
            <img
              className="border rounded-full w-16 h-16"
              src="https://th.bing.com/th?q=LinkedIn+New+Logo&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-WW&cc=PK&setlang=en&adlt=moderate&t=1&mw=247"
              alt=""
            />
          </div>
        </div>
        <div>
          <button className="text-[#2F479E] bg-white p-2 w-40 border border-white rounded-xl shadow-light-100 hover:opacity-[.4] hover:text-stroke-yellow-50 transition .2s ease-out">
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default Signup;
