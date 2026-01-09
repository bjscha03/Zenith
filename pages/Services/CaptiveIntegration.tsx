import React from 'react';
import { Link } from 'react-router-dom';

const CaptiveIntegration: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section - Blue with Image Underlay */}
      <section className="relative text-white py-24 md:py-32 overflow-hidden">
        {/* Background Image - Blueprint/architectural theme */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop')" }}
        ></div>
        {/* Blue Overlay */}
        <div className="absolute inset-0 bg-zenith-navy/90"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <span className="text-[11px] font-black text-blue-400 uppercase tracking-[0.4em] mb-6 block">Strategic Alignment</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight mb-8">
              When Stop-Loss and Captives Work Together — <br/>
              <span className="text-blue-400 italic underline underline-offset-8 decoration-4 decoration-blue-500/50">Everyone</span> Wins.
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed font-light max-w-2xl">
              We bridge the structural gap between risk transfer and risk retention to ensure your captive performs as engineered.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-[12px] font-black text-zenith-navy uppercase tracking-[0.3em] mb-4 flex items-center">
              <span className="w-8 h-px bg-zenith-navy mr-4"></span>
              The Integrated Difference
            </h2>
          </div>
          
          <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-xl bg-white">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-slate-100 border-b-2 border-slate-200 text-left">
                  <th className="py-6 px-8 text-sm font-bold text-slate-400 uppercase tracking-widest w-1/2">Traditional Model</th>
                  <th className="py-6 px-8 text-sm font-bold text-zenith-navy uppercase tracking-widest w-1/2 bg-zenith-navy/5">Integrated Stop-Loss + Captive</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="group hover:bg-slate-50 transition-colors">
                  <td className="py-8 px-8">
                    <div className="flex items-center gap-3">
                      <span className="w-5 h-5 rounded-full bg-slate-200 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                        </svg>
                      </span>
                      <span className="text-lg text-slate-500 italic">Passive underwriting</span>
                    </div>
                  </td>
                  <td className="py-8 px-8 bg-zenith-navy/5">
                    <div className="flex items-center gap-3">
                      <span className="w-5 h-5 rounded-full bg-zenith-blue flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="text-lg font-semibold text-zenith-navy">Aligned incentives</span>
                    </div>
                  </td>
                </tr>
                <tr className="group hover:bg-slate-50 transition-colors">
                  <td className="py-8 px-8">
                    <div className="flex items-center gap-3">
                      <span className="w-5 h-5 rounded-full bg-slate-200 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                        </svg>
                      </span>
                      <span className="text-lg text-slate-500 italic">Employers absorb volatility</span>
                    </div>
                  </td>
                  <td className="py-8 px-8 bg-zenith-navy/5">
                    <div className="flex items-center gap-3">
                      <span className="w-5 h-5 rounded-full bg-zenith-blue flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="text-lg font-semibold text-zenith-navy">Employer retains control & surplus</span>
                    </div>
                  </td>
                </tr>
                <tr className="group hover:bg-slate-50 transition-colors">
                  <td className="py-8 px-8">
                    <div className="flex items-center gap-3">
                      <span className="w-5 h-5 rounded-full bg-slate-200 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                        </svg>
                      </span>
                      <span className="text-lg text-slate-500 italic">One-year decisions</span>
                    </div>
                  </td>
                  <td className="py-8 px-8 bg-zenith-navy/5">
                    <div className="flex items-center gap-3">
                      <span className="w-5 h-5 rounded-full bg-zenith-blue flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="text-lg font-semibold text-zenith-navy">Multi-year strategy</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Everyone Wins Section - Dark Premium */}
      <section className="py-20 md:py-24 bg-gradient-to-b from-slate-900 to-zenith-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[11px] font-black text-blue-400 uppercase tracking-[0.4em] mb-6 block">Aligned Outcomes</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">Everyone Wins</h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto font-light">
              When stop-loss and captives work together, every stakeholder benefits from aligned incentives and disciplined execution.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {/* Card 1: Employers */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Employers</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                Retain control of surplus, reduce long-term costs, and benefit from predictable multi-year strategy instead of reactive renewals.
              </p>
            </div>

            {/* Card 2: Advisors */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Advisors</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                Deliver differentiated value with captive expertise, deepen client relationships, and build sustainable book growth.
              </p>
            </div>

            {/* Card 3: Captive Programs */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Captive Programs</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                Achieve optimal loss ratio performance, preserve capital, and maintain regulatory compliance with integrated oversight.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Premium & Capital Flow Section */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-[11px] font-black text-blue-600 uppercase tracking-[0.4em] mb-6 block">Capital Architecture</span>
            <h2 className="text-3xl md:text-4xl font-bold text-zenith-navy tracking-tight mb-6">Premium & Capital Flow</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light">
              A simplified view of how premium, claims, and risk capital flow through the captive structure.
            </p>
          </div>

          {/* Flow Cards */}
          <div className="max-w-5xl mx-auto">
            {/* Main Flow - Vertical on mobile, visual flow on desktop */}
            <div className="grid md:grid-cols-3 gap-10 mb-16">
              {/* Employer */}
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-10 text-center shadow-xl h-full">
                  <div className="w-18 h-18 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 p-4">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Employer</h3>
                  <p className="text-blue-100 text-base leading-relaxed">Self-Funded Plan</p>
                </div>
                <div className="hidden md:block absolute -bottom-8 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-blue-700 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg">Premium ↓</div>
                </div>
              </div>

              {/* Captive - Center */}
              <div className="relative">
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-10 text-center shadow-xl border-4 border-slate-600 h-full">
                  <div className="w-20 h-20 bg-white/15 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Captive Insurer</h3>
                  <p className="text-blue-300 text-base font-medium mb-4">Primary Stop Loss</p>
                  <div className="pt-4 border-t border-slate-600">
                    <span className="text-slate-300 text-sm uppercase tracking-wider font-medium">Claims Management</span>
                  </div>
                </div>
              </div>

              {/* Reinsurer - Right */}
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-10 text-center shadow-xl h-full">
                  <div className="w-18 h-18 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 p-4">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Reinsurer</h3>
                  <p className="text-blue-100 text-base leading-relaxed">Excess Stop Loss</p>
                </div>
              </div>
            </div>

            {/* Underwriting Admin - Below */}
            <div className="max-w-md mx-auto mb-16">
              <div className="bg-white rounded-2xl p-8 text-center shadow-lg border-2 border-blue-200">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-zenith-navy mb-2">Reinsurer</h3>
                <p className="text-slate-600 text-base">Underwriting Administration</p>
              </div>
            </div>

            {/* Flow Summary */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex items-start space-x-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">1</span>
                </div>
                <p className="text-base text-slate-700 leading-relaxed">
                  <span className="font-semibold text-zenith-navy">Employer</span> funds premium into the plan and captive structure
                </p>
              </div>
              <div className="flex items-start space-x-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">2</span>
                </div>
                <p className="text-base text-slate-700 leading-relaxed">
                  <span className="font-semibold text-zenith-navy">Captive Insurer</span> provides primary stop loss coverage and manages claim flow
                </p>
              </div>
              <div className="flex items-start space-x-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">3</span>
                </div>
                <p className="text-base text-slate-700 leading-relaxed">
                  <span className="font-semibold text-zenith-navy">Reinsurers</span> support underwriting and excess stop loss risk transfer
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Our Dual Role Section - Navy Background with Light Text */}
      <section className="py-24 bg-zenith-navy relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              <div>
                <span className="text-[11px] font-black text-blue-400 uppercase tracking-[0.4em] mb-4 block">The Zenith Advantage</span>
                <h3 className="text-3xl font-bold text-white mb-6">Our Dual Role</h3>
                <p className="text-lg text-slate-300 leading-relaxed">
                  Zenith operates at the intersection of underwriting and administration. We serve as both the <span className="font-bold text-white">MGU</span> (Underwriting Manager) and the <span className="font-bold text-white">Program Manager</span>, ensuring that the stop-loss contract perfectly aligns with the captive's bylaws and risk appetite.
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-white mb-6">Strategic Partnership</h3>
                <p className="text-lg text-slate-300 leading-relaxed">
                  Advisors bring us into <span className="text-blue-400 font-bold uppercase tracking-wider text-sm">early-stage strategy</span> because captive success isn't determined at renewal—it's determined during the program design phase. We provide the actuarial grounding and clinical oversight needed to support a multi-year transition to self-funding.
                </p>
              </div>
            </div>

            <div className="relative p-10 bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 shadow-lg">
              <div className="flex flex-col space-y-6 relative z-10">
                <div className="p-8 bg-white rounded-2xl shadow-md">
                  <span className="block text-[11px] font-black text-blue-600 uppercase tracking-widest mb-3">Role 1</span>
                  <p className="text-xl font-bold text-zenith-navy mb-2">Managing General Underwriter</p>
                  <p className="text-base text-slate-600">Underwriting authority and risk selection</p>
                </div>
                <div className="p-8 bg-white rounded-2xl shadow-md">
                  <span className="block text-[11px] font-black text-blue-600 uppercase tracking-widest mb-3">Role 2</span>
                  <p className="text-xl font-bold text-zenith-navy mb-2">Program Manager</p>
                  <p className="text-base text-slate-600">Captive alignment and administration</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - White Background */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-zenith-navy mb-12 tracking-tight leading-tight">
            Ready to integrate your <br/>captive strategy?
          </h2>
          
          <div className="flex justify-center">
            <Link 
              to="/contact" 
              className="group relative inline-flex items-center justify-center px-12 py-6 font-black text-[11px] uppercase tracking-[0.3em] text-white transition-all duration-300"
            >
              <span className="absolute inset-0 bg-blue-600 transform skew-x-[-12deg] group-hover:bg-blue-700 group-hover:scale-105 transition-all"></span>
              <span className="relative z-10">Discuss Captive Options</span>
              <svg className="relative z-10 ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaptiveIntegration;
