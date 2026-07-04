import React from 'react'

const quickLinks = [
  { label: 'Home', href: '/#home' },
  { label: 'Services', href: '/#services' },
  { label: 'Testimonials', href: '/#testimonials' },
  { label: 'Location', href: '/#location' }
]

const Footer = () => {
  return (
    <footer
      className="relative overflow-hidden text-white"
      style={{
        background:
          'linear-gradient(120deg, color-mix(in srgb, var(--color-primary-blue) 94%, black), var(--color-secondary-blue))'
      }}
    >
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div
          className="absolute -left-20 top-0 h-56 w-56 rounded-full blur-3xl"
          style={{ backgroundColor: 'color-mix(in srgb, var(--color-pink) 28%, transparent)' }}
        />
        <div
          className="absolute -right-16 bottom-0 h-44 w-44 rounded-full blur-3xl"
          style={{ backgroundColor: 'color-mix(in srgb, var(--color-secondary-blue) 40%, white)' }}
        />
      </div>

      <div className="relative mx-auto w-[90%] py-12">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-black">Rumuruti Community Hospital</h3>
            <p className="mt-2 text-sm text-white/80">
              Saving mothers, protecting children, strengthening communities.
            </p>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {quickLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-white/90 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-8 border-t border-white/20 pt-5 text-center">
          <p className="text-xs text-white/75 sm:text-sm">
            © {new Date().getFullYear()} Rumuruti Community Hospital. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
