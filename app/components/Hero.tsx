import { ArrowRight, Calendar, Clock, HeartPulse, MapPin, Phone, ShieldCheck, Users } from 'lucide-react'
import React from 'react'
import logo from "../../public/logo-removebg-preview.png"
import hero from "../../public/hero.jpeg"
const Hero = () => {
  return (
    <section className="relative  ">
      <div
        className="pointer-events-none  inset-0"
        style={{
          background:
            'radial-gradient(60rem 30rem at 10% 10%, color-mix(in srgb, var(--color-secondary-blue) 16%, white), transparent 70%), radial-gradient(50rem 26rem at 100% 5%, color-mix(in srgb, var(--color-pink) 12%, white), transparent 75%), linear-gradient(135deg, color-mix(in srgb, var(--color-primary-blue) 8%, white), #ffffff 62%)'
        }}
      />
      
        <div className="bg-primary-blue text-white py-2 px-6 flex justify-between items-center text-sm">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1"><Phone size={14} /> Emergency: +254 700 000 000</span>
              <span className="hidden md:flex items-center gap-1"><Clock size={14} /> 24/7 Care</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1"><MapPin size={14} /> Rumuruti Town, Kenya</span>
            </div>
        </div>

          <div>



            <nav className="sticky w-[90%] mx-auto top-0 z-50  backdrop-blur-md  flex justify-between items-center"            >
        {/* <div className="flex items-center gap-2">
          <div className="bg-blue-600 p-2 rounded-lg">
            <Activity className="text-white" size={24} />
          </div>
          <span className="text-xl font-bold tracking-tight text-blue-900">Rumuruti Community</span>
        </div> */}
        <div>
          <img  src={logo}  className='h-[180px] '  alt="Rumuruti Community Hospital" />
        </div>
        <div className="hidden md:flex gap-8 font-medium text-slate-600">
      <a href="#" className="hover:text-blue-600 transition">Home</a>
          <a href="#" className="hover:text-blue-600 transition">About us</a>
          <a href="#" className="hover:text-blue-600 transition">Our services</a>
          <a href="#" className="hover:text-blue-600 transition">Testimonials</a>
          <a href="#" className="hover:text-blue-600 transition">Contact & location</a>
        </div>
        <div className='flex gap-3'>
                  <button className="bg-pink text-white px-5 py-2.5 rounded-full font-semibold transition flex items-center gap-2">
          <Calendar size={18} />Donate
        </button>
                <button className="bg-primary-blue text-white px-5 py-2.5 rounded-full font-semibold transition flex items-center gap-2">
          <Calendar size={18} /> Book Appointment
        </button>
        </div>
      </nav>
    </div>

      <div className="relative mx-auto grid max-w-[90%] items-center gap-12 md:grid-cols-2">
        <div>


          <h1
            className="mt-6 text-4xl font-extrabold leading-tight md:text-6xl"
            style={{ color: 'var(--color-primary-blue)' }}
          >
            Better health access starts
            <span className="block" style={{ color: 'var(--color-pink)' }}>
              with community support.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
            Rumuruti Community Hospital delivers compassionate, high-quality treatment to patients of all
            backgrounds, making reliable healthcare available when it matters most.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button
              className="inline-flex items-center gap-2 rounded-xl px-8 py-4 font-bold text-white transition-all hover:-translate-y-0.5"
              style={{
                backgroundColor: 'var(--color-secondary-blue)',
                boxShadow: '0 12px 30px color-mix(in srgb, var(--color-secondary-blue) 28%, transparent)'
              }}
            >
              Donate to Support
              <ArrowRight size={18} />
            </button>
            <button
              className="rounded-xl border-2 bg-white px-8 py-4 font-bold transition-all"
              style={{
                borderColor: 'color-mix(in srgb, var(--color-primary-blue) 22%, white)',
                color: 'var(--color-primary-blue)'
              }}
            >
              View Services
            </button>
          </div>

        </div>

        <div className="relative">
          <div
            className="rounded-[2rem] p-4"
            style={{
              background:
                'linear-gradient(140deg, color-mix(in srgb, var(--color-secondary-blue) 24%, white), color-mix(in srgb, var(--color-pink) 18%, white))'
            }}
          >
            <img
              src={hero}
              alt="Modern Hospital Facility"
              className="h-[420px] w-full rounded-[1.5rem] object-cover shadow-2xl"
            />
          </div>

          <div className="absolute -bottom-6 left-1/2 w-[92%] -translate-x-1/2 rounded-2xl border border-white/60 bg-white/90 p-5 shadow-xl backdrop-blur sm:w-[82%]">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div
                  className="rounded-full p-3"
                  style={{ backgroundColor: 'color-mix(in srgb, var(--color-secondary-blue) 20%, white)' }}
                >
                  <Users size={22} style={{ color: 'var(--color-secondary-blue)' }} />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500">Patients Served</p>
                  <p className="text-2xl font-extrabold" style={{ color: 'var(--color-primary-blue)' }}>
                    12,400+
                  </p>
                </div>
              </div>
              <p className="text-right text-sm font-semibold" style={{ color: 'var(--color-pink)' }}>
                Community-powered healthcare
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
