"use client";

import React, { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { MoveLeft, MoveRight } from "lucide-react";
import { img } from "framer-motion/client";
import Image from "next/image";

const baristas = [
  { name: "Ayesha Khan", role: "Head Barista",img:"/workers/1.jpg" },
  { name: "Ali Raza", role: "Latte Artist",img:"/workers/2.jpg" },
  { name: "Sara Ahmed", role: "Coffee Specialist",img:"/workers/3.jpg" },
  { name: "Usman Tariq", role: "Roasting Expert",img:"/workers/4.webp" },
  { name: "Hina Malik", role: "Cold Brew Master",img:"/workers/2.jpg" },
  { name: "Sara Ahmed", role: "Coffee Specialist",img:"/workers/3.jpg" },
  { name: "Usman Tariq", role: "Roasting Expert",img:"/workers/4.webp" },
  { name: "Hina Malik", role: "Cold Brew Master",img:"/workers/1.jpg" },
];

export default function BaristaCarousel() {
  const autoplay = Autoplay({
    delay: 2000,
    stopOnInteraction: false,
    stopOnMouseEnter: true,
  });

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      containScroll: "trimSnaps", // 🔥 important
    },
    [autoplay]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("pointerDown", autoplay.stop);
    emblaApi.on("pointerUp", autoplay.reset);
  }, [emblaApi, autoplay]);

  return (
    <div className="relative w-full py-16">
          {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl Satisfy  mb-6">
            Our Barista
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            Meet our hard working baristas who craft your perfect cup of coffee with passion and expertise.
          </p>
        </div>
      {/* Buttons */}


      {/* Carousel */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex py-16">
          {baristas.map((barista, index) => {
            const offset =
              index % 2 === 0
                ? "md:translate-y-[20px]"
                : "md:-translate-y-[20px]";

            return (
              <div
                key={index}
                className={`flex-[0_0_90%] sm:flex-[0_0_60%] md:flex-[0_0_33%] lg:flex-[0_0_25%] px-4 ${offset}`}
              >
                <div className="h-[320px] w-full bg-white rounded-3xl shadow-xl p-6 flex flex-col items-center justify-center transition-transform duration-500 hover:scale-105">
                  <div className="w-34 h-34 rounded-full bg-gray-200 mb-4" >
                     <Image src={barista.img} className="w-full h-full object-cover rounded-full" width={100} height={100} alt="barista" />
                  </div>

                  <h3 className="text-xl font-semibold">
                    {barista.name}
                  </h3>
                  <p className="text-gray-500">
                    {barista.role}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full flex items-center justify-center gap-6 mt-6">
         
              <button
                     onClick={scrollPrev}
                     className=" bg-white shadow-md px-4 py-2 rounded-full hover:scale-105 transition"
                   >
                     <MoveLeft size={20} />
                   </button>
         
                   <button
                     onClick={scrollNext}
                     className=" bg-white shadow-md px-4 py-2 rounded-full hover:scale-105 transition"
                   >
                     <MoveRight size={20} />
                   </button>
{/* 
            <button
        onClick={scrollPrev}
        className=" bg-black text-white p-3 rounded-full"
        >
        <MoveLeft />
      </button>

      <button
        onClick={scrollNext}
        className=" bg-black text-white p-3 rounded-full"
      >
        <MoveRight />
      </button> */}
         </div>
    </div>
  );
}