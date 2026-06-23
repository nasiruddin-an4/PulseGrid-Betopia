import Link from "next/link";
import Image from "next/image";
import Button from "./Button";

const featuredPackage = {
  kw: "3kW",
  name: "The Smart Home",
  badge: "Most Popular Package",
  specs: "6 × 500W Panels + 5kW Inverter + 1 × 51.2v200Ah Lithium Battery",
  runs: "Runs 1 TON AC, Induction Cooker, and full home lighting.",
  priceMin: "2,88,000",
  priceMax: "4,48,000",
};

const packages = [
  {
    id: 1,
    kw: "1kW",
    name: "Essential Starter",
    runs: "Lights, Fans, TV, Wi-Fi,\nLaptop",
    priceMin: "62.5k",
    priceMax: "1.88L",
    bgClass: "bg-[#1f3735]",
    textClass: "text-white",
    kwClass: "text-[#9BF15B]"
  },
  {
    id: 2,
    kw: "1.5kW",
    name: "Apartment Plus",
    runs: "+ Fridge, Rice Cooker,\nCCTV",
    priceMin: "1.48L",
    priceMax: "2.48L",
    bgClass: "bg-[#9BF15B]",
    textClass: "text-[#123B3F]",
    kwClass: "text-[#123B3F]"
  },
  {
    id: 3,
    kw: "2kW",
    name: "Family Comfort",
    runs: "+ Water Pump, Washing\nMachine",
    priceMin: "1.88L",
    priceMax: "3.48L",
    bgClass: "bg-[#1f3735]",
    textClass: "text-white",
    kwClass: "text-[#9BF15B]"
  },
  {
    id: 4,
    kw: "5kW",
    name: "Full Freedom",
    runs: "Runs multiple ACs + full\nbuilding",
    priceMin: "3.99L",
    priceMax: "6.48L",
    bgClass: "bg-[#1f3735]",
    textClass: "text-white",
    kwClass: "text-[#9BF15B]"
  },
];

export default function Packages() {
  return (
    <section className="bg-white py-24 w-full">
      <div className="container mx-auto px-4 md:px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>

            <h2 className="text-4xl md:text-5xl font-medium text-heading-3 leading-tight tracking-tight">
              Choose the Right Fit<br className="hidden md:block" /> for Your Space
            </h2>
          </div>
          <Button
            href="/packages"
            text="All Packages"
            className="self-start md:self-auto shrink-0 border-heading-3/20 hover:bg-heading-3/10 bg-transparent pl-6 pr-1.5 py-1.5 max-w-[250px]"
            textClassName="text-heading-3 text-sm"
          />
        </div>

        {/* Main Layout: Featured + Smaller Packages */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

          {/* Featured 3kW Card */}
          <div className="lg:col-span-2 relative rounded-[1.5rem] overflow-hidden group min-h-[400px] shadow-xl">
            {/* Background Image */}
            <Image
              src="/10004.jpg"
              alt="Solar Panels"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e2422]/90 via-[#0e2422]/40 to-transparent"></div>

            {/* Top Left Badge */}
            <div className="absolute top-0 left-0 bg-white text-[#123B3F] text-sm font-semibold px-4 py-2 rounded-br-2xl z-20">
              Most Popular Package
            </div>

            {/* Bottom Content */}
            <div className="absolute bottom-0 left-0 w-full p-8 z-20">
              <span className="inline-block bg-[#9BF15B] text-[#123B3F] text-xs font-bold px-3 py-1 rounded-full mb-4">
                {featuredPackage.kw}
              </span>
              <h3 className="text-white text-2xl font-bold mb-3">{featuredPackage.name}</h3>
              <p className="text-white/80 text-sm leading-relaxed mb-4 max-w-sm">
                {featuredPackage.specs}. {featuredPackage.runs}
              </p>
              <div className="flex items-center gap-4">
                <span className="text-[#9BF15B] font-bold text-xl">
                  ৳{featuredPackage.priceMin} – {featuredPackage.priceMax}
                </span>
                <Link href="/quote" className="text-[#9BF15B] font-medium flex items-center gap-1 hover:underline">
                  Get Quote
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: 4 smaller packages */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className={`rounded-2xl p-6 flex flex-col justify-center group transition-all duration-300 ${pkg.bgClass}`}
              >
                <div>
                  {/* kW */}
                  <p className={`${pkg.kwClass} text-4xl font-bold leading-none mb-2`}>{pkg.kw}</p>
                  <h4 className={`${pkg.textClass} text-lg font-bold mb-1`}>{pkg.name}</h4>
                  <p className={`${pkg.textClass} opacity-80 text-sm leading-snug whitespace-pre-line mb-4`}>{pkg.runs}</p>
                </div>

                <div>
                  <p className={`${pkg.textClass} text-sm font-semibold`}>
                    ৳{pkg.priceMin}–{pkg.priceMax}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Commercial & Industrial Band */}
        <div className="mt-8 bg-heading-2 rounded-[2rem] p-10 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="absolute right-0 top-0 h-full w-64 bg-heading-1/10 skew-x-[-12deg] translate-x-10 pointer-events-none"></div>

          <div className="relative z-10">
            <p className="text-heading-1 text-sm font-bold uppercase tracking-[3px] mb-2">Commercial & Industrial</p>
            <h3 className="text-white text-2xl md:text-3xl font-bold mb-3">10kW+ Enterprise Solutions</h3>
            <p className="text-white/70 text-base max-w-xl leading-relaxed">
              Universities, hospitals, commercial buildings, RMG factories — we handle complete feasibility, NOC, and installation.
            </p>
          </div>

          <div className="relative z-10 shrink-0">
            <p className="text-white/50 text-sm mb-4 text-center md:text-right">Pricing based on scope</p>
            <Button
              href="/quote"
              text="Call for Price"
              className="bg-heading-1 border-heading-1 hover:bg-white pl-6 pr-1.5 py-1.5 w-full max-w-[250px]"
              textClassName="text-heading-3 text-lg"
              iconBg="bg-heading-3 text-white"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
