"use client";

import { useState } from "react";
import CustomSelect from "./CustomSelect";

export default function QuoteForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const formData = new FormData(e.target);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      phone: formData.get("phone"),
      product_name: formData.get("package"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("https://dashboard.betopialimited.com/api/v1/pulsegrid-contact/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus("success");
        e.target.reset(); // Reset the form after success
      } else {
        setSubmitStatus("error");
        console.error("Submission failed:", await response.text());
      }
    } catch (error) {
      setSubmitStatus("error");
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          className="w-full bg-white px-6 py-4 rounded-xl border border-gray-100 focus:outline-none focus:border-heading-1 focus:ring-1 focus:ring-heading-1 transition-all"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="w-full bg-white px-6 py-4 rounded-xl border border-gray-100 focus:outline-none focus:border-heading-1 focus:ring-1 focus:ring-heading-1 transition-all"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          required
          className="w-full bg-white px-6 py-4 rounded-xl border border-gray-100 focus:outline-none focus:border-heading-1 focus:ring-1 focus:ring-heading-1 transition-all"
        />
        <input
          type="tel"
          name="phone"
          placeholder="+880 XXXX XXXXXX"
          required
          className="w-full bg-white px-6 py-4 rounded-xl border border-gray-100 focus:outline-none focus:border-heading-1 focus:ring-1 focus:ring-heading-1 transition-all"
        />
      </div>

      <CustomSelect 
        placeholder="Select a package / product"
        options={[
          { value: "P0 Go Solar", label: "P0 Go Solar" },
          { value: "P1 Essential Starter", label: "P1 Essential Starter" },
          { value: "P2 Apartment Plus", label: "P2 Apartment Plus" },
          { value: "P3 Family Comfort", label: "P3 Family Comfort" },
          { value: "P4 Smart Home", label: "P4 Smart Home" },
          { value: "P5 Luxury Suite", label: "P5 Luxury Suite" },
          { value: "P6 Full Freedom", label: "P6 Full Freedom" },
          { value: "P7 Estate Master", label: "P7 Estate Master" },
          { value: "Commercial & Industrial", label: "Commercial & Industrial" },
          { value: "General Inquiry", label: "General Inquiry" },
        ]}
      />

      <textarea
        name="message"
        placeholder="Message"
        rows="6"
        required
        className="w-full bg-white px-6 py-4 rounded-xl border border-gray-100 focus:outline-none focus:border-heading-1 focus:ring-1 focus:ring-heading-1 transition-all resize-none"
      ></textarea>

      {submitStatus === "success" && (
        <div className="p-4 bg-green-50 text-green-700 rounded-xl border border-green-200">
          Thank you! Your message has been sent successfully. We will get back to you soon.
        </div>
      )}
      
      {submitStatus === "error" && (
        <div className="p-4 bg-red-50 text-red-700 rounded-xl border border-red-200">
          Oops! Something went wrong while sending your message. Please try again later.
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full bg-heading-1 text-heading-3 font-bold py-4 rounded-full flex items-center justify-center gap-2 transition-all duration-300 ${
          isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:bg-heading-3 hover:text-white"
        }`}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
        {!isSubmitting && (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
        )}
      </button>
    </form>
  );
}
