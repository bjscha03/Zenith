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

      {/* Premium & Capital Flow Diagram Section - White */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-[11px] font-black text-blue-600 uppercase tracking-[0.4em] mb-6 block">Capital Architecture</span>
            <h2 className="text-3xl md:text-4xl font-bold text-zenith-navy tracking-tight mb-6">Premium & Capital Flow</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light">
              A simplified view of how premium, claims, and risk capital flow through the captive structure.
            </p>
          </div>

          {/* Unified SVG Diagram - Desktop & Tablet */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-4 sm:p-8 lg:p-12">
              <svg 
                viewBox="0 0 600 520" 
                className="w-full h-auto" 
                aria-label="Premium and capital flow diagram"
                style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
              >
                {/* ===== DEFINITIONS ===== */}
                <defs>
                  {/* Unified arrow marker - brand blue */}
                  <marker 
                    id="arrow" 
                    markerWidth="12" 
                    markerHeight="12" 
                    refX="10" 
                    refY="6" 
                    orient="auto" 
                    markerUnits="userSpaceOnUse"
                  >
                    <path d="M0,2 L0,10 L10,6 Z" fill="#2563eb"/>
                  </marker>
                  
                  {/* Dashed arrow marker - same style, slate color */}
                  <marker 
                    id="arrowDashed" 
                    markerWidth="12" 
                    markerHeight="12" 
                    refX="10" 
                    refY="6" 
                    orient="auto" 
                    markerUnits="userSpaceOnUse"
                  >
                    <path d="M0,2 L0,10 L10,6 Z" fill="#64748b"/>
                  </marker>
                  
                  {/* Shadow filter for nodes */}
                  <filter id="shadow" x="-30%" y="-30%" width="160%" height="160%">
                    <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#0f172a" floodOpacity="0.08"/>
                  </filter>
                </defs>

                {/* ===== ARROWS (drawn first, behind nodes) ===== */}
                
                {/* Arrow 1: Employer → Captive (straight down) */}
                <line 
                  x1="300" y1="95" 
                  x2="300" y2="175" 
                  stroke="#2563eb" 
                  strokeWidth="2.5" 
                  markerEnd="url(#arrow)"
                />
                {/* Label: Premium */}
                <text 
                  x="300" y="140" 
                  textAnchor="middle" 
                  fill="#2563eb" 
                  fontSize="13" 
                  fontWeight="600"
                >
                  Premium
                </text>

                {/* Arrow 2: Left Reinsurer → Captive (straight right) */}
                <line 
                  x1="155" y1="260" 
                  x2="205" y2="260" 
                  stroke="#2563eb" 
                  strokeWidth="2.5" 
                  markerEnd="url(#arrow)"
                />
                {/* Label: Underwriting Administration (above line) */}
                <text 
                  x="110" y="222" 
                  textAnchor="middle" 
                  fill="#64748b" 
                  fontSize="11" 
                  fontWeight="500"
                >
                  <tspan x="110" dy="0">Underwriting</tspan>
                  <tspan x="110" dy="13">Administration</tspan>
                </text>

                {/* Arrow 3: Captive → Bottom Reinsurer (straight down) */}
                <line 
                  x1="300" y1="345" 
                  x2="300" y2="415" 
                  stroke="#2563eb" 
                  strokeWidth="2.5" 
                  markerEnd="url(#arrow)"
                />
                {/* Label: Excess Stop Loss */}
                <text 
                  x="300" y="385" 
                  textAnchor="middle" 
                  fill="#64748b" 
                  fontSize="11" 
                  fontWeight="500"
                >
                  Excess Stop Loss
                </text>

                {/* Arrow 4: Claims - curved dashed from Captive to Employer */}
                <path 
                  d="M380 210 Q 440 160, 380 95" 
                  stroke="#64748b" 
                  strokeWidth="2" 
                  strokeDasharray="6,4" 
                  fill="none" 
                  markerEnd="url(#arrowDashed)"
                />
                {/* Label: Claims (along curve) */}
                <text 
                  x="435" y="155" 
                  textAnchor="middle" 
                  fill="#64748b" 
                  fontSize="11" 
                  fontWeight="500"
                >
                  Claims
                </text>

                {/* ===== NODES ===== */}

                {/* Node 1: Employer - Top Center */}
                <g filter="url(#shadow)">
                  <circle cx="300" cy="55" r="45" fill="white"/>
                  <circle cx="300" cy="55" r="45" fill="none" stroke="#2563eb" strokeWidth="3"/>
                  <text x="300" y="50" textAnchor="middle" fill="#0f172a" fontSize="15" fontWeight="700">Employer</text>
                  <text x="300" y="68" textAnchor="middle" fill="#2563eb" fontSize="10" fontWeight="500">Self-Funded Plan</text>
                </g>

                {/* Node 2: Left Reinsurer - Left Center */}
                <g filter="url(#shadow)">
                  <circle cx="110" cy="260" r="45" fill="white"/>
                  <circle cx="110" cy="260" r="45" fill="none" stroke="#2563eb" strokeWidth="3"/>
                  <text x="110" y="265" textAnchor="middle" fill="#0f172a" fontSize="13" fontWeight="700">Reinsurer</text>
                </g>

                {/* Node 3: Captive - Center (largest, emphasized) */}
                <g filter="url(#shadow)">
                  <circle cx="300" cy="260" r="85" fill="white"/>
                  <circle cx="300" cy="260" r="85" fill="none" stroke="#0f172a" strokeWidth="4"/>
                  <circle cx="300" cy="260" r="75" fill="none" stroke="#2563eb" strokeWidth="2"/>
                  <text x="300" y="245" textAnchor="middle" fill="#0f172a" fontSize="22" fontWeight="800">Captive</text>
                  <text x="300" y="270" textAnchor="middle" fill="#0f172a" fontSize="14" fontWeight="600">Insurer</text>
                  <text x="300" y="292" textAnchor="middle" fill="#2563eb" fontSize="11" fontWeight="500">Primary Stop Loss</text>
                </g>

                {/* Node 4: Bottom Reinsurer - Bottom Center */}
                <g filter="url(#shadow)">
                  <circle cx="300" cy="460" r="45" fill="white"/>
                  <circle cx="300" cy="460" r="45" fill="none" stroke="#2563eb" strokeWidth="3"/>
                  <text x="300" y="455" textAnchor="middle" fill="#0f172a" fontSize="13" fontWeight="700">Reinsurer</text>
                  <text x="300" y="472" textAnchor="middle" fill="#64748b" fontSize="10" fontWeight="500">Excess Stop Loss</text>
                </g>
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

      {/* Our Dual Role Section - Blue */}
      <section className="py-24 bg-zenith-navy relative overflow-hidden">
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
