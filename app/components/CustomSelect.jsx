"use client";

import { useState, useRef, useEffect } from "react";

export default function CustomSelect({ options, placeholder }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedOption = options.find((opt) => opt.value === selectedValue);

  return (
    <div className="relative w-full text-left" ref={dropdownRef}>
      {/* Hidden native select for form submission */}
      <select name="package" value={selectedValue} onChange={() => {}} className="hidden">
        <option value="" disabled>{placeholder}</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>

      {/* Custom Select Trigger */}
      <div 
        className={`w-full bg-white px-6 py-4 rounded-xl border cursor-pointer flex justify-between items-center transition-all ${isOpen ? 'border-[#99f36c] ring-1 ring-[#99f36c]' : 'border-gray-100 hover:border-[#99f36c]/50'}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={selectedValue ? 'text-[#2a2a2a]' : 'text-[#7a7a7a]'}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <svg 
          className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      {/* Dropdown Options */}
      {isOpen && (
        <div className="absolute z-50 w-full mt-2 bg-white border border-gray-100 rounded-xl shadow-[0_15px_40px_-10px_rgba(0,0,0,0.1)] overflow-hidden max-h-[300px] overflow-y-auto">
          <ul className="py-2 m-0 list-none">
            {options.map((opt) => (
              <li 
                key={opt.value}
                className={`px-6 py-3 cursor-pointer transition-colors flex items-center justify-between
                  ${selectedValue === opt.value 
                    ? 'bg-[#99f36c]/10 text-[#1b3738] font-semibold' 
                    : 'text-[#7a7a7a] hover:bg-gray-50 hover:text-[#1b3738]'}`}
                onClick={() => {
                  setSelectedValue(opt.value);
                  setIsOpen(false);
                }}
              >
                {opt.label}
                {selectedValue === opt.value && (
                  <svg className="w-5 h-5 text-[#99f36c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
