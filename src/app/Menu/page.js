import React from 'react'
import Herosection from "@/components/herosection";
import Menu from "@/components/menu/menu";  
const Page = () => {
  return (
    <div>
         {/* HERO SECTION */}
      <Herosection
        img="/hand.jpg"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id veniam
                illo veritatis, qui magni consequuntur quas exercitationem nulla?
                Delectus nihil aliquam illum labore sapiente nobis!"
        title="Our Menu"
      />
      <Menu />
    </div>
  )
}

export default Page
