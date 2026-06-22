"use client";

import { useState } from "react";

const allBrands = [
  { name: "Growatt", category: "Inverters", tag: "Inverters, Panels & Batteries" },
  { name: "Deye", category: "Inverters", tag: "Inverters, Panels & Batteries" },
  { name: "GoodWe", category: "Inverters", tag: "Inverters, Panels & Batteries" },
  { name: "Longi", category: "Solar Panels", tag: "Inverters, Panels & Batteries" },
  { name: "Trina", category: "Solar Panels", tag: "Inverters, Panels & Batteries" },
  { name: "Jinko", category: "Solar Panels", tag: "Inverters, Panels & Batteries" },
  { name: "Sako", category: "Inverters", tag: "Inverters, Panels & Batteries" },
  { name: "Lvtopsun", category: "Batteries", tag: "Inverters, Panels & Batteries" },
  { name: "Hithium", category: "Lithium", tag: "Inverters, Panels & Batteries" },
  { name: "Hinvert", category: "Inverters", tag: "Inverters, Panels & Batteries" },
  { name: "Crown", category: "Lead-Acid", tag: "Inverters, Panels & Batteries" },
  { name: "Solis", category: "Inverters", tag: "Inverters, Panels & Batteries" },

  { name: "Powmr", category: "Controllers", tag: "Controllers & MCBs" },
  { name: "Tomzn", category: "MCBs", tag: "Controllers & MCBs" },
  { name: "Schneider", category: "MCBs / SPDs", tag: "Controllers & MCBs" },
  { name: "Chint", category: "MCBs", tag: "Controllers & MCBs" },
  { name: "Hager", category: "MCBs", tag: "Controllers & MCBs" },
  { name: "CHYT", category: "Isolators", tag: "Controllers & MCBs" },
  { name: "ABB", category: "SPDs / Switches", tag: "Controllers & MCBs" },
  
  { name: "Tuya", category: "Smart Meters", tag: "Smart & Metering" },
  { name: "Sonoff", category: "Smart Switches", tag: "Smart & Metering" },
  { name: "UNI-T", category: "Test Equipment", tag: "Smart & Metering" },

  { name: "EcoFlow", category: "Power Stations", tag: "Portable Power" },
  { name: "BLUETTI", category: "Power Stations", tag: "Portable Power" },
  { name: "Marsriva", category: "Power Stations", tag: "Portable Power" },

  { name: "Lorentz", category: "Solar Pumps", tag: "Pumps & Protection" },
  { name: "Grundfos", category: "Pumps", tag: "Pumps & Protection" },
  { name: "Shakti", category: "Pumps", tag: "Pumps & Protection" },
  { name: "LPI", category: "Lightning Arr.", tag: "Pumps & Protection" },
  
  { name: "Walton", category: "Cable", tag: "Accessories" },
  { name: "BRB", category: "Cable", tag: "Accessories" },
  { name: "BBS", category: "Cable", tag: "Accessories" },
];

const tabs = [
  "All Brands",
  "Inverters, Panels & Batteries",
  "Controllers & MCBs",
  "Smart & Metering",
  "Portable Power",
  "Pumps & Protection"
];

export default function BrandPartnersTabs() {
  const [activeTab, setActiveTab] = useState("All Brands");

  const displayedBrands = activeTab === "All Brands" 
    ? allBrands 
    : allBrands.filter(b => b.tag === activeTab);

  return (
    <div className="w-full">
      {/* Tabs Navigation */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
        {tabs.map((tab) => (
          <button 
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${activeTab === tab ? "bg-heading-3 text-white shadow-md" : "bg-white text-heading-3 border border-gray-200 hover:border-heading-1 hover:text-heading-1"}`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Grid Content */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-9 gap-4 md:gap-6">
        {displayedBrands.map((brand, idx) => (
          <div key={`${brand.name}-${idx}`} className="bg-white border border-gray-100 rounded-2xl p-6 flex flex-col items-center justify-center shadow-sm hover:shadow-xl hover:border-heading-1/30 transition-all duration-300 group">
            {/* Text placeholder for brands until logos are uploaded */}
            <span className="font-bold text-lg text-heading-3 group-hover:text-heading-1 transition-colors text-center mb-1">
              {brand.name}
            </span>
            <span className="text-xs text-text-main font-medium uppercase tracking-wider text-center">
              {brand.category}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
