import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const quickLinks = [
    { name: "Products", href: "/products" },
    { name: "Packages", href: "/packages" },
    { name: "Services", href: "/services" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/quote" },
  ];

  const servicesLinks = [
    { name: "Energy Audit", href: "#" },
    { name: "Installation", href: "#" },
    { name: "Maintenance", href: "#" },
    { name: "System Upgrades", href: "#" },
    { name: "SREDA NOC", href: "#" },
  ];

  return (
    <footer className="bg-heading-3 pt-20 pb-8 mt-auto border-t border-white/5 relative overflow-hidden">
      {/* Decorative subtle background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/[0.02] to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">

          {/* Column 1: About & Logo */}
          <div className="flex flex-col gap-6 lg:pr-8">
            <Link href="/" className="inline-block w-max">
              <Image src="/logo.svg" alt="Betopia PulseGrid Ltd. Logo" width={140} height={40} />
            </Link>
            <p className="text-white/60 leading-relaxed text-sm md:text-base">
              Innovative solar solutions for a clean, efficient, and sustainable energy future. Serving homes, businesses, and industries across Bangladesh.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-medium uppercase tracking-widest text-sm mb-6">
              Company
            </h3>
            <ul className="flex flex-col gap-4">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-white/60 hover:text-white transition-all duration-300 flex items-center group w-max text-sm"
                  >
                    <span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-300 mr-0 group-hover:mr-2 text-white/40">
                      —
                    </span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-white font-medium uppercase tracking-widest text-sm mb-6">
              Solutions
            </h3>
            <ul className="flex flex-col gap-4">
              {servicesLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-white/60 hover:text-white transition-all duration-300 flex items-center group w-max text-sm"
                  >
                    <span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-300 mr-0 group-hover:mr-2 text-white/40">
                      —
                    </span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-white font-medium uppercase tracking-widest text-sm mb-6">
              Get in Touch
            </h3>
            <ul className="flex flex-col gap-5 text-sm">
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                  <svg className="w-4 h-4 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-white/60 leading-relaxed pt-1">
                  Daisy Garden, House - 14 (3rd fl), Main Road Block - A, Banasree, Dhaka-1219
                </span>
              </li>

              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                  <svg className="w-4 h-4 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="flex flex-col gap-1 pt-1">
                  <a href="tel:+8801778454753" className="text-white/60 hover:text-white transition-colors">
                    +880 1778 454753 <span className="opacity-50 text-xs ml-1">(Home)</span>
                  </a>
                  <a href="tel:+880 1730 798097" className="text-white/60 hover:text-white transition-colors">
                    +880 1730 798097 <span className="opacity-50 text-xs ml-1">(Industrial)</span>
                  </a>
                </div>
              </li>

              <li className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                  <svg className="w-4 h-4 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <a href="mailto:md@betopiapulsegrid.com" className="text-white/60 hover:text-white transition-colors break-all">
                  md@betopiapulsegrid.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} Betopia PulseGrid Ltd. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            <Link href="/privacy" className="text-sm text-white/40 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-sm text-white/40 hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
