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
      <section id="home">
        <Hero />
      </section>
      <section id="about" className="scroll-mt-20">
        <OurPillars />
      </section>
      <section id="services" className="scroll-mt-20">
        <Services />
      </section>
      <ImpactBanner />
      <section id="partners" className="scroll-mt-20">
        <Partners />
      </section>
      <section id="testimonials" className="scroll-mt-20">
        <Test />
      </section>
      <section id="contact" className="scroll-mt-20">
        <Location />
      </section>
    </div>
  )
}

export default home
