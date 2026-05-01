"use client";
import Image from "next/image";
import React from "react";

const Herosection = ({img,index,title,desc}) => {
  return (
    <div className="w-full relative md:h-screen h-[80vh] flex flex-col items-center justify-between gap-10 ">
      <Image
        src={"/bean.jpg"}
        alt="400"
        width={300}
        height={300}
        className="w-10 h-10 md:flex absolute top-1/2 left-1/4 hidden rotate-45"
      />
      <Image
        src={"/bean.jpg"}
        alt="400"
        width={300}
        height={300}
        className="w-10 h-10 md:flex absolute top-5/8 left-1/5 hidden rotate-90"
      />
      <Image
        src={"/bean.jpg"}
        alt="400"
        width={300}
        height={300}
        className="w-10 h-10 md:flex absolute top-1/2 right-1/4 hidden rotate-135"
      />
      <Image
        src={"/bean.jpg"}
        alt="400"
        width={300}
        height={300}
        className="w-10 h-10 md:flex absolute top-2/3 left-2/3 hidden rotate-180"
      />
      <Image
        src={"/bean.jpg"}
        alt="400"
        width={300}
        height={300}
        className="w-10 h-10 md:flex absolute top-5/8 right-1/5 hidden rotate-270"
      />
      <Image
        src={"/bean.jpg"}
        alt="400"
        width={300}
        height={300}
        className="w-10 h-10 md:flex absolute top-2/3 right-2/3 hidden"
      />
      <div className="w-full h-full  flex flex-col items-center justify-end  md:gap-4 gap-3 px-3">
        <div className="text-4xl md:text-5xl  text-center Satisfy">
          {title}
        </div>
        <div className=" md:max-w-[550px] text-center mx-auto ">
       
          {desc}
        </div>
      </div>
      <div>
        <Image
        src={img}
          // src={"/hand.jpg"}
          alt="400"
          width={300}
          height={300}
          className="h-full md:w-[280px] w-[270px] "
          loading="eager"
        />
      </div>
    </div>
  );
};

export default Herosection;

// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";

// export default function HeroSection() {
//   return (
//     <section className="w-full min-h-screen flex items-center justify-center bg-white px-6">
//       <div className="max-w-5xl w-full text-center border border-gray-300 rounded-2xl py-16 px-6">

//         {/* Text Content */}
//         <motion.div
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className=""
//         >
//           <h1 className="text-3xl md:text-5xl font-semibold mb-4">
//             The Title
//           </h1>

//           <p className="text-gray-600 text-base md:text-lg max-w-xl mx-auto">
//             This is the description. Keep it short, clean, and centered for a professional look.
//           </p>
//         </motion.div>

//         {/* Image */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           className="flex justify-center"
//         >
//           <div className="w-48 h-64 md:w-60 md:h-80 border border-gray-400 rounded-lg flex items-center justify-center">
//             <Image src={"/hand.jpg"} alt="Hand over here" width={4000} height={1000} className="w-full h-full" />
//           </div>
//         </motion.div>

//       </div>
//     </section>
//   );
// }
