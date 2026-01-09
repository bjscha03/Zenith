import React from 'react';
import { Link } from 'react-router-dom';

const CaptiveIntegration: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section - Enhanced with animated elements */}
      <section className="relative text-white py-32 md:py-44 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop')" }}
        ></div>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-zenith-navy via-zenith-navy/95 to-blue-900/90"></div>
        
        {/* Animated geometric shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 -left-32 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ 
          backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-3 text-[11px] font-black text-blue-400 uppercase tracking-[0.4em] mb-8">
              <span className="w-12 h-px bg-gradient-to-r from-blue-400 to-transparent"></span>
              Strategic Alignment
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-10">
              When Stop-Loss and Captives Work Together —{' '}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 italic">Everyone</span>
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"></span>
              </span>
              {' '}Wins.
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed font-light max-w-2xl mb-12">
              We bridge the structural gap between risk transfer and risk retention to ensure your captive performs as engineered.
            </p>
            
            {/* Scroll indicator */}
            <div className="flex items-center gap-4 text-slate-400 text-sm">
              <div className="w-6 h-10 border-2 border-slate-400/50 rounded-full flex justify-center pt-2">
                <div className="w-1.5 h-3 bg-blue-400 rounded-full animate-bounce"></div>
              </div>
              <span className="uppercase tracking-widest text-xs">Scroll to explore</span>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section - Enhanced with visual effects */}
      <section className="py-28 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50/50 to-transparent pointer-events-none"></div>
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-16 text-center">
            <span className="inline-flex items-center gap-3 text-[11px] font-black text-blue-600 uppercase tracking-[0.4em] mb-4">
              <span className="w-8 h-px bg-blue-600"></span>
              The Integrated Difference
              <span className="w-8 h-px bg-blue-600"></span>
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-zenith-navy tracking-tight">
              A Better Approach
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Traditional Model Card */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300 rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
              <div className="relative bg-white rounded-3xl p-10 shadow-lg border border-slate-200 h-full">
                <div className="flex items-center gap-4 mb-8 pb-6 border-b border-slate-100">
                  <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-400 uppercase tracking-wider">Traditional Model</h3>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 group-hover:bg-slate-100 transition-colors">
                    <span className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-slate-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                    </span>
                    <span className="text-lg text-slate-500">Passive underwriting</span>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 group-hover:bg-slate-100 transition-colors">
                    <span className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-slate-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                    </span>
                    <span className="text-lg text-slate-500">Employers absorb volatility</span>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 group-hover:bg-slate-100 transition-colors">
                    <span className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-slate-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                    </span>
                    <span className="text-lg text-slate-500">One-year decisions</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Integrated Model Card */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300 shadow-xl shadow-blue-500/20"></div>
              <div className="relative bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-10 h-full">
                <div className="flex items-center gap-4 mb-8 pb-6 border-b border-blue-500/30">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white uppercase tracking-wider">Integrated Model</h3>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white/10 group-hover:bg-white/15 transition-colors backdrop-blur-sm">
                    <span className="w-6 h-6 rounded-full bg-green-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    </span>
                    <span className="text-lg text-white font-medium">Aligned incentives</span>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white/10 group-hover:bg-white/15 transition-colors backdrop-blur-sm">
                    <span className="w-6 h-6 rounded-full bg-green-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    </span>
                    <span className="text-lg text-white font-medium">Employer retains control & surplus</span>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white/10 group-hover:bg-white/15 transition-colors backdrop-blur-sm">
                    <span className="w-6 h-6 rounded-full bg-green-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    </span>
                    <span className="text-lg text-white font-medium">Multi-year strategy</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Everyone Wins Section - Enhanced with 3D cards */}
      <section className="py-28 md:py-36 bg-gradient-to-b from-slate-900 via-zenith-navy to-slate-900 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl"></div>
        </div>

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{ 
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <span className="inline-flex items-center gap-3 text-[11px] font-black text-blue-400 uppercase tracking-[0.4em] mb-6">
              <span className="w-8 h-px bg-blue-400"></span>
              Aligned Outcomes
              <span className="w-8 h-px bg-blue-400"></span>
            </span>
            <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-8">Everyone Wins</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
              When stop-loss and captives work together, every stakeholder benefits from aligned incentives and disciplined execution.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-10">
            {/* Card 1: Employers */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-10 hover:border-blue-400/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">Employers</h3>
                <p className="text-slate-400 leading-relaxed text-base group-hover:text-slate-300 transition-colors">
                  Retain control of surplus, reduce long-term costs, and benefit from predictable multi-year strategy instead of reactive renewals.
                </p>
                <div className="mt-8 pt-6 border-t border-white/10 flex items-center text-blue-400 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Learn more</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Card 2: Advisors - Featured */}
            <div className="group relative md:-mt-4">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-3xl blur-xl opacity-50 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative bg-gradient-to-br from-blue-600 to-blue-800 border border-blue-400/30 rounded-3xl p-10 hover:border-blue-300/50 transition-all duration-500 hover:-translate-y-2 shadow-xl shadow-blue-500/20 hover:shadow-2xl hover:shadow-blue-500/30">
                <div className="absolute top-4 right-4">
                  <span className="bg-blue-400/20 text-blue-300 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">Popular</span>
                </div>
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Advisors</h3>
                <p className="text-blue-100 leading-relaxed text-base">
                  Deliver differentiated value with captive expertise, deepen client relationships, and build sustainable book growth.
                </p>
                <div className="mt-8 pt-6 border-t border-white/20 flex items-center text-white text-sm font-semibold">
                  <span>Partner with us</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Card 3: Captive Programs */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-10 hover:border-cyan-400/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/10">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-cyan-500/30 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">Captive Programs</h3>
                <p className="text-slate-400 leading-relaxed text-base group-hover:text-slate-300 transition-colors">
                  Achieve optimal loss ratio performance, preserve capital, and maintain regulatory compliance with integrated oversight.
                </p>
                <div className="mt-8 pt-6 border-t border-white/10 flex items-center text-cyan-400 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Explore solutions</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium & Capital Flow Section - Enhanced with visual flow */}
      <section className="py-28 md:py-36 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
        <div className="absolute -top-40 right-0 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-100/30 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <span className="inline-flex items-center gap-3 text-[11px] font-black text-blue-600 uppercase tracking-[0.4em] mb-6">
              <span className="w-8 h-px bg-blue-600"></span>
              Capital Architecture
              <span className="w-8 h-px bg-blue-600"></span>
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-zenith-navy tracking-tight mb-6">Premium & Capital Flow</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
              A simplified view of how premium, claims, and risk capital flow through the captive structure.
            </p>
          </div>

          {/* Flow Diagram */}
          <div className="max-w-6xl mx-auto">
            {/* Main Flow Cards */}
            <div className="grid md:grid-cols-3 gap-6 md:gap-0 mb-20 relative">
              {/* Connection lines - hidden on mobile */}
              <div className="hidden md:block absolute top-1/2 left-[33%] right-[33%] h-1 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400 -translate-y-1/2 z-0">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-blue-500 rounded-full"></div>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-blue-500 rounded-full"></div>
              </div>

              {/* Employer */}
              <div className="relative group z-10 px-4">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-3xl p-10 text-center shadow-2xl border border-blue-500/30 h-full transform group-hover:-translate-y-2 group-hover:shadow-blue-500/25 transition-all duration-500">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-blue-500 text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-lg">Step 1</span>
                  </div>
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Employer</h3>
                  <p className="text-blue-200 text-base leading-relaxed mb-4">Self-Funded Plan</p>
                  <div className="pt-4 border-t border-blue-500/30">
                    <span className="inline-flex items-center text-blue-300 text-sm font-medium">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Premium Contribution
                    </span>
                  </div>
                </div>
              </div>

              {/* Captive - Center Featured */}
              <div className="relative group z-20 px-4 md:-mt-6">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-900 rounded-3xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
                <div className="relative bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 rounded-3xl p-10 text-center shadow-2xl border-2 border-slate-600 h-full transform group-hover:-translate-y-2 group-hover:shadow-slate-500/25 transition-all duration-500">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-slate-600 to-slate-700 text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-lg border border-slate-500">Core</span>
                  </div>
                  <div className="w-24 h-24 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/20 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Captive Insurer</h3>
                  <p className="text-blue-400 text-lg font-semibold mb-4">Primary Stop Loss</p>
                  <div className="pt-4 border-t border-slate-600">
                    <span className="inline-flex items-center text-slate-400 text-sm font-medium">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                      Claims Management
                    </span>
                  </div>
                </div>
              </div>

              {/* Reinsurer */}
              <div className="relative group z-10 px-4">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                <div className="relative bg-gradient-to-br from-cyan-600 via-blue-600 to-blue-700 rounded-3xl p-10 text-center shadow-2xl border border-cyan-500/30 h-full transform group-hover:-translate-y-2 group-hover:shadow-cyan-500/25 transition-all duration-500">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-cyan-500 text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-lg">Step 3</span>
                  </div>
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Reinsurer</h3>
                  <p className="text-cyan-200 text-base leading-relaxed mb-4">Excess Stop Loss</p>
                  <div className="pt-4 border-t border-cyan-500/30">
                    <span className="inline-flex items-center text-cyan-300 text-sm font-medium">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      Risk Transfer
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Zenith Role Card */}
            <div className="max-w-2xl mx-auto mb-20">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                <div className="relative bg-white rounded-3xl p-10 text-center shadow-xl border border-slate-200 group-hover:border-blue-200 transition-all duration-300">
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                    <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-bold uppercase tracking-widest px-6 py-2 rounded-full shadow-lg">
                      Zenith's Role
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl flex items-center justify-center">
                      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-zenith-navy mb-3">Underwriting Administration</h3>
                  <p className="text-slate-600 text-lg leading-relaxed max-w-lg mx-auto">
                    We orchestrate the entire flow, ensuring seamless integration between all parties
                  </p>
                </div>
              </div>
            </div>

            {/* Flow Summary - Enhanced */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="group relative">
                <div className="absolute inset-0 bg-blue-500/5 rounded-2xl group-hover:bg-blue-500/10 transition-colors duration-300"></div>
                <div className="relative flex items-start gap-5 p-8 rounded-2xl border border-slate-200 group-hover:border-blue-200 transition-all duration-300">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-lg">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-zenith-navy text-lg mb-2">Premium Funding</h4>
                    <p className="text-slate-600 leading-relaxed">
                      Employer funds premium into the plan and captive structure
                    </p>
                  </div>
                </div>
              </div>
              <div className="group relative">
                <div className="absolute inset-0 bg-slate-500/5 rounded-2xl group-hover:bg-slate-500/10 transition-colors duration-300"></div>
                <div className="relative flex items-start gap-5 p-8 rounded-2xl border border-slate-200 group-hover:border-slate-300 transition-all duration-300">
                  <div className="w-14 h-14 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-slate-500/20 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-lg">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-zenith-navy text-lg mb-2">Primary Coverage</h4>
                    <p className="text-slate-600 leading-relaxed">
                      Captive provides primary stop loss and manages claim flow
                    </p>
                  </div>
                </div>
              </div>
              <div className="group relative">
                <div className="absolute inset-0 bg-cyan-500/5 rounded-2xl group-hover:bg-cyan-500/10 transition-colors duration-300"></div>
                <div className="relative flex items-start gap-5 p-8 rounded-2xl border border-slate-200 group-hover:border-cyan-200 transition-all duration-300">
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-cyan-500/20 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-lg">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-zenith-navy text-lg mb-2">Risk Transfer</h4>
                    <p className="text-slate-600 leading-relaxed">
                      Reinsurers support excess stop loss risk transfer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Our Dual Role Section - Enhanced with depth and animations */}
      <section className="py-28 md:py-36 bg-gradient-to-br from-zenith-navy via-slate-900 to-blue-950 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ 
          backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div className="space-y-12">
              <div className="group">
                <span className="inline-flex items-center gap-3 text-[11px] font-black text-blue-400 uppercase tracking-[0.4em] mb-6">
                  <span className="w-8 h-px bg-blue-400"></span>
                  The Zenith Advantage
                </span>
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">Our Dual Role</h3>
                <p className="text-xl text-slate-300 leading-relaxed">
                  Zenith operates at the intersection of underwriting and administration. We serve as both the{' '}
                  <span className="relative inline-block">
                    <span className="font-bold text-white">MGU</span>
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-400/50"></span>
                  </span>
                  {' '}(Underwriting Manager) and the{' '}
                  <span className="relative inline-block">
                    <span className="font-bold text-white">Program Manager</span>
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-400/50"></span>
                  </span>
                  , ensuring that the stop-loss contract perfectly aligns with the captive's bylaws and risk appetite.
                </p>
              </div>

              <div className="group">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">Strategic Partnership</h3>
                <p className="text-xl text-slate-300 leading-relaxed">
                  Advisors bring us into{' '}
                  <span className="inline-flex items-center bg-blue-500/20 text-blue-300 font-bold uppercase tracking-wider text-sm px-3 py-1 rounded-full">
                    early-stage strategy
                  </span>
                  {' '}because captive success isn't determined at renewal—it's determined during the program design phase. We provide the actuarial grounding and clinical oversight needed to support a multi-year transition to self-funding.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">100%</div>
                  <div className="text-sm text-slate-400 uppercase tracking-wider">Alignment</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">Multi</div>
                  <div className="text-sm text-slate-400 uppercase tracking-wider">Year Focus</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">Deep</div>
                  <div className="text-sm text-slate-400 uppercase tracking-wider">Expertise</div>
                </div>
              </div>
            </div>

            {/* Role Cards - Enhanced */}
            <div className="relative">
              {/* Decorative element */}
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-[2rem] blur-2xl"></div>
              
              <div className="relative p-8 md:p-10 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl">
                <div className="flex flex-col space-y-6 relative z-10">
                  {/* Role 1 */}
                  <div className="group p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                    <div className="flex items-start gap-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <div>
                        <span className="block text-[11px] font-black text-blue-600 uppercase tracking-widest mb-2">Role 1</span>
                        <p className="text-xl font-bold text-zenith-navy mb-2 group-hover:text-blue-600 transition-colors">Managing General Underwriter</p>
                        <p className="text-base text-slate-600">Underwriting authority and risk selection</p>
                      </div>
                    </div>
                  </div>

                  {/* Connector */}
                  <div className="flex justify-center">
                    <div className="w-px h-6 bg-gradient-to-b from-white/30 to-white/10"></div>
                  </div>

                  {/* Role 2 */}
                  <div className="group p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                    <div className="flex items-start gap-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-cyan-500/30 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <div>
                        <span className="block text-[11px] font-black text-cyan-600 uppercase tracking-widest mb-2">Role 2</span>
                        <p className="text-xl font-bold text-zenith-navy mb-2 group-hover:text-cyan-600 transition-colors">Program Manager</p>
                        <p className="text-base text-slate-600">Captive alignment and administration</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced with premium design */}
      <section className="py-28 md:py-36 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-blue-100/50 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-cyan-100/50 rounded-full blur-3xl"></div>
        </div>
        
        {/* Subtle pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{ 
          backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}></div>

        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          {/* Icon */}
          <div className="mb-10">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl shadow-xl shadow-blue-500/30">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-zenith-navy mb-8 tracking-tight leading-tight">
            Ready to integrate your{' '}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">captive strategy</span>
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full"></span>
            </span>
            ?
          </h2>
          
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-12 leading-relaxed">
            Let's discuss how Zenith can help you build a more resilient, cost-effective captive program.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link 
              to="/contact" 
              className="group relative inline-flex items-center justify-center px-10 py-5 font-bold text-sm uppercase tracking-widest text-white transition-all duration-500 hover:scale-105"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl shadow-xl shadow-blue-500/30 group-hover:shadow-blue-500/50 transition-all"></span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></span>
              <span className="relative z-10 flex items-center">
                Discuss Captive Options
                <svg className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
            
            <Link 
              to="/services" 
              className="group inline-flex items-center gap-2 px-8 py-5 font-semibold text-sm uppercase tracking-widest text-slate-600 hover:text-blue-600 transition-colors"
            >
              <span>View All Services</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 pt-12 border-t border-slate-200">
            <p className="text-sm text-slate-400 uppercase tracking-widest mb-6">Trusted by leading organizations</p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-40">
              <div className="text-2xl font-bold text-slate-400">Enterprise</div>
              <div className="text-2xl font-bold text-slate-400">Healthcare</div>
              <div className="text-2xl font-bold text-slate-400">Insurance</div>
              <div className="text-2xl font-bold text-slate-400">Benefits</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaptiveIntegration;
