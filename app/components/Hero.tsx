

import React from "react";
import { MapPin, Users, HeartPulse, CalendarCheck, Handshake } from "lucide-react";

/**
 * Hero — "Healthcare Should Never Depend on Distance"
 * ----------------------------------------------------
 * Full-bleed photo hero with a left-side gradient scrim for text legibility,
 * two CTAs, and a quick-facts card that overlaps the bottom edge of the image.
 *
 * Swap HERO_IMAGE for your real Rumuruti Community Hospital photograph.
 * Colors: navy #0B2A4A (headline + primary button), magenta #C81854 (secondary button + icon accents).
 */

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=2000&auto=format&fit=crop";

const FACTS = [
  {
    icon: "https://cdn-icons-png.flaticon.com/128/535/535239.png",
    label: "Our Location",
    value: "Rumuruti, Laikipia County, Kenya",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/128/8215/8215621.png",
    label: "Our Community",
    value: "Serving Rumuruti, Laikipia North & surrounding pastoralist areas",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/128/800/800634.png",
    label: "Our Focus",
    value: "Maternal & Child Health, Emergency & Community Care",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/128/833/833593.png",
    label: "Founded By Community",
    value: "13 committed founders driving change",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/128/546/546448.png",
    label: "Our Commitment",
    value: "Transparent. Accountable. Sustainable.",
  },
];

export default function Hero() {
  return (
    <section className="font-body relative bg-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@600;700;800&family=Inter:wght@400;500;600&display=swap');
        .font-heading { font-family: 'Plus Jakarta Sans', sans-serif; }
        .font-body { font-family: 'Inter', sans-serif; }
        .cta-shadow-navy { box-shadow: 0 8px 18px -6px rgba(11,42,74,0.35); }
        .cta-shadow-magenta { box-shadow: 0 8px 18px -6px rgba(200,24,84,0.45); }
      `}</style>

      {/* Photo band */}
      <div className="relative h-[420px] md:h-[480px] overflow-hidden">
        <img
          src={HERO_IMAGE}
          alt="A mother holds her baby outside Rumuruti Community Hospital as a nurse looks on"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Left-side scrim so the headline stays legible over any photo */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-transparent md:via-white/70" />

        <div className="relative max-w-7xl mx-auto h-full px-5 md:px-8 flex items-center">
          <div className="max-w-xl">
            <h1 className="font-heading font-extrabold text-[#0B2A4A] text-[34px] sm:text-[42px] md:text-[48px] leading-[1.08] tracking-tight">
              Healthcare Should
              <br />
              Never Depend on Distance.
            </h1>
            <p className="mt-4 text-[#3A4A5E] text-[15px] md:text-[16.5px] max-w-md">
              Accessible, trusted, life-saving healthcare for Rumuruti, Laikipia
              and surrounding pastoralist communities.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <a
                href="#receive-care"
                className="inline-flex items-center gap-2 bg-[#0B2A4A] text-white text-[13.5px] font-bold tracking-wide uppercase px-6 py-3.5 rounded-full cta-shadow-navy hover:bg-[#0d3459] transition-colors"
              >
                <MapPin size={16} /> Receive Care
              </a>
              <a
                href="#partner"
                className="inline-flex items-center gap-2 bg-[#C81854] text-white text-[13.5px] font-bold tracking-wide uppercase px-6 py-3.5 rounded-full cta-shadow-magenta hover:bg-[#B01449] transition-colors"
              >
                <Handshake size={16} /> Partner With Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Quick facts strip — overlaps the bottom of the photo */}
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="relative -mt-10 md:-mt-12 bg-white rounded-2xl shadow-xl px-6 md:px-10 py-7 grid grid-cols-2 md:grid-cols-5 gap-y-6 gap-x-6">
          {FACTS.map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-start gap-3">
              <div className="mt-0.5 w-9 h-9 rounded-lg bg-[#0B2A4A]/5 flex items-center justify-center shrink-0">
                {/* <Icon size={18} className="text-[#0B2A4A]" /> */}

                <img src={Icon} alt="" />
              </div>
              <div>
                <div className="text-[12px] font-bold text-[#0B2A4A]">{label}</div>
                <div className="text-[12.5px] text-[#5B6B7F] leading-snug mt-0.5">
                  {value}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* spacer so content below the section doesn't collide with the overlapping card */}
      <div className="h-10 md:h-14" />
    </section>
  );
}