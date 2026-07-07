import React from 'react';
import logo from '../../public/rlogo-removebg-preview.png';

function Logo({ light }) {
  return (
    <div className="flex items-center gap-2.5">
      <img src={logo} alt="Rumuruti Community Hospital" className="h-15 w-auto" />
      <div className="leading-tight">
        <div className={`font-heading font-bold text-[15px] tracking-tight ${light ? "text-white" : "text-[#0B2A4A]"}`}>
          RCH <span className="font-medium opacity-70">| Rumuruti Community Hospital</span>
        </div>
        <div className={`text-[11px] ${light ? "text-white/70" : "text-[#5B6B7F]"}`}>
          Accessible, Trusted, Life-Saving Community Healthcare
        </div>
      </div>
    </div>
  );
}

export default Logo;