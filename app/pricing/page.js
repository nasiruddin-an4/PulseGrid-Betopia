import Image from "next/image";
import Link from "next/link";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import Button from "../components/Button";

export const metadata = {
  title: "Pricing Plans | Betopia PulseGrid",
  description: "Transparent Solar Package Pricing. Estimated pricing for all Betopia PulseGrid solar packages.",
};

const pricingPackages = [
  {
    id: "P0",
    name: "Go Solar",
    tag: "Best for Small Homes",
    price: "৳39,950 – 95,500",
    desc: "Perfect for basic home backup and small energy savings.",
    features: [
      "1 × 500W Tier-1 Solar Panel",
      "1.2kVA Smart Hybrid Inverter",
      "1 × 12V 200Ah Lithium (LiFePO4) Battery",
      "2–4 Hours Backup"
    ]
  },
  {
    id: "P1",
    name: "Essential Starter",
    tag: "Entry Level",
    price: "৳62,500 – 1.88L",
    desc: "Perfect for entry-level home backup.",
    features: [
      "2 × 500W Tier-1 Solar Panels",
      "2.2kW Smart Hybrid Inverter",
      "1 × 24V 200Ah Lithium Battery",
      "2–4 Hours Backup"
    ]
  },
  {
    id: "P2",
    name: "Apartment Plus",
    tag: "Ideal for Flats",
    price: "৳1.48L – 2.48L",
    desc: "Enhanced capacity for apartments and small offices.",
    features: [
      "3 × 500W Tier-1 Solar Panels",
      "3kW Smart Hybrid Inverter",
      "1 × 25.6V 200Ah Lithium Battery",
      "2–4 Hours Backup"
    ]
  },
  {
    id: "P3",
    name: "Family Comfort",
    tag: "⭐ Popular Choice",
    price: "৳1.88L – 3.48L",
    desc: "The ideal balance for modern families.",
    features: [
      "4 × 500W Tier-1 Solar Panels",
      "3.5kW Smart Hybrid Inverter",
      "1 × 48V 200Ah Lithium Battery",
      "2–4 Hours Backup"
    ]
  },
  {
    id: "P4",
    name: "Smart Home",
    tag: "Heavy Load",
    price: "৳2.88L – 4.48L",
    desc: "Designed for smart homes and heavier electrical loads.",
    features: [
      "6 × 500W Tier-1 Solar Panels",
      "5kW Smart Hybrid Inverter",
      "1 × 51.2V 200Ah Lithium Battery",
      "2–4 Hours Backup"
    ]
  },
  {
    id: "P5",
    name: "Luxury Suite",
    tag: "High Efficiency",
    price: "৳3.48L – 5.48L",
    desc: "Complete luxury energy solution with high-efficiency output.",
    features: [
      "8 × 500W Tier-1 Solar Panels",
      "6kW Smart Hybrid Inverter",
      "1 × 51.2V 314Ah Lithium Battery",
      "2–4 Hours Backup"
    ]
  },
  {
    id: "P6",
    name: "Full Freedom",
    tag: "Greater Independence",
    price: "৳3.99L – 6.48L",
    desc: "Ideal for large residences seeking greater energy independence.",
    features: [
      "10 × 500W Tier-1 Solar Panels",
      "8.2kW Smart Hybrid Inverter",
      "1 × 51.2V 314Ah Lithium Battery",
      "2–4 Hours Backup"
    ]
  },
  {
    id: "P7",
    name: "Estate Master",
    tag: "Zero-Grid Reliance",
    price: "৳7.98L – 13.48L",
    desc: "Ultimate solar solution for estates and large properties.",
    features: [
      "20 × 500W Tier-1 Solar Panels",
      "12.6kW Smart Hybrid Inverter",
      "2 × 51.2V 314Ah Lithium Batteries",
      "2–4 Hours Backup"
    ]
  },
  {
    id: "Commercial & Industrial",
    name: "Custom Quote",
    tag: "10kW+",
    price: "Custom Quote",
    desc: "Suitable for factories, offices, shopping malls, hospitals, educational institutions, commercial buildings.",
    features: [
      "Detailed Load Analysis",
      "ROI Projection (3–5 Years)",
      "SREDA & Govt Compliance Support",
      "Custom System Design"
    ],
    isCommercial: true
  }
];

export default function PricingPage() {
  return (
    <main>
      {/* 1. Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center pt-20">
        <div className="fixed inset-0 -z-10 bg-heading-3">
          <Image
            src="/10004.jpg"
            alt="Solar Panels and Wind Turbines"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-heading-3/80"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center flex flex-col items-center">

          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            Transparent Solar Package Pricing
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Estimated pricing for all Betopia PulseGrid solar packages.
            <br />
            <span className="text-sm opacity-80 mt-2 block">Note: Prices exclude mounting structures, fitting accessories, and installation charges.</span>
          </p>
        </div>
      </section>

      {/* 2. Pricing Grid */}
      <section className="py-24 bg-[#f4f5f4]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
            {pricingPackages.map((pkg, idx) => (
              <div
                key={idx}
                className={`rounded-3xl p-8 flex flex-col shadow-xl hover:shadow-2xl transition-all duration-300 border ${pkg.isCommercial ? "bg-[#11201d] border-heading-1/30" : "bg-[#1b3b36] border-white/10"
                  }`}
              >
                {/* Header */}
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className={`text-xl font-bold ${pkg.isCommercial ? 'text-heading-1' : 'text-white'} mb-2`}>
                      {pkg.isCommercial ? pkg.id : `${pkg.id} ${pkg.name}`}
                    </h3>
                    {pkg.isCommercial ? (
                      <div className="text-3xl font-bold text-white mt-4">{pkg.price}</div>
                    ) : (
                      <div className="flex items-end gap-2">
                        <div className="text-2xl md:text-3xl font-bold text-white">{pkg.price}</div>
                        <span className="text-white/60 text-sm mb-1">/ Est.</span>
                      </div>
                    )}
                  </div>
                  <div className="bg-white text-heading-3 text-[10px] sm:text-xs font-bold px-3 py-1.5 rounded-md text-center leading-tight shadow-sm max-w-[100px]">
                    {pkg.tag}
                  </div>
                </div>

                {/* Description */}
                <p className="text-white/70 text-sm leading-relaxed mb-8 h-10 line-clamp-2">
                  {pkg.desc}
                </p>

                {/* Features List */}
                <ul className="space-y-4 mb-10 flex-1">
                  {pkg.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-heading-1 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                      <span className="text-white/90 text-sm font-medium">{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <div className="mt-auto">
                  <Button
                    href="/quote"
                    text={pkg.isCommercial ? "Call Sales Team" : "Get Quote"}
                    className="bg-transparent border-white/20 hover:border-heading-1 hover:bg-heading-1/10 pl-6 pr-1.5 py-1.5 w-full max-w-full justify-between group"
                    textClassName="text-white group-hover:text-white"
                    iconBg="bg-white/10 text-white group-hover:bg-heading-1 group-hover:text-heading-3"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
