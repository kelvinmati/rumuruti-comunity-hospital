import React from 'react'

const faqs = [
  {
    question: 'How do I book maternal or child health care?',
    answer:
      'Use the book appointment button to request antenatal, postnatal, pediatric, or general care. Our team will confirm the next available slot.',
  },
  {
    question: 'Do you offer emergency care?',
    answer:
      'Yes. We provide urgent assessment and stabilization, and we coordinate referrals when advanced care is needed.',
  },
  {
    question: 'What services support expectant mothers?',
    answer:
      'Antenatal checkups, delivery support, postnatal reviews, counseling, and newborn follow-up are all part of our maternal care pathway.',
  },
  {
    question: 'Can children be seen for routine care?',
    answer:
      'Yes. We support child health visits, immunization guidance, growth monitoring, and treatment for common childhood illness.',
  },
  {
    question: 'How can our community get involved?',
    answer:
      'Community members can support outreach, share health messages, and partner with us on prevention, education, and referral awareness.',
  },
]

const Faq = () => {
  return (
    <section className='bg-slate-50 py-20'>
      <div className='mx-auto w-[90%] max-w-4xl'>
        <div className='text-center'>
          <p className='text-sm font-semibold uppercase tracking-[0.2em] text-[#1a5a8a]'>FAQ</p>
          <h2 className='mt-3 text-3xl font-bold text-slate-900 sm:text-4xl'>
            Frequently Asked Questions
          </h2>
          <p className='mt-4 text-slate-600'>
            Quick answers to the most common questions about maternal, child, and community health care.
          </p>
        </div>

        <div className='mt-10 space-y-4'>
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className='group rounded-xl border border-slate-200 bg-white p-5 shadow-sm open:border-[#1a5a8a]/30'
            >
              <summary className='flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-semibold text-slate-900'>
                <span>{faq.question}</span>
                <span className='text-xl leading-none text-[#1a5a8a] transition-transform group-open:rotate-45'>+</span>
              </summary>
              <p className='pt-4 text-sm leading-7 text-slate-600'>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Faq
