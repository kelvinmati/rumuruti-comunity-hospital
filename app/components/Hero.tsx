import { Activity, Users } from 'lucide-react'
import React from 'react'

const Hero = () => {
  return (
    <div>
        <section className="relative py-0 px-6 overflow-hidden bg-[#f8fafc]">
  
      
        <div className="max-w-[90%] mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="mt-6 text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight">
              Your support. <br />
              <span className="text-blue-600">Their access.</span> <br />
              A healthier future.
            </h1>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-lg">
              Rumuruti Community Hospital is dedicated to providing world-class healthcare 
              that remains accessible to everyone. We believe quality care is a right, not a privilege.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-blue-200 transition-all">
                Donate to Support
              </button>
              <button className="bg-white border-2 border-slate-200 hover:border-blue-600 px-8 py-4 rounded-xl font-bold transition-all">
                View Services
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-tr from-blue-100 to-emerald-50 rounded-3xl p-4">
              <img 
                src="https://images.unsplash.com/photo-1586773860418-d3b9a8ec81c2?auto=format&fit=crop&q=80&w=800" 
                alt="Modern Hospital Facility" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
            {/* Stats Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden sm:block">
              <div className="flex items-center gap-4">
                <div className="bg-emerald-100 p-3 rounded-full text-emerald-600">
                  <Users size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">Patients Served</p>
                  <p className="text-2xl font-bold text-slate-900">12,400+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero
