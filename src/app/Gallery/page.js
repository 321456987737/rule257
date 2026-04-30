import React from 'react'
import Herosection from '@/components/herosection'
import Gallery from '@/components/gallery'
const Page = () => {
  return (
    <div>
          <Herosection
        img="/hand.jpg"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id veniam
                illo veritatis, qui magni consequuntur quas exercitationem nulla?
                Delectus nihil aliquam illum labore sapiente nobis!"
        title="Our Gallery"
      />
      <Gallery />

    </div>
  )
}

export default Page
