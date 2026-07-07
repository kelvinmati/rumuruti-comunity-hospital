import React, { useState } from "react";
import {
  MapPin, Users, HeartPulse, CalendarCheck, Handshake, ArrowRight,
  Siren, ShieldCheck, Stethoscope, FlaskConical, Pill, Activity,
  Ambulance, HandHeart, Menu, X, Mail, Phone,  ChevronRight
} from "lucide-react";
import Navbar from "./Navbar";

/**
 * Rumuruti Community Hospital — Landing Page
 * -------------------------------------------------
 * Design tokens
 *  Navy      #0B2A4A  (trust, headings)
 *  Magenta   #C81854  (urgency / primary CTA — "the ambulance color")
 *  Teal      #0E7C5A  (care, growth, impact numbers)
 *  Sand      #F6F1E7  (warm savanna background for the "distance" story)
 *  Ink       #16233A  (body text)
 *  Muted     #5B6B7F  (secondary text)
 *
 * Fonts: Plus Jakarta Sans (headings/eyebrows) + Inter (body/UI)
 * Signature element: the "Distance Ring" — a radial diagram plotting real
 * surrounding towns at their real relative distance from Rumuruti, with the
 * hospital pulsing at the center. It's the thesis of the whole page made visual:
 * healthcare access here is a function of distance.
 */

const townDistances = [
  { name: "Maralal", km: 90, angle: -55 },
  { name: "Samburu", km: 120, angle: -15 },
  { name: "Nanyuki", km: 85, angle: 35 },
  { name: "Nyahururu", km: 60, angle: 145 },
  { name: "Nakuru", km: 140, angle: 190 },
];

const pillars = [
  {
    icon: HeartPulse,
    title: "Maternal & Child Health",
    body: "Saving mothers, protecting children, and nurturing healthy families from pregnancy through early childhood.",
    accent: "teal",
  },
  {
    icon: Siren,
    title: "Emergency & Referral Care",
    body: "Timely response, stabilization, and safe referral when minutes are the difference that matters most.",
    accent: "magenta",
  },
  {
    icon: HandHeart,
    title: "Accessible Community Healthcare",
    body: "Quality care closer to home for every family, regardless of income or distance.",
    accent: "navy",
  },
  {
    icon: ShieldCheck,
    title: "Trust & Accountability",
    body: "Transparent governance and ethical, responsible use of every resource we're entrusted with.",
    accent: "magenta",
  },
  {
    icon: Users,
    title: "Sustainable Health Systems",
    body: "Building systems that strengthen this community today, and for generations after us.",
    accent: "teal",
  },
];

const services = [
  { icon: Stethoscope, title: "Outpatient Care", body: "General consultations for all ages." },
  { icon: HeartPulse, title: "Maternal Care", body: "Antenatal, delivery, and postnatal support." },
  { icon: Activity, title: "Child Health", body: "Well-baby checks, immunization, and treatment." },
  { icon: FlaskConical, title: "Laboratory Services", body: "Accurate diagnostics for confident treatment." },
  { icon: Pill, title: "Pharmacy Services", body: "Quality medicines you can trust." },
  { icon: HandHeart, title: "Physiotherapy", body: "Rehabilitation and mobility restoration." },
  { icon: Ambulance, title: "Emergency Care", body: "Stabilization and referral for critical cases." },
  { icon: Users, title: "Community Outreach", body: "Health education, screenings, and mobile clinics." },
];

const impact = [
  { value: "50,000+", label: "Community Served" },
  { value: "1,800+", label: "Mothers Reached" },
  { value: "2,900+", label: "Children Reached" },
  { value: "35+", label: "Outreach Clinics" },
  { value: "5,400+", label: "Lab Tests Completed" },
];

const partners = [
  { icon: Handshake, title: "Institutional Partners", body: "Foundations, NGOs & development agencies." },
  { icon: Users, title: "Corporate Partners", body: "CSR partnerships that create lasting impact." },
  { icon: Stethoscope, title: "Medical & Technical Partners", body: "Equipment, training, and volunteer expertise." },
  { icon: HandHeart, title: "Philanthropic Giving", body: "Support specific projects and life-saving initiatives." },
];

const news = [
  {
    date: "May 20, 2026",
    title: "Community Outreach in Mutarakwa Ward",
    body: "Bringing health education and screenings closer to families who need them most.",
  },
  {
    date: "Apr 30, 2026",
    title: "Strengthening Maternal Health Services",
    body: "Equipping our facility for safer deliveries across the region.",
  },
  {
    date: "Apr 10, 2026",
    title: "Building Partnerships for Impact",
    body: "Working together with partners for healthier communities.",
  },
];

