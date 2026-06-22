const impactData = [
  {
    id: 1,
    category: "Residential",
    subtitle: "70% Focus on Residential",
    title: "Powering Homes Across Dhaka",
    description: "From apartments in Banasree to houses in Gulshan, our residential solar solutions are designed to eliminate load shedding and reduce electricity bills by up to 90%.",
  },
  {
    id: 2,
    category: "Commercial",
    subtitle: "10kW+ Commercial & Industrial",
    title: "Scaling Business Energy Independence",
    description: "We support factories, hospitals, garment industries, and commercial buildings with scalable solar energy systems, including complete SREDA-compliant NOC processing and implementation.",
  },
  {
    id: 3,
    category: "Rural & Agricultural",
    subtitle: "Off-Grid Rural Power Access",
    title: "Empowering Rural Bangladesh",
    description: "Our solar-powered water pumps, off-grid battery systems, and agricultural energy solutions provide reliable electricity to farms and rural communities across Bangladesh.",
  }
];

export default function Impact() {
  return (
    <section className="bg-heading-3 py-24 w-full">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight">
            Making a Difference for Bangladesh's <span className="text-heading-1">Energy Future</span>
          </h2>
        </div>

        {/* 3 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {impactData.map((item) => (
            <div 
              key={item.id}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 lg:p-10 hover:bg-white/10 hover:-translate-y-2 transition-all duration-300 group"
            >
              {/* Category Pill */}
              <div className="mb-8">
                <span className="inline-block bg-heading-1 text-heading-3 text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full">
                  {item.category}
                </span>
              </div>

              {/* Content */}
              <div>
                <p className="text-heading-1 font-semibold text-sm mb-3">
                  {item.subtitle}
                </p>
                <h3 className="text-white text-2xl lg:text-3xl font-bold mb-4 leading-snug group-hover:text-heading-1 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-white/70 text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
