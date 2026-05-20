import React, { useState } from 'react'

type AppointmentFormProps = {
  onSuccess?: () => void
}

type AppointmentFormState = {
  fullName: string
  phone: string
  email: string
  service: string
  appointmentDate: string
  appointmentTime: string
  notes: string
}

const initialState: AppointmentFormState = {
  fullName: '',
  phone: '',
  email: '',
  service: '',
  appointmentDate: '',
  appointmentTime: '',
  notes: ''
}

const AppointmentForm = ({ onSuccess }: AppointmentFormProps) => {
  const [formState, setFormState] = useState<AppointmentFormState>(initialState)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitted(true)
    setFormState(initialState)
  }

  if (isSubmitted) {
    return (
      <div className='px-6 py-8'>
        <h3 className='text-xl font-semibold text-[#0e3a5c]'>Appointment request received</h3>
        <p className='mt-2 text-slate-600'>
          Thank you. Our care team will call or email you shortly to confirm your appointment.
        </p>
        <button
          type='button'
          onClick={onSuccess}
          className='mt-6 rounded-full bg-primary-blue px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:opacity-90'
        >
          Close
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className='px-6 py-6'>
      <div className='grid gap-4 sm:grid-cols-2'>
        <label className='text-sm font-medium text-slate-700'>
          Full Name
          <input
            required
            name='fullName'
            value={formState.fullName}
            onChange={handleChange}
            className='mt-1 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm focus:border-primary-blue focus:outline-none'
            placeholder='Jane Wanjiku'
          />
        </label>

        <label className='text-sm font-medium text-slate-700'>
          Phone Number
          <input
            required
            name='phone'
            value={formState.phone}
            onChange={handleChange}
            className='mt-1 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm focus:border-primary-blue focus:outline-none'
            placeholder='+254 700 000 000'
          />
        </label>

        <label className='text-sm font-medium text-slate-700'>
          Email Address
          <input
            required
            type='email'
            name='email'
            value={formState.email}
            onChange={handleChange}
            className='mt-1 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm focus:border-primary-blue focus:outline-none'
            placeholder='you@example.com'
          />
        </label>

        <label className='text-sm font-medium text-slate-700'>
          Service Needed
          <select
            required
            name='service'
            value={formState.service}
            onChange={handleChange}
            className='mt-1 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm focus:border-primary-blue focus:outline-none'
          >
            <option value=''>Select a service</option>
            <option value='general-consultation'>General Consultation</option>
            <option value='maternity-care'>Maternity Care</option>
            <option value='pediatric-care'>Pediatric Care</option>
            <option value='laboratory-tests'>Laboratory Tests</option>
            <option value='emergency-follow-up'>Emergency Follow-up</option>
          </select>
        </label>

        <label className='text-sm font-medium text-slate-700'>
          Preferred Date
          <input
            required
            type='date'
            name='appointmentDate'
            value={formState.appointmentDate}
            onChange={handleChange}
            className='mt-1 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm focus:border-primary-blue focus:outline-none'
          />
        </label>

        <label className='text-sm font-medium text-slate-700'>
          Preferred Time
          <input
            required
            type='time'
            name='appointmentTime'
            value={formState.appointmentTime}
            onChange={handleChange}
            className='mt-1 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm focus:border-primary-blue focus:outline-none'
          />
        </label>
      </div>

      <label className='mt-4 block text-sm font-medium text-slate-700'>
        Additional Notes
        <textarea
          name='notes'
          value={formState.notes}
          onChange={handleChange}
          rows={4}
          className='mt-1 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm focus:border-primary-blue focus:outline-none'
          placeholder='Anything our team should know before your visit?'
        />
      </label>

      <div className='mt-6 flex justify-end'>
        <button
          type='submit'
          className='rounded-full bg-primary-blue px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:opacity-90'
        >
          Submit Appointment
        </button>
      </div>
    </form>
  )
}

export default AppointmentForm
