import { ArrowRight, Calendar, Clock, MapPin, Menu, Phone, X, Users } from 'lucide-react'
import React, { useState } from 'react'
import logo from "../../public/logo-removebg-preview.png"
import hero from "../../public/hero.jpeg"
import { useBookingModal } from '~/context/BookingModalContext'
import DonationModal from './DonationModal'
const Hero = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDonateModalOpen, setIsDonateModalOpen] = useState(false)
  const { openModal } = useBookingModal()

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Our mission', href: '#about' },
    { label: 'Care services', href: '#services' },
    { label: 'Community stories', href: '#testimonials' },
    { label: 'Contact & location', href: '#contact-location' }
  ]

  const closeMobileMenu = () => setIsMobileMenuOpen(false)
  const openDonateModal = () => setIsDonateModalOpen(true)
  const closeDonateModal = () => setIsDonateModalOpen(false)

  return (
    <section id="home" className="relative scroll-mt-28">
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
            <div className="flex items-center gap-4 hidden md:flex">
              <span className="flex items-center gap-1"><MapPin size={14} /> Rumuruti Town, Kenya</span>
            </div>
        </div>

          <div>



            <nav className="sticky w-[90%] mx-auto top-0 z-50 backdrop-blur-md flex flex-wrap justify-between items-center gap-3"            >
        {/* <div className="flex items-center gap-2">
          <div className="bg-blue-600 p-2 rounded-lg">
            <Activity className="text-white" size={24} />
          </div>
          <span className="text-xl font-bold tracking-tight text-blue-900">Rumuruti Community</span>
        </div> */}
        <div>
          <img  src={logo}  className='md:h-[180px] h-[100px] w-auto'  alt="Rumuruti Community Hospital" />
        </div>
        <div className="hidden md:flex gap-8 font-medium text-slate-600">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-blue-600 transition">
              {link.label}
            </a>
          ))}
        </div>
        <div className='hidden md:flex gap-3'>
                  <button
                    className="bg-pink text-white px-5 py-2.5 rounded-full font-semibold transition flex items-center gap-2"
                    // onClick={openDonateModal}
                  >
          <Calendar size={18} />Donate
        </button>
                <button
                  className="bg-primary-blue text-white px-5 py-2.5 rounded-full font-semibold transition flex items-center gap-2"
                  onClick={openModal}
                >
          <Calendar size={18} /> Book Appointment
        </button>
        </div>

        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white p-2 text-slate-700"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {isMobileMenuOpen && (
          <div className="w-full md:hidden  bg-white/95 ">
            <div className="flex flex-col gap-3 font-medium text-slate-700">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className="rounded-md px-2 py-2 transition hover:bg-slate-100"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="mt-4 flex flex-col gap-2">
              <button
                className="bg-pink text-white px-4 py-2.5 rounded-full font-semibold transition flex items-center justify-center gap-2"
                // onClick={() => {
                //   closeMobileMenu()
                //   openDonateModal()
                // }}
              >
                <Calendar size={18} />Donate
              </button>
              <button
                className="bg-primary-blue text-white px-4 py-2.5 rounded-full font-semibold transition flex items-center justify-center gap-2"
                onClick={() => {
                  closeMobileMenu()
                  openModal()
                }}
              >
                <Calendar size={18} /> Book Appointment
              </button>
            </div>
          </div>
        )}
      </nav>
    </div>

      <div className="relative mx-auto grid max-w-[90%] items-center gap-12 md:grid-cols-2">
        <div>


          <p
            className="inline-flex rounded-full px-4 py-2 text-sm font-semibold"
            style={{
              color: 'var(--color-primary-blue)',
              backgroundColor: 'color-mix(in srgb, var(--color-secondary-blue) 12%, white)'
            }}
          >
            Saving Mothers, Protecting Children, Strengthening Communities
          </p>

          <h1
            className="mt-6 text-4xl font-extrabold leading-tight md:text-5xl"
            style={{ color: 'var(--color-primary-blue)' }}
          >
            Care that protects every stage of life
            <span className="block" style={{ color: 'var(--color-pink)' }}>
              from motherhood to childhood and beyond.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
            {/* Rumuruti Community Hospital exists to keep mothers safe, children healthy, and families
            supported through respectful, reliable, and accessible care. */}

            Quality Healthcare Within Reach. Delivering compassionate, accountable and accessible healthcare for Rumuruti and surrounding communities.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button
              className="inline-flex mb-3 items-center gap-2 rounded-xl px-5 py-3 text-primary-blue border transition-all hover:-translate-y-0.5"
              // onClick={openDonateModal}
              // style={{
              //   backgroundColor: 'var(--color-secondary-blue)',
              //   boxShadow: '0 12px 30px color-mix(in srgb, var(--color-secondary-blue) 28%, transparent)'
              // }}
            >
              Support the Mission
              <ArrowRight size={18} />
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
              alt="Rumuruti Community Hospital care setting"
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
                  <p className="text-sm font-medium text-slate-500">Families Supported</p>
                  <p className="text-2xl font-extrabold" style={{ color: 'var(--color-primary-blue)' }}>
                    10,000+
                  </p>
                </div>
              </div>
              <p className="text-right text-sm font-semibold" style={{ color: 'var(--color-pink)' }}>
                Care rooted in dignity and prevention
              </p>
            </div>
          </div>
        </div>
      </div>
      <DonationModal isOpen={isDonateModalOpen} onClose={closeDonateModal} />
    </section>
  )
}

export default Hero
