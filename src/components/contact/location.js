import React from 'react'

const Location = () => {
  return (
          <div className="mt-20 w-full md:h-[520px] h-[300px]  overflow-hidden">
          <iframe
              src="https://www.google.com/maps?q=40.7161248,-73.9927662&z=17&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
          ></iframe>
        </div>
  )
}

export default Location
