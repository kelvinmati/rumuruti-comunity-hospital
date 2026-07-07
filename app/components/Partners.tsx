import React from "react";
import { Handshake, Building2, Stethoscope, HeartHandshake, ArrowRight } from "lucide-react";

/**
 * "Partner With RCH" section
 * -------------------------------------------------
 * Light gray rounded bar: eyebrow + headline + CTA on the far left,
 * four bordered partner-type cards in the middle, a photo bleeding to
 * the right edge.
 */

const PARTNER_TYPES = [
  {
    icon: Handshake,
    title: "Institutional Partners",
    body: "Foundations, NGOs & Development Agencies",
  },
  {
    icon: Building2,
    title: "Corporate Partners",
    body: "CSR partnerships that create lasting community impact",
  },
  {
    icon: Stethoscope,
    title: "Medical & Technical Partners",
    body: "Equipment, training, volunteers & expertise collaborations",
  },
  {
    icon: HeartHandshake,
    title: "Philanthropic Giving",
    body: "Support specific projects and life-saving initiatives",
  },
];

const PARTNER_IMAGE =
  "https://images.unsplash.com/photo-1615461066841-6116e61058f4?q=80&w=1200&auto=format&fit=crop";

export default function Partners() {
  return (
    <section className="font-body py-10 md:py-20 bg-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@700;800&family=Inter:wght@400;500;600&display=swap');
        .font-heading { font-family: 'Plus Jakarta Sans', sans-serif; }
        .font-body { font-family: 'Inter', sans-serif; }
        .cta-shadow-navy { box-shadow: 0 8px 18px -6px rgba(11,42,74,0.35); }
      `}</style>

      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="bg-[#F3F4F6] rounded-2xl overflow-hidden">
          <div className="grid lg:grid-cols-[0.85fr_2.3fr_1fr] gap-0">
            {/* Left — copy */}
            <div className="p-6 md:p-7 flex flex-col justify-center">
              <span className="text-[12px] font-extrabold tracking-wide uppercase text-[#C81854]">
                Partner With RCH
              </span>
              <p className="text-[#4B5563] text-[13.5px] mt-2.5 leading-relaxed max-w-[230px]">
                Join us in building a future where every family has access to
                quality healthcare.
              </p>
              <a
                // href="#partner-options"
                className="mt-4 inline-flex items-center gap-1.5 bg-[#0B2A4A] text-white text-[11.5px] font-bold tracking-wide uppercase px-4 py-2.5 rounded-full cta-shadow-navy hover:bg-[#0d3459] transition-colors w-fit"
              >
            Partnership Options <ArrowRight size={13} />
              </a>
            </div>

            {/* Middle — partner-type cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 md:p-5 items-stretch">
              {PARTNER_TYPES.map(({ icon: Icon, title, body }) => (
                <div
                  key={title}
                  className="bg-white rounded-xl border border-[#E5E7EB] px-4 py-5 text-center flex flex-col items-center"
                >
                  <Icon size={26} className="text-[#0B2A4A]" strokeWidth={1.6} />
                  <h3 className="font-heading font-bold text-[#0B2A4A] text-[13px] mt-3 leading-snug">
                    {title}
                  </h3>
                  <p className="text-[11.5px] text-[#6B7280] mt-2 leading-snug">
                    {body}
                  </p>
                </div>
              ))}
            </div>

            {/* Right — image, bleeds to the edge */}
            <div className="hidden lg:block relative min-h-[220px]">
              <img
                src={PARTNER_IMAGE}
                alt="Community health workers with young people in Rumuruti"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}