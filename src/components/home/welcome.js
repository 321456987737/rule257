import React from "react";

const Welcome = () => {
  return (
<section className="w-full h-[30vh] md:h-[40vh] flex items-center justify-center bg-[#FEFCF8]">
  <div className="text-center max-w-xl px-4">
    <h1 className="text-4xl md:text-5xl Satisfy  mb-5">
      Welcome
    </h1>
    <p className="text-gray-600  md:text-base">
      Clean and minimal introduction text.
    </p>
  </div>
</section>
  );
};

export default Welcome;