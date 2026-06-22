import Image from "next/image";
import Link from "next/link";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import ProductCategoriesTabs from "../components/ProductCategoriesTabs";
import BrandPartnersTabs from "../components/BrandPartnersTabs";
import Button from "../components/Button";

export const metadata = {
  title: "Products | Betopia PulseGrid",
  description: "Complete Solar Solutions for Every Scale. Discover PulseGrid's comprehensive range of Tier-1 solar components, intelligent packages, and specialty systems.",
};

const packages = [
  {
    id: "P0",
    name: "Go Solar",
    power: "0.5kW",
    tagline: "Perfect for basic home backup and small energy savings.",
    components: [
      "1 × 500W Tier-1 Panel",
      "1.2kVA Smart Hybrid Inverter",
      "1 × 12v200Ah Lithium (LiFePO4) Battery"
    ],
    features: [
      "Backup Time: 2-4 hours",
      "Basic lighting & fans"
    ],
    priceRange: "৳39,950 – ৳95,500"
  },
  {
    id: "P1",
    name: "Essential Starter",
    power: "1kW",
    tagline: "Perfect for entry-level home backup.",
    components: [
      "2 × 500W Tier-1 Panels",
      "2.2kW Smart Hybrid Inverter",
      "1 × 24v200Ah Lithium (LiFePO4) Battery"
    ],
    features: [
      "Backup Time: 2-4 hours",
      "Lights, Fans, TV, Wi-Fi, Laptop"
    ],
    priceRange: "৳62,500 – ৳1.88L"
  },
  {
    id: "P2",
    name: "Apartment Plus",
    power: "1.5kW",
    tagline: "Enhanced capacity for urban apartments.",
    components: [
      "3 × 500W Tier-1 Panels",
      "3kW Smart Hybrid Inverter",
      "1 × 25.6v200Ah Lithium (LiFePO4) Battery"
    ],
    features: [
      "Backup Time: 2-4 hours",
      "Includes small fridge, rice cooker"
    ],
    priceRange: "৳1.48L – ৳2.48L"
  },
  {
    id: "P3",
    name: "Family Comfort",
    power: "2kW",
    tagline: "The ideal balance for modern families.",
    components: [
      "4 × 500W Tier-1 Panels",
      "3.5kW Smart Hybrid Inverter",
      "1 × 48v200Ah Lithium (LiFePO4) Battery"
    ],
    features: [
      "Backup Time: 2-4 hours",
      "Adds water pump, washing machine"
    ],
    priceRange: "৳1.88L – ৳3.48L"
  },
  {
    id: "P4",
    name: "Smart Home",
    power: "3kW",
    tagline: "Heavy load capacity for smart homes.",
    components: [
      "6 × 500W Tier-1 Panels",
      "5kW Smart Hybrid Inverter",
      "1 × 51.2v200Ah Lithium (LiFePO4) Battery"
    ],
    features: [
      "Backup Time: 2-4 hours",
      "1-ton AC, induction cooker, smart systems"
    ],
    priceRange: "৳2.88L – ৳4.48L"
  },
  {
    id: "P5",
    name: "Luxury Suite",
    power: "4kW",
    tagline: "Complete luxury energy solution.",
    components: [
      "8 × 500W Tier-1 Panels",
      "6kW Smart Hybrid Inverter",
      "1 × 51.2v314Ah Lithium (LiFePO4) Battery"
    ],
    features: [
      "Backup Time: 2-4 hours",
      "1.5-ton AC, e-bike charging"
    ],
    priceRange: "৳3.48L – ৳5.48L"
  },
  {
    id: "P6",
    name: "Full Freedom",
    power: "5kW",
    tagline: "Independence for large residences.",
    components: [
      "10 × 500W Tier-1 Panels",
      "8.2kW Smart Hybrid Inverter",
      "1 × 51.2v314Ah Lithium (LiFePO4) Battery"
    ],
    features: [
      "Backup Time: 2-4 hours",
      "Multiple ACs, oven, full building"
    ],
    priceRange: "৳3.99L – ৳6.48L"
  },
  {
    id: "P7",
    name: "Estate Master",
    power: "10kW+",
    tagline: "Ultimate estate solution for zero-grid reliance.",
    components: [
      "20 × 500W Tier-1 Panels",
      "12.6kW Smart Hybrid Inverter",
      "2 × 51.2v314Ah Lithium (LiFePO4) Battery"
    ],
    features: [
      "Backup Time: 2-4 hours",
      "Industrial grade: Large estates, heavy machinery"
    ],
    priceRange: "৳7.98L – ৳13.48L"
  }
];

