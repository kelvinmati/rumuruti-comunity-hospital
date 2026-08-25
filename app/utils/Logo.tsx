import React from 'react';
import logo from "../../public/logo.png";
function Logo({ light }) {
  return (
    <div className="flex items-center gap-2.5">
      <img src={logo} alt="Seriobon HealthCare" className="h-20 w-auto" />
      <div className="leading-tight">
        <div className={`font-heading font-bold text-[15px] tracking-tight ${light ? "text-white" : "text-[#0B2A4A]"}`}>
         <span className="font-medium opacity-70">Seriobon HealthCare</span>
        </div>
        <div className={`text-[11px] ${light ? "text-white/70" : "text-[#5B6B7F]"}`}>
          Safe Births, Healthy Communities
        </div>
      </div>
    </div>
  );
}

export default Logo;