import Image from "next/image";
import Link from "next/link";

export default function AboutUs() {
  return (
    <section className="bg-bg-form py-24 w-full overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center">

          {/* Left Column - Image Collage */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <div className="flex flex-col gap-4 md:gap-6">
                <div className="relative h-48 md:h-64 w-full rounded-[2rem] overflow-hidden shadow-lg">
                  <Image src="/10002.jpg" alt="Solar Installation" fill className="object-cover" />
                </div>
                <div className="relative h-56 md:h-72 w-full rounded-[2rem] overflow-hidden shadow-lg">
                  <Image src="/10002.jpg" alt="Solar Panels" fill className="object-cover" />
                </div>
              </div>
              <div className="relative h-[80%] my-auto min-h-[300px] rounded-[2rem] overflow-hidden shadow-lg">
                <Image src="/10002.jpg" alt="Solar Setup" fill className="object-cover" />
              </div>
            </div>

            {/* Experience Badge */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#14532d] w-36 h-36 md:w-44 md:h-44 rounded-full flex flex-col items-center justify-center text-center shadow-2xl border-8 border-bg-form z-10 text-accent">
              <span className="text-3xl md:text-5xl font-bold text-heading-1 mb-1">10+</span>
              <span className="text-sm font-medium leading-tight">Years<br />Experience</span>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="flex flex-col">
            <h3 className="text-gray-700 font-bold text-lg tracking-wider uppercase mb-3">
              Who We Are
            </h3>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-heading-3 mb-6 leading-[1.15] tracking-tight">
              Leading Bangladesh's Clean Energy Revolution
            </h2>
            <p className="text-text-main text-lg leading-relaxed mb-6">
              At Betopia PulseGrid, we bridge the gap between traditional energy and a renewable future. We specialize in Hybrid Solar Systems and Portable Power Stations that ensure you never have to worry about load shedding again.
            </p>
            <p className="text-text-main text-lg leading-relaxed mb-10">
              From 1kW residential setups to 10kW+ industrial plants — our engineering team provides end-to-end solutions, from technical NOC processing to professional installation.
            </p>

            {/* List Items */}
            <div className="flex flex-col gap-6 mb-12">

              {/* Item 1 */}
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-heading-2 flex items-center justify-center text-heading-1 shrink-0 shadow-md">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-heading-3 mb-1">500+ Successful Installations</h4>
                  <p className="text-text-main text-sm md:text-base">A decade of solar expertise serving homes & businesses.</p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-heading-2 flex items-center justify-center text-heading-1 shrink-0 shadow-md">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-heading-3 mb-1">98+ Client Satisfaction</h4>
                  <p className="text-text-main text-sm md:text-base">Committed to excellence and reliable after-sales support.</p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-heading-2 flex items-center justify-center text-heading-1 shrink-0 shadow-md">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-heading-3 mb-1">8+ Brands Stocked</h4>
                  <p className="text-text-main text-sm md:text-base">Premium Tier-1 solar panels and high-efficiency inverters.</p>
                </div>
              </div>

            </div>



          </div>

        </div>
      </div>
    </section>
  );
}