export default function ProductsPage() {
  return (
    <main>
      {/* 1. Hero Section */}
      <section className="relative w-full min-h-[85vh] flex items-center overflow-hidden bg-heading-3 pt-20">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/10002.jpg" 
            alt="Solar Panels and Wind Turbines" 
            fill 
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-heading-3 via-heading-3/80 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Left Content */}
            <div className="w-full lg:w-1/2">
              <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-heading-1 font-bold text-sm mb-6 border border-white/20 backdrop-blur-sm">
                Solar Solutions & Packages
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
                Complete Solar <br/><span className="text-heading-1">Solutions</span> for Every Scale
              </h1>
              <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-xl">
                From residential rooftops to industrial complexes, discover PulseGrid's comprehensive range of Tier-1 solar components, intelligent packages, and specialty systems powered by globally trusted brands.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <Button 
                  href="#packages" 
                  text="Explore Packages" 
                  className="bg-heading-1 border-heading-1 hover:bg-white pl-6 pr-1.5 py-1.5 min-w-[200px]" 
                  textClassName="text-heading-3" 
                  iconBg="bg-heading-3 text-white" 
                />
                <Button 
                  href="/contact" 
                  text="Contact Sales" 
                  className="bg-transparent border-white/20 hover:bg-white/10 pl-6 pr-1.5 py-1.5 min-w-[200px]" 
                  textClassName="text-white" 
                  iconBg="bg-white/20 text-white" 
                />
              </div>
            </div>

            {/* Right Highlights */}
            <div className="w-full lg:w-1/2 flex flex-col gap-4">
              {[
                "1kW – 10kW+ System Range",
                "Tier-1 Premium Brands",
                "7 Ready-to-Deploy Packages"
              ].map((highlight, idx) => (
                <div key={idx} className="bg-heading-3/50 backdrop-blur-md border border-heading-1/30 rounded-2xl p-6 flex items-center gap-4 hover:bg-heading-3/80 transition-colors duration-300 shadow-xl">
                  <div className="w-12 h-12 rounded-full bg-heading-1/20 flex items-center justify-center text-heading-1 shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <h3 className="text-white font-bold text-xl">{highlight}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Product Categories (Interactive) */}
      <section className="py-24 bg-[#11201d]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Product <span className="text-heading-1">Categories</span></h2>
            <p className="text-white/70 max-w-2xl text-lg">
              A comprehensive range of solar and electrical components sourced from globally trusted manufacturers, tailored for Bangladesh's climate and energy needs.
            </p>
          </div>
          <ProductCategoriesTabs />
        </div>
      </section>

      {/* 3. Solar Packages & Pricing */}
      <section id="packages" className="py-24 bg-[#f4f5f4]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-heading-2 uppercase tracking-[3px] text-xs font-bold mb-4 block">
              Pricing Plans
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-heading-3 leading-tight mb-4">
              Solar Packages & Pricing
            </h2>
            <p className="text-text-main text-lg">
              Tailored solar packages for residential, agricultural, and commercial applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {packages.map((pkg, idx) => (
              <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col border border-gray-100">
                {/* Header */}
                <div className="bg-heading-3 p-8 relative overflow-hidden">
                  <div className="absolute -right-4 -top-4 w-24 h-24 bg-heading-1 rounded-full opacity-10"></div>
                  <span className="inline-block px-3 py-1 bg-heading-1 text-heading-3 text-xs font-bold rounded-full mb-3 uppercase tracking-wider">
                    {pkg.id}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-1">{pkg.name}</h3>
                  <p className="text-white/70 text-sm">{pkg.tagline}</p>
                </div>
                
                {/* Body */}
                <div className="p-8 flex-1 flex flex-col">
                  <div className="mb-6 pb-6 border-b border-gray-100">
                    <span className="text-sm font-semibold text-text-main uppercase tracking-wider block mb-2">System Power</span>
                    <div className="text-4xl font-bold text-heading-3">{pkg.power}</div>
                  </div>
                  
                  <div className="mb-6">
                    <span className="text-xs font-bold text-text-main uppercase tracking-wider block mb-3">Components</span>
                    <ul className="space-y-2 mb-6">
                      {pkg.components.map((comp, cIdx) => (
                        <li key={cIdx} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-heading-1 mt-2 shrink-0"></div>
                          <span className="text-sm text-text-main/90">{comp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <ul className="space-y-4 mb-8 flex-1">
                    {pkg.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-heading-1 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        <span className="text-text-main font-medium">{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-6 border-t border-gray-100">
                    <span className="text-sm font-semibold text-text-main uppercase tracking-wider block mb-2">Starting From</span>
                    <div className="text-2xl font-bold text-heading-3 mb-6">{pkg.priceRange}</div>
                    <Button 
                      href="/contact" 
                      text="Request A Quote" 
                      className="bg-heading-3 border-heading-3 hover:bg-heading-1 pl-6 pr-1.5 py-1.5 w-full max-w-full" 
                      textClassName="text-white group-hover:text-heading-3" 
                      iconBg="bg-white/10 text-white group-hover:bg-heading-3 group-hover:text-white" 
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Commercial & Industrial Solutions */}
      <section className="py-24 bg-heading-3">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2">
              <span className="text-heading-1 uppercase tracking-[3px] text-xs font-bold mb-4 block">
                For Large Scale
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                Commercial & Industrial <br className="hidden md:block"/><span className="text-heading-1">Solutions</span>
              </h2>
              <p className="text-white/80 text-lg leading-relaxed mb-8">
                For projects above 10kW, PulseGrid designs bespoke solar infrastructure from feasibility study through SREDA NOC to commissioning — handled end-to-end.
              </p>
              
              <div className="mb-6 text-white/90 font-bold">Ideal for these sectors:</div>
              <ul className="space-y-4 mb-10">
                {["Hospitals & Medical Centers", "Universities & Educational Institutions", "Garment Factories & Manufacturing", "Commercial Office Buildings & Towers", "Agricultural Operations & Farms"].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-white/80 font-medium text-sm md:text-base">
                    <svg className="w-5 h-5 text-heading-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="grid grid-cols-2 gap-4">
                <div className="border border-white/10 rounded-2xl p-6 text-center bg-white/5 backdrop-blur-sm">
                  <div className="text-3xl font-bold text-heading-1 mb-1">10kW+</div>
                  <div className="text-xs text-white/60 uppercase tracking-wider font-semibold">Minimum Project Size</div>
                </div>
                <div className="border border-white/10 rounded-2xl p-6 text-center bg-white/5 backdrop-blur-sm">
                  <div className="text-3xl font-bold text-heading-1 mb-1">100%</div>
                  <div className="text-xs text-white/60 uppercase tracking-wider font-semibold">NOC & Compliance Handled</div>
                </div>
                <div className="border border-white/10 rounded-2xl p-6 text-center bg-white/5 backdrop-blur-sm">
                  <div className="text-3xl font-bold text-heading-1 mb-1">25yr</div>
                  <div className="text-xs text-white/60 uppercase tracking-wider font-semibold">Panel Performance Warranty</div>
                </div>
                <div className="border border-white/10 rounded-2xl p-6 text-center bg-white/5 backdrop-blur-sm">
                  <div className="text-3xl font-bold text-heading-1 mb-1">24/7</div>
                  <div className="text-xs text-white/60 uppercase tracking-wider font-semibold">Post-Install Monitoring</div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="bg-[#11201d] border border-white/10 rounded-3xl p-10 md:p-14 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-heading-1/10 rounded-full blur-3xl"></div>
                <div className="w-16 h-16 rounded-2xl bg-heading-3 flex items-center justify-center text-heading-1 mb-8 shadow-lg border border-white/5 relative z-10">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                </div>
                <h3 className="text-3xl font-bold text-white mb-6 relative z-10">Custom Engineering Quotes</h3>
                <p className="text-white/70 text-lg leading-relaxed mb-8 relative z-10">
                  Our team analyses your specific load profile, utility tariff, and roof topology to design the most cost-effective solar system — with a full financial ROI projection.
                </p>
                <ul className="space-y-4 mb-10 relative z-10">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-heading-1/20 flex items-center justify-center text-heading-1 shrink-0 mt-0.5">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <span className="text-white/90">Free site feasibility consultation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-heading-1/20 flex items-center justify-center text-heading-1 shrink-0 mt-0.5">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <span className="text-white/90">Detailed energy yield simulation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-heading-1/20 flex items-center justify-center text-heading-1 shrink-0 mt-0.5">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <span className="text-white/90">SREDA & BSTI compliance documentation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-heading-1/20 flex items-center justify-center text-heading-1 shrink-0 mt-0.5">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <span className="text-white/90">5-year ROI financial projection included</span>
                  </li>
                </ul>
                <Button 
                  href="/contact" 
                  text="Get Custom Quote" 
                  className="bg-white border-white hover:bg-heading-1 pl-6 pr-1.5 py-1.5 relative z-10" 
                  textClassName="text-heading-3" 
                  iconBg="bg-heading-3 text-white" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Trusted Brand Partners */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-heading-2 uppercase tracking-[3px] text-xs font-bold mb-4 block">
              Global Standards
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-heading-3 leading-tight mb-6">
              Trusted Brand Partners
            </h2>
            <p className="text-text-main text-lg">
              We exclusively partner with globally recognized, tier-1 manufacturers to ensure unparalleled quality, efficiency, and warranty support for every installation.
            </p>
          </div>

          <BrandPartnersTabs />
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
