import React, { useState } from 'react'
import { useBookingModal } from '~/context/BookingModalContext'

const Services = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const { openModal } = useBookingModal()
  const services = [
    {
      title: 'Outpatient & Specialist Clinics',
      description:
        'Same-day consultations with experienced clinicians in internal medicine, pediatrics, women health, and chronic care follow-up.',
      accent: 'var(--color-primary-blue)',
      details: ['General consultation', 'Pediatric follow-up', 'Hypertension & diabetes clinics']
    },
    {
      title: 'Emergency & Urgent Care',
      description:
        '24/7 triage and stabilization for injuries, acute illness, and time-sensitive treatment with rapid response pathways.',
      accent: 'var(--color-secondary-blue)',
      details: ['24/7 emergency desk', 'Trauma first-response', 'On-call clinical teams']
    },
    {
      title: 'Maternity & Newborn Care',
      description:
        'Safe, respectful maternal care from antenatal visits to delivery, plus newborn assessment and postnatal support.',
      accent: 'var(--color-pink)',
      details: ['Antenatal clinics', 'Skilled delivery support', 'Postnatal mother-baby care']
    },
    {
      title: 'Diagnostic Laboratory',
      description:
        'Reliable testing services and evidence-based reporting to support faster diagnosis and better treatment decisions.',
      accent: 'var(--color-secondary-blue)',
      details: ['Blood chemistry', 'Infection screening', 'Routine wellness panels']
    },
    {
      title: 'Pharmacy & Medication Counseling',
      description:
        'Timely access to essential medicines with clear dosing guidance and adherence support from trained professionals.',
      accent: 'var(--color-primary-blue)',
      details: ['Prescription dispensing', 'Drug interaction advice', 'Refill planning']
    },
    {
      title: 'Preventive & Community Programs',
      description:
        'Health education, screening drives, and outreach initiatives designed to keep families healthier for longer.',
      accent: 'var(--color-pink)',
      details: ['Vaccination support', 'Community screening days', 'Nutrition and wellness education']
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
           Our Services
            </p>
            <h2
              className="mt-5 text-4xl font-black leading-tight md:text-5xl"
              style={{ color: 'var(--color-primary-blue)' }}
            >
              Hospital services built around
              <span className="block" style={{ color: 'var(--color-pink)' }}>
                real community health needs.
              </span>
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
              From emergency response to preventive care, Rumuruti Community Hospital provides high-impact
              services that are practical, affordable, and centered on patient dignity.
            </p>
          </div>

          <div className="rounded-3xl border border-white/70 bg-white/85 p-6 shadow-xl backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">Service Coverage</p>
            <div className="mt-5 grid grid-cols-2 gap-4">
              <div>
                <p className="text-3xl font-extrabold" style={{ color: 'var(--color-primary-blue)' }}>
                  24/7
                </p>
                <p className="text-sm text-slate-500">Emergency support</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold" style={{ color: 'var(--color-secondary-blue)' }}>
                  6+
                </p>
                <p className="text-sm text-slate-500">Clinical departments</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold" style={{ color: 'var(--color-pink)' }}>
                  12k+
                </p>
                <p className="text-sm text-slate-500">Patients served yearly</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold" style={{ color: 'var(--color-primary-blue)' }}>
                  100%
                </p>
                <p className="text-sm text-slate-500">Patient-first approach</p>
              </div>
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
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-white/70">Need Immediate Support?</p>
              <h3 className="mt-2 text-3xl font-black leading-tight">Talk to our care team and get directed to the right service fast.</h3>
            </div>
            <button
                onClick={openModal}
              className="rounded-xl px-6 cursor-pointer py-4 text-sm font-bold transition-transform hover:-translate-y-0.5"
              style={{
                backgroundColor: 'var(--color-pink)',
                boxShadow: '0 14px 26px color-mix(in srgb, var(--color-pink) 36%, transparent)'
              }}
            >
              Book a Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services