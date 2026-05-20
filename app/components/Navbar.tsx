import { Activity, Calendar, Clock, MapPin, Phone } from 'lucide-react'

import logo from "../../public/logo.jpeg"
const Navbar = () => {
  return (
    <div>
            <div className="bg-primary-blue text-white py-2 px-6 flex justify-between items-center text-sm">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1"><Phone size={14} /> Emergency: +254 700 000 000</span>
          <span className="hidden md:flex items-center gap-1"><Clock size={14} /> 24/7 Care</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1"><MapPin size={14} /> Rumuruti Town, Kenya</span>
        </div>
      </div>
            <nav className="sticky w-[90%] mx-auto top-0 z-50  backdrop-blur-md  px-6 py-4 flex justify-between items-center" 
                    style={{
          background:
            'radial-gradient(60rem 30rem at 10% 10%, color-mix(in srgb, var(--color-secondary-blue) 16%, white), transparent 70%), radial-gradient(50rem 26rem at 100% 5%, color-mix(in srgb, var(--color-pink) 12%, white), transparent 75%), linear-gradient(135deg, color-mix(in srgb, var(--color-primary-blue) 8%, white), #ffffff 62%)'
        }}
            
            >
        {/* <div className="flex items-center gap-2">
          <div className="bg-blue-600 p-2 rounded-lg">
            <Activity className="text-white" size={24} />
          </div>
          <span className="text-xl font-bold tracking-tight text-blue-900">Rumuruti Community</span>
        </div> */}
        <div>
          <img  src={logo}  className='h-[180px] '  alt="Rumuruti Community Hospital" />
        </div>
        <div className="hidden md:flex gap-8 font-medium text-slate-600">
          <a href="#" className="hover:text-blue-600 transition">Home</a>
          <a href="#" className="hover:text-blue-600 transition">About us</a>
          <a href="#" className="hover:text-blue-600 transition">Our services</a>
          <a href="#" className="hover:text-blue-600 transition">Testimonials</a>
          <a href="#" className="hover:text-blue-600 transition">Contact & location</a>
        </div>
        <div className='flex gap-3'>
                  <button className="bg-pink text-white px-5 py-2.5 rounded-full font-semibold transition flex items-center gap-2">
          <Calendar size={18} />Donate
        </button>
                <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-2.5 rounded-full font-semibold transition flex items-center gap-2">
          <Calendar size={18} /> Book Appointment
        </button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
