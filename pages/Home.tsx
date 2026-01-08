
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="w-full">
      {/* 1. Hero */}
      <section className="relative bg-zenith-navy text-white py-24 md:py-44 overflow-hidden">
        {/* Subtle Brand Motif Background - Compass from Logo */}
        <div className="absolute right-[-5%] top-[-10%] w-[60%] h-[120%] opacity-[0.03] pointer-events-none transform rotate-12">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-white">
             <path d="M50 0 L54 35 L90 25 L65 46 L100 50 L65 54 L90 75 L54 65 L50 100 L46 65 L10 75 L35 54 L0 50 L35 46 L10 25 L46 35 Z" />
          </svg>
        </div>
        
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

            {/* 3. Risk Flow Explanation */}
      <section className="py-32 bg-gradient-to-b from-slate-50 to-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="text-sm font-black text-blue-600 uppercase tracking-[0.3em] mb-6">The Lifecycle</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-zenith-navy mb-8 tracking-tight">Optimized Risk Flow</h3>
            <p className="text-slate-600 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">How we engineer alignment through the lifecycle of a stop-loss contract.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
            {/* Premium Capture */}
            <div className="group bg-white border border-slate-200 shadow-lg hover:shadow-2xl p-8 lg:p-10 rounded-xl text-center flex flex-col items-center justify-center transition-all duration-300 hover:-translate-y-2 hover:border-blue-200">
              <h4 className="font-bold text-zenith-navy text-base md:text-lg uppercase tracking-wider mb-4 leading-tight">Premium Capture</h4>
              <p className="text-slate-500 text-sm leading-relaxed">Strategic pricing that balances competitiveness with long-term sustainability.</p>
            </div>

            {/* Smart Underwriting */}
            <div className="group bg-white border border-slate-200 shadow-lg hover:shadow-2xl p-8 lg:p-10 rounded-xl text-center flex flex-col items-center justify-center transition-all duration-300 hover:-translate-y-2 hover:border-blue-200">
              <h4 className="font-bold text-zenith-navy text-base md:text-lg uppercase tracking-wider mb-4 leading-tight">Smart Underwriting</h4>
              <p className="text-slate-500 text-sm leading-relaxed">Data-driven analysis for accurate risk assessment and optimal terms.</p>
            </div>

            {/* Active Clinical Review */}
            <div className="group bg-white border border-slate-200 shadow-lg hover:shadow-2xl p-8 lg:p-10 rounded-xl text-center flex flex-col items-center justify-center transition-all duration-300 hover:-translate-y-2 hover:border-blue-200">
              <h4 className="font-bold text-zenith-navy text-base md:text-lg uppercase tracking-wider mb-4 leading-tight">Active Clinical Review</h4>
              <p className="text-slate-500 text-sm leading-relaxed">Proactive oversight to identify and manage high-cost claims early.</p>
            </div>

            {/* Cost Containment */}
            <div className="group bg-white border border-slate-200 shadow-lg hover:shadow-2xl p-8 lg:p-10 rounded-xl text-center flex flex-col items-center justify-center transition-all duration-300 hover:-translate-y-2 hover:border-blue-200">
              <h4 className="font-bold text-zenith-navy text-base md:text-lg uppercase tracking-wider mb-4 leading-tight">Cost Containment</h4>
              <p className="text-slate-500 text-sm leading-relaxed">Targeted interventions that reduce spend without compromising care.</p>
            </div>

            {/* Surplus Retention */}
            <div className="group bg-white border border-slate-200 shadow-lg hover:shadow-2xl p-8 lg:p-10 rounded-xl text-center flex flex-col items-center justify-center transition-all duration-300 hover:-translate-y-2 hover:border-blue-200">
              <h4 className="font-bold text-zenith-navy text-base md:text-lg uppercase tracking-wider mb-4 leading-tight">Surplus Retention</h4>
              <p className="text-slate-500 text-sm leading-relaxed">Maximizing returns through disciplined program management.</p>
            </div>
          </div>
          
          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <Link to="/services" className="inline-flex items-center gap-3 px-10 py-5 bg-zenith-navy hover:bg-blue-900 text-white font-bold rounded-lg shadow-xl transition-all uppercase tracking-widest text-sm">
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
