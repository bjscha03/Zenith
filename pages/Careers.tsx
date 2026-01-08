import React from 'react';
import { Link } from 'react-router-dom';

const Careers: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-slate-50 py-24 border-b border-slate-200 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/4 h-full opacity-[0.03] pointer-events-none">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-zenith-blue">
            <path d="M50 0 L54 35 L90 25 L65 46 L100 50 L65 54 L90 75 L54 65 L50 100 L46 65 L10 75 L35 54 L0 50 L35 46 L10 25 L46 35 Z" />
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-[11px] font-black text-blue-600 uppercase tracking-[0.4em] mb-8 block">Join Our Team</span>
          <h1 className="text-4xl md:text-6xl font-bold text-zenith-navy leading-tight tracking-tight mb-8 max-w-5xl mx-auto">
            Build the Future of Healthcare Risk Management
          </h1>
          <p className="text-xl text-slate-500 font-light max-w-3xl mx-auto">
            At Zenith, we're assembling a team of innovative professionals committed to transforming the self-funded healthcare landscape.
          </p>
        </div>
      </section>

      {/* Why Work at Zenith */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[12px] font-black text-blue-600 uppercase tracking-[0.3em] mb-6">Why Zenith</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-zenith-navy mb-6">A Culture of Excellence</h3>
            <p className="text-slate-500 max-w-3xl mx-auto leading-relaxed">
              We believe that great outcomes start with great people. Our team combines deep industry expertise with a commitment to innovation and integrity.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 border border-slate-100 rounded-xl p-8 text-center">
              <h4 className="font-bold text-zenith-navy text-lg uppercase tracking-wider mb-4">Innovation First</h4>
              <p className="text-slate-500 text-sm leading-relaxed">We challenge conventional thinking and embrace new approaches to solve complex problems in healthcare risk.</p>
            </div>
            <div className="bg-slate-50 border border-slate-100 rounded-xl p-8 text-center">
              <h4 className="font-bold text-zenith-navy text-lg uppercase tracking-wider mb-4">Collaborative Spirit</h4>
              <p className="text-slate-500 text-sm leading-relaxed">Our cross-functional teams work together seamlessly, leveraging diverse expertise to deliver exceptional results.</p>
            </div>
            <div className="bg-slate-50 border border-slate-100 rounded-xl p-8 text-center">
              <h4 className="font-bold text-zenith-navy text-lg uppercase tracking-wider mb-4">Growth Mindset</h4>
              <p className="text-slate-500 text-sm leading-relaxed">We invest in our people through continuous learning opportunities and clear paths for career advancement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[12px] font-black text-blue-600 uppercase tracking-[0.3em] mb-6">Opportunities</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-zenith-navy mb-6">Current Openings</h3>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white border border-slate-200 rounded-xl p-12 text-center shadow-sm">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-zenith-navy mb-4">No Current Openings</h4>
              <p className="text-slate-500 leading-relaxed mb-6">
                We don't have any open positions at this time, but we're always interested in connecting with talented professionals who share our vision.
              </p>
              <p className="text-slate-400 text-sm">
                Submit your resume below to be considered for future opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[12px] font-black text-blue-600 uppercase tracking-[0.3em] mb-6">How to Apply</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-zenith-navy mb-6">Our Application Process</h3>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-zenith-blue text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">1</div>
              <h4 className="font-bold text-zenith-navy uppercase tracking-wider text-sm mb-2">Submit</h4>
              <p className="text-slate-500 text-sm">Send your resume and cover letter to our careers inbox.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-zenith-blue text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">2</div>
              <h4 className="font-bold text-zenith-navy uppercase tracking-wider text-sm mb-2">Review</h4>
              <p className="text-slate-500 text-sm">Our team carefully reviews each application.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-zenith-blue text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">3</div>
              <h4 className="font-bold text-zenith-navy uppercase tracking-wider text-sm mb-2">Interview</h4>
              <p className="text-slate-500 text-sm">Selected candidates meet with our leadership team.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-zenith-blue text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">4</div>
              <h4 className="font-bold text-zenith-navy uppercase tracking-wider text-sm mb-2">Welcome</h4>
              <p className="text-slate-500 text-sm">Join the Zenith team and start making an impact.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-zenith-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900 opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">Interested in Joining Us?</h2>
          <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
            Send your resume and a brief introduction to <span className="text-white font-semibold">careers@zenithrisk.com</span>
          </p>
          
          <div className="flex justify-center">
            <Link 
              to="/contact" 
              className="group relative inline-flex items-center justify-center px-12 py-6 font-black text-[11px] uppercase tracking-[0.3em] text-white transition-all duration-300"
            >
              <span className="absolute inset-0 bg-zenith-blue transform skew-x-[-12deg] group-hover:bg-blue-600 group-hover:scale-105 transition-all"></span>
              <span className="relative z-10">Contact Us</span>
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

export default Careers;
