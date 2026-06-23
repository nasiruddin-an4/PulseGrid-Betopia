import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[100vh] flex pt-24 overflow-hidden">
      {/* Background Video and Overlays */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full"
        >
          <source src="/heroVideo.mp4" type="video/mp4" />
        </video>

        {/* Soft overlay for readability */}
        <div className="absolute inset-0 bg-overlay-2/50 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-overlay-2/80 via-overlay-2/50 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col w-full min-h-[calc(100vh-6rem)] py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 flex-1 w-full">

          {/* Left Column - Heading */}
          <div className="lg:col-span-8 flex flex-col justify-center">
            <h1 className="text-6xl md:text-7xl lg:text-[5.5rem] font-medium text-accent leading-[1.05] tracking-tight">
              Smart Solar<br />
              Solutions for<br />
              a <span className="text-heading-1">Sustainable</span><br />
              Future
            </h1>
          </div>

          {/* Right Column - Text & Buttons */}
          <div className="lg:col-span-4 flex flex-col justify-end pb-8 mt-8 lg:mt-0">
            <div className="max-w-md ml-auto mr-auto lg:mr-0">
              <p className="text-text-1 text-lg leading-relaxed mb-10">
                Experience uninterrupted power with Betopia PulseGrid. High-efficiency solar systems and advanced lithium storage — tailored for homes and businesses across Bangladesh.
              </p>

              <div className="flex flex-col gap-5">
                {/* Button 1: View Packages */}
                <Button
                  href="/products"
                  text="View Packages"
                  className="bg-[#123B3F]/90 border border-white/10 hover:border-[#9BF15B]/50 hover:bg-[#123B3F] max-w-[320px] pl-6 pr-1.5 py-1.5 backdrop-blur-sm"
                  textClassName="text-white text-lg"
                  iconSize="w-12 h-12"
                  svgSize="w-6 h-6"
                  iconBg="bg-[#9BF15B] text-[#123B3F]"
                />

                {/* Button 2: Consult an Expert */}
                <Button
                  href="/quote"
                  text="Consult an Expert"
                  className="bg-transparent border border-white/20 hover:bg-white/10 hover:border-white/50 max-w-[320px] pl-6 pr-1.5 py-1.5"
                  textClassName="text-white text-lg"
                  iconSize="w-12 h-12"
                  svgSize="w-6 h-6"
                  iconBg="bg-[#242A27] border border-white/20 text-white"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
