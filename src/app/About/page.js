import Herosection from "@/components/herosection";
import React from "react";
import OurStoryTimeline from "@/components/about/journey";
import CafeExperienceProfessional from "@/components/about/experience";
import Ourphilosophy from "@/components/about/ourphilosophy";
import BaristaCarousel from "@/components/home/barista";
const Page = () => {
  return (
    <div>
      <Herosection
        img="/hand.jpg"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id veniam
          illo veritatis, qui magni consequuntur quas exercitationem nulla?
          Delectus nihil aliquam illum labore sapiente nobis!"
        title="About Us"
      />
      <OurStoryTimeline />
      <CafeExperienceProfessional />
      <Ourphilosophy />
      <BaristaCarousel />
    </div>
  );
};

export default Page;
