import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section className="w-full py-16 bg-white px-6">
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* Text Content */}
        <div>
          <h2 className="text-4xl md:text-5xl  mb-5 Satisfy text-center md:text-left">
            About Us
          </h2>

          <p className="text-gray-600 text-sm md:text-base mb-8 text-center md:text-left">
            We focus on delivering high-quality coffee experiences with a blend
            of modern design and authentic taste. Our goal is to create a space
            where people can relax, connect, and enjoy every sip.
          </p>
            <div className="w-full h-full flex items-center justify-center md:justify-start ">

          <button className="px-8 py-3 hover:bg-black  hover:text-white border cursor-pointer border-2 Satisfy rounded-lg text-md hover:opacity-90 transition">
            Learn More
          </button>
            </div>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <div className="overflow-hidden rounded-xl">
            <Image
              src="/coffeemachine.jpg"
              alt="Coffee Machine"
              width={400}
              height={400}
              loading="eager"
              className="object-cover md:w-[360px] w-[280px] rounded-xl"
            />
          </div>
        </div>

      </div>

    </section>
  );
};

export default About;