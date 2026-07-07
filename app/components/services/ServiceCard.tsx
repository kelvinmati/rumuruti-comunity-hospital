import React from "react";

export default function ServiceCard({
  image = "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=800&auto=format&fit=crop",
  iconUrl = "https://cdn-icons-png.flaticon.com/128/13163/13163083.png",
  title = "Outpatient Care",
  description = "General consultations for all ages.",
  index = 0,
}: {
  image?: string;
  iconUrl?: string;
  title?: string;
  description?: string;
  index?: number;
}) {
  const iconBg = index % 2 === 0 ? "bg-[#0E7C5A]" : "bg-[#C81854]";
  return (
    <div className="font-body w-full max-w-[220px] mx-auto">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@700&family=Inter:wght@400;500&display=swap');
        .font-heading { font-family: 'Plus Jakarta Sans', sans-serif; }
        .font-body { font-family: 'Inter', sans-serif; }
      `}</style>

      <div className="bg-white rounded-2xl shadow-md pb-6 text-center">
        {/* image */}
        <div className="h-36 rounded-t-2xl overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* icon badge, overlapping the image */}
        <div className="-mt-6 flex justify-center">
          <div className={`w-12 h-12 rounded-full ${iconBg} border-4 border-white shadow flex items-center justify-center`}>
            <img src={iconUrl} alt={title} className="w-6 h-6 object-contain brightness-0 invert" />
          </div>
        </div>

        {/* text */}
        <h3 className="font-heading font-bold text-[#0B2A4A] text-[15.5px] mt-3">
          {title}
        </h3>
        <p className="text-[12.5px] text-[#5B6B7F] mt-2 px-4 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}