
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="w-full">
      {/* 1. Hero */}
      <section className="relative text-white py-24 md:py-44 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://res.cloudinary.com/dtrxl120u/image/upload/v1767912842/download_zcreqi.webp')" }}
        ></div>
        {/* Blue Overlay */}
        <div className="absolute inset-0 bg-zenith-navy/85"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-[84px] font-bold leading-[1.05] tracking-tight mb-8">
              Optimizing <span className="text-blue-400 font-normal italic decoration-2 underline underline-offset-8">your</span> Risk to Peak Performance
            </h1>
            <p className="text-lg md:text-2xl text-slate-300 leading-relaxed font-light mb-14 max-w-2xl">
              A modern Medical Stop-Loss MGU built to protect employer plans, empower advisors, and realign incentives in healthcare.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link to="/contact" className="px-10 py-5 bg-zenith-blue hover:bg-blue-700 text-white font-bold rounded shadow-xl transition-all text-center uppercase tracking-widest text-[11px]">
                Start a Conversation
              </Link>
              <Link to="/for-brokers" className="px-10 py-5 bg-transparent border border-slate-500 hover:border-white text-white font-bold rounded transition-all text-center uppercase tracking-widest text-[11px]">
                Submission Checklist
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Core Value Pillars */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[12px] font-black text-blue-600 uppercase tracking-[0.3em] mb-4">Our Expertise</h2>
            <h3 className="text-3xl font-bold text-zenith-navy">Precision Risk Management</h3>
            <div className="w-12 h-1 bg-zenith-blue mx-auto mt-6"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="p-10 bg-slate-50 border border-slate-100 rounded-lg hover:shadow-2xl hover:-translate-y-1 transition-all group">
              <div className="w-12 h-12 bg-zenith-blue text-white flex items-center justify-center rounded mb-8">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
              </div>
              <h3 className="text-lg font-bold text-zenith-navy mb-4 uppercase tracking-wider">Underwriting Intelligence</h3>
              <p className="text-slate-600 leading-relaxed text-sm">Discipline-led analysis that prioritizes long-term program stability over short-term premium shifts.</p>
            </div>
            <div className="p-10 bg-slate-50 border border-slate-100 rounded-lg hover:shadow-2xl hover:-translate-y-1 transition-all group">
              <div className="w-12 h-12 bg-zenith-blue text-white flex items-center justify-center rounded mb-8">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04M12 21.48V22" /></svg>
              </div>
              <h3 className="text-lg font-bold text-zenith-navy mb-4 uppercase tracking-wider">Claims Stewardship</h3>
              <p className="text-slate-600 leading-relaxed text-sm">Proactive clinical oversight and claims intervention that mitigates escalation before it impacts your bottom line.</p>
            </div>
            <div className="p-10 bg-slate-50 border border-slate-100 rounded-lg hover:shadow-2xl hover:-translate-y-1 transition-all group">
              <div className="w-12 h-12 bg-zenith-blue text-white flex items-center justify-center rounded mb-8">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-lg font-bold text-zenith-navy mb-4 uppercase tracking-wider">Captive Integration</h3>
              <p className="text-slate-600 leading-relaxed text-sm">Seamless alignment between stop-loss and captive strategies to preserve surplus and ensure financial transparency.</p>
            </div>
          </div>
        </div>
      </section>

            {/* 3. Risk Flow Explanation - Circular Flow Diagram */}
      <section className="py-32 bg-zenith-navy overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-sm font-black text-blue-400 uppercase tracking-[0.3em] mb-6">The Lifecycle</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">Aligned for Optimal Renewal</h3>
            <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">Every step is structured to guide your plan toward predictable, performance-driven renewal outcomes.</p>
          </div>
          
          {/* Circular Flow Diagram - Desktop: Circle, Mobile: Vertical */}
          <div className="relative max-w-5xl mx-auto">
            
            {/* === MOBILE LAYOUT === */}
            <div className="md:hidden">
              {/* Mobile: Vertical Flow */}
              <div className="flex flex-col items-center space-y-4">
                
                {/* Step 1 */}
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg p-5 rounded-2xl text-center w-full max-w-sm">
                  <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">1</div>
                  <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-2">Strategic Pricing</h4>
                  <p className="text-slate-300 text-xs leading-relaxed">Data-driven pricing designed for long-term sustainability and predictable renewals</p>
                </div>
                
                {/* Arrow */}
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
                
                {/* Step 2 */}
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg p-5 rounded-2xl text-center w-full max-w-sm">
                  <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">2</div>
                  <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-2">Smart Underwriting</h4>
                  <p className="text-slate-300 text-xs leading-relaxed">Advanced risk assessment using clinical data and analytics to establish optimal terms</p>
                </div>
                
                {/* Arrow */}
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
                
                {/* Step 3 */}
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg p-5 rounded-2xl text-center w-full max-w-sm">
                  <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">3</div>
                  <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-2">Doctor-Led Clinical Review</h4>
                  <p className="text-slate-300 text-xs leading-relaxed">Independent clinical oversight and high-cost claim evaluation to support appropriate, cost-aware care decisions</p>
                </div>
                
                {/* Arrow */}
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
                
                {/* Step 4 */}
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg p-5 rounded-2xl text-center w-full max-w-sm">
                  <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">4</div>
                  <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-2">Cost Containment</h4>
                  <p className="text-slate-300 text-xs leading-relaxed">Recommended strategies to reduce plan costs while preserving quality care and member experience</p>
                </div>
                
                {/* Arrow */}
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
                
                {/* Step 5 */}
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg p-5 rounded-2xl text-center w-full max-w-sm">
                  <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">5</div>
                  <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-2">Surplus Retention</h4>
                  <p className="text-slate-300 text-xs leading-relaxed">Disciplined surplus guidance that rewards performance and supports long-term plan stability</p>
                </div>
                
                {/* Arrow to Renewal */}
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
                
                {/* Renewal - Mobile */}
                <div className="w-40 h-40 bg-gradient-to-br from-zenith-navy to-blue-900 rounded-full flex items-center justify-center shadow-2xl ring-4 ring-blue-400/20">
                  <div className="text-center text-white p-4">
                    <div className="text-2xl font-bold mb-1">Renewal</div>
                    <div className="w-6 h-0.5 bg-blue-400 mx-auto mb-1"></div>
                    <div className="text-[8px] uppercase tracking-widest text-blue-300">Predictable, Performance-Driven</div>
                  </div>
                </div>
                
                {/* Loop back indicator */}
                <div className="flex items-center gap-2 text-blue-300 text-xs">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                  <span className="uppercase tracking-wider">Continuous Cycle</span>
                </div>
              </div>
            </div>
            
            {/* === DESKTOP LAYOUT === */}
            <div className="hidden md:block">
              {/* Central Hub - Visually Dominant */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-gradient-to-br from-zenith-navy to-blue-900 rounded-full flex items-center justify-center z-20 shadow-2xl">
                <div className="text-center text-white p-4">
                  <div className="text-3xl font-bold mb-2">Renewal</div>
                  <div className="w-10 h-0.5 bg-blue-400 mx-auto mb-2"></div>
                  <div className="text-[10px] uppercase tracking-widest text-blue-300 leading-relaxed">Predictable,<br/>Performance-Driven</div>
                </div>
              </div>
              
              {/* Circular Flow Path - Active System Loop */}
              <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] pointer-events-none" viewBox="0 0 520 520" fill="none">
                {/* Primary circular path - visible and intentional */}
                <circle cx="260" cy="260" r="240" stroke="#60A5FA" strokeWidth="2.5" fill="none" opacity="0.4" />
                
                {/* 4 arrows precisely positioned ON the circle, 90° apart, tangent to path */}
                {/* Arrow 1: Upper-right at 315° (between Step 1 → Step 2) */}
                <polygon points="-6,-7 8,0 -6,7" fill="#60A5FA" transform="translate(430, 90) rotate(405)" />
                
                {/* Arrow 2: Lower-right at 45° (between Step 2 → Step 3) */}
                <polygon points="-6,-7 8,0 -6,7" fill="#60A5FA" transform="translate(430, 430) rotate(135)" />
                
                {/* Arrow 3: Lower-left at 135° (between Step 3 → Step 4) */}
                <polygon points="-6,-7 8,0 -6,7" fill="#60A5FA" transform="translate(90, 430) rotate(225)" />
                
                {/* Arrow 4: Upper-left at 225° (between Step 5 → Step 1) */}
                <polygon points="-6,-7 8,0 -6,7" fill="#60A5FA" transform="translate(90, 90) rotate(315)" />
              </svg>
              
              {/* Flow Container */}
              <div className="relative h-[700px]">
                
                {/* Step 1: Strategic Pricing - Top Center */}
                <div className="absolute left-1/2 -translate-x-1/2 top-0">
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 hover:border-blue-400/50 shadow-md hover:shadow-lg p-6 rounded-2xl text-center w-64 transition-all duration-300">
                    <div className="w-11 h-11 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">1</div>
                    <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-2">Strategic Pricing</h4>
                    <p className="text-slate-300 text-xs leading-relaxed">Data-driven pricing designed for long-term sustainability and predictable renewals</p>
                  </div>
                </div>
                
                {/* Step 2: Smart Underwriting - Right Upper */}
                <div className="absolute right-0 top-28">
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 hover:border-blue-400/50 shadow-md hover:shadow-lg p-6 rounded-2xl text-center w-64 transition-all duration-300">
                    <div className="w-11 h-11 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">2</div>
                    <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-2">Smart Underwriting</h4>
                    <p className="text-slate-300 text-xs leading-relaxed">Advanced risk assessment using clinical data and analytics to establish optimal terms</p>
                  </div>
                </div>
                
                {/* Step 3: Doctor-Led Clinical Review - Right Lower */}
                <div className="absolute right-0 bottom-28">
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 hover:border-blue-400/50 shadow-md hover:shadow-lg p-6 rounded-2xl text-center w-64 transition-all duration-300">
                    <div className="w-11 h-11 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">3</div>
                    <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-2">Doctor-Led Clinical Review</h4>
                    <p className="text-slate-300 text-xs leading-relaxed">Independent clinical oversight and high-cost claim evaluation to support appropriate, cost-aware care decisions</p>
                  </div>
                </div>
                
                {/* Step 4: Cost Containment - Left Lower */}
                <div className="absolute left-0 bottom-28">
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 hover:border-blue-400/50 shadow-md hover:shadow-lg p-6 rounded-2xl text-center w-64 transition-all duration-300">
                    <div className="w-11 h-11 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">4</div>
                    <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-2">Cost Containment</h4>
                    <p className="text-slate-300 text-xs leading-relaxed">Recommended strategies to reduce plan costs while preserving quality care and member experience</p>
                  </div>
                </div>
                
                {/* Step 5: Surplus Retention - Left Upper */}
                <div className="absolute left-0 top-28">
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 hover:border-blue-400/50 shadow-md hover:shadow-lg p-6 rounded-2xl text-center w-64 transition-all duration-300">
                    <div className="w-11 h-11 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">5</div>
                    <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-2">Surplus Retention</h4>
                    <p className="text-slate-300 text-xs leading-relaxed">Disciplined surplus guidance that rewards performance and supports long-term plan stability</p>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
          
          {/* Impact Metrics - Guidance & Alignment Focus */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-3xl mx-auto">
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 shadow-sm">
              <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-white">Structured Guidance</div>
            </div>
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 shadow-sm">
              <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-white">Peak Performance</div>
            </div>
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 shadow-sm">
              <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-white">Aligned Renewal</div>
            </div>
          </div>
          
          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <Link to="/services" className="inline-flex items-center gap-3 px-10 py-5 bg-white hover:bg-slate-100 text-zenith-navy font-bold rounded-lg shadow-xl transition-all uppercase tracking-widest text-sm">
              Explore Our Services
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Who We Serve */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-bold text-zenith-navy mb-8 tracking-tight">Built for the <br/><span className="text-zenith-blue">Self-Funded</span> Ecosystem</h2>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">We partner with stakeholders who value precision and transparency in healthcare risk management.</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12">
                {['Strategic Brokers', 'Self-Funded Employers', 'Group Captives', 'Clinical Advisors', 'Strategic Partners'].map((item) => (
                  <li key={item} className="flex items-center text-slate-800 font-bold uppercase tracking-widest text-[10px]">
                    <span className="w-1.5 h-1.5 bg-blue-500 mr-3 rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-slate-50 rounded-lg -z-10 transform -rotate-1"></div>
              <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800" alt="Professional collaboration" className="rounded shadow-2xl grayscale contrast-125 brightness-90 hover:grayscale-0 transition-all duration-1000" />
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <section className="py-32 bg-zenith-blue text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900 opacity-20"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-10 tracking-tight leading-tight">Ready to engineer alignment <br/>in your health plan?</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/contact" className="px-12 py-5 bg-white text-zenith-blue font-black rounded shadow-2xl hover:bg-slate-50 transition-all uppercase tracking-widest text-[11px]">
              Start a Conversation
            </Link>
            <Link to="/for-brokers" className="px-12 py-5 bg-transparent border border-white text-white font-black rounded hover:bg-white/10 transition-all uppercase tracking-widest text-[11px]">
              Submission Requirements
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
