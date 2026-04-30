import React from "react";
import Image from "next/image";

const images = [
  "/gallery/1.jpg",
  "/gallery/2.jpg",
  "/gallery/3.jpg",
  "/gallery/4.jpg",
  "/gallery/5.jpg",
  "/gallery/6.jpg",
  "/gallery/7.jpg",
  "/gallery/8.jpg",
];

const Gallery = () => {
  return (
    <section className="w-full py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl Satisfy  mb-6">
            Gallery
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            A minimal bento-style layout showcasing visuals.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[175px] gap-4">
          
          {/* Large Box */}
          <div className="col-span-2 row-span-2 relative rounded-xl overflow-hidden">
            <Image src={images[0]} alt="gallery" width={400} height={400} loading="eager" className="object-cover w-full" />
          </div>

          {/* Medium */}
          <div className="col-span-2 relative rounded-xl overflow-hidden">
            <Image src={images[1]} alt="gallery" width={400} height={400} loading="eager" className="object-cover w-full" />
          </div>

          {/* Small */}
          <div className="relative rounded-xl overflow-hidden">
            <Image src={images[2]} alt="gallery" width={400} height={400} loading="eager" className="object-cover w-full" />
          </div>

          <div className="relative rounded-xl overflow-hidden">
            <Image src={images[3]} alt="gallery" width={400} height={400} loading="eager" className="object-cover w-full" />
          </div>

          {/* Wide */}
          <div className="col-span-2 relative rounded-xl overflow-hidden">
            <Image src={images[4]} alt="gallery" width={400} height={400} loading="eager" className="object-cover w-full" />
          </div>

          {/* Small */}
          <div className="relative rounded-xl overflow-hidden">
            <Image src={images[5]} alt="gallery" width={400} height={400} loading="eager" className="object-cover w-full" />
          </div>

          <div className="relative rounded-xl overflow-hidden">
            <Image src={images[6]} alt="gallery" width={400} height={400} loading="eager" className="object-cover w-full" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Gallery;