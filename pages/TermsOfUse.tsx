
import React from 'react';

const TermsOfUse: React.FC = () => {
  return (
    <div className="w-full">
      <section className="bg-slate-50 py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-zenith-navy mb-4">Terms of Use</h1>
          <p className="text-slate-500 font-light uppercase tracking-[0.2em] text-xs">Last Updated: October 2024</p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate max-w-none space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-zenith-navy mb-4 uppercase tracking-wider">1. Agreement to Terms</h2>
              <p className="text-slate-600 leading-relaxed font-light">
                By accessing or using the Zenith Risk Strategies website, you agree to be bound by these Terms of Use and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-zenith-navy mb-4 uppercase tracking-wider">2. Intellectual Property</h2>
              <p className="text-slate-600 leading-relaxed font-light">
                The content, organization, graphics, design, compilation, and other matters related to the site are protected under applicable copyrights, trademarks, and other proprietary rights. The copying, redistribution, or publication by you of any such matters or any part of the site is strictly prohibited without our express written permission.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-zenith-navy mb-4 uppercase tracking-wider">3. Disclaimer of Professional Advice</h2>
              <p className="text-slate-600 leading-relaxed font-light italic">
                The information provided on this website is for informational purposes only and does not constitute actuarial, legal, tax, or financial advice. All stop-loss and captive decisions should be made in consultation with your own qualified professional advisors.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-zenith-navy mb-4 uppercase tracking-wider">4. Limitation of Liability</h2>
              <p className="text-slate-600 leading-relaxed font-light">
                In no event shall Zenith Risk Strategies or its partners be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-zenith-navy mb-4 uppercase tracking-wider">5. Governing Law</h2>
              <p className="text-slate-600 leading-relaxed font-light">
                Any claim relating to Zenith Risk Strategies' website shall be governed by the laws of the State of Texas without regard to its conflict of law provisions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfUse;
