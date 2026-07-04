import React from 'react'
import { Mail, Phone } from 'lucide-react'

const Location = () => {
  const operatingHours = [
    { day: 'Monday - Friday', time: '8:00 AM - 8:00 PM' },
    { day: 'Saturday', time: '8:00 AM - 5:00 PM' },
    { day: 'Sunday', time: '9:00 AM - 3:00 PM' },
    { day: 'Public Holidays', time: '9:00 AM - 1:00 PM' }
  ]

  return (
    <section className="relative overflow-hidden py-24">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(40rem 22rem at 5% 0%, color-mix(in srgb, var(--color-secondary-blue) 14%, white), transparent 70%), radial-gradient(32rem 20rem at 98% 8%, color-mix(in srgb, var(--color-pink) 12%, white), transparent 75%), linear-gradient(180deg, #ffffff 0%, color-mix(in srgb, var(--color-primary-blue) 5%, white) 100%)'
        }}
      />

      <div className="relative mx-auto w-[90%]">
        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr] items-center lg:items-start">
          <div>
            <p
              className="inline-flex rounded-full px-4 py-2 text-sm font-semibold"
              style={{
                color: 'var(--color-primary-blue)',
                backgroundColor: 'color-mix(in srgb, var(--color-secondary-blue) 12%, white)'
              }}
            >
              Visit Our Hospital
            </p>
            <h2
              className="mt-5 text-4xl font-black leading-tight md:text-5xl"
              style={{ color: 'var(--color-primary-blue)' }}
            >
              Find us in
              <span className="block" style={{ color: 'var(--color-pink)' }}>
                Rumuruti Town, Kenya
              </span>
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
              Easily locate Rumuruti Community Hospital on the map below and plan your visit for maternal,
              child, emergency, or follow-up care.
            </p>

            <div className="mt-8 overflow-hidden rounded-3xl border border-white/80 bg-white/90 shadow-xl">
              <iframe
                title="Rumuruti Community Hospital Location"
                src="https://www.google.com/maps?q=Rumuruti%20Town,%20Kenya&output=embed"
                className="h-[360px] w-full md:h-[430px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="rounded-3xl border border-white/70 bg-white/88 p-7 h-full shadow-xl backdrop-blur md:p-8">
            <h3 className="text-2xl font-black" style={{ color: 'var(--color-primary-blue)' }}>
              Operating Hours
            </h3>
            <p className="mt-2 text-sm text-slate-600">Emergency services are available 24/7 for urgent care needs.</p>

            <div className="mt-6 space-y-3">
              {operatingHours.map((slot) => (
                <div
                  key={slot.day}
                  className="flex items-center justify-between rounded-xl border border-white bg-white p-4 shadow-sm"
                >
                  <p className="font-semibold text-slate-700">{slot.day}</p>
                  <p className="text-sm font-bold" style={{ color: 'var(--color-secondary-blue)' }}>
                    {slot.time}
                  </p>
                </div>
              ))}
            </div>

            <div
              className="mt-6 rounded-2xl p-4"
              style={{
                backgroundColor: 'color-mix(in srgb, var(--color-primary-blue) 9%, white)'
              }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Emergency</p>
              <p className="mt-1 text-lg font-extrabold" style={{ color: 'var(--color-primary-blue)' }}>
                Open 24 Hours, 7 Days
              </p>
              <div className="mt-4 space-y-2">
                <p className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                  <Phone size={16} style={{ color: 'var(--color-secondary-blue)' }} />
                  +254 700 000 000
                </p>
                <p className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                  <Mail size={16} style={{ color: 'var(--color-secondary-blue)' }} />
                  rumuruti@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Location