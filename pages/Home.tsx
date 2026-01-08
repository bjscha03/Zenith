
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
      <section className="py-32 bg-gradient-to-b from-slate-50 to-white border-y border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-sm font-black text-blue-600 uppercase tracking-[0.3em] mb-6">The Lifecycle</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-zenith-navy mb-8 tracking-tight">Full-Circle Risk Optimization</h3>
            <p className="text-slate-600 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">Every component feeds into better outcomes—from premium capture through renewal.</p>
          </div>
          
          {/* Circular Flow Diagram */}
          <div className="relative max-w-5xl mx-auto">
            {/* Central Hub */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 md:w-52 md:h-52 bg-zenith-navy rounded-full flex items-center justify-center z-20 shadow-2xl">
              <div className="text-center text-white p-4">
                <div className="text-2xl md:text-3xl font-bold mb-1">Renewal</div>
                <div className="text-[10px] uppercase tracking-widest text-blue-300">Optimized Outcomes</div>
              </div>
            </div>
            
            {/* Animated Ring */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-96 md:h-96 border-4 border-dashed border-blue-200 rounded-full animate-spin" style={{ animationDuration: '30s' }}></div>
            
            {/* Flow Container */}
            <div className="relative h-[600px] md:h-[700px]">
              
              {/* Step 1: Premium Capture - Top */}
              <div className="absolute left-1/2 -translate-x-1/2 top-0 group">
                <div className="bg-white border-2 border-slate-200 hover:border-zenith-blue shadow-lg hover:shadow-2xl p-6 rounded-2xl text-center w-56 md:w-64 transition-all duration-300 hover:-translate-y-2">
                  <div className="w-12 h-12 bg-zenith-blue text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
                  <h4 className="font-bold text-zenith-navy text-sm uppercase tracking-wider mb-2">Premium Capture</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">Strategic pricing for long-term sustainability</p>
                </div>
                {/* Arrow Down */}
                <div className="absolute left-1/2 -translate-x-1/2 -bottom-8 text-blue-400 animate-bounce">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
                </div>
              </div>
              
              {/* Step 2: Smart Underwriting - Top Right */}
              <div className="absolute right-0 md:right-8 top-24 md:top-28 group">
                <div className="bg-white border-2 border-slate-200 hover:border-zenith-blue shadow-lg hover:shadow-2xl p-6 rounded-2xl text-center w-56 md:w-64 transition-all duration-300 hover:-translate-y-2">
                  <div className="w-12 h-12 bg-zenith-blue text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
                  <h4 className="font-bold text-zenith-navy text-sm uppercase tracking-wider mb-2">Smart Underwriting</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">Data-driven risk assessment & optimal terms</p>
                </div>
                {/* Arrow diagonal */}
                <div className="absolute -left-8 top-1/2 -translate-y-1/2 text-blue-400">
                  <svg className="w-6 h-6 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" /></svg>
                </div>
              </div>
              
              {/* Step 3: Clinical Review - Bottom Right */}
              <div className="absolute right-0 md:right-8 bottom-24 md:bottom-28 group">
                <div className="bg-white border-2 border-slate-200 hover:border-zenith-blue shadow-lg hover:shadow-2xl p-6 rounded-2xl text-center w-56 md:w-64 transition-all duration-300 hover:-translate-y-2">
                  <div className="w-12 h-12 bg-zenith-blue text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
                  <h4 className="font-bold text-zenith-navy text-sm uppercase tracking-wider mb-2">Clinical Review</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">Proactive high-cost claim management</p>
                </div>
                {/* Arrow */}
                <div className="absolute -left-8 top-1/2 -translate-y-1/2 text-blue-400">
                  <svg className="w-6 h-6 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" /></svg>
                </div>
              </div>
              
              {/* Step 4: Cost Containment - Bottom Left */}
              <div className="absolute left-0 md:left-8 bottom-24 md:bottom-28 group">
                <div className="bg-white border-2 border-slate-200 hover:border-zenith-blue shadow-lg hover:shadow-2xl p-6 rounded-2xl text-center w-56 md:w-64 transition-all duration-300 hover:-translate-y-2">
                  <div className="w-12 h-12 bg-zenith-blue text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
                  <h4 className="font-bold text-zenith-navy text-sm uppercase tracking-wider mb-2">Cost Containment</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">Targeted interventions, quality care preserved</p>
                </div>
                {/* Arrow */}
                <div className="absolute -right-8 top-1/2 -translate-y-1/2 text-blue-400">
                  <svg className="w-6 h-6 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" /></svg>
                </div>
              </div>
              
              {/* Step 5: Surplus Retention - Top Left */}
              <div className="absolute left-0 md:left-8 top-24 md:top-28 group">
                <div className="bg-white border-2 border-slate-200 hover:border-zenith-blue shadow-lg hover:shadow-2xl p-6 rounded-2xl text-center w-56 md:w-64 transition-all duration-300 hover:-translate-y-2">
                  <div className="w-12 h-12 bg-zenith-blue text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">5</div>
                  <h4 className="font-bold text-zenith-navy text-sm uppercase tracking-wider mb-2">Surplus Retention</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">Maximized returns through disciplined management</p>
                </div>
                {/* Arrow */}
                <div className="absolute -right-8 top-1/2 -translate-y-1/2 text-blue-400">
                  <svg className="w-6 h-6 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" /></svg>
                </div>
              </div>
              
              {/* Connecting curved arrows - decorative SVG */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 800 700">
                {/* Curved path connecting all nodes */}
                <path 
                  d="M400 120 Q600 120 650 280 Q700 450 650 550 Q550 650 400 650 Q250 650 150 550 Q100 450 150 280 Q200 120 400 120" 
                  fill="none" 
                  stroke="url(#flowGradient)" 
                  strokeWidth="3" 
                  strokeDasharray="10 5"
                  className="animate-pulse"
                  opacity="0.5"
                />
                <defs>
                  <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="100%" stopColor="#1E3A5F" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            
            {/* Impact Metrics */}
            <div className="grid grid-cols-3 gap-8 mt-8 max-w-3xl mx-auto">
              <div className="text-center p-6 bg-white rounded-xl border border-slate-200 shadow-sm">
                <div className="text-3xl font-bold text-zenith-blue mb-2">↑</div>
                <div className="text-xs font-bold uppercase tracking-wider text-zenith-navy">Premium Capture</div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl border border-slate-200 shadow-sm">
                <div className="text-3xl font-bold text-zenith-blue mb-2">⚡</div>
                <div className="text-xs font-bold uppercase tracking-wider text-zenith-navy">Performance</div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl border border-slate-200 shadow-sm">
                <div className="text-3xl font-bold text-zenith-blue mb-2">⟳</div>
                <div className="text-xs font-bold uppercase tracking-wider text-zenith-navy">Renewal Outcomes</div>
              </div>
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
