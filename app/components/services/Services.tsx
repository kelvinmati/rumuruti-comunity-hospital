import React from 'react'
import ServiceCard from './ServiceCard';

const Services = () => {

  const services = [
  { iconUrl: "https://cdn-icons-png.flaticon.com/128/13163/13163083.png", title: "Outpatient Care", body: "General consultations for all ages." ,image:"https://images.unsplash.com/photo-1781263409522-06f1d4a6f3af?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fE91dHBhdGllbnQlMjBDYXJlJTIwYWZyaWNhbnxlbnwwfHwwfHx8MA%3D%3D"},
  { iconUrl: "https://cdn-icons-png.flaticon.com/128/9581/9581463.png", title: "Maternal Care", body: "Antenatal, delivery, and postnatal support." ,image:"https://plus.unsplash.com/premium_photo-1661895504446-902ae02bbc05?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TWF0ZXJuYWwlMjBDYXJlJTIwYWZyaWNhbnxlbnwwfHwwfHx8MA%3D%3D"},
  { iconUrl: "https://cdn-icons-png.flaticon.com/128/9133/9133645.png", title: "Child Health", body: "Well-baby checks, immunization, and treatment.",image:"https://plus.unsplash.com/premium_photo-1721861982256-3d4e155afd92?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q2hpbGQlMjBIZWFsdGglMjBhZnJpY2FufGVufDB8fDB8fHww" },
  { iconUrl: "https://cdn-icons-png.flaticon.com/128/2563/2563559.png", title: "Laboratory Services", body: "Accurate diagnostics for confident treatment." ,image:"https://images.unsplash.com/photo-1569830904560-2afd7062213c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fExhYm9yYXRvcnklMjBTZXJ2aWNlcyUyMGFmcmljYW58ZW58MHx8MHx8fDA%3D"},
  { iconUrl: "https://cdn-icons-png.flaticon.com/128/12630/12630873.png", title: "Pharmacy Services", body: "Quality medicines you can trust.",image:"https://images.unsplash.com/photo-1660221600304-250811c04ce5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fFBoYXJtYWN5JTIwU2VydmljZXMlMjBhZnJpY2FufGVufDB8fDB8fHww" },
  { iconUrl: "https://cdn-icons-png.flaticon.com/128/17859/17859664.png", title: "Physiotherapy", body: "Rehabilitation and mobility restoration." ,image:"https://images.unsplash.com/photo-1710897872968-ae0c6306e914?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fFBoeXNpb3RoZXJhcHklMjBhZnJpY2FufGVufDB8fDB8fHww"},
  { iconUrl: "https://cdn-icons-png.flaticon.com/128/3063/3063181.png", title: "Emergency Care", body: "Stabilization and referral for critical cases." ,image:"https://images.unsplash.com/photo-1707485318490-c00cb7239da0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fEVtZXJnZW5jeSUyMENhcmUlMjBrZW55YW58ZW58MHx8MHx8fDA%3D"},
  // { iconUrl: "https://cdn-icons-png.flaticon.com/128/3063/3063181.png", title: "Emergency Care", body: "Stabilization and referral for critical cases." ,image:"https://images.unsplash.com/photo-1515658323406-25d61c141a6e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q29tbXVuaXR5JTIwT3V0cmVhY2glMjBrZW55YW58ZW58MHx8MHx8fDA%3D"},

  { iconUrl: "https://cdn-icons-png.flaticon.com/128/17338/17338232.png", title: "Community Outreach", body: "Health education, screenings, and mobile clinics." ,image:"https://images.unsplash.com/photo-1515658323406-25d61c141a6e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q29tbXVuaXR5JTIwT3V0cmVhY2glMjBrZW55YW58ZW58MHx8MHx8fDA%3D" },
];
  return (
      <section id="services" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[12px] font-bold tracking-wide uppercase text-[#C81854]">Our Services</span>
  
          </div>
          {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {services.map(({ icon: Icon, title, body }) => (
              <div key={title} className="bg-white rounded-xl p-5 border border-[#EEE7D8] hover:shadow-md hover:-translate-y-0.5 transition-all">
                <div className="w-10 h-10 rounded-full bg-[#0E7C5A]/10 flex items-center justify-center mb-4">
                  <Icon size={18} className="text-[#0E7C5A]" />
                </div>
                <h3 className="font-heading font-bold text-[#0B2A4A] text-[14.5px]">{title}</h3>
                <p className="text-[12.5px] text-[#5B6B7F] mt-1.5 leading-relaxed">{body}</p>
              </div>
            ))}
          </div> */}


<div className="grid grid-cols-2 md:grid-cols-5 gap-4">
{services.map(({ iconUrl, title, body , image}, i) => (
  <ServiceCard key={title} iconUrl={iconUrl} title={title} description={body} image={image} index={i} />
))}
          
  
</div>
          
        </div>
      </section>
  )
}

export default Services