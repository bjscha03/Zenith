
import React from 'react';
import { Link } from 'react-router-dom';

const CaptiveIntegration: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-slate-50 py-24 md:py-32 border-b border-slate-200 relative overflow-hidden">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <span className="text-[11px] font-black text-blue-600 uppercase tracking-[0.4em] mb-6 block">Strategic Alignment</span>
            <h1 className="text-4xl md:text-6xl font-bold text-zenith-navy leading-tight tracking-tight mb-8">
              When Stop-Loss and Captives Work Together — <br/>
              <span className="text-zenith-blue italic decoration-blue-500/30 underline underline-offset-8 decoration-4">Everyone</span> Wins.
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed font-light max-w-2xl">
              We bridge the structural gap between risk transfer and risk retention to ensure your captive performs as engineered.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-[12px] font-black text-slate-900 uppercase tracking-[0.3em] mb-8 flex items-center">
              <span className="w-8 h-px bg-slate-900 mr-4"></span>
              The Integrated Difference
            </h2>
          </div>
          
          <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-xl">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-left">
                  <th className="py-8 px-10 text-xl font-bold text-slate-400 uppercase tracking-widest w-1/2">Traditional Model</th>
                  <th className="py-8 px-10 text-xl font-bold text-zenith-blue uppercase tracking-widest w-1/2 bg-blue-50/30">Integrated Stop-Loss + Captive</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="group">
                  <td className="py-10 px-10 text-lg text-slate-500 italic">Passive underwriting</td>
                  <td className="py-10 px-10 text-lg font-bold text-zenith-navy bg-blue-50/10">Aligned incentives</td>
                </tr>
                <tr className="group">
                  <td className="py-10 px-10 text-lg text-slate-500 italic">Employers absorb volatility</td>
                  <td className="py-10 px-10 text-lg font-bold text-zenith-navy bg-blue-50/10">Employer retains control & surplus</td>
                </tr>
                <tr className="group">
                  <td className="py-10 px-10 text-lg text-slate-500 italic">One-year decisions</td>
                  <td className="py-10 px-10 text-lg font-bold text-zenith-navy bg-blue-50/10">Multi-year strategy</td>
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

      {/* Visual Flow & Roles */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-[12px] font-black text-blue-600 uppercase tracking-[0.3em] mb-10">Optimized Capital Architecture</h2>
              <div className="relative p-10 bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
                {/* Visual Representation of Flow */}
                <div className="flex flex-col space-y-8 relative z-10">
                  <div className="flex items-center justify-between p-4 border border-blue-100 bg-blue-50/50 rounded-xl">
                    <span className="text-[10px] font-black uppercase text-blue-600 tracking-widest">Employer Premium</span>
                    <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    <span className="text-[10px] font-black uppercase text-slate-900 tracking-widest font-bold">Zenith MGU Admin</span>
                  </div>
                  
                  <div className="flex items-center justify-center py-2">
                    <div className="w-px h-12 bg-gradient-to-b from-blue-200 to-slate-200"></div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-6 border border-slate-200 rounded-xl text-center bg-white shadow-sm">
                      <span className="block text-[9px] font-black text-slate-400 uppercase mb-2">Primary Layer</span>
                      <p className="text-xs font-bold text-zenith-navy uppercase tracking-wider">Stop-Loss Reinsurance</p>
                    </div>
                    <div className="p-6 border border-blue-200 rounded-xl text-center bg-blue-50/30">
                      <span className="block text-[9px] font-black text-blue-500 uppercase mb-2">Surplus Layer</span>
                      <p className="text-xs font-bold text-zenith-blue uppercase tracking-wider">Captive Retained Capital</p>
                    </div>
                  </div>
                </div>
                {/* Background decorative text */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] text-[180px] font-black pointer-events-none select-none">FLOW</div>
              </div>
              <p className="mt-8 text-sm text-slate-500 italic text-center">Visual: Disciplined flow of premium & capital preservation.</p>
            </div>

            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-bold text-zenith-navy mb-4">Our Dual Role</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Zenith operates at the intersection of underwriting and administration. We serve as both the <span className="font-bold text-zenith-navy">MGU</span> (Underwriting Manager) and the <span className="font-bold text-zenith-navy">Program Manager</span>, ensuring that the stop-loss contract perfectly aligns with the captive's bylaws and risk appetite.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-zenith-navy mb-4">Strategic Partnership</h3>
                <p className="text-slate-600 leading-relaxed">
                  Advisors bring us into <span className="text-blue-600 font-bold uppercase tracking-wider text-xs">early-stage strategy</span> because captive success isn't determined at renewal—it’s determined during the program design phase. We provide the actuarial grounding and clinical oversight needed to support a multi-year transition to self-funding.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-zenith-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900 opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 tracking-tight leading-tight">
            Ready to integrate your <br/>captive strategy?
          </h2>
          
          <div className="flex justify-center">
            <Link 
              to="/contact" 
              className="group relative inline-flex items-center justify-center px-12 py-6 font-black text-[11px] uppercase tracking-[0.3em] text-white transition-all duration-300"
            >
              <span className="absolute inset-0 bg-zenith-blue transform skew-x-[-12deg] group-hover:bg-blue-600 group-hover:scale-105 transition-all"></span>
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
