
import React from 'react';
import { Link } from 'react-router-dom';

const ApolloHealthPlan: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section - Blue with Image Underlay */}
      <section className="relative text-white py-24 md:py-32 overflow-hidden">
        {/* Background Image - Healthcare/technology theme */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop')" }}
        ></div>
        {/* Blue Overlay */}
        <div className="absolute inset-0 bg-zenith-navy/90"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <span className="text-[11px] font-black text-blue-400 uppercase tracking-[0.4em] mb-6 block">Proprietary Platform</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight mb-8">
              A Transparent, Level-Funded Health Platform Built for Employer Control & Risk Alignment
            </h1>
            <div className="w-20 h-1.5 bg-blue-400 mb-8"></div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-[12px] font-black text-slate-400 uppercase tracking-[0.3em] mb-10 flex items-center">
                <span className="w-8 h-px bg-slate-300 mr-4"></span>
                The Problem With Health Plans Today
              </h2>
              <ul className="space-y-10">
                <li className="flex items-start">
                  <span className="text-red-500 mr-5 text-xl">✕</span>
                  <p className="text-lg md:text-xl text-slate-700 font-medium">High-cost surprises that derail budgets mid-year.</p>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-5 text-xl">✕</span>
                  <p className="text-lg md:text-xl text-slate-700 font-medium">No alignment between care decisions and financial outcomes.</p>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-5 text-xl">✕</span>
                  <p className="text-lg md:text-xl text-slate-700 font-medium">Disconnected vendors and fragmented cost containment efforts.</p>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-5 text-xl">✕</span>
                  <p className="text-lg md:text-xl text-slate-700 font-medium">High deductible plans shifting financial strain directly to employees.</p>
                </li>
              </ul>
            </div>

            <div className="bg-slate-50 p-12 rounded-3xl border border-slate-100 relative">
              <div className="absolute top-10 right-10 opacity-10">
                <svg className="w-20 h-20 text-zenith-blue" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21L14.017 18C14.017 16.8954 13.1216 16 12.017 16L9.01703 16C7.91246 16 7.01703 16.8954 7.01703 18L7.01703 21L4.01703 21L4.01703 18C4.01703 15.2386 6.2556 13 9.01703 13L12.017 13C14.7785 13 17.017 15.2386 17.017 18L17.017 21L14.017 21ZM10.517 11C8.30789 11 6.51703 9.20914 6.51703 7C6.51703 4.79086 8.30789 3 10.517 3C12.7262 3 14.517 4.79086 14.517 7C14.517 9.20914 12.7262 11 10.517 11Z" />
                </svg>
              </div>
              <h3 className="text-[12px] font-black text-blue-600 uppercase tracking-[0.3em] mb-8">The Apollo Approach</h3>
              <p className="text-2xl md:text-3xl font-bold text-zenith-navy leading-tight">
                A health plan designed to work with companies <span className="text-blue-600 italic">NOT AGAINST</span> them!
              </p>
              <p className="mt-8 text-lg text-slate-600 leading-relaxed font-light">
                With an integrated stop-loss product that brings clinical foresight and risk mitigation strategies to the forefront while enhancing the members experience when they need it the most.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Components Section */}
      <section className="py-24 bg-zenith-navy text-white overflow-hidden relative">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-[11px] font-black text-blue-400 uppercase tracking-[0.5em] mb-6">Structural Integrity</h2>
            <h3 className="text-3xl md:text-5xl font-bold">Apollo Health Plan Core Components</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Level-Funded Structure", desc: "Real-time data access for ultimate financial transparency." },
              { title: "Embedded Cost-Containment", desc: "Built directly into the care pathway to mitigate waste." },
              { title: "100% Surplus Return", desc: "Clients keep 100% of their unused claim dollars + captive surplus sharing." },
              { title: "Turnkey Implementation", desc: "High value partners + pre-built plan designs (plug and play)." },
              { title: "Optimized Scale", desc: "Expertly designed for 10 – 250 employee life groups." }
            ].map((item, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 p-10 rounded-2xl hover:bg-white/10 transition-all group">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center mb-6 text-white font-bold text-xs group-hover:scale-110 transition-transform">✓</div>
                <h4 className="text-xl font-bold mb-4 uppercase tracking-wider">{item.title}</h4>
                <p className="text-slate-400 leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
            
            {/* Market Segment Box */}
            <div className="bg-blue-600 p-10 rounded-2xl flex flex-col justify-center items-center text-center">
              <h4 className="text-2xl font-bold mb-4">Market Segment</h4>
              <p className="text-blue-100 text-lg">Optimized for groups of 10-250 lives seeking higher performance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Positioning Statement */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-5xl mx-auto mb-20">
            <span className="text-[11px] font-black text-slate-400 uppercase tracking-[0.4em] mb-12 block">Strategic Positioning</span>
            <blockquote className="text-3xl md:text-5xl font-bold text-zenith-navy leading-tight tracking-tight italic">
              “Apollo isn’t a health plan. It’s a <span className="text-blue-600 underline underline-offset-8 decoration-blue-100">platform</span>, built to control claims at the moment they’re created, <span className="text-slate-400">not when they’re already paid.</span>”
            </blockquote>
          </div>

          {/* Flow Visual Section */}
          <div className="relative pt-12">
            <div className="hidden lg:block absolute top-[50%] left-0 right-0 h-px bg-slate-200 -z-10"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-4 relative z-10">
              {[
                { label: 'Employer', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
                { label: 'Apollo Health Plan', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
                { label: 'Clinical Review', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4' },
                { label: 'Underwriting Alignment', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04M12 21.48V22' },
                { label: 'Surplus Capture', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' }
              ].map((step, idx) => (
                <div key={idx} className="flex flex-col items-center group">
                  <div className="w-16 h-16 bg-white border-2 border-slate-100 rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:border-blue-500 group-hover:scale-110 transition-all duration-300">
                    <svg className="w-6 h-6 text-zenith-blue group-hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={step.icon} />
                    </svg>
                  </div>
                  <div className="h-10 flex items-center justify-center">
                    <span className="text-[10px] md:text-[11px] font-black uppercase tracking-widest text-slate-500 group-hover:text-zenith-navy transition-colors">
                      {step.label}
                    </span>
                  </div>
                  {/* Arrow for mobile */}
                  {idx < 4 && (
                    <div className="lg:hidden my-4">
                      <svg className="w-4 h-4 text-slate-300 rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-200 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-zenith-navy mb-12">See how Apollo re-engineers the <br/>health plan experience.</h2>
          
          <div className="flex justify-center">
            <Link 
              to="/contact" 
              className="group relative inline-flex items-center justify-center px-12 py-6 font-black text-[11px] uppercase tracking-[0.3em] text-white transition-all duration-300"
            >
              <span className="absolute inset-0 bg-zenith-blue transform skew-x-[-12deg] group-hover:bg-blue-600 group-hover:scale-105 transition-all"></span>
              <span className="relative z-10">Request the Apollo Overview Deck</span>
              <svg className="relative z-10 ml-4 w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ApolloHealthPlan;
