import React from "react";
import { Users, HeartHandshake, PersonStanding, ClipboardCheck, FlaskConical, ArrowRight } from "lucide-react";

/**
 * "Our Impact In Progress" banner
 * -------------------------------------------------
 * Dark teal rounded bar: intro copy + CTA on the left, five stats on the
 * right separated by hairline dividers.
 */

const STATS = [
  { icon: Users, value: "50,000+", label: "Community Served" },
  { icon: HeartHandshake, value: "1,800+", label: "Mothers Reached (Through Outreach)" },
  { icon: PersonStanding, value: "2,900+", label: "Children Reached" },
  { icon: ClipboardCheck, value: "35+", label: "Outreach Clinics Conducted" },
  { icon: FlaskConical, value: "5,400+", label: "Lab Tests Completed" },
];

export default function ImpactBanner() {
  return (
    <section className="font-body py-10 md:py-14 bg-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@700;800&family=Inter:wght@400;500;600&display=swap');
        .font-heading { font-family: 'Plus Jakarta Sans', sans-serif; }
        .font-body { font-family: 'Inter', sans-serif; }
      `}</style>

      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="bg-[#0F4F44] rounded-2xl px-6 md:px-8 py-8 md:py-6">
          <div className="grid lg:grid-cols-[1.1fr_2.6fr] gap-8 lg:gap-4 items-center">
            {/* Left — copy */}
            <div className="lg:border-r lg:border-white/15 lg:pr-6">
              <h2 className="font-heading font-extrabold text-white text-[16px] tracking-wide uppercase">
                Our Impact In Progress
              </h2>
              <p className="text-white/70 text-[13px] mt-2.5 leading-relaxed max-w-[230px]">
                Every day, we are building a healthier community through care,
                compassion and commitment.
              </p>
              <a
                href="#impact"
                className="mt-4 inline-flex items-center gap-1.5 border border-white/40 text-white text-[11.5px] font-semibold px-4 py-2 rounded-full hover:bg-white/10 transition-colors"
              >
                See Our Impact <ArrowRight size={13} />
              </a>
            </div>

            {/* Right — stats */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-y-8 gap-x-4">
              {STATS.map(({ icon: Icon, value, label }, i) => (
                <div
                  key={label}
                  className={`text-center px-2 ${
                    i > 0 ? "sm:border-l sm:border-white/15" : ""
                  }`}
                >
                  <Icon size={26} className="text-white mx-auto" strokeWidth={1.75} />
                  <div className="text-white text-[12px] font-semibold mt-2.5 leading-snug min-h-[32px] flex items-center justify-center">
                    {label}
                  </div>
                  <div className="font-heading font-extrabold text-white text-[22px] md:text-[24px] mt-1">
                    {value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}