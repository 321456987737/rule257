import React from 'react'
import Herosection from '@/components/herosection'
import Location from '@/components/location'
const Page = () => {
  return (
    <div>
  <Herosection
        img="/hand.jpg"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id veniam
                illo veritatis, qui magni consequuntur quas exercitationem nulla?
                Delectus nihil aliquam illum labore sapiente nobis!"
        title="Our Location"
      />
      <Location />

    </div>
  )
}

export default Page
