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

      {/* Premium & Capital Flow Diagram Section */}
      <section className="py-20 md:py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-[11px] font-black text-blue-600 uppercase tracking-[0.4em] mb-6 block">Capital Architecture</span>
            <h2 className="text-3xl md:text-4xl font-bold text-zenith-navy tracking-tight mb-6">Premium & Capital Flow</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light">
              A simplified view of how premium, claims, and risk capital flow through the captive structure.
            </p>
          </div>

          {/* SVG Diagram */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6 md:p-12">
              <svg viewBox="0 0 600 500" className="w-full h-auto" aria-label="Premium and capital flow diagram">
                {/* Definitions for gradients and shadows */}
                <defs>
                  <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1e40af"/>
                    <stop offset="100%" stopColor="#3b82f6"/>
                  </linearGradient>
                  <linearGradient id="navyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0f172a"/>
                    <stop offset="100%" stopColor="#1e293b"/>
                  </linearGradient>
                  <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="4" stdDeviation="8" floodOpacity="0.15"/>
                  </filter>
                </defs>

                {/* Connection Lines */}
                {/* Employer to Captive */}
                <path d="M300 110 L300 190" stroke="url(#blueGradient)" strokeWidth="3" fill="none"/>
                <text x="315" y="155" fill="#3b82f6" fontWeight="600" fontSize="11">Premium</text>
                
                {/* Reinsurer Admin to Captive */}
                <path d="M150 280 L210 280" stroke="url(#blueGradient)" strokeWidth="3" fill="none"/>
                <text x="130" y="265" fill="#64748b" fontWeight="500" fontSize="10">Underwriting</text>
                
                {/* Captive to Reinsurer Excess */}
                <path d="M300 370 L300 420" stroke="url(#navyGradient)" strokeWidth="3" fill="none"/>
                <text x="315" y="400" fill="#64748b" fontWeight="500" fontSize="10">Excess Risk</text>

                {/* Claims arrow into Captive */}
                <path d="M390 200 L350 240" stroke="#64748b" strokeWidth="2" strokeDasharray="5,3" fill="none"/>
                <text x="395" y="215" fill="#64748b" fontWeight="500" fontSize="10">Claims</text>

                {/* Employer Circle - Top */}
                <g filter="url(#shadow)">
                  <circle cx="300" cy="60" r="50" fill="white" stroke="url(#blueGradient)" strokeWidth="4"/>
                  <text x="300" y="52" textAnchor="middle" fill="#0f172a" fontWeight="700" fontSize="14">Employer</text>
                  <text x="300" y="70" textAnchor="middle" fill="#3b82f6" fontWeight="500" fontSize="10">Self-Funded Plan</text>
                </g>

                {/* Reinsurer Admin Circle - Left */}
                <g filter="url(#shadow)">
                  <circle cx="100" cy="280" r="50" fill="white" stroke="url(#blueGradient)" strokeWidth="4"/>
                  <text x="100" y="272" textAnchor="middle" fill="#0f172a" fontWeight="700" fontSize="12">Reinsurer</text>
                  <text x="100" y="288" textAnchor="middle" fill="#64748b" fontWeight="500" fontSize="9">Underwriting</text>
                  <text x="100" y="300" textAnchor="middle" fill="#64748b" fontWeight="500" fontSize="9">Administration</text>
                </g>

                {/* Captive Insurer Circle - Center (larger, emphasized) */}
                <g filter="url(#shadow)">
                  <circle cx="300" cy="280" r="80" fill="white" stroke="url(#navyGradient)" strokeWidth="5"/>
                  <circle cx="300" cy="280" r="70" fill="white" stroke="url(#blueGradient)" strokeWidth="2"/>
                  <text x="300" y="265" textAnchor="middle" fill="#0f172a" fontWeight="800" fontSize="18">Captive</text>
                  <text x="300" y="285" textAnchor="middle" fill="#0f172a" fontWeight="600" fontSize="13">Insurer</text>
                  <text x="300" y="305" textAnchor="middle" fill="#3b82f6" fontWeight="500" fontSize="11">Primary Stop Loss</text>
                </g>

                {/* Reinsurer Excess Circle - Bottom */}
                <g filter="url(#shadow)">
                  <circle cx="300" cy="460" r="40" fill="white" stroke="url(#blueGradient)" strokeWidth="4"/>
                  <text x="300" y="455" textAnchor="middle" fill="#0f172a" fontWeight="700" fontSize="11">Reinsurer</text>
                  <text x="300" y="470" textAnchor="middle" fill="#64748b" fontWeight="500" fontSize="9">Excess Stop Loss</text>
                </g>

                {/* Flow indicators - small decorative arrows */}
                <polygon points="300,180 295,170 305,170" fill="#3b82f6"/>
                <polygon points="200,280 190,275 190,285" fill="#3b82f6"/>
                <polygon points="300,410 295,400 305,400" fill="#1e293b"/>
              </svg>
            </div>
          </div>

          {/* Clarifier Bullets */}
          <div className="max-w-3xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-start space-x-3 p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-bold text-sm">1</span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  <span className="font-semibold text-zenith-navy">Employer</span> funds premium into the plan and captive structure
                </p>
              </div>
              <div className="flex items-start space-x-3 p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-bold text-sm">2</span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  <span className="font-semibold text-zenith-navy">Captive Insurer</span> provides primary stop loss coverage and manages claim flow
                </p>
              </div>
              <div className="flex items-start space-x-3 p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-bold text-sm">3</span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  <span className="font-semibold text-zenith-navy">Reinsurers</span> support underwriting and excess stop loss risk transfer
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Dual Role Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-12">
              <div>
                <h2 className="text-[12px] font-black text-blue-600 uppercase tracking-[0.3em] mb-6">The Zenith Advantage</h2>
                <h3 className="text-2xl font-bold text-zenith-navy mb-4">Our Dual Role</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Zenith operates at the intersection of underwriting and administration. We serve as both the <span className="font-bold text-zenith-navy">MGU</span> (Underwriting Manager) and the <span className="font-bold text-zenith-navy">Program Manager</span>, ensuring that the stop-loss contract perfectly aligns with the captive's bylaws and risk appetite.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-zenith-navy mb-4">Strategic Partnership</h3>
                <p className="text-slate-600 leading-relaxed">
                  Advisors bring us into <span className="text-blue-600 font-bold uppercase tracking-wider text-xs">early-stage strategy</span> because captive success isn't determined at renewal—it's determined during the program design phase. We provide the actuarial grounding and clinical oversight needed to support a multi-year transition to self-funding.
                </p>
              </div>
            </div>

            <div className="relative p-10 bg-slate-50 rounded-3xl border border-slate-200 overflow-hidden">
              <div className="flex flex-col space-y-6 relative z-10">
                <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm">
                  <span className="block text-[10px] font-black text-blue-600 uppercase tracking-widest mb-2">Role 1</span>
                  <p className="text-lg font-bold text-zenith-navy">Managing General Underwriter</p>
                  <p className="text-sm text-slate-500 mt-2">Underwriting authority and risk selection</p>
                </div>
                <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm">
                  <span className="block text-[10px] font-black text-blue-600 uppercase tracking-widest mb-2">Role 2</span>
                  <p className="text-lg font-bold text-zenith-navy">Program Manager</p>
                  <p className="text-sm text-slate-500 mt-2">Captive alignment and administration</p>
                </div>
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
