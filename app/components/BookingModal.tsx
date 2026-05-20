import React from 'react'
import AppointmentForm from './AppointmentForm'
import ReusableDrawer from './ReusableDrawer'

type BookingModalProps = {
  isOpen: boolean
  onClose: () => void
}

const BookingModal = ({ isOpen, onClose }: BookingModalProps) => {
  return (
    <ReusableDrawer
      isOpen={isOpen}
      onClose={onClose}
      title='Book an Appointment'
      subtitle='Fill in your details and our team will confirm shortly.'
    >
      <AppointmentForm onSuccess={onClose} />
    </ReusableDrawer>
  )
}

export default BookingModal
