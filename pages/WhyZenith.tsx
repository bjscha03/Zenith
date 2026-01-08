
import React from 'react';
import { Link } from 'react-router-dom';

const WhyZenith: React.FC = () => {
  return (
    <div className="w-full">
      {/* 1. Impactful Headline Section */}
      <section className="bg-slate-50 py-24 md:py-36 border-b border-slate-200 overflow-hidden relative">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <span className="text-[11px] font-black text-blue-600 uppercase tracking-[0.4em] mb-6 block">The Differentiator</span>
            <h1 className="text-4xl md:text-7xl font-bold text-zenith-navy leading-[1.1] tracking-tight mb-10">
              The Stop-Loss Model is outdated. <br/>
              We have <span className="text-zenith-blue italic decoration-blue-500/30 underline underline-offset-[12px] decoration-4">Designed</span> a Better One.
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-light italic max-w-3xl">
              Traditional models are fundamentally misaligned. We’ve rebuilt the process to prioritize clinical oversight, financial transparency, and predictable outcomes.
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
                <ul className="space-y-8">
                  <li className="flex items-start group">
                    <span className="text-slate-300 mr-4 text-2xl">•</span>
                    <p className="text-lg md:text-xl text-slate-700 font-medium leading-relaxed group-hover:text-red-700 transition-colors">
                      Traditional stop-loss is reactive, lagging, and profit-misaligned.
                    </p>
                  </li>
                  <li className="flex items-start group">
                    <span className="text-slate-300 mr-4 text-2xl">•</span>
                    <p className="text-lg md:text-xl text-slate-700 font-medium leading-relaxed group-hover:text-red-700 transition-colors">
                      Employers assume risk but have very little control.
                    </p>
                  </li>
                  <li className="flex items-start group">
                    <span className="text-slate-300 mr-4 text-2xl">•</span>
                    <p className="text-lg md:text-xl text-slate-700 font-medium leading-relaxed group-hover:text-red-700 transition-colors">
                      Advisors are forced to defend rising renewals instead of driving outcomes.
                    </p>
                  </li>
                </ul>
              </div>

              {/* Status Quo Detail */}
              <div className="pt-12 border-t border-slate-100 opacity-60">
                 <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Carrier Misalignment</h3>
                 <p className="text-sm text-slate-500">Standard carriers often benefit from higher claims through hidden fees and premium loads, creating a direct conflict with the employer's cost-saving goals.</p>
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
                    <h3 className="text-xl md:text-2xl font-bold text-white uppercase tracking-wider group-hover:text-blue-400 transition-colors">Transparent financial performance</h3>
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

          {/* 3. Positioning Statement & CTA */}
          <div className="bg-slate-50 border border-slate-100 p-16 md:p-24 rounded-3xl text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30"></div>
            <span className="text-[11px] font-black text-blue-600 uppercase tracking-[0.5em] mb-10 block">Positioning Statement</span>
            <blockquote className="text-3xl md:text-6xl font-bold text-zenith-navy leading-[1.1] tracking-tight max-w-5xl mx-auto mb-16">
              “We don’t just insure risk — <br/>
              <span className="text-blue-600 italic underline decoration-blue-500/20 underline-offset-[16px] decoration-4">we engineer alignment</span>.”
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
