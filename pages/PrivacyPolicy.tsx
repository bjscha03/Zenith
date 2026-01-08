
import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="w-full">
      <section className="bg-slate-50 py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-zenith-navy mb-4">Privacy Policy</h1>
          <p className="text-slate-500 font-light uppercase tracking-[0.2em] text-xs">Last Updated: October 2024</p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate max-w-none space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-zenith-navy mb-4 uppercase tracking-wider">1. Information Collection</h2>
              <p className="text-slate-600 leading-relaxed font-light">
                Zenith Risk Strategies ("Zenith") collects information that you provide directly to us through our website, including but not limited to your name, work email address, company name, and job title when you submit a contact form or request an overview deck. We also collect technical data such as IP addresses and browser types to improve our site performance.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-zenith-navy mb-4 uppercase tracking-wider">2. Use of Information</h2>
              <p className="text-slate-600 leading-relaxed font-light">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-slate-600 font-light">
                <li>Provide and maintain our services, including underwriting and clinical reviews.</li>
                <li>Communicate with you regarding partnership opportunities and market updates.</li>
                <li>Process and analyze submissions for stop-loss and captive programs.</li>
                <li>Comply with regulatory requirements in the insurance and financial services sectors.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-zenith-navy mb-4 uppercase tracking-wider">3. Data Security</h2>
              <p className="text-slate-600 leading-relaxed font-light">
                Zenith employs industry-standard security measures, including encryption and secure server protocols, to protect your sensitive financial and clinical data. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-zenith-navy mb-4 uppercase tracking-wider">4. Third-Party Sharing</h2>
              <p className="text-slate-600 leading-relaxed font-light">
                We do not sell your personal information. We may share information with trusted third-party partners (such as TPAs or actuarial consultants) strictly for the purpose of executing the risk management services you have requested.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-zenith-navy mb-4 uppercase tracking-wider">5. Contact Information</h2>
              <p className="text-slate-600 leading-relaxed font-light">
                For questions regarding this policy, please contact us at <a href="mailto:compliance@zenithrisk.com" className="text-blue-600 font-bold hover:underline">compliance@zenithrisk.com</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
