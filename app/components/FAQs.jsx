"use client";

import { useState } from "react";

const faqsData = [
  {
    question: "How do solar panels work in Bangladesh's climate?",
    answer: "Bangladesh receives 4.5–5.5 peak sun hours daily, making it an ideal location for solar energy generation. Our Tier-1 monocrystalline panels are designed to perform efficiently in high humidity and monsoon conditions, maintaining strong output even during cloudy weather.",
  },
  {
    question: "What is the payback period for a solar system?",
    answer: "The typical payback period is between 3 and 5 years, depending on system size and electricity consumption. After the payback period, your solar system can continue generating clean, low-cost electricity for more than 20 years.",
  },
  {
    question: "Do you handle SREDA NOC and compliance paperwork?",
    answer: "Yes. We manage the entire process, including SREDA No Objection Certificate (NOC), compliance documentation, and utility interconnection requirements, ensuring a smooth and hassle-free experience.",
  },
  {
    question: "What warranty comes with your solar systems?",
    answer: "Our solar panels come with long-term performance warranties, while inverters and batteries are covered by manufacturer warranties. We also provide installation support and maintenance services to ensure reliable performance.",
  },
  {
    question: "Can I expand my solar system in the future?",
    answer: "Absolutely. Our solar solutions are designed with scalability in mind. You can add more solar panels, batteries, or upgrade your inverter as your energy needs grow without replacing the entire system.",
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(0); // First one open by default

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-10 md:py-20 w-full">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Header (Left Side, 35%) */}
          <div className="w-full lg:w-[35%] lg:sticky lg:top-32">
            <div className="text-left">
              <span className="text-heading-2 uppercase tracking-[3px] text-xs font-bold mb-4 block">
                Frequently Asked Questions
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-heading-3 leading-tight mb-6">
                The Answers You Need for a <span className="text-heading-2/80">Greener Future</span>
              </h2>
              <p className="text-text-main text-lg leading-relaxed">
                Everything you need to know about our solar systems, installation process, and the value we bring to your energy independence.
              </p>
            </div>
          </div>

          {/* Accordion (Right Side, 65%) */}
          <div className="w-full lg:w-[65%]">
            <div className="divide-y divide-heading-3/10 border-y border-heading-3/10">
              {faqsData.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div key={index} className="py-6 lg:py-8">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full text-left flex justify-between items-center focus:outline-none group"
                    >
                      <h3 className={`font-medium text-xl md:text-2xl pr-8 transition-colors duration-300 ${
                        isOpen ? 'text-heading-3' : 'text-heading-3/70 group-hover:text-heading-3'
                      }`}>
                        {faq.question}
                      </h3>
                      
                      <div className={`shrink-0 w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 ${
                        isOpen 
                          ? 'bg-heading-3 border-heading-3 text-white rotate-180' 
                          : 'bg-transparent border-heading-3/20 text-heading-3 group-hover:border-heading-3/50'
                      }`}>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </button>
                    
                    {/* Grid transition for smooth height animation */}
                    <div className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? 'grid-rows-[1fr] opacity-100 mt-6' : 'grid-rows-[0fr] opacity-0 mt-0'
                    }`}>
                      <div className="overflow-hidden">
                        <p className="text-text-main text-lg leading-relaxed pr-8 md:pr-16">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
