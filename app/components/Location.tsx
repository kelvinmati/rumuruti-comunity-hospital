

import React from "react";
import { ArrowRight, MapPin, Banknote, Clock, HeartCrack } from "lucide-react";
const MAP_EMBED_URL =
  "https://www.google.com/maps?q=Seriobon%20Town,%20Kenya&output=embed";

const TOWNS = [
  { name: "Maralal", km: 90, style: "top-[14%] left-[28%]" },
  { name: "Samburu", km: 120, style: "top-[10%] left-[62%]" },
  { name: "Nanyuki", km: 85, style: "top-[58%] left-[68%]" },
  { name: "Nyahururu", km: 60, style: "top-[74%] left-[22%]" },
];

const PROBLEMS = [
  { icon: MapPin, label: "Long Distances" },
  { icon: Banknote, label: "High Travel Costs" },
  { icon: Clock, label: "Delayed Care" },
  { icon: HeartCrack, label: "Lives at Risk" },
];

export default function Location() {
  return (
    <section className="font-body bg-white py-10 md:py-5 md:mb-10">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@600;700;800&family=Inter:wght@400;500;600;700&display=swap');
        .font-heading { font-family: 'Plus Jakarta Sans', sans-serif; }
        .font-body { font-family: 'Inter', sans-serif; }
        .cta-shadow-navy { box-shadow: 0 8px 18px -6px rgba(11,42,74,0.35); }
      `}</style>

      <div className="max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-[1fr_1.6fr] gap-12 items-center">
        {/* LEFT — copy */}
        <div>
          <span className="text-[12px] font-bold tracking-wide uppercase text-[#C81854]">
            Why SHC Exists
          </span>
          <h2 className="font-heading font-bold text-[#0B2A4A] text-[28px] md:text-[34px] mt-3 leading-tight">
            We exist to close
            <br />
            the gap in healthcare access.
          </h2>
          <p className="text-[#5B6B7F] mt-4 text-[15px] md:text-[15.5px] max-w-md leading-relaxed">
            Families in our region travel long distances for basic and
            emergency care. SHC was founded by the community to ensure that
            no mother, child, or family is left behind.
          </p>
          <a
            href="#about"
            className="mt-7 inline-flex items-center gap-2 bg-[#0B2A4A] text-white text-[13px] font-bold tracking-wide uppercase px-6 py-3.5 rounded-full cta-shadow-navy hover:bg-[#0d3459] transition-colors"
          >
            Learn More About SHC <ArrowRight size={15} />
          </a>
        </div>

        {/* RIGHT — map */}
        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden border border-[#E7E9EE] shadow-sm aspect-[16/10] bg-[#EDEBE3]">
            <iframe
              title="Map showing Seriobon Town, Kenya"
              src={MAP_EMBED_URL}
              className="absolute inset-0 w-full h-full"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Overlay: Seriobon pin + town distance labels (decorative, non-interactive) */}
            <div className="absolute inset-0 pointer-events-none">
              {/* center Seriobon marker */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full flex flex-col items-center">
                <div className="w-9 h-9 rounded-full bg-[#C81854] border-4 border-white shadow-lg flex items-center justify-center">
                  <MapPin size={16} className="text-white" fill="white" />
                </div>
                <span className="mt-1.5 bg-white/95 px-2.5 py-1 rounded-md text-[11.5px] font-bold text-[#0B2A4A] tracking-wide shadow-sm">
                  SERIOBON
                </span>
              </div>

              {/* surrounding towns */}
              {TOWNS.map(({ name, km, style }) => (
                <div key={name} className={`absolute ${style} -translate-x-1/2 -translate-y-1/2 flex flex-col items-center`}>
                  <span className="w-2 h-2 rounded-full bg-[#0E7C5A] border-2 border-white shadow" />
                  <span className="mt-1 bg-white/90 px-2 py-0.5 rounded text-[10.5px] font-semibold text-[#0B2A4A] shadow-sm whitespace-nowrap">
                    {name}
                  </span>
                  <span className="text-[9.5px] text-[#5B6B7F] bg-white/80 px-1.5 rounded-sm">
                    {km} km
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Kenya locator inset */}
          {/* <div className="hidden sm:block absolute -top-5 -right-5 w-28 h-28 bg-white rounded-xl shadow-lg border border-[#E7E9EE] p-2">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <path
                d="M60 15 L140 20 L165 55 L150 90 L170 120 L150 165 L110 185 L70 175 L45 140 L55 100 L35 65 Z"
                fill="#BBD6EA"
                stroke="#8FB8D4"
                strokeWidth="1.5"
              />
              <circle cx="98" cy="95" r="12" fill="#C81854" opacity="0.85" />
            </svg>
          </div> */}

          {/* Floating "the problem" card */}
          <div className="absolute -bottom-6 -right-3 sm:-right-6 bg-white rounded-xl shadow-xl border border-[#E7E9EE] px-5 py-4 w-[188px]">
            <ul className="space-y-2.5">
              {PROBLEMS.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-2.5">
                  <Icon size={15} className="text-[#C81854] shrink-0" />
                  <span className="text-[12px] font-semibold text-[#0B2A4A] leading-tight">
                    {label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}