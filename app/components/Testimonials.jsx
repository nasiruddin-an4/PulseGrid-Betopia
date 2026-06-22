"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const testimonials = [
  {
    name: "Rafiqul Islam",
    role: "Business Owner, Dhaka",
    text: "The transition to solar was seamless. PulseGrid's team handled everything from site audit to installation. Our electricity bill dropped by 80% in the first month!",
    rating: 5,
  },
  {
    name: "Nazneen Akter",
    role: "Homeowner, Banasree",
    text: "We installed the 3kW Smart Home package. The inverter switches in under 10ms — our computers don't even notice when grid power cuts. Exceptional quality.",
    rating: 5,
  },
  {
    name: "Kamal Hossain",
    role: "Factory Manager, Gazipur",
    text: "PulseGrid handled our factory's 10kW+ industrial setup including SREDA NOC paperwork. Professional team, on-time delivery, and excellent post-installation support.",
    rating: 5,
  },
  {
    name: "Tariq Rahman",
    role: "Property Developer, Chittagong",
    text: "We integrated PulseGrid's solar systems into our new apartment complex. The reliability and efficiency of their 5kW packages are unmatched. Highly recommended for modern living.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white pt-24 w-full overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="text-center max-w-5xl mx-auto mb-8">
          <span className="text-heading-3 uppercase tracking-[3px] text-sm font-semibold mb-2 block">
            What Our Clients Say
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold text-heading-3 leading-tight">
            Real Experiences, <span className="text-heading-2">Real Impact</span>
          </h2>
        </div>

        {/* Swiper Carousel */}
        <div className="mb-24 relative">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={40}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 1 },
              1024: { slidesPerView: 2 },
            }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            className="pb-10 px-4"
          >
            {testimonials.map((t, idx) => (
              <SwiperSlide key={idx} className="h-auto">
                <div className="bg-heading-3 shadow-lg border border-white/5 rounded-2xl p-10 h-full flex flex-col  hover:border-white/10 transition-all duration-300">
                  {/* Rating */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(t.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-[#FFB800]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-white/80 text-xl leading-relaxed italic mb-8 flex-grow">
                    "{t.text}"
                  </p>

                  {/* Author */}
                  <div className="mt-auto pt-6 flex items-center gap-5 border-t border-white/10">
                    <div className="w-14 h-14 rounded-full bg-heading-1 text-heading-3 flex items-center justify-center font-bold text-2xl uppercase">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg">{t.name}</h4>
                      <p className="text-sm text-white/60 font-medium">{t.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