const NAV_LINKS = ["Home", "About RCH", "Our Services", "Our Impact", "Partners", "Governance", "News & Insights"];

function Logo({ light }) {
  return (
    <div className="flex items-center gap-2.5">
      <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
        <path
          d="M17 3C10 3 4 8.5 4 15.5C4 24 12 28 17 31C22 28 30 24 30 15.5C30 8.5 24 3 17 3Z"
          fill={light ? "#ffffff" : "#0B2A4A"}
        />
        <path d="M17 8L20 15H26L21 19L23 26L17 22L11 26L13 19L8 15H14L17 8Z" fill="#C81854" />
      </svg>
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

function DistanceRing() {
  const cx = 260, cy = 260;
  const scale = 1.35; // px per km, compressed

  return (
    <svg viewBox="0 0 520 520" className="w-full h-auto max-w-[460px] mx-auto">
      {[60, 90, 120].map((r, i) => (
        <circle key={r} cx={cx} cy={cy} r={r} fill="none" stroke="#C6BBA4" strokeDasharray="3 6" strokeWidth="1.2" opacity={0.9 - i * 0.15} />
      ))}
      <circle cx={cx} cy={cy} r="26" fill="#0E7C5A" opacity="0.15">
        <animate attributeName="r" values="24;34;24" dur="2.8s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.2;0.05;0.2" dur="2.8s" repeatCount="indefinite" />
      </circle>
      <circle cx={cx} cy={cy} r="16" fill="#0B2A4A" />
      <text x={cx} y={cy + 4} textAnchor="middle" fill="#fff" fontSize="9" fontWeight="700" fontFamily="Plus Jakarta Sans">RCH</text>

      {townDistances.map((t) => {
        const r = Math.min(t.km * 0.85, 175);
        const rad = (t.angle * Math.PI) / 180;
        const x = cx + r * Math.cos(rad);
        const y = cy + r * Math.sin(rad);
        return (
          <g key={t.name}>
            <line x1={cx} y1={cy} x2={x} y2={y} stroke="#C81854" strokeWidth="1" opacity="0.25" />
            <circle cx={x} cy={y} r="5" fill="#C81854" />
            <text x={x} y={y - 12} textAnchor="middle" fontFamily="Inter" fontSize="12" fontWeight="600" fill="#0B2A4A">
              {t.name}
            </text>
            <text x={x} y={y + 20} textAnchor="middle" fontFamily="Inter" fontSize="10" fill="#5B6B7F">
              {t.km} km
            </text>
          </g>
        );
      })}
    </svg>
  );
}

export default function RumurutiHospitalSite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);



  return (
    <div className="font-body text-[#16233A] bg-white antialiased">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&family=Inter:wght@400;500;600&display=swap');
        .font-heading { font-family: 'Plus Jakarta Sans', sans-serif; }
        .font-body { font-family: 'Inter', sans-serif; }
        .cta-shadow { box-shadow: 0 8px 20px -6px rgba(200,24,84,0.45); }
        .cta-shadow-navy { box-shadow: 0 8px 20px -6px rgba(11,42,74,0.35); }
      `}</style>



      {/* WHY RCH EXISTS — signature Distance Ring */}
      {/* <section className="bg-white pt-24 md:pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-14 items-center">
          <div>
            <span className="text-[12px] font-bold tracking-wide uppercase text-[#C81854]">Why RCH Exists</span>
            <h2 className="font-heading font-bold text-[#0B2A4A] text-[28px] md:text-[36px] mt-3 leading-tight">
              We exist to close the gap in healthcare access.
            </h2>
            <p className="text-[#5B6B7F] mt-4 text-[15.5px] max-w-md">
              Families across our region travel long distances for basic and emergency care.
              RCH was founded by the community to ensure that no mother, child, or family is left behind —
              wherever they live.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Long distances to the nearest facility",
                "High cost of travel for basic care",
                "Delayed care during emergencies",
                "Lives put at risk by preventable delay",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-[14px] text-[#0B2A4A] font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C81854]" />
                  {item}
                </li>
              ))}
            </ul>
            <a href="#about" className="mt-7 inline-flex items-center gap-1.5 bg-[#0B2A4A] text-white text-[14px] font-semibold px-5 py-3 rounded-full cta-shadow-navy hover:bg-[#0d3459] transition-colors">
              Learn More About RCH <ArrowRight size={15} />
            </a>
          </div>
          <div className="bg-white/60 border border-[#E5DCC5] rounded-2xl p-6">
            <DistanceRing />
            <p className="text-center text-[12px] text-[#5B6B7F] mt-1">
              Approximate distance from Rumuruti to neighboring towns
            </p>
          </div>
        </div>
      </section> */}

      {/* PILLARS */}




    

      {/* PARTNERS */}
      {/* <section id="partner" className="max-w-7xl mx-auto px-5 md:px-8 py-14">
        <div className="grid md:grid-cols-2 gap-10 items-center bg-white border border-[#EEE7D8] rounded-2xl p-6 md:p-10">
          <div>
            <span className="text-[12px] font-bold tracking-wide uppercase text-[#C81854]">Partner With RCH</span>
            <h2 className="font-heading font-bold text-[#0B2A4A] text-[24px] md:text-[28px] mt-3 leading-snug">
              Join us in building a future where every family has access to quality healthcare.
            </h2>
            <a href="#contact" className="mt-6 inline-flex items-center gap-1.5 bg-[#0B2A4A] text-white text-[14px] font-semibold px-5 py-3 rounded-full cta-shadow-navy hover:bg-[#0d3459] transition-colors">
              Explore Partnership Options <ArrowRight size={15} />
            </a>
            <div className="grid grid-cols-2 gap-5 mt-8">
              {partners.map(({ icon: Icon, title, body }) => (
                <div key={title}>
                  <Icon size={20} className="text-[#0E7C5A] mb-2" />
                  <div className="font-heading font-bold text-[#0B2A4A] text-[13.5px]">{title}</div>
                  <div className="text-[12px] text-[#5B6B7F] mt-1 leading-snug">{body}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="aspect-square rounded-2xl overflow-hidden">
            <img
              alt="Community health volunteers with children in Rumuruti"
              src="https://images.unsplash.com/photo-1615461066841-6116e61058f4?q=80&w=1000&auto=format&fit=crop"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section> */}

      {/* NEWS + NEWSLETTER */}
      {/* <section className="max-w-7xl mx-auto px-5 md:px-8 py-14 grid lg:grid-cols-[2fr_1fr] gap-8">
        <div>
          <span className="text-[12px] font-bold tracking-wide uppercase text-[#C81854]">News & Insights</span>
          <h2 className="font-heading font-bold text-[#0B2A4A] text-[24px] md:text-[28px] mt-3 mb-6">
            Stories from the front line of community care
          </h2>
          <div className="grid sm:grid-cols-3 gap-5">
            {news.map(({ date, title, body }) => (
              <div key={title} className="border border-[#EEE7D8] rounded-xl p-5 hover:shadow-md transition-shadow">
                <div className="text-[11px] font-semibold text-[#C81854] uppercase tracking-wide">{date}</div>
                <h3 className="font-heading font-bold text-[#0B2A4A] text-[14.5px] mt-2 leading-snug">{title}</h3>
                <p className="text-[12.5px] text-[#5B6B7F] mt-2 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-[#0B2A4A] rounded-2xl p-7 flex flex-col justify-center">
          <h3 className="font-heading font-bold text-white text-[19px]">Stay connected</h3>
          <p className="text-white/70 text-[13px] mt-2">
            Get updates on our work, impact stories, and ways to partner.
          </p>
          {subscribed ? (
            <p className="mt-5 text-[#7FE0B8] text-[13.5px] font-medium">
              Thanks — you're subscribed.
            </p>
          ) : (
            <form
              className="mt-5 flex flex-col gap-3"
              onSubmit={(e) => {
                e.preventDefault();
                if (email.trim()) setSubscribed(true);
              }}
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full rounded-full px-4 py-3 text-[13.5px] text-[#16233A] outline-none focus:ring-2 focus:ring-[#C81854]"
              />
              <button
                type="submit"
                className="bg-[#C81854] text-white text-[13.5px] font-semibold px-5 py-3 rounded-full cta-shadow hover:bg-[#B01449] transition-colors"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </section> */}

      {/* FOOTER */}
      {/* <footer className="bg-[#0B2A4A] pt-14 pb-8">
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid md:grid-cols-4 gap-10">
          <div>
            <Logo light />
            <p className="text-white/60 text-[12.5px] mt-4 max-w-xs leading-relaxed">
              RCH exists to ensure that every mother, child, and family in our community has access to
              quality, dignified, and timely healthcare.
            </p>
            <div className="flex gap-3 mt-5">
              {[Phone].map((Icon, i) => (
                <a key={i} href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Icon size={15} className="text-white" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-heading font-bold text-white text-[13.5px] mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-[13px] text-white/60">
              {["About RCH", "Our Services", "Our Impact", "Governance", "Contact Us"].map((l) => (
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
      </footer> */}
    </div>
  );
}