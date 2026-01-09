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

      {/* Premium & Capital Flow Diagram Section */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-[11px] font-black text-blue-600 uppercase tracking-[0.4em] mb-6 block">Capital Architecture</span>
            <h2 className="text-3xl md:text-4xl font-bold text-zenith-navy tracking-tight mb-6">Premium & Capital Flow</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light">
              A simplified view of how premium, claims, and risk capital flow through the captive structure.
            </p>
          </div>

          {/* Premium & Capital Flow Diagram */}
          <div className="max-w-5xl mx-auto mb-12">
            
            {/* === MOBILE LAYOUT (base to md) - Vertical Stacked Flow === */}
            <div className="md:hidden">
              <div className="flex flex-col items-center space-y-4 px-4">
                
                {/* Employer Node */}
                <div className="bg-white border-2 border-slate-200 shadow-lg p-6 rounded-2xl text-center w-full max-w-xs">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full border-[3px] border-blue-500 bg-white flex items-center justify-center shadow-md">
                    <span className="font-bold text-zenith-navy text-lg">Employer</span>
                  </div>
                  <p className="text-blue-500 text-sm font-medium">Self-Funded Plan</p>
                </div>
                
                {/* Arrow: Premium */}
                <div className="flex flex-col items-center py-2">
                  <span className="text-blue-600 font-bold text-sm uppercase tracking-wider mb-2">Premium</span>
                  <div className="w-0.5 h-6 bg-blue-500"></div>
                  <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 16l-6-6h12l-6 6z"/>
                  </svg>
                </div>
                
                {/* Captive Node - Primary/Largest */}
                <div className="bg-white border-2 border-zenith-navy shadow-xl p-6 rounded-2xl text-center w-full max-w-xs relative">
                  <div className="w-28 h-28 mx-auto mb-4 rounded-full border-4 border-zenith-navy bg-white flex flex-col items-center justify-center shadow-lg relative">
                    <div className="absolute inset-1 rounded-full border-2 border-blue-500"></div>
                    <span className="font-extrabold text-zenith-navy text-xl">Captive</span>
                    <span className="font-medium text-slate-600 text-sm">Insurer</span>
                  </div>
                  <p className="text-blue-500 text-sm font-semibold">Primary Stop Loss</p>
                  
                  {/* Claims Badge - Mobile alternative to curved arrow */}
                  <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full text-slate-600 text-xs font-medium">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4,2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18"/>
                    </svg>
                    Claims paid back to Employer
                  </div>
                </div>
                
                {/* Reinsurer Underwriting - Inline callout */}
                <div className="flex items-center gap-3 w-full max-w-xs bg-slate-50 border border-slate-200 rounded-xl p-4">
                  <div className="w-14 h-14 rounded-full border-2 border-blue-500 bg-white flex items-center justify-center flex-shrink-0">
                    <span className="font-semibold text-zenith-navy text-xs">Reinsurer</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 12l6-6v12l-6-6z"/>
                    </svg>
                    <div>
                      <p className="text-slate-600 text-xs font-medium">Underwriting &</p>
                      <p className="text-slate-600 text-xs font-medium">Administration</p>
                    </div>
                  </div>
                </div>
                
                {/* Arrow: Excess Stop Loss */}
                <div className="flex flex-col items-center py-2">
                  <div className="w-0.5 h-4 bg-blue-500"></div>
                  <span className="text-slate-600 font-medium text-sm my-2">Excess Stop Loss</span>
                  <div className="w-0.5 h-4 bg-blue-500"></div>
                  <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 16l-6-6h12l-6 6z"/>
                  </svg>
                </div>
                
                {/* Reinsurer Excess Stop Loss Node */}
                <div className="bg-white border-2 border-slate-200 shadow-lg p-6 rounded-2xl text-center w-full max-w-xs">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full border-[3px] border-blue-500 bg-white flex items-center justify-center shadow-md">
                    <span className="font-bold text-zenith-navy text-sm">Reinsurer</span>
                  </div>
                  <p className="text-slate-500 text-sm font-medium">Excess Stop Loss</p>
                </div>
                
              </div>
            </div>
            
            {/* === DESKTOP LAYOUT (md and up) - Centered Composition with SVG Arrows === */}
            <div className="hidden md:block">
              <div className="bg-gradient-to-br from-slate-50 to-white rounded-3xl shadow-2xl border border-slate-100 p-12 lg:p-16">
                
                {/* Diagram Container with SVG Overlay */}
                <div className="relative" style={{ height: '520px' }}>
                  
                  {/* SVG Arrow Overlay - All connections in one cohesive layer */}
                  <svg 
                    className="absolute inset-0 w-full h-full pointer-events-none" 
                    viewBox="0 0 800 520"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <defs>
                      {/* Blue arrow marker */}
                      <marker id="arrowBlue" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto" markerUnits="userSpaceOnUse">
                        <path d="M0,0 L10,5 L0,10 L2,5 Z" fill="#3b82f6"/>
                      </marker>
                      {/* Gray arrow marker for claims */}
                      <marker id="arrowGray" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto" markerUnits="userSpaceOnUse">
                        <path d="M0,0 L10,5 L0,10 L2,5 Z" fill="#94a3b8"/>
                      </marker>
                    </defs>
                    
                    {/* Arrow 1: Employer → Captive (Premium - vertical down) */}
                    <line x1="400" y1="85" x2="400" y2="175" stroke="#3b82f6" strokeWidth="2.5" markerEnd="url(#arrowBlue)"/>
                    <text x="400" y="140" textAnchor="middle" fill="#3b82f6" fontSize="14" fontWeight="600" fontFamily="system-ui">Premium</text>
                    
                    {/* Arrow 2: Left Reinsurer → Captive (Underwriting - horizontal right) */}
                    <line x1="235" y1="280" x2="315" y2="280" stroke="#3b82f6" strokeWidth="2.5" markerEnd="url(#arrowBlue)"/>
                    
                    {/* Arrow 3: Captive → Bottom Reinsurer (Excess Stop Loss - vertical down) */}
                    <line x1="400" y1="385" x2="400" y2="440" stroke="#3b82f6" strokeWidth="2.5" markerEnd="url(#arrowBlue)"/>
                    <text x="400" y="420" textAnchor="middle" fill="#64748b" fontSize="13" fontWeight="500" fontFamily="system-ui">Excess Stop Loss</text>
                    
                    {/* Arrow 4: Claims - Curved dashed from Captive to Employer (properly connected) */}
                    <path 
                      d="M 485 220 Q 560 180, 560 120 Q 560 80, 480 70" 
                      stroke="#94a3b8" 
                      strokeWidth="2" 
                      strokeDasharray="6,4" 
                      fill="none" 
                      markerEnd="url(#arrowGray)"
                    />
                    <text x="575" y="150" textAnchor="start" fill="#94a3b8" fontSize="13" fontWeight="500" fontFamily="system-ui">Claims</text>
                  </svg>
                  
                  {/* Node: Employer - Top Center */}
                  <div className="absolute left-1/2 top-0 -translate-x-1/2">
                    <div className="bg-white border border-slate-200 hover:border-blue-300 shadow-md hover:shadow-lg p-5 rounded-2xl text-center w-40 transition-all duration-300">
                      <div className="w-16 h-16 mx-auto mb-3 rounded-full border-[3px] border-blue-500 bg-white flex items-center justify-center">
                        <span className="font-bold text-zenith-navy text-sm">Employer</span>
                      </div>
                      <p className="text-blue-500 text-xs font-medium">Self-Funded Plan</p>
                    </div>
                  </div>
                  
                  {/* Node: Left Reinsurer - Underwriting Administration */}
                  <div className="absolute left-0 top-1/2 -translate-y-1/2">
                    <div className="text-center mb-2">
                      <span className="text-slate-500 text-xs font-medium block">Underwriting</span>
                      <span className="text-slate-500 text-xs font-medium block">Administration</span>
                    </div>
                    <div className="bg-white border border-slate-200 hover:border-blue-300 shadow-md hover:shadow-lg p-5 rounded-2xl text-center w-36 transition-all duration-300">
                      <div className="w-14 h-14 mx-auto mb-2 rounded-full border-[3px] border-blue-500 bg-white flex items-center justify-center">
                        <span className="font-bold text-zenith-navy text-xs">Reinsurer</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Node: Captive - Center (Largest, Dominant) */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="bg-white border-2 border-zenith-navy shadow-2xl p-6 rounded-2xl text-center w-48 transition-all duration-300 hover:shadow-3xl">
                      <div className="w-24 h-24 mx-auto mb-3 rounded-full border-4 border-zenith-navy bg-white flex flex-col items-center justify-center relative">
                        <div className="absolute inset-1 rounded-full border-2 border-blue-500"></div>
                        <span className="font-extrabold text-zenith-navy text-xl">Captive</span>
                        <span className="font-medium text-slate-600 text-sm">Insurer</span>
                      </div>
                      <p className="text-blue-500 text-sm font-semibold">Primary Stop Loss</p>
                    </div>
                  </div>
                  
                  {/* Node: Bottom Reinsurer - Excess Stop Loss */}
                  <div className="absolute left-1/2 bottom-0 -translate-x-1/2">
                    <div className="bg-white border border-slate-200 hover:border-blue-300 shadow-md hover:shadow-lg p-5 rounded-2xl text-center w-40 transition-all duration-300">
                      <div className="w-16 h-16 mx-auto mb-3 rounded-full border-[3px] border-blue-500 bg-white flex items-center justify-center">
                        <span className="font-bold text-zenith-navy text-xs">Reinsurer</span>
                      </div>
                      <p className="text-slate-500 text-xs font-medium">Excess Stop Loss</p>
                    </div>
                  </div>
                  
                </div>
              </div>
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
