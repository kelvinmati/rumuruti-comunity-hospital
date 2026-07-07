import { Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'
import Logo from '~/utils/Logo'

import { FaFacebook ,FaInstagram,FaTwitter,FaLinkedin} from "react-icons/fa";


const footer = () => {

  const socialLinks = [
    { icon: <FaFacebook size={25} />, url: "https://www.facebook.com" },
    { icon: <FaInstagram size={25} />, url: "https://www.instagram.com" },
    { icon: <FaTwitter size={25} />, url: "https://www.twitter.com" },
    { icon: <FaLinkedin size={25} />, url: "https://www.linkedin.com" },
  ];
  return (
      <footer className="bg-[#0B2A4A] pt-14 pb-8">
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid md:grid-cols-4 gap-10">
          <div>
            <Logo light={true} />
            <p className="text-white/60 text-[12.5px] mt-4 max-w-xs leading-relaxed">
              RCH exists to ensure that every mother, child, and family in our community has access to
              quality, dignified, and timely healthcare.
            </p>
            <div className="flex gap-3 mt-5">
              {
                socialLinks.map((link, index) => (
                  <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
                    {link.icon}
                  </a>
                ))  
              }
              
            </div>
          </div>
          <div>
            <h4 className="font-heading font-bold text-white text-[13.5px] mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-[13px] text-white/60">
              {["About RCH", "Our Services", "Our Impact", "Contact Us"].map((l) => (
                <li key={l}><a href="#" className="hover:text-white transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-bold text-white text-[13.5px] mb-4">Our Services</h4>
            <ul className="space-y-2.5 text-[13px] text-white/60">
              {["Outpatient Care", "Maternal Care", "Child Health", "Laboratory Services", "Emergency Care"].map((l) => (
                <li key={l}><a href="#" className="hover:text-white transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-bold text-white text-[13.5px] mb-4">Get in Touch</h4>
            <ul className="space-y-3 text-[13px] text-white/60">
              <li className="flex items-start gap-2"><MapPin size={15} className="mt-0.5 shrink-0" /> Rumuruti, Laikipia County, Kenya</li>
              <li className="flex items-center gap-2"><Phone size={15} className="shrink-0" /> +254 700 123 456</li>
              <li className="flex items-center gap-2"><Mail size={15} className="shrink-0" /> care@rchrumuruti.org</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-5 md:px-8 mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-3 text-[12px] text-white/50">
          <span>© 2026 Rumuruti Community Hospital. All rights reserved.</span>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Use</a>
            <a href="#" className="hover:text-white">Safeguarding Policy</a>
          </div>
        </div>
      </footer>
  )
}

export default footer