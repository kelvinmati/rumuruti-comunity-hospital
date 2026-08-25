import React from 'react'

const contactInfo = [
  {
    label: 'Phone',
    value: '+254 700 000 000',
    href: 'tel:+254700000000',
    icon: '📞',
  },
  {
    label: 'Email',
    value: 'care@seriobonhealthcare.org',
    href: 'mailto:care@seriobonhealthcare.org',
    icon: '✉️',
  },
  {
    label: 'WhatsApp',
    value: 'Chat with us',
    href: 'https://wa.me/254700000000',
    icon: '💬',
  },
]

const ContactUs = () => {
  return (
    <section
      className='relative min-h-screen overflow-hidden py-20'
      style={{ backgroundColor: '#b39b23' }}
    >
      <div className='pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-white/10 blur-3xl' />
      <div className='pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-white/10 blur-3xl' />

      <div className='relative mx-auto w-[90%] max-w-4xl'>
        <div className='text-center'>
          <h1 className='text-4xl font-bold text-white sm:text-5xl'>Get In Touch</h1>
          <p className='mt-4 text-lg text-white/85'>
            We are here to answer your questions, guide referrals, and support mothers, children, and families.
          </p>
        </div>

        <div className='mt-16 grid gap-6 sm:grid-cols-3'>
          {contactInfo.map((info) => (
            <a
              key={info.label}
              href={info.href}
              target={info.href.startsWith('http') ? '_blank' : undefined}
              rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className='group rounded-2xl border border-white/30 bg-white/15 p-6 backdrop-blur transition hover:border-white/50 hover:bg-white/25'
            >
              <span className='block text-4xl'>{info.icon}</span>
              <p className='mt-4 text-sm font-semibold uppercase tracking-[0.15em] text-white/80'>
                {info.label}
              </p>
              <p className='mt-2 text-base font-semibold text-white group-hover:translate-x-1 transition-transform'>
                {info.value}
              </p>
            </a>
          ))}
        </div>

        <div className='mt-20 max-w-2xl mx-auto'>
          <form className='rounded-2xl border border-white/30 bg-white/15 p-8 backdrop-blur'>
            <h2 className='text-2xl font-bold text-white'>Send us a message</h2>
            <div className='mt-6 space-y-4'>
              <input
                type='text'
                placeholder='Your Name'
                className='w-full rounded-lg border border-white/30 bg-white/10 px-4 py-3 text-white placeholder-white/50 outline-none transition focus:border-white/60 focus:bg-white/20'
              />
              <input
                type='email'
                placeholder='Your Email'
                className='w-full rounded-lg border border-white/30 bg-white/10 px-4 py-3 text-white placeholder-white/50 outline-none transition focus:border-white/60 focus:bg-white/20'
              />
              <textarea
                placeholder='Your Message'
                rows={4}
                className='w-full rounded-lg border border-white/30 bg-white/10 px-4 py-3 text-white placeholder-white/50 outline-none transition focus:border-white/60 focus:bg-white/20'
              />
              <button
                type='submit'
                className='w-full rounded-lg bg-white px-6 py-3 font-semibold text-[#b39b23] transition hover:brightness-95'
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        <div className='mt-16 text-center'>
          <p className='text-sm font-semibold uppercase tracking-[0.15em] text-white/70'>
            Available 24/7
          </p>
          <p className='mt-2 text-lg text-white/85'>
            We respond to all inquiries within 2 hours during business hours.
          </p>
        </div>
      </div>
    </section>
  )
};

export default ContactUs;