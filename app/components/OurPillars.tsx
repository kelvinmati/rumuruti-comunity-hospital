import React from 'react'
import { HeartPulse, Siren, HandHeart, ShieldCheck, Users } from 'lucide-react'
const OurPillars = () => {
  const accentMap = {
    teal: { bg: "bg-[#0E7C5A]/10", text: "text-[#0E7C5A]" },
    magenta: { bg: "bg-[#C81854]/10", text: "text-[#C81854]" },
    navy: { bg: "bg-[#0B2A4A]/10", text: "text-[#0B2A4A]" },
  };

const pillars = [
  {
    icon: "https://cdn-icons-png.flaticon.com/128/19034/19034561.png",
    title: "Maternal & Child Health",
    body: "Saving mothers, protecting children, and nurturing healthy families from pregnancy through early childhood.",
    accent: "teal",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/128/2785/2785693.png",
    title: "Emergency & Referral Care",
    body: "Timely response, stabilization, and safe referral when minutes are the difference that matters most.",
    accent: "magenta",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/128/7757/7757803.png",
    title: "Accessible Community Healthcare",
    body: "Quality care closer to home for every family, regardless of income or distance.",
    accent: "navy",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/128/1489/1489589.png",
    title: "Trust & Accountability",
    body: "Transparent governance and ethical, responsible use of every resource we're entrusted with.",
    accent: "magenta",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/128/16780/16780041.png",
    title: "Sustainable Health Systems",
    body: "Building systems that strengthen this community today, and for generations after us.",
    accent: "teal",
  },
];

  return (
    <section className="border-t border-b border-gray-300">

  
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-4">
        <div className="text-center max-w-2xl mx-auto mb-7">
          <span className="text-[12px] font-bold tracking-wide uppercase text-[#C81854]">Our Pillars</span>

        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {pillars.map(({ icon: Icon, title, body, accent }) => (
            <div key={title} className="text-center px-2 border-l border-gray-300 first:border-l-0">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                {/* <Icon size={24} className={accentMap[accent].text} /> */}
                <img src={Icon} alt="" className={accentMap[accent].text} />
              </div>
              <h3 className={`font-heading font-bold ${accentMap[accent].text} text-[15.5px]`}>{title}</h3>
              <p className="text-[13.5px] text-[#5B6B7F] mt-2 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}

export default OurPillars