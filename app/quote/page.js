import Image from "next/image";
import Footer from "../components/Footer";
import CustomSelect from "../components/CustomSelect";

export const metadata = {
  title: "Get a Quote | Betopia PulseGrid",
  description: "Contact Betopia PulseGrid for a free consultation and discover how solar energy can transform your home or business.",
};

export default function QuotePage() {
  return (
    <main>
      {/* 1. Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[300px] flex items-center justify-center pt-20">
        <div className="fixed inset-0 -z-10 bg-heading-3">
          <Image
            src="/10003.jpg"
            alt="Contact Us Background"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-heading-3/80"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-2">
            Get in Touch
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Contact Betopia PulseGrid for a free consultation and discover how solar energy can transform your home or business.
          </p>
        </div>
      </section>

      {/* 2. Main Content Section */}
      <section className="py-16 bg-[#f4f5f4] relative z-20">
        <div className="container mx-auto px-4 md:px-6">



          <div className="flex flex-col lg:flex-row gap-12 mb-16 ">

            {/* Left Column: Contact Info Card */}
            <div className="w-full lg:w-[40%]">
              <div className="bg-heading-3 text-white rounded-3xl p-8 shadow-2xl h-full">
                <h2 className="text-4xl font-bold mb-8">
                  Get in <span className="text-heading-1">Touch</span>
                </h2>

                <div className="space-y-8">
                  {/* Location */}
                  <div className="flex gap-4">
                    <div className="mt-1">
                      <svg className="w-6 h-6 text-heading-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-heading-1 mb-2">Location</h4>
                      <p className="text-white/80 text-sm leading-relaxed max-w-[250px]">
                        Daisy Garden, House - 14 (3rd - floor), Main Road Block - A, Banasree, Dhaka-1219
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex gap-4">
                    <div className="mt-1">
                      <svg className="w-6 h-6 text-heading-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-heading-1 mb-1">Call Now</h4>
                      <p className="text-white/60 text-xs mb-3">(WhatsApp available for sales)</p>
                      <ul className="space-y-2 text-sm">
                        <li className="flex flex-wrap items-center gap-2">
                          <span className="font-bold text-white">+880 1778 454753</span>
                          <span className="text-white/60 text-xs">(Home solar)</span>
                        </li>
                        <li className="flex flex-wrap items-center gap-2">
                          <span className="font-bold text-white">+880 1335 202916</span>
                          <span className="text-white/60 text-xs">(Home solar)</span>
                        </li>
                        <li className="flex flex-wrap items-center gap-2 mt-3">
                          <span className="font-bold text-white">+880 1730 294600</span>
                          <span className="text-white/60 text-[10px] sm:text-xs">(Industrial & Commercial)</span>
                        </li>
                        <li className="flex flex-wrap items-center gap-2">
                          <span className="font-bold text-white">+880 1335 202917</span>
                          <span className="text-white/60 text-[10px] sm:text-xs">(Industrial & Commercial)</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex gap-4">
                    <div className="mt-1">
                      <svg className="w-6 h-6 text-heading-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-heading-1 mb-2">Email Us</h4>
                      <ul className="space-y-1 text-sm font-medium text-white/90">
                        <li>md@betopiapulsegrid.com</li>
                        <li>betopiapulsegrid@gmail.com</li>
                      </ul>
                    </div>
                  </div>

                  {/* Social Media */}
                  <div className="flex gap-4 pt-4">
                    <div className="mt-1">
                      <svg className="w-6 h-6 text-heading-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-heading-1 mb-3">Follow Our Impact</h4>
                      <div className="flex gap-4">
                        <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-heading-1 hover:text-heading-3 transition-colors duration-300">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-heading-1 hover:text-heading-3 transition-colors duration-300">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-heading-1 hover:text-heading-3 transition-colors duration-300">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                        </a>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="w-full lg:w-[60%] py-4">
              <span className="text-text-main font-bold text-sm uppercase tracking-wider mb-2 block">
                Contact Our Team
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-heading-3 mb-10">
                Send Us a Message
              </h2>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full bg-white px-6 py-4 rounded-xl border border-gray-100 focus:outline-none focus:border-heading-1 focus:ring-1 focus:ring-heading-1 transition-all"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full bg-white px-6 py-4 rounded-xl border border-gray-100 focus:outline-none focus:border-heading-1 focus:ring-1 focus:ring-heading-1 transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full bg-white px-6 py-4 rounded-xl border border-gray-100 focus:outline-none focus:border-heading-1 focus:ring-1 focus:ring-heading-1 transition-all"
                  />
                  <input
                    type="tel"
                    placeholder="+880 XXXX XXXXXX"
                    className="w-full bg-white px-6 py-4 rounded-xl border border-gray-100 focus:outline-none focus:border-heading-1 focus:ring-1 focus:ring-heading-1 transition-all"
                  />
                </div>

                <CustomSelect 
                  placeholder="Select a package / product"
                  options={[
                    { value: "p0", label: "P0 Go Solar" },
                    { value: "p1", label: "P1 Essential Starter" },
                    { value: "p2", label: "P2 Apartment Plus" },
                    { value: "p3", label: "P3 Family Comfort" },
                    { value: "p4", label: "P4 Smart Home" },
                    { value: "p5", label: "P5 Luxury Suite" },
                    { value: "p6", label: "P6 Full Freedom" },
                    { value: "p7", label: "P7 Estate Master" },
                    { value: "commercial", label: "Commercial & Industrial" },
                    { value: "general", label: "General Inquiry" },
                  ]}
                />

                <textarea
                  placeholder="Message"
                  rows="6"
                  className="w-full bg-white px-6 py-4 rounded-xl border border-gray-100 focus:outline-none focus:border-heading-1 focus:ring-1 focus:ring-heading-1 transition-all resize-none"
                ></textarea>

                <button
                  type="button"
                  className="w-full bg-heading-1 text-heading-3 font-bold py-4 rounded-full flex items-center justify-center gap-2 hover:bg-heading-3 hover:text-white transition-all duration-300"
                >
                  Send Message
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </button>
              </form>

            </div>
          </div>
          {/* Map Embed */}
          <div className="w-full h-[400px] rounded-3xl overflow-hidden shadow-lg border border-gray-200 bg-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.698375171732!2d90.43003051139414!3d23.758133588484196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8719f2a2491%3A0xc07c2a71d6431980!2sDaisy%20Garden!5e0!3m2!1sen!2sbd!4v1709405629471!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}
