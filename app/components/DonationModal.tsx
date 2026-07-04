import React, { useEffect } from 'react'
import { X } from 'lucide-react'

type DonationModalProps = {
  isOpen: boolean
  onClose: () => void
}

const DonationModal = ({ isOpen, onClose }: DonationModalProps) => {
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className='fixed inset-0 z-[110] flex items-center justify-center bg-black/50 px-4 py-8' onClick={onClose}>
      <div
        className='w-full max-w-2xl rounded-2xl bg-white shadow-2xl'
        role='dialog'
        aria-modal='true'
        aria-labelledby='donation-modal-title'
        onClick={(event) => event.stopPropagation()}
      >
        <div className='flex items-start justify-between border-b border-slate-200 px-6 py-5'>
          <div>
            <h2 id='donation-modal-title' className='text-xl font-bold text-primary-blue'>
              Support Mothers and Children
            </h2>
            {/* <p className='mt-1 text-sm text-slate-600'>
              Use any option below. Amount examples are sample figures.
            </p> */}
          </div>
          <button
            type='button'
            onClick={onClose}
            className='rounded-full p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-700'
            aria-label='Close donation modal'
          >
            <X size={20} />
          </button>
        </div>

        
      </div>
    </div>
  )
}

export default DonationModal
