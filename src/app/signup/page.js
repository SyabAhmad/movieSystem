import React from "react";
import Signup from "../Components/Signup";
const page = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen overflow-hidden">
        <div>
          <Signup />
        </div>
      </div>
    </>
  );
};

export default page;
