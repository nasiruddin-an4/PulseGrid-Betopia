import Footer from "../components/Footer";

export const metadata = {
  title: "Privacy Policy | Betopia PulseGrid",
  description: "Privacy policy and data handling practices for Betopia PulseGrid Ltd.",
};

export default function PrivacyPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative w-full pt-40 pb-24 bg-heading-3 flex items-center justify-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-heading-2/40 via-heading-3 to-heading-3 pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Privacy Policy
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
            How Betopia PulseGrid handles and protects your data.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 bg-[#f4f5f4]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 lg:p-16 shadow-sm border border-gray-100">

            <p className="text-lg md:text-xl text-heading-3 leading-relaxed mb-12 font-medium">
              At Betopia PulseGrid Ltd., we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, and safeguard the data you provide to us when using our website and services.
            </p>

            <div className="space-y-12 text-gray-600 leading-relaxed">
              <section>
                <h2 className="text-2xl font-bold text-heading-3 mb-4">1. Information We Collect</h2>
                <p className="mb-4">We may collect the following types of information when you interact with our website or services:</p>
                <ul className="list-disc pl-6 space-y-2 marker:text-[#99f36c]">
                  <li><strong className="text-heading-3 font-semibold">Personal Information:</strong> Name, email address, phone number, and physical address when you request a quote, contact us, or sign up for our services.</li>
                  <li><strong className="text-heading-3 font-semibold">Usage Data:</strong> Information about how you interact with our website, including IP addresses, browser types, and pages visited.</li>
                  <li><strong className="text-heading-3 font-semibold">Energy Data:</strong> If applicable to our services, energy consumption patterns provided voluntarily for system sizing and optimization.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-heading-3 mb-4">2. How We Use Your Information</h2>
                <p className="mb-4">We use the collected information for the following purposes:</p>
                <ul className="list-disc pl-6 space-y-2 marker:text-[#99f36c]">
                  <li>To provide, maintain, and improve our solar energy services.</li>
                  <li>To process and respond to your inquiries, quotes, and support requests.</li>
                  <li>To communicate with you regarding updates, promotions, and relevant news (you may opt out at any time).</li>
                  <li>To analyze website usage and improve the user experience.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-heading-3 mb-4">3. Data Sharing and Disclosure</h2>
                <p>
                  We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our website or conducting our business, as long as those parties agree to keep this information confidential. We may also release information when its release is appropriate to comply with the law, enforce our site policies, or protect ours or others' rights, property, or safety.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-heading-3 mb-4">4. Data Security</h2>
                <p>
                  We implement a variety of security measures to maintain the safety of your personal information. However, no method of transmission over the Internet, or method of electronic storage, is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-heading-3 mb-4">5. Your Rights</h2>
                <p>
                  You have the right to request access to, correction of, or deletion of your personal data. You may also object to or restrict the processing of your data. To exercise these rights, please contact us using the information provided below.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-heading-3 mb-4">6. Changes to This Privacy Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
                </p>
              </section>

              <section className="bg-[#fafafa] p-8 rounded-2xl border border-gray-100 mt-12">
                <h2 className="text-xl font-bold text-heading-3 mb-4">7. Contact Us</h2>
                <p className="mb-4">If you have any questions about this Privacy Policy, please contact us at:</p>
                <div className="space-y-2">
                  <p><strong className="text-heading-3 font-semibold w-20 inline-block">Email:</strong> <a href="mailto:info@betopiapulsegridltd.com" className="text-[#25494a] hover:text-[#99f36c] font-medium transition-colors">info@betopiapulsegridltd.com</a></p>
                  <p><strong className="text-heading-3 font-semibold w-20 inline-block">Phone:</strong> <span className="text-gray-700">+880 1335 236611</span></p>
                  <p><strong className="text-heading-3 font-semibold w-20 inline-block">Address:</strong> <span className="text-gray-700">Daisy Garden, House - 14 (3rd - floor), Main Road Block - A, Banasree, Dhaka-1219</span></p>
                </div>
              </section>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
