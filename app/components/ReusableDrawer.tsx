import React, { useEffect } from 'react'
import { X } from 'lucide-react'

type ReusableDrawerProps = {
  isOpen: boolean
  onClose: () => void
  title: string
  subtitle?: string
  children: React.ReactNode
}

const ReusableDrawer = ({
  isOpen,
  onClose,
  title,
  subtitle,
  children
}: ReusableDrawerProps) => {
  useEffect(() => {
    if (!isOpen) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className='fixed inset-0 z-[100]'>
      <button
        type='button'
        className='absolute inset-0 bg-black/45'
        aria-label='Close drawer overlay'
        onClick={onClose}
      />

      <aside
        className='absolute right-0 top-0 h-full w-full max-w-xl overflow-hidden bg-white shadow-2xl'
        role='dialog'
        aria-modal='true'
        aria-labelledby='drawer-title'
      >
        <div className='flex items-start justify-between border-b border-slate-200 px-6 py-5'>
          <div>
            <h2 id='drawer-title' className='text-2xl font-bold text-[#0e3a5c]'>
              {title}
            </h2>
            {subtitle ? <p className='mt-1 text-sm text-slate-600'>{subtitle}</p> : null}
          </div>
          <button
            type='button'
            onClick={onClose}
            className='rounded-full p-2 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-800'
            aria-label='Close drawer'
          >
            <X size={20} />
          </button>
        </div>

        <div className='h-[calc(100%-88px)] overflow-y-auto'>{children}</div>
      </aside>
    </div>
  )
}

export default ReusableDrawer
