"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "./Button";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Packages & Pricing", href: "/pricing" },
  { name: "Services", href: "/services" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  return (
    <header 
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-heading-3 shadow-md py-5" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo Area */}
        <Link href="/" className="flex items-center gap-3 group">
          <Image src="/logo.svg" alt="Logo" width={100} height={100} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`font-medium transition-colors duration-200 relative after:content-[''] after:absolute after:h-0.5 after:bg-heading-1 after:left-0 after:-bottom-1 after:transition-all hover:after:w-full ${
                  isActive ? "text-heading-1 after:w-full" : "text-text-1 hover:text-heading-1 after:w-0"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden lg:block">
          <Button href="/quote" text="Get Free Quote" />
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 text-accent focus:outline-none hover:bg-heading-2/50 rounded-lg transition-colors"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Open mobile menu"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-overlay-2/60 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Slide-over */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-[90%] max-w-sm bg-accent shadow-2xl transform transition-transform duration-500 ease-out flex flex-col lg:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-secondary">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2">
            <Image src="/logo.svg" alt="Logo" width={100} height={100} />
          </Link>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 text-text-main hover:text-primary focus:outline-none rounded-full hover:bg-secondary transition-colors"
            aria-label="Close mobile menu"
          >
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        
        <nav className="flex flex-col py-6 px-6 gap-2 overflow-y-auto flex-grow">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-lg font-medium border-b border-secondary/50 py-4 hover:text-heading-2 hover:bg-bg-form transition-all px-2 rounded-md ${
                  isActive ? "text-heading-2 bg-bg-form" : "text-primary"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
        
        <div className="p-6 border-t border-secondary bg-bg-form">
          <Link
            href="/quote"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center justify-between border border-heading-3 rounded-full pl-6 pr-1.5 py-1.5 hover:scale-95 transition-all duration-300 group w-full bg-heading-3 text-accent"
          >
            <span className="font-bold text-accent text-lg">Get Free Quote</span>
            <div className="w-12 h-12 rounded-full bg-heading-1 flex items-center justify-center text-heading-3 group-hover:rotate-45 transition-transform duration-300 shadow-md shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M8 7h9v9" />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}
