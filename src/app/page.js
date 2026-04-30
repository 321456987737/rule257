import HeroSection from "@/components/herosection"
import Welcome from "@/components/home/welcome"
import Menusection from "@/components/home/menu"
import About from "@/components/home/about"
import Gallery from "@/components/home/gallery"
import TestimonialCarousel   from "@/components/home/testimonials" 
import BaristaCarousel from "@/components/home/barista"
import Location from "@/components/home/location"
export default function Home() {
  return (
    <div>
      <HeroSection  img="/hand.jpg" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id veniam
          illo veritatis, qui magni consequuntur quas exercitationem nulla?
          Delectus nihil aliquam illum labore sapiente nobis!" title="The title"/>
      <Welcome/>
      <About/>
      <Menusection/>
      <Gallery />
      <BaristaCarousel/> 
      <TestimonialCarousel/>
      <Location />
    </div>
  );
}
