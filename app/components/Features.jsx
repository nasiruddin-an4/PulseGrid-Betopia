import Link from "next/link";

const featureCards = [
  {
    id: 1,
    title: <>Tier-1 Solar<br/>Components</>,
    description: "We source only premium-grade Longi, Trina, Jinko panels and Growatt, Deye, GoodWe inverters — trusted globally.",
    linkText: "Explore Products",
    linkHref: "/products",
    containerClasses: "bg-heading-3 border border-heading-1",
    iconClasses: "border-heading-1 text-heading-1",
    titleClasses: "text-accent",
    descClasses: "text-text-1",
    linkClasses: "text-heading-1 font-medium",
    strokeWidth: 2,
    iconPath: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z",
    alwaysShowButton: true
  },
  {
    id: 2,
    title: <>Advanced Lithium<br/>Storage</>,
    description: "Fast-charging LiFePO4 batteries with 10+ year design life — never worry about load shedding again.",
    linkText: "View Batteries",
    linkHref: "/storage",
    containerClasses: "bg-heading-2 border border-transparent",
    iconClasses: "border-secondary/30 text-accent",
    titleClasses: "text-accent",
    descClasses: "text-text-1",
    linkClasses: "text-heading-1 font-medium",
    strokeWidth: 2,
    iconPath: "M13 10V3L4 14h7v7l9-11h-7z"
  },
  {
    id: 3,
    title: <>Sub-10ms Smart<br/>Switching</>,
    description: "PulseGrid's seamless transition technology protects sensitive electronics and industrial machinery from any flicker.",
    linkText: "Our Services",
    linkHref: "/services",
    containerClasses: "bg-heading-1 border border-transparent",
    iconClasses: "border-heading-3/30 text-heading-3",
    titleClasses: "text-heading-3",
    descClasses: "text-heading-3/80 font-medium",
    linkClasses: "text-heading-3 font-bold",
    strokeWidth: 2.5,
    iconPath: "M3 12h4l3-9 5 18 3-9h6"
  }
];

export default function Features() {
  return (
    <section className="bg-heading-3 py-24 relative w-full">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column - Small Title */}
          <div className="lg:col-span-3">
            <h3 className="text-heading-1 font-semibold text-lg tracking-wide">
              Why Choose PulseGrid
            </h3>
          </div>

          {/* Right Column - Main Content */}
          <div className="lg:col-span-9">
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-accent mb-16 leading-tight tracking-tight">
              Empowering Bangladesh with <span className="text-heading-1">Intelligent</span><br className="hidden md:block"/> Solar Energy Systems
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {featureCards.map((card) => (
                <div key={card.id} className={`${card.containerClasses} rounded-3xl p-8 md:p-10 flex flex-col relative group overflow-hidden shadow-xl h-[420px]`}>
                  
                  {/* Icon - STATIC */}
                  <div className={`w-16 h-16 rounded-full border flex items-center justify-center mb-16 shrink-0 ${card.iconClasses}`}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={card.iconPath} />
                    </svg>
                  </div>
                  
                  {/* Title and Desc - MOVE ON HOVER OR STATIC IF alwaysShowButton */}
                  <div className={`transform ${card.alwaysShowButton ? '-translate-y-6' : 'group-hover:-translate-y-6'} transition-transform duration-500 ease-out flex flex-col flex-grow`}>
                    <h4 className={`text-2xl font-bold font-outfit mb-4 ${card.titleClasses}`}>
                      {card.title}
                    </h4>
                    <p className={`leading-relaxed ${card.descClasses}`}>
                      {card.description}
                    </p>
                  </div>

                  {/* Button - SLIDE UP ON HOVER OR STATIC IF alwaysShowButton */}
                  <div className={`absolute bottom-10 left-8 md:left-10 transition-all duration-500 ease-out ${card.alwaysShowButton ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0'}`}>
                    <Link href={card.linkHref} className={`flex items-center gap-2 transition-all hover:gap-4 ${card.linkClasses}`}>
                      {card.linkText}
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={card.strokeWidth} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
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
