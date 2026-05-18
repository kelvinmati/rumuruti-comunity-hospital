import React from 'react'

import Hero from '~/components/Hero'
import Location from '~/components/Location'
import Services from '~/components/Services'
import Testimonials from '~/components/Testimonials'


const home = () => {
  return (
    <div>
     <Hero/>
     <Services/>
     <Testimonials/>
     <Location/>
    </div>
  )
}

export default home
