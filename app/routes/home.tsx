import React from 'react'
import Gallarey from '~/components/Gallarey'

import Hero from '~/components/Hero'
import ImpactBanner from '~/components/Impact'
import Location from '~/components/Location'
import Navbar from '~/components/Navbar'
import News from '~/components/News'
import OurPillars from '~/components/OurPillars'
import Partners from '~/components/Partners'
import Services from '~/components/services/Services'
import Test from '~/components/Test'
import Testimonials from '~/components/Testimonials'


const home = () => {
  return (
    <div>
      <Navbar />
      <Hero/>

      <Location/>
      <OurPillars/>
      <Services/>
      <ImpactBanner/>
      <Partners/>
      <News/>
     {/* <Hero/>

     <section id="services" className="scroll-mt-28">
      <Services/>
     </section>
          <section id="about" className="scroll-mt-28">
      <Gallarey/>
     </section>
     <section id="testimonials" className="scroll-mt-28">
      <Testimonials/>
     </section>
     <section id="contact-location" className="scroll-mt-28">
      <Location/>
     </section> */}

     <Test/>
    </div>
  )
}

export default home
