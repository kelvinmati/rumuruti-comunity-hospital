import React from 'react'
import Gallarey from '~/components/Gallarey'

import Hero from '~/components/Hero'
import Location from '~/components/Location'
import Services from '~/components/Services'
import Testimonials from '~/components/Testimonials'


const home = () => {
  return (
    <div>
     <Hero/>
     <section id="about" className="scroll-mt-28">
      <Gallarey/>
     </section>
     <section id="services" className="scroll-mt-28">
      <Services/>
     </section>
     <section id="testimonials" className="scroll-mt-28">
      <Testimonials/>
     </section>
     <section id="contact-location" className="scroll-mt-28">
      <Location/>
     </section>
    </div>
  )
}

export default home
