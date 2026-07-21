import React, { useState } from 'react'
import { Link, useLocation } from 'react-router'
import {
  MapPin, Users, HeartPulse, CalendarCheck, Handshake, ArrowRight,
  Siren, ShieldCheck, Stethoscope, FlaskConical, Pill, Activity,
  Ambulance, HandHeart, Menu, X, Mail, Phone, ChevronRight
} from "lucide-react";
import Logo from '~/utils/Logo';

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About RCH", href: "#about" },
  { label: "Our Services", href: "#services" },
  { label: "Partners", href: "#partners" },
  { label: "News & Insights", href: "/news" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-[#EEE7D8]">
      <div className="max-w-7xl mx-auto px-5 md:px-8 h-[72px] flex items-center justify-between">
        <Logo light={false} />
        <nav className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((link) =>
            link.href.startsWith("#") ? (
              <a
                key={link.label}
                href={isHome ? link.href : `/${link.href}`}
                className="text-[14px] font-medium text-[#16233A]/80 hover:text-[#C81854] transition-colors"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                to={link.href}
                className="text-[14px] font-medium text-[#16233A]/80 hover:text-[#C81854] transition-colors"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>
        <div className="hidden lg:block">
          <a href="#partners" className="inline-flex items-center gap-1.5 bg-[#C81854] text-white text-[14px] font-semibold px-5 py-2.5 rounded-full hover:bg-[#B01449] transition-colors cta-shadow">
            Partner With Us <ArrowRight size={15} />
          </a>
        </div>
        <button className="lg:hidden" onClick={() => setMenuOpen((v) => !v)} aria-label="Toggle menu">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {menuOpen && (
        <div className="lg:hidden border-t border-[#EEE7D8] px-5 py-4 flex flex-col gap-3">
          {NAV_LINKS.map((link) =>
            link.href.startsWith("#") ? (
              <a
                key={link.label}
                href={isHome ? link.href : `/${link.href}`}
                onClick={() => setMenuOpen(false)}
                className="text-[14px] font-medium text-[#16233A]/80"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-[14px] font-medium text-[#16233A]/80"
              >
                {link.label}
              </Link>
            )
          )}
          <a href="#partners" className="mt-2 inline-flex justify-center items-center gap-1.5 bg-[#C81854] text-white text-[14px] font-semibold px-5 py-2.5 rounded-full">
            Partner With Us <ArrowRight size={15} />
          </a>
        </div>
      )}
    </header>
  )
}

export default Navbar