import React, { useState } from "react";
import { Heart } from "lucide-react";

/**
 * "News & Insights" + "Stay Connected" section
 * -------------------------------------------------
 * Left: three news items, each a small photo + date/title/body.
 * Right: navy newsletter card with a faint decorative heart watermark.
 */

const NEWS = [
  {
    image:
      "https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=600&auto=format&fit=crop",
    date: "May 20, 2026",
    title: "Community Outreach in Mutarakwa Ward",
    body: "Bringing health education and screenings closer to families.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?q=80&w=600&auto=format&fit=crop",
    date: "April 30, 2026",
    title: "Strengthening Maternal Health Services",
    body: "Equipping our facility to provide safer deliveries.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=600&auto=format&fit=crop",
    date: "April 10, 2026",
    title: "Building Partnerships for Impact",
    body: "Working together with partners for healthier communities.",
  },
];

export default function News() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <section className="font-body bg-white py-10 md:py-14">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@700;800&family=Inter:wght@400;500;600&display=swap');
        .font-heading { font-family: 'Plus Jakarta Sans', sans-serif; }
        .font-body { font-family: 'Inter', sans-serif; }
        .cta-shadow-magenta { box-shadow: 0 8px 18px -6px rgba(200,24,84,0.45); }
      `}</style>

      <div className="max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-[2.1fr_1fr] gap-8 items-stretch">
        {/* LEFT — news */}
        <div>
          <h2 className="font-heading font-extrabold text-[#C81854] text-[15px] tracking-wide uppercase mb-5">
            News & Insights
          </h2>
          <div className="grid sm:grid-cols-3 gap-5 h-full">
            {NEWS.map(({ image, date, title, body }) => (
              <div key={title} className="flex flex-col">
                <div className="h-28 rounded-lg overflow-hidden mb-3">
                  <img src={image} alt={title} className="w-full h-full object-cover" />
                </div>
                <span className="text-[10.5px] font-bold tracking-wide uppercase text-[#6B7280]">
                  {date}
                </span>
                <h3 className="font-heading font-bold text-[#0B2A4A] text-[14px] mt-1.5 leading-snug">
                  {title}
                </h3>
                <p className="text-[12px] text-[#6B7280] mt-1.5 leading-relaxed">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — stay connected */}
        <div className="relative bg-[#0B2A4A] rounded-2xl px-6 py-7 overflow-hidden flex flex-col justify-center">
          <Heart
            size={200}
            className="absolute -right-10 -bottom-10 text-white/[0.06] pointer-events-none"
            fill="currentColor"
            strokeWidth={0}
          />
          <h3 className="relative font-heading font-extrabold text-[#F2A0BC] text-[14px] tracking-wide uppercase">
            Stay Connected
          </h3>
          <p className="relative text-white/75 text-[13px] mt-2.5 leading-relaxed max-w-[260px]">
            Subscribe to get updates on our work, impact stories and ways to
            partner.
          </p>

          {/* {subscribed ? (
            <p className="relative mt-5 text-[#7FE0B8] text-[13px] font-medium">
              Thanks — you're subscribed.
            </p>
          ) : (
            <form
              className="relative mt-5 flex flex-col sm:flex-row gap-3"
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
                className="flex-1 min-w-0 rounded-full px-4 py-3 text-[13px] text-[#16233A] outline-none focus:ring-2 focus:ring-[#C81854] bg-white/90 placeholder:text-[#16233A]/60"
              />
              <button
                type="submit"
                className="bg-[#C81854] text-white text-[12.5px] font-bold tracking-wide uppercase px-5 py-3 rounded-full cta-shadow-magenta hover:bg-[#B01449] transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          )} */}

                      <form
              className="relative mt-5 flex flex-col sm:flex-row gap-3"
  
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-1 min-w-0 rounded-full px-4 py-3 text-[13px] text-[#16233A] outline-none focus:ring-2 focus:ring-[#C81854] bg-white/90 placeholder:text-[#16233A]/60"
              />
              <button
                // type="submit"
                className="bg-[#C81854] text-white text-[12.5px] font-bold tracking-wide uppercase px-5 py-3 rounded-full cta-shadow-magenta hover:bg-[#B01449] transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
        </div>
      </div>
    </section>
  );
}