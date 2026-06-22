import Image from "next/image";
import Button from "./Button";

export default function CTA() {
  return (
    <section className="bg-white py-16 md:py-24 w-full">
      <div className="container mx-auto px-4">
        
        {/* Banner Container */}
        <div className="flex flex-col md:flex-row bg-heading-3 rounded-2xl overflow-hidden shadow-2xl relative">
          
          {/* Left Content */}
          <div className="w-full md:w-2/3 p-10 lg:p-16 flex flex-col justify-center z-10 relative">
            {/* Optional background glow for left side */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-heading-3 via-heading-3 to-transparent opacity-90 hidden md:block"></div>
            
            <div className="relative z-10">
              <span className="text-[#9BF15B] uppercase tracking-[3px] text-sm font-semibold mb-4 block">
                Take Action
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                Ready to Switch to Clean Energy?
              </h2>
              <p className="text-white/80 text-lg mb-8 leading-relaxed">
                Join the solar revolution and save up to 90% on your electricity bills.
              </p>
              
              {/* Button */}
              <Button 
                href="/quote" 
                text="Get Free Quote" 
                className="bg-white border-white hover:bg-gray-100 max-w-[280px] pl-6 pr-1.5 py-1.5"
                textClassName="text-heading-3 text-lg"
                iconBg="bg-heading-3 text-white"
              />
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/3 relative min-h-[300px] md:min-h-[auto]">
            {/* Image Overlay to blend nicely with the dark background */}
            <div className="absolute inset-0 bg-heading-3/20 z-10 hidden md:block"></div>
            <Image 
              src="/10004.jpg" 
              alt="Solar Panel Installation" 
              fill 
              className="object-cover"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
