import Image from "next/image";
import Link from "next/link";
import CTA from "../components/CTA";
import Testimonials from "../components/Testimonials";
import Button from "../components/Button";
import KeyStatistics from "../components/KeyStatistics";

export const metadata = {
  title: "About Us | Betopia PulseGrid",
  description: "Learn more about Betopia PulseGrid's mission, vision, and our team of experts dedicated to providing sustainable solar solutions in Bangladesh.",
};

export default function AboutPage() {
  const team = [
    {
      name: "Mohammed Shahid Ullah",
      role: "Managing Director, Betopia PulseGrid Ltd",
      image: "/shahid.jpg",
    },
    {
      name: "Muhammad Monir Hossain",
      role: "Founder & Group CEO, Betopia Group",
      image: "/ceo.jpg",
    },
    {
      name: "Sabina Akter",
      role: "Chairperson, Betopia Group",
      image: "/chairperson.webp",
    },
  ];

  const projects = [
    {
      title: "GreenTech Corporate Office",
      tag: "50% Energy Cost Reduction",
      description: "Betopia PulseGrid installed a 500 kW solar system for GreenTech, reducing their energy expenses by half and lowering carbon emissions by 30,000 kg per year.",
    },
    {
      title: "SmartSolar Residences",
      tag: "Sustainable Living for Families",
      description: "A community of 50 homes now operates on 100% solar energy, saving homeowners an average of $1,200 annually on electricity bills while ensuring a greener environment.",
    },
    {
      title: "Solar-Powered Retail Mall",
      tag: "Clean Energy for Business",
      description: "A major shopping mall now runs on 1 MW solar power, reducing dependence on fossil fuels and cutting operational costs while contributing to sustainability.",
    },
  ];

  return (
    <main>
      
      {/* 1. Hero Section */}
      <section className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden bg-heading-3">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0 bg-heading-3">
          <Image 
            src="/10004.jpg" 
            alt="Technician inspecting solar panels" 
            fill 
            className="object-cover opacity-30"
          />
          {/* Soft top-to-middle overlay for Navbar visibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-heading-3/90 via-heading-3/20 to-transparent"></div>
          
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl pt-16">
          
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-4">
            Redefining <span className="text-heading-1">Sustainable </span>Energy
          </h1>
          <p className="text-white/80 text-lg md:text-xl leading-relaxed">
            Betopia PulseGrid is dedicated to bridging the gap between innovation and accessibility, delivering world-class solar solutions to every home and business in Bangladesh.
          </p>
        </div>
      </section>

      {/* 2. About the Betopia PulseGrid */}
      <section className="py-24 bg-[#f4f5f4]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            
            {/* Left Image */}
            <div className="w-full lg:w-1/2 h-[400px] lg:h-[600px] relative rounded-[2rem] overflow-hidden shadow-lg">
              <Image 
                src="/10004.jpg" 
                alt="Solar Panel Field" 
                fill 
                className="object-cover"
              />
            </div>

            {/* Center Content */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              <span className="text-heading-3 font-semibold text-sm mb-4 block">
                About the Betopia PulseGrid
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-heading-3 leading-tight mb-6">
                Sustainable Future with Solar Innovation
              </h2>
              <div className="space-y-4 text-text-main text-sm lg:text-base leading-relaxed mb-8">
                <p>
                  At Betopia PulseGrid, we are committed to revolutionizing the renewable energy industry by providing innovative and sustainable solar solutions. With years of expertise and a passionate team, we aim to make clean energy accessible to homes and businesses worldwide.
                </p>
                <p>
                  We take pride in delivering systems that combine cutting-edge technology with practical design, ensuring reliable performance.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-6">
                {/* Global Button */}
                <Button 
                  href="/services" 
                  text="Our Services" 
                  className="bg-heading-2 border-transparent hover:bg-heading-3 w-48 pl-6 pr-1.5 py-1.5 shadow-lg"
                />

                {/* Contact Info */}
                <div className="flex flex-col">
                  <span className="text-xs text-text-main">Sales & Inquiries</span>
                  <a href="tel:+8801332840872" className="text-heading-3 font-bold hover:text-green-700 transition-colors">
                    +880 1332840872
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <KeyStatistics />


      {/* 4. Meet Our Team */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
            <span className="text-heading-4 text-sm font-bold whitespace-nowrap mt-2">
              Meet Our Team
            </span>
            <h2 className="text-4xl md:text-5xl font-semibold text-heading-3 leading-tight max-w-3xl md:text-left">
              The Experts Behind Your <br className="hidden md:block"/> Sustainable Future
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, idx) => (
              <div key={idx} className="relative w-full aspect-4/5 rounded-2xl overflow-hidden group bg-slate-300">
                {/* Cutout Box for Social Icons */}
                <div className="absolute top-0 left-0 w-14 h-[220px] bg-white rounded-br-3xl z-20 flex flex-col items-center py-6 gap-3">
                  <a href="#" className="w-8 h-8 rounded-full bg-heading-3 flex items-center justify-center text-white hover:bg-heading-1 hover:text-heading-3 transition-colors">
                    {/* Instagram Icon */}
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-heading-3 flex items-center justify-center text-white hover:bg-heading-1 hover:text-heading-3 transition-colors">
                    {/* Facebook Icon */}
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-heading-3 flex items-center justify-center text-white hover:bg-heading-1 hover:text-heading-3 transition-colors">
                    {/* Twitter Icon */}
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-heading-3 flex items-center justify-center text-white hover:bg-heading-1 hover:text-heading-3 transition-colors">
                    {/* YouTube Icon */}
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  </a>
                </div>

                {/* Team Member Image */}
                <Image 
                  src={member.image} 
                  alt={member.name} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105 object-top"
                />

                {/* Bottom Overlay Gradient */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-heading-3/95 via-heading-3/60 to-transparent z-10"></div>

                {/* Text Content */}
                <div className="absolute bottom-0 left-0 w-full p-6 z-20">
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-heading-1 text-sm font-medium">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Making a Difference */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2 relative min-h-[400px] rounded-[2rem] overflow-hidden shadow-2xl">
              <Image 
                src="/10004.jpg" 
                alt="Reducing Carbon Footprint" 
                fill 
                className="object-cover"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <span className="text-heading-2 uppercase tracking-[3px] text-xs font-bold mb-4 block">
                Making a Difference for the Planet
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-heading-3 leading-tight mb-6">
                Reducing Carbon Footprint
              </h2>
              <p className="text-text-main text-lg leading-relaxed mb-8">
                Betopia PulseGrid has helped cut down over 50,000 tons of CO2 emissions, equivalent to planting over 2 million trees. By switching to renewable energy, we contribute to a cleaner, healthier planet.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="border-l-4 border-heading-1 pl-4">
                  <h4 className="text-3xl font-bold text-heading-3 mb-1">50+</h4>
                  <p className="text-sm text-text-main font-medium uppercase tracking-wider">Tons of CO2 Saved</p>
                </div>
                <div className="border-l-4 border-heading-1 pl-4">
                  <h4 className="text-3xl font-bold text-heading-3 mb-1">2M+</h4>
                  <p className="text-sm text-text-main font-medium uppercase tracking-wider">Trees Equivalent</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
 {/* 6. Our Projects */}
      <section className="py-24 bg-heading-3">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl text-left">
              <span className="text-heading-1 uppercase tracking-[3px] text-xs font-bold mb-4 block">
                Our Projects
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Transforming Homes & Businesses with Solar Energy
              </h2>
            </div>
            <Link href="/projects" className="shrink-0 flex items-center gap-2 text-heading-1 hover:text-white transition-colors font-bold group">
              More Projects 
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((proj, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors duration-300 flex flex-col h-full">
                <span className="text-heading-1 text-sm font-bold uppercase tracking-wider mb-4 block">
                  {proj.tag}
                </span>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {proj.title}
                </h3>
                <p className="text-white/70 leading-relaxed mb-8 flex-grow">
                  {proj.description}
                </p>
                <button className="text-white font-bold flex items-center gap-2 hover:text-heading-1 transition-colors mt-auto w-max group">
                  Read More
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      

      {/* 7. CTA & Testimonials */}
      <Testimonials />
      <CTA />

    </main>
  );
}
