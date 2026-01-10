import React from 'react';
import { Link } from 'react-router-dom';

const WhyZenith: React.FC = () => {
  return (
    <div className="w-full">
      {/* 1. Impactful Headline Section - Blue with Image Underlay */}
      <section className="relative text-white py-24 md:py-36 overflow-hidden">
        {/* Background Image - Direction/navigation theme */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')" }}
        ></div>
        {/* Blue Overlay */}
        <div className="absolute inset-0 bg-zenith-navy/90"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <span className="text-[11px] font-black text-blue-400 uppercase tracking-[0.4em] mb-6 block">The Differentiator</span>
            <h1 className="text-4xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-10">
              The Stop-Loss Model is outdated. <br/>
              We have <span className="text-blue-400 italic underline underline-offset-[12px] decoration-4 decoration-blue-500/50">Designed</span> a Better One.
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed font-light italic max-w-3xl">
              Traditional models are fundamentally misaligned. We've rebuilt the process to prioritize clinical oversight, financial transparency, and predictable outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Problem & Solution Comparison */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 md:gap-24 mb-24 items-start">
            {/* The Problem Column */}
            <div className="space-y-12">
              <div>
                <h2 className="text-[12px] font-black text-slate-900 uppercase tracking-[0.3em] mb-8 flex items-center">
                  <span className="w-8 h-px bg-slate-900 mr-4"></span>
                  The Problem:
                </h2>
                
                {/* CARRIER MISALIGNMENT - Highly Prominent */}
                <div className="mb-10 p-6 bg-red-50 border-l-4 border-red-500 rounded-r-lg">
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                    Carrier Misalignment
                  </h3>
                  <p className="text-lg text-slate-700 mt-4 leading-relaxed">
                    Standard carriers often benefit from higher claims through hidden fees and premium loads, creating a direct conflict with the employer's cost-saving goals.
                  </p>
                </div>
                
                <ul className="space-y-8">
                  <li className="flex items-start group">
                    <span className="text-red-400 mr-4 text-2xl">•</span>
                    <p className="text-lg md:text-xl text-slate-700 font-medium leading-relaxed group-hover:text-red-700 transition-colors">
                      Traditional stop-loss is reactive, lagging, and profit-misaligned.
                    </p>
                  </li>
                  <li className="flex items-start group">
                    <span className="text-red-400 mr-4 text-2xl">•</span>
                    <p className="text-lg md:text-xl text-slate-700 font-medium leading-relaxed group-hover:text-red-700 transition-colors">
                      Employers assume risk but have very little control.
                    </p>
                  </li>
                  <li className="flex items-start group">
                    <span className="text-red-400 mr-4 text-2xl">•</span>
                    <p className="text-lg md:text-xl text-slate-700 font-medium leading-relaxed group-hover:text-red-700 transition-colors">
                      Advisors are forced to defend rising renewals instead of driving outcomes.
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            {/* The Solution Column */}
            <div className="relative">
              <div className="absolute -left-8 top-0 bottom-0 w-1 bg-zenith-blue opacity-10 hidden lg:block"></div>
              
              <div className="bg-zenith-navy text-white p-10 md:p-16 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] relative overflow-hidden border border-slate-800">
                
                <h2 className="text-[12px] font-black text-blue-400 uppercase tracking-[0.3em] mb-12 flex items-center">
                  <span className="w-8 h-px bg-blue-900/50 mr-4"></span>
                  Our Solution:
                </h2>
                <div className="space-y-10 relative z-10">
                  <div className="flex items-center group">
                    <svg className="w-6 h-6 text-blue-400 mr-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                    <h3 className="text-xl md:text-2xl font-bold text-white uppercase tracking-wider group-hover:text-blue-400 transition-colors">Predictive underwriting</h3>
                  </div>
                  
                  <div className="flex items-center group">
                    <svg className="w-6 h-6 text-blue-400 mr-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                    <h3 className="text-xl md:text-2xl font-bold text-white uppercase tracking-wider group-hover:text-blue-400 transition-colors">Real-time claims oversight</h3>
                  </div>
                  
                  <div className="flex items-center group">
                    <svg className="w-6 h-6 text-blue-400 mr-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                    <h3 className="text-xl md:text-2xl font-bold text-white uppercase tracking-wider group-hover:text-blue-400 transition-colors">Captive & health plan integration</h3>
                  </div>
                  
                  <div className="flex items-center group">
                    <svg className="w-6 h-6 text-blue-400 mr-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                    <h3 className="text-xl md:text-2xl font-bold text-white uppercase tracking-wider group-hover:text-blue-400 transition-colors">Transparent Economics</h3>
                  </div>
                </div>

                <div className="mt-16 pt-12 border-t border-slate-800">
                  <p className="text-slate-400 text-sm leading-relaxed font-light italic">
                    By managing claims at the point of care and providing proactive clinical oversight, we help preserve surplus and return control to the employer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY CHOOSE ZENITH? Section - Dark Premium */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-slate-900 to-zenith-navy">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16 md:mb-20">
            <span className="text-[11px] font-black text-blue-400 uppercase tracking-[0.4em] mb-6 block">Our Advantage</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-8">
              Why Choose Zenith?
            </h2>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-4xl mx-auto font-light">
              Zenith is built for advisors and employers who want more than passive underwriting and rising renewals. We combine predictive underwriting, integrated clinical oversight, and transparent economics to deliver better control, clearer performance, and more predictable outcomes.
            </p>
          </div>

          {/* Benefits Grid - 4 Cards */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* Card 1: Industry-Leading Expertise */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-10 hover:bg-white/10 transition-all duration-300 group">
              <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500/30 transition-colors">
                <svg className="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 tracking-tight">
                Industry-Leading Expertise
              </h3>
              <p className="text-slate-400 leading-relaxed">
                Helping businesses take control of insurance and risk management with proven strategy and execution.
              </p>
            </div>

            {/* Card 2: Tailored Solutions */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-10 hover:bg-white/10 transition-all duration-300 group">
              <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500/30 transition-colors">
                <svg className="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 tracking-tight">
                Tailored Solutions
              </h3>
              <p className="text-slate-400 leading-relaxed">
                Customized programs designed around each client's unique structure, goals, and risk profile.
              </p>
            </div>

            {/* Card 3: Transparency + Risk Control */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-10 hover:bg-white/10 transition-all duration-300 group">
              <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500/30 transition-colors">
                <svg className="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 tracking-tight">
                Transparency + Risk Control
              </h3>
              <p className="text-slate-400 leading-relaxed">
                Greater visibility into spend, performance, and outcomes—paired with better long-term risk control.
              </p>
            </div>

            {/* Card 4: Compliance + Long-Term Strategy */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-10 hover:bg-white/10 transition-all duration-300 group">
              <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500/30 transition-colors">
                <svg className="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 tracking-tight">
                Compliance + Long-Term Strategy
              </h3>
              <p className="text-slate-400 leading-relaxed">
                Built for sustainable performance, reduced expenses, and a secure financial future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Positioning Statement & CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 border border-slate-100 p-16 md:p-24 rounded-3xl text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30"></div>
            <span className="text-[11px] font-black text-blue-600 uppercase tracking-[0.5em] mb-10 block">Positioning Statement</span>
            <blockquote className="text-3xl md:text-6xl font-bold text-zenith-navy leading-[1.1] tracking-tight max-w-5xl mx-auto mb-16">
              "We don't just insure risk — <br/>
              <span className="text-blue-600 italic underline decoration-blue-500/20 underline-offset-[16px] decoration-4">we engineer alignment</span>."
            </blockquote>

            <div className="pt-8 flex justify-center">
              <Link 
                to="/services/apollo-health-plan" 
                className="group relative inline-flex items-center justify-center px-12 py-6 font-black text-[11px] uppercase tracking-[0.3em] text-white transition-all duration-300"
              >
                <span className="absolute inset-0 bg-zenith-blue transform skew-x-[-12deg] group-hover:bg-blue-600 group-hover:scale-105 transition-all"></span>
                <span className="relative z-10">Explore Our Platform</span>
                <svg className="relative z-10 ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyZenith;
