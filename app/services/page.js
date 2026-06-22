import Image from "next/image";
import Link from "next/link";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import Button from "../components/Button";

export const metadata = {
  title: "Services | Betopia PulseGrid",
  description: "Excellence in Solar Engineering. From comprehensive energy audits to precision installations and 24/7 maintenance support.",
};

const services = [
  {
    title: "Renewable Energy Project Development & Sourcing",
    desc: "From early feasibility studies and financing support to full-scale solar, wind, and hybrid energy project implementation.",
    bgImage: "/10001.jpg"
  },
  {
    title: "Energy & Infrastructure Solutions",
    desc: "Reliable power generation, smart grid integration, and infrastructure upgrades designed for long-term performance.",
    bgImage: "/10002.jpg"
  },
  {
    title: "Government Tender & RFQ Strategy",
    desc: "Strategic support for e-GP participation, bid preparation, compliance requirements, and competitive proposal development.",
    bgImage: "/10003.jpg"
  },
  {
    title: "OEM Spare Parts Indenting",
    desc: "Procurement and supply of OEM-certified components for power plants, turbines, and industrial equipment.",
    bgImage: "/10004.jpg"
  },
  {
    title: "Turnkey Supply & Installation",
    desc: "Complete project execution including procurement, logistics, installation, commissioning, and handover.",
    bgImage: "/10001.jpg"
  },
  {
    title: "Compliance & Documentation Support",
    desc: "Professional assistance with audits, certifications, regulatory compliance, documentation, and approvals.",
    bgImage: "/10002.jpg"
  }
];

const featuredPackages = [
  {
    id: "P1",
    name: "Essential Starter",
    power: "1 kW",
    price: "৳62.5K+",
    desc: "Perfect for entry-level home backup."
  },
  {
    id: "P3",
    name: "Family Comfort",
    power: "2 kW",
    price: "৳1.88L+",
    desc: "The ideal balance for modern families."
  },
  {
    id: "P7",
    name: "Estate Master",
    power: "10 kW",
    price: "৳7.98L+",
    desc: "The ultimate estate solution for zero-grid reliance."
  }
];

export default function ServicesPage() {
  return (
    <main>
      {/* 1. Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center pt-20">
        <div className="fixed inset-0 -z-10 bg-heading-3">
          <Image 
            src="/10002.jpg" 
            alt="Solar Engineering" 
            fill 
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-heading-3/90"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            Excellence in <span className="text-heading-1">Solar</span> <br className="hidden md:block"/> Engineering
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto leading-relaxed">
            From comprehensive energy audits to precision installations and 24/7 maintenance support — we power your transition to clean energy.
          </p>
        </div>
      </section>

      {/* 2. Services Grid */}
      <section className="py-24 bg-[#f4f5f4]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="text-heading-2 uppercase tracking-[3px] text-xs font-bold mb-4 block">
                Our Services
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-heading-3 leading-tight">
                Powering the Future with <span className="text-heading-1 font-light">Renewable</span> Energy Solutions
              </h2>
            </div>
            <div className="max-w-xs">
              <p className="text-text-main text-sm leading-relaxed border-l-2 border-heading-1 pl-4">
                We deliver innovative, eco-friendly energy systems designed to reduce environmental impact.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, idx) => (
              <div 
                key={idx} 
                className="group relative h-[400px] rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
              >
                {/* Background Image */}
                <Image 
                  src={service.bgImage} 
                  alt={service.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-heading-3 via-heading-3/60 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100"></div>

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-heading-1 mb-6 group-hover:-translate-y-2 transition-transform duration-300">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:-translate-y-2 transition-transform duration-300 delay-75">
                    {service.title}
                  </h3>
                  
                  <p className="text-white/70 text-sm leading-relaxed mb-6 group-hover:-translate-y-2 transition-transform duration-300 delay-100 line-clamp-3">
                    {service.desc}
                  </p>
                  
                  {/* Hover Arrow/Text */}
                  <div className="flex items-center gap-2 text-heading-1 font-bold text-sm translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-150">
                    <span>Get Started</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CTA Block */}
      <CTA />

      {/* 4. Featured Packages */}
      <section className="py-24 bg-[#f4f5f4]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-heading-2 uppercase tracking-[3px] text-xs font-bold mb-4 block">
              Solar Packages
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-heading-3 leading-tight">
              Find the Perfect Package for Your Energy Needs
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto mb-12">
            {featuredPackages.map((pkg, idx) => (
              <div 
                key={idx} 
                className="bg-[#1b3b36] border border-white/10 rounded-3xl p-8 flex flex-col shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-heading-1/10 rounded-full blur-2xl group-hover:bg-heading-1/20 transition-colors duration-500"></div>
                
                <div className="flex justify-between items-start mb-6 relative z-10">
                  <h3 className="text-xl font-bold text-white mb-2">
                    <span className="text-heading-1 mr-2">{pkg.id}</span>
                    {pkg.name}
                  </h3>
                  <div className="text-white/60 text-xs font-bold px-2 py-1 bg-white/5 rounded-md">
                    {pkg.power}
                  </div>
                </div>

                <div className="text-4xl font-bold text-white mb-6 relative z-10">
                  {pkg.price}
                </div>

                <p className="text-white/70 text-sm leading-relaxed mb-10 h-10 line-clamp-2 relative z-10">
                  {pkg.desc}
                </p>

                <div className="mt-auto relative z-10">
                  <Button 
                    href="/pricing" 
                    text="View Package Details" 
                    className="bg-transparent border-white/20 hover:border-heading-1 hover:bg-heading-1/10 pl-6 pr-1.5 py-1.5 w-full max-w-full justify-between" 
                    textClassName="text-white" 
                    iconBg="bg-white/10 text-white group-hover:bg-heading-1 group-hover:text-heading-3" 
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/pricing" className="inline-flex items-center gap-2 text-heading-3 font-bold hover:text-heading-1 transition-colors duration-300 border-b border-heading-3/30 hover:border-heading-1 pb-1">
              See All Packages & Detailed Pricing
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </section>
      
      {/* 5. Footer */}
      <Footer />
    </main>
  );
}
