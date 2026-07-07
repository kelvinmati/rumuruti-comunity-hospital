import React, { useState } from 'react'
// import  logo from "../../public/rlogo-removebg-preview.png"
import {
  MapPin, Users, HeartPulse, CalendarCheck, Handshake, ArrowRight,
  Siren, ShieldCheck, Stethoscope, FlaskConical, Pill, Activity,
  Ambulance, HandHeart, Menu, X, Mail, Phone,  ChevronRight
} from "lucide-react";
import Logo from '~/utils/Logo';


// function Logo({ light }) {
//   return (
//     <div className="flex items-center gap-2.5">
//       <img src={logo} alt="Rumuruti Community Hospital" className="h-15 w-auto" />
//       <div className="leading-tight">
//         <div className={`font-heading font-bold text-[15px] tracking-tight ${light ? "text-white" : "text-[#0B2A4A]"}`}>
//           RCH <span className="font-medium opacity-70">| Rumuruti Community Hospital</span>
//         </div>
//         <div className={`text-[11px] ${light ? "text-white/70" : "text-[#5B6B7F]"}`}>
//           Accessible, Trusted, Life-Saving Community Healthcare
//         </div>
//       </div>
//     </div>
//   );
// }
const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

  const NAV_LINKS = ["Home", "About RCH", "Our Services", "Partners", "News & Insights"];

  return (
       <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-[#EEE7D8]">
        <div className="max-w-7xl mx-auto px-5 md:px-8 h-[72px] flex items-center justify-between">
          <Logo light={false} />
          <nav className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((l) => (
              <a key={l} href="#" className="text-[14px] font-medium text-[#16233A]/80 hover:text-[#C81854] transition-colors">
                {l}
              </a>
            ))}
          </nav>
          <div className="hidden lg:block">
            <a href="#partner" className="inline-flex items-center gap-1.5 bg-[#C81854] text-white text-[14px] font-semibold px-5 py-2.5 rounded-full hover:bg-[#B01449] transition-colors cta-shadow">
              Partner With Us <ArrowRight size={15} />
            </a>
          </div>
          <button className="lg:hidden" onClick={() => setMenuOpen((v) => !v)} aria-label="Toggle menu">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {menuOpen && (
          <div className="lg:hidden border-t border-[#EEE7D8] px-5 py-4 flex flex-col gap-3">
            {NAV_LINKS.map((l) => (
              <a key={l} href="#" className="text-[14px] font-medium text-[#16233A]/80">{l}</a>
            ))}
            <a href="#partner" className="mt-2 inline-flex justify-center items-center gap-1.5 bg-[#C81854] text-white text-[14px] font-semibold px-5 py-2.5 rounded-full">
              Partner With Us <ArrowRight size={15} />
            </a>
          </div>
        )}
      </header>
  )
}

export default Navbar