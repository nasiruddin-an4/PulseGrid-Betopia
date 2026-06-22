"use client";

import { useState } from "react";

const categoriesData = {
  core: [
    {
      title: "Hybrid Solar Inverters",
      features: [
        "Grid-tie, Off-grid & Hybrid modes",
        "Sub-10ms auto-switching technology",
        "1.5kVA to 10kW+ capacity range",
        "Wi-Fi monitoring & app integration",
        "Growatt, Deye, GoodWe, Sako brands"
      ]
    },
    {
      title: "Lithium-Ion Battery Packs",
      features: [
        "10+ Year Design Life",
        "LiFePO4 chemistry for safety & longevity",
        "Fast-charge compatible (2–4 hours)",
        "100Ah to 200Ah+ per unit",
        "Stackable for custom capacity",
        "Hithium, Lvtopsun brands"
      ]
    },
    {
      title: "High-Efficiency Solar Panels",
      features: [
        "Monocrystalline PERC",
        "Mono PERC half-cell technology",
        "22%+ module efficiency",
        "350W to 600W+ per panel",
        "Monsoon & humidity tested",
        "Longi, Trina, Jinko brands"
      ]
    },
    {
      title: "Lead-Acid Batteries",
      features: [
        "Cost-Effective Option",
        "Tubular positive plate technology",
        "Deep-cycle rated (1500+ cycles)",
        "100Ah to 200Ah range",
        "Crown brand — globally certified",
        "Ideal for budget-conscious builds"
      ]
    },
    {
      title: "Portable Power Stations",
      features: [
        "Plug-and-Play",
        "256Wh to 2kWh+ integrated units",
        "AC & DC outlets, USB-C PD",
        "Solar + wall + car charging",
        "Carry-anywhere form factor",
        "EcoFlow, BLUETTI, Marsriva"
      ]
    },
    {
      title: "Plug-and-Play Solar Generators",
      features: [
        "All-in-One Systems",
        "Pre-configured panel + storage combos",
        "No electrician needed for basic setup",
        "Ideal for remote sites, events",
        "Expandable with additional panels",
        "Weatherproof outdoor rated"
      ]
    }
  ],
  specialty: [
    {
      title: "Solar Street Lights",
      features: [
        "Integrated panel, battery and LED",
        "Motion sensing technology",
        "Weatherproof design"
      ]
    },
    {
      title: "Solar Garden Lights",
      features: [
        "Decorative outdoor lighting",
        "Up to 12-hour runtime",
        "Residential and commercial use"
      ]
    },
    {
      title: "Solar Water Pumps",
      features: [
        "Agricultural and domestic applications",
        "0.5HP to 10HP capacity",
        "Deep borehole compatible"
      ]
    },
    {
      title: "Lightning Protection Systems",
      features: [
        "IEC 62305 compliant",
        "Rooftop solar protection",
        "Industrial-grade safety"
      ]
    },
    {
      title: "Earthing Systems",
      features: [
        "Copper-bonded earth rods",
        "Certified resistance testing",
        "BSTI and SREDA compliant"
      ]
    },
    {
      title: "Complete Installation Support",
      features: [
        "Site assessment",
        "Load calculations",
        "Documentation and compliance",
        "Installation and monitoring"
      ]
    }
  ],
  accessories: [
    {
      title: "AC/DC MCBs & MCCBs",
      features: [
        "Circuit protection solutions for residential and industrial systems."
      ]
    },
    {
      title: "DC Isolators & Transfer Switches",
      features: [
        "Safe switching and changeover systems."
      ]
    },
    {
      title: "Surge Protection Devices (SPDs)",
      features: [
        "Protection against lightning and electrical surges."
      ]
    },
    {
      title: "Energy Meters & VA Protectors",
      features: [
        "Real-time monitoring and electrical protection."
      ]
    },
    {
      title: "MC4 Connectors & DC Wiring",
      features: [
        "Certified solar cabling and connectors."
      ]
    },
    {
      title: "Mounting Structures & VFDs",
      features: [
        "Structural support systems and pump control solutions."
      ]
    }
  ]
};

export default function ProductCategoriesTabs() {
  const [activeTab, setActiveTab] = useState("core");

  return (
    <div className="w-full">
      {/* Tabs Navigation */}
      <div className="flex flex-wrap items-center gap-4 mb-12 border-b border-white/10 pb-4">
        <button 
          onClick={() => setActiveTab("core")}
          className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 ${activeTab === "core" ? "bg-heading-1 text-heading-3" : "bg-transparent text-white/60 hover:text-white hover:bg-white/5 border border-white/10"}`}
        >
          Core Systems
        </button>
        <button 
          onClick={() => setActiveTab("specialty")}
          className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 ${activeTab === "specialty" ? "bg-heading-1 text-heading-3" : "bg-transparent text-white/60 hover:text-white hover:bg-white/5 border border-white/10"}`}
        >
          Specialty Solutions
        </button>
        <button 
          onClick={() => setActiveTab("accessories")}
          className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 ${activeTab === "accessories" ? "bg-heading-1 text-heading-3" : "bg-transparent text-white/60 hover:text-white hover:bg-white/5 border border-white/10"}`}
        >
          Accessories & Components
        </button>
      </div>

      {/* Grid Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categoriesData[activeTab].map((item, idx) => (
          <div key={idx} className="bg-heading-3 border border-white/5 rounded-2xl p-8 hover:border-heading-1/50 transition-colors duration-300 group">
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-heading-1 mb-6 group-hover:bg-heading-1 group-hover:text-heading-3 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
            <ul className="space-y-3">
              {item.features.map((feature, fIdx) => (
                <li key={fIdx} className="flex items-start gap-3 text-white/70 text-sm">
                  <svg className="w-5 h-5 text-heading-1 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
