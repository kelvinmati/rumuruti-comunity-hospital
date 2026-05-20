import React from 'react'

const Gallarey = () => {
  const galleryImages = [
    {
    //   title: 'Community Outreach Clinic',
      src: 'https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?auto=format&fit=crop&w=1200&q=80',
      span: 'md:col-span-2 md:row-span-2'
    },
    {
    //   title: 'Maternity Support Team',
      src: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1000&q=80',
      span: 'md:col-span-1 md:row-span-1'
    },
    {
    //   title: 'Nursing Care Ward',
      src: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1000&q=80',
      span: 'md:col-span-1 md:row-span-1'
    },
    {
    //   title: 'Laboratory Diagnostics',
      src: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1100&q=80',
      span: 'md:col-span-1 md:row-span-1'
    },
    {
    //   title: 'Doctor-Patient Consultation',
      src: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?auto=format&fit=crop&w=1000&q=80',
      span: 'md:col-span-1 md:row-span-1'
    },
    
  ]

  return (
    <section id="gallery" className="relative overflow-hidden py-24">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(38rem 22rem at 5% 4%, color-mix(in srgb, var(--color-secondary-blue) 14%, white), transparent 72%), radial-gradient(30rem 18rem at 95% 0%, color-mix(in srgb, var(--color-pink) 11%, white), transparent 75%), linear-gradient(180deg, #fff 0%, color-mix(in srgb, var(--color-primary-blue) 6%, white) 100%)'
        }}
      />

      <div className="relative mx-auto w-[90%]">
        <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p
              className="inline-flex rounded-full px-4 py-2 text-sm font-semibold"
              style={{
                color: 'var(--color-primary-blue)',
                backgroundColor: 'color-mix(in srgb, var(--color-secondary-blue) 12%, white)'
              }}
            >
              Hospital Gallery
            </p>
            <h2
              className="mt-5 text-4xl font-black leading-tight md:text-5xl"
              style={{ color: 'var(--color-primary-blue)' }}
            >
              Moments of care,
              <span className="block" style={{ color: 'var(--color-pink)' }}>
                service, and community impact.
              </span>
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-6 text-slate-600 md:text-base">
            A visual look at how Rumuruti Community Hospital supports families through prevention,
            diagnosis, treatment, and compassionate follow-up care.
          </p>
        </div>

        <div className="grid auto-rows-[200px] gap-4 sm:auto-rows-[220px] md:grid-cols-4 md:auto-rows-[170px]">
          {galleryImages.map((image, idx) => (
            <article
              key={idx}
              className={`group relative overflow-hidden rounded-2xl border border-white/80 bg-white/70 shadow-lg ${image.span}`}
            >
              <img
                src={image.src}
                alt="Gallery image"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallarey