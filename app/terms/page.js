export const metadata = {
  title: "Terms of Service | Betopia PulseGrid",
  description: "Terms and conditions for using Betopia PulseGrid Ltd. services and website.",
};

export default function TermsPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative w-full pt-40 pb-24 bg-heading-3 flex items-center justify-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-heading-2/40 via-heading-3 to-heading-3 pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Terms of Service
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
            Please read these terms carefully before using our services.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 bg-[#f4f5f4]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 lg:p-16 shadow-sm border border-gray-100">
            
            <p className="text-lg md:text-xl text-heading-3 leading-relaxed mb-12 font-medium">
              These Terms of Service ("Terms") govern your access to and use of the website and services provided by Betopia PulseGrid Ltd. By accessing our website or engaging our services, you agree to be bound by these Terms.
            </p>

            <div className="space-y-12 text-gray-600 leading-relaxed">
              <section>
                <h2 className="text-2xl font-bold text-heading-3 mb-4">1. General Provisions</h2>
                <p>
                  Betopia PulseGrid Ltd. provides smart solar solutions, including system design, installation, and maintenance. We reserve the right to refuse service, terminate accounts, or cancel orders at our sole discretion, including, without limitation, if we believe that customer conduct violates applicable law or is harmful to our interests.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-heading-3 mb-4">2. Quotes and Estimates</h2>
                <ul className="list-disc pl-6 space-y-2 marker:text-[#99f36c]">
                  <li>Any quotes or estimates provided through our website or direct communication are indicative and subject to site inspection and final agreement.</li>
                  <li>Prices are subject to change based on equipment availability, site conditions, and regulatory requirements.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-heading-3 mb-4">3. Installation and Timelines</h2>
                <p>
                  While we strive to adhere strictly to proposed installation timelines, Betopia PulseGrid Ltd. is not liable for delays caused by factors beyond our control, including but not limited to severe weather, supply chain disruptions, or delays in obtaining necessary permits.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-heading-3 mb-4">4. Warranties and Liability</h2>
                <p>
                  Solar equipment installed by us carries the manufacturer's warranty. Our workmanship is guaranteed as specified in your individual service contract. To the maximum extent permitted by law, Betopia PulseGrid Ltd. shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services or products.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-heading-3 mb-4">5. User Responsibilities</h2>
                <p>
                  You agree to provide accurate, current, and complete information when interacting with our site or requesting services. You are responsible for maintaining the safety of the installation site and obtaining necessary permissions from landlords or local authorities if applicable.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-heading-3 mb-4">6. Intellectual Property</h2>
                <p>
                  All content included on this site, such as text, graphics, logos, images, and software, is the property of Betopia PulseGrid Ltd. or its content suppliers and protected by international copyright laws.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-heading-3 mb-4">7. Changes to Terms</h2>
                <p>
                  We reserve the right to update, change, or replace any part of these Terms of Service by posting updates to our website. It is your responsibility to check this page periodically for changes. Your continued use of or access to the website following the posting of any changes constitutes acceptance of those changes.
                </p>
              </section>

            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
