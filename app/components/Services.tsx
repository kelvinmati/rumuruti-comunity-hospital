import React from 'react'
import { useBookingModal } from '~/context/BookingModalContext'
import whyUsImage from '../../public/whyus.jpg'

const Services = () => {
  const { openModal } = useBookingModal()
  const services = [
    {
      title: 'Maternal & Child Health',
      description:
        'Safe pregnancy, safe delivery, and healthy childhood care that protects mothers and children through every stage.',
      accent: 'var(--color-primary-blue)',
      details: ['Safe pregnancy', 'Safe delivery', 'Healthy childhood']
    },
    {
      title: 'Emergency Care',
      description:
        'Timely response, stabilization, and referral support for urgent health needs when every minute matters.',
      accent: 'var(--color-secondary-blue)',
      details: ['Timely response', 'Stabilization', 'Referral']
    },
    {
      title: 'Accessible Healthcare',
      description:
        'Quality healthcare close to home for pastoralist and rural communities who need dependable, practical access to care.',
      accent: 'var(--color-pink)',
      details: ['Quality healthcare close to home', 'Serving pastoralist communities', 'Serving rural communities']
    },
    {
      title: 'Trust & Accountability',
      description:
        'Transparent governance, ethical healthcare, and community stewardship that strengthen confidence in our care.',
      accent: 'var(--color-secondary-blue)',
      details: ['Transparent governance', 'Ethical healthcare', 'Community stewardship']
    },
    {
      title: 'Community Impact',
      description:
        'Prevention, health education, outreach, and partnerships that create lasting improvements across the community.',
      accent: 'var(--color-pink)',
      details: ['Prevention', 'Health education', 'Outreach and partnerships']
    }
  ]

  return (
    <section className="relative overflow-hidden py-24">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(40rem 24rem at 6% 8%, color-mix(in srgb, var(--color-primary-blue) 12%, white), transparent 72%), radial-gradient(36rem 20rem at 96% 0%, color-mix(in srgb, var(--color-pink) 12%, white), transparent 75%), linear-gradient(180deg, #ffffff 10%, color-mix(in srgb, var(--color-secondary-blue) 4%, white) 100%)'
        }}
      />

      <div className="relative mx-auto w-[90%]">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <p
              className="inline-flex rounded-full px-4 py-2 text-sm font-semibold"
              style={{
                color: 'var(--color-primary-blue)',
                backgroundColor: 'color-mix(in srgb, var(--color-secondary-blue) 12%, white)'
              }}
            >
              Our Pillars
            </p>
            <h2
              className="mt-5 text-4xl font-black leading-tight md:text-5xl"
              style={{ color: 'var(--color-primary-blue)' }}
            >
            The five pillars of 
              <span className="block" style={{ color: 'var(--color-pink)' }}>
              care and community trust
              </span>
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
              Every service now speaks to the same foundation: maternal and child health, emergency care,
              accessible healthcare, trust and accountability, and community impact.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/70 bg-white/85 shadow-xl backdrop-blur">
            <div className="relative">
              <img
                src="https://plus.unsplash.com/premium_photo-1661962428291-7ec1fd509076?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGlsbGFyc3xlbnwwfHwwfHx8MA%3D%3D"
                alt="Rumuruti Community Hospital care and community support"
                className="h-28 w-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(180deg, transparent 35%, color-mix(in srgb, var(--color-primary-blue) 82%, black) 100%)'
                }}
              />
            </div>
            <div className="p-6 text-white" style={{ backgroundColor: 'var(--color-primary-blue)' }}>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-white/70">Why these pillars matter</p>
              <p className="mt-3 text-lg font-bold leading-7">
                The image of care we want to build is simple: mothers feel safe, children are protected, families
                stay close to quality care, and the community can trust the hospital it supports.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="group relative overflow-hidden rounded-3xl border border-white/80 bg-white/90 p-7 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div
                className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full opacity-30 blur-2xl"
                style={{ backgroundColor: service.accent }}
              />

              <div className="relative flex items-start justify-between gap-4">
                <span
                  className="inline-flex h-10 min-w-10 items-center justify-center rounded-full text-sm font-bold text-white"
                  style={{ backgroundColor: service.accent }}
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
   
              </div>

              <h3 className="relative mt-5 text-xl font-extrabold" style={{ color: 'var(--color-primary-blue)' }}>
                {service.title}
              </h3>
              <p className="relative mt-3 text-[15px] leading-7 text-slate-600">{service.description}</p>

              <ul className="relative mt-5 space-y-2">
                {service.details.map((detail) => (
                  <li key={detail} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                    <span
                      className="h-2.5 w-2.5 rounded-full"
                      style={{ backgroundColor: service.accent }}
                    />
                    {detail}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div
          className="mt-14 rounded-[2rem] p-8 text-white md:p-10"
          style={{
            background:
              'linear-gradient(120deg, var(--color-primary-blue), color-mix(in srgb, var(--color-secondary-blue) 85%, black))'
          }}
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-white/70">Need immediate support?</p>
              <h3 className="mt-2 text-3xl font-black leading-tight">Talk to our care team and get directed to the right pillar fast.</h3>
            </div>
            <button
                onClick={openModal}
              className="rounded-xl px-6 cursor-pointer py-4 text-sm font-bold transition-transform hover:-translate-y-0.5"
              style={{
                backgroundColor: 'var(--color-pink)',

              }}
            >
              Book a Visit
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services