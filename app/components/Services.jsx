import Image from "next/image";

const services = [
  {
    id: 1,
    title: "Renewable Energy Project Development & Sourcing",
    description:
      "From early feasibility checks and securing financing, to delivering full-scale solar, wind, or hybrid energy projects.",
    image: "/service1.png",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Energy & Infrastructure Solutions",
    description:
      "From reliable power generation to smarter grid systems and infrastructure upgrades, our solutions are built to last.",
    image: "/service2.png",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 15.5A3.5 3.5 0 1112 8.5a3.5 3.5 0 010 7zm7.94-2.5a7.96 7.96 0 000-2l2.06-1.6-2-3.46-2.47 1a8.15 8.15 0 00-1.73-1l-.38-2.63h-4l-.38 2.63a8.15 8.15 0 00-1.73 1l-2.47-1-2 3.46L4.06 11a7.96 7.96 0 000 2L2 14.6l2 3.46 2.47-1a8.15 8.15 0 001.73 1l.38 2.63h4l.38-2.63a8.15 8.15 0 001.73-1l2.47 1 2-3.46L19.94 13z"
        />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Government Tender & RFQ Strategy",
    description:
      "Navigating e-GP portals or preparing bid documents, we make sure your proposals are strategic, compliant, and competitive.",
    image: "/service3.png",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section className="bg-[#123B3F] py-24 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between gap-10 mb-20">
          <div className="max-w-4xl">
           
            <h2 className=" text-white text-5xl leading-tight">
              Powering Bangladesh with <span className="text-heading-1">End-to-End</span> Solar Solutions
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-white/75 text-lg leading-relaxed">
              We deliver innovative solar energy systems designed to reduce
              your electricity bill and environmental impact.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="relative group h-[500px] overflow-hidden"
            >
              {/* Card */}
              <div className="relative h-full rounded-2xl overflow-hidden">
                {/* Notch BG */}
                <div className="notch-shape" />

                {/* Icon centered inside the notch */}
                <div className="absolute -top-2 -left-2 w-[95px] h-[95px] flex items-center justify-center z-30">
                  <div className="w-18 h-18 rounded-full bg-[#9BF15B] text-[#123B3F] flex items-center justify-center shadow-xl transition-all duration-500 ">
                    {service.icon}
                  </div>
                </div>

                {/* Image */}
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 overflow-hidden"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/10 z-10" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 z-20 p-10 pb-12">
                  {/* Text block slides up on hover */}
                  <div className="transform transition-transform duration-500 ease-out group-hover:-translate-y-14">
                    <h3 className="text-white text-[28px] font-bold leading-tight mb-4">
                      {service.title}
                    </h3>
                    <p className="text-white/85 text-base leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Button reveals from bottom on hover */}
                  <div className="absolute bottom-8 left-10 right-10 opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
                    <a href="/services" className="inline-flex items-center gap-3 text-white font-bold group-hover:text-[#9BF15B] transition-colors duration-300">
                      Read More
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}