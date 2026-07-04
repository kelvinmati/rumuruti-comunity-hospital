import React, { useEffect, useState } from 'react'

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials = [
    {
      name: 'Jane Wanjiku',
      role: 'Mother of Two',
      service: 'Maternal & Child Health',
      quote:
        'The nurses were warm, patient, and always explained each step clearly. I felt safe from the first visit through delivery and follow-up.',
      rating: 5,
      accent: 'var(--color-pink)',
      waitTime: 'Seen in 18 mins'
    },
    {
      name: 'Peter Mwangi',
      role: 'Farmer',
      service: 'Emergency Care',
      quote:
        'After an accident, the emergency team acted quickly and professionally. Their response and communication made a difficult day manageable.',
      rating: 5,
      accent: 'var(--color-secondary-blue)',
      waitTime: 'Triage in 7 mins'
    },
    {
      name: 'Grace Njeri',
      role: 'Teacher',
      service: 'Accessible Healthcare',
      quote:
        'I appreciate how the team listens and tailors care to real life needs. Follow-up reminders helped me stay on track with treatment.',
      rating: 5,
      accent: 'var(--color-primary-blue)',
      waitTime: 'Follow-up in 2 days'
    },
    {
      name: 'Amina Hassan',
      role: 'Community Health Volunteer',
      service: 'Trust & Accountability',
      quote:
        'The team communicates clearly, works with the community, and shows the kind of stewardship that builds long-term trust.',
      rating: 5,
      accent: 'var(--color-pink)',
      waitTime: 'Community partnership'
    }
  ]

  const slides = []
  for (let i = 0; i < testimonials.length; i += 2) {
    slides.push(testimonials.slice(i, i + 2))
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length)
    }, 6000)

    return () => clearInterval(intervalId)
  }, [slides.length])

  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % slides.length)
  }

  const goToPrevious = () => {
    setActiveIndex((current) => (current - 1 + slides.length) % slides.length)
  }

  return (
    <section className="relative overflow-hidden py-24">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(36rem 22rem at 0% 0%, color-mix(in srgb, var(--color-primary-blue) 12%, white), transparent 70%), radial-gradient(30rem 20rem at 95% 8%, color-mix(in srgb, var(--color-pink) 11%, white), transparent 74%), linear-gradient(180deg, #fff 0%, color-mix(in srgb, var(--color-secondary-blue) 5%, white) 100%)'
        }}
      />

      <div className="relative mx-auto w-[90%]">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p
              className="inline-flex rounded-full px-4 py-2 text-sm font-semibold"
              style={{
                color: 'var(--color-primary-blue)',
                backgroundColor: 'color-mix(in srgb, var(--color-secondary-blue) 12%, white)'
              }}
            >
              Community Voices
            </p>
            <h2
              className="mt-5 text-4xl font-black leading-tight md:text-5xl"
              style={{ color: 'var(--color-primary-blue)' }}
            >
              Trusted by families seeking
              <span className="block" style={{ color: 'var(--color-pink)' }}>
                safe, respectful, and life-affirming care.
              </span>
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
              Real experiences from mothers, caregivers, and community members who have received maternal,
              child, emergency, and follow-up support at Rumuruti Community Hospital.
            </p>

            {/* <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/75 bg-white/90 p-4 shadow-sm">
                <p className="text-3xl font-extrabold" style={{ color: 'var(--color-primary-blue)' }}>
                  4.9/5
                </p>
                <p className="text-sm font-medium text-slate-500">Patient satisfaction</p>
              </div>
              <div className="rounded-2xl border border-white/75 bg-white/90 p-4 shadow-sm">
                <p className="text-3xl font-extrabold" style={{ color: 'var(--color-secondary-blue)' }}>
                  12k+
                </p>
                <p className="text-sm font-medium text-slate-500">Annual visits</p>
              </div>
              <div className="rounded-2xl border border-white/75 bg-white/90 p-4 shadow-sm">
                <p className="text-3xl font-extrabold" style={{ color: 'var(--color-pink)' }}>
                  24/7
                </p>
                <p className="text-sm font-medium text-slate-500">Emergency response</p>
              </div>
            </div> */}
          </div>

          <div className="rounded-3xl border border-white/70 bg-white/80 p-7 shadow-xl backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">What families mention most</p>
            <div className="mt-5 space-y-4">
              {['Respectful maternal care', 'Child-focused follow-up', 'Clear treatment guidance', 'Supportive nursing team'].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-xl bg-white p-3 shadow-sm">
                  <span
                    className="h-2.5 w-2.5 rounded-full"
                    style={{ backgroundColor: 'var(--color-secondary-blue)' }}
                  />
                  <p className="font-medium text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-3xl border border-white/70 bg-white/70 p-4 shadow-lg backdrop-blur md:p-6">
          <div className="overflow-hidden rounded-3xl">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {slides.map((slide, slideIndex) => (
                <div key={`slide-${slideIndex}`} className="grid w-full shrink-0 gap-5 lg:grid-cols-2">
                  {slide.map((testimonial) => (
                    <article
                      key={testimonial.name}
                      className="relative overflow-hidden rounded-3xl border border-white/70 bg-white/95 p-7 shadow-lg md:p-10"
                    >
                      <div
                        className="absolute right-0 top-0 h-24 w-24 translate-x-7 -translate-y-7 rounded-full opacity-30 blur-2xl"
                        style={{ backgroundColor: testimonial.accent }}
                      />



                      <p className="relative mt-5 max-w-3xl text-lg leading-8 text-slate-700">"{testimonial.quote}"</p>

                      <p className="relative mt-4 text-sm font-semibold uppercase tracking-[0.12em] text-slate-500">
                        {testimonial.service}
                      </p>

                      <div className="relative mt-6">
                        <div className="mb-2 flex gap-1 text-lg" style={{ color: 'var(--color-pink)' }}>
                          {Array.from({ length: testimonial.rating }).map((_, idx) => (
                            <span key={`${testimonial.name}-${idx}`}>★</span>
                          ))}
                        </div>
                        <p className="text-lg font-extrabold" style={{ color: 'var(--color-primary-blue)' }}>
                          {testimonial.name}
                        </p>
                        <p className="text-sm font-medium text-slate-500">{testimonial.role}</p>
                      </div>
                    </article>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              {slides.map((_, idx) => (
                <button
                  key={`dot-${idx}`}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  className="h-2.5 rounded-full transition-all"
                  style={{
                    width: activeIndex === idx ? '2rem' : '0.7rem',
                    backgroundColor: activeIndex === idx ? 'var(--color-pink)' : 'color-mix(in srgb, var(--color-primary-blue) 24%, white)'
                  }}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={goToPrevious}
                className="rounded-lg px-4 py-2 text-sm font-semibold transition-colors"
                style={{
                  color: 'var(--color-primary-blue)',
                  backgroundColor: 'color-mix(in srgb, var(--color-primary-blue) 10%, white)'
                }}
              >
                Previous
              </button>
              <button
                type="button"
                onClick={goToNext}
                className="rounded-lg px-4 py-2 text-sm font-semibold text-white"
                style={{ backgroundColor: 'var(--color-secondary-blue)' }}
              >
                Next
              </button>
            </div>
          </div>
        </div>


      </div>
    </section>
  )
}

export default Testimonials