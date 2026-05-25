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
      <HeroSection  img="/hand.jpg" desc="From expertly brewed espresso to freshly baked treats, every visit is designed to make you slow down, relax, and enjoy the moment." title="Crafted Coffee, Served with Passion"/>
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
