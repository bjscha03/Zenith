import React from 'react';
import CompassMark from '../components/brand/CompassMark';
import ClosingCta from '../components/ClosingCta';
import { ZENITH_PEAK_IMAGE } from '../lib/brandAssets';

const Careers: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section - Blue with Image Underlay */}
      <section className="premium-hero relative text-white py-24 md:py-32 overflow-hidden">
        {/* Background Image - Team/collaboration theme */}
        <div 
          className="premium-hero-image absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop')" }}
        ></div>
        {/* Blue Overlay */}
        <img src={ZENITH_PEAK_IMAGE} alt="" aria-hidden="true" className="absolute right-0 inset-y-0 w-[58%] h-full object-cover opacity-[0.18] mix-blend-screen" />
        <div className="absolute inset-0 bg-gradient-to-r from-zenith-navy/[0.96] via-zenith-navy/[0.86] to-zenith-navy/[0.48]"></div>
        <CompassMark className="absolute -right-10 -top-12 w-80 h-80 opacity-[0.07]" imageClassName="brightness-0 invert" />
        
        <div className="premium-hero-copy max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-[11px] font-black text-blue-400 uppercase tracking-[0.4em] mb-8 block">Join Our Team</span>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight mb-8 max-w-5xl mx-auto">
            Build the Future of Healthcare Risk Management
          </h1>
          <p className="text-xl text-slate-300 font-light max-w-3xl mx-auto">
            At Zenith, we're assembling a team of innovative professionals committed to transforming the self-funded healthcare landscape.
          </p>
        </div>
      </section>

      {/* Why Work at Zenith */}
      <section className="premium-light-section py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[12px] font-black text-blue-600 uppercase tracking-[0.3em] mb-6">Why Zenith</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-zenith-navy mb-6">A Culture of Excellence</h3>
            <p className="text-slate-500 max-w-3xl mx-auto leading-relaxed">
              We believe that great outcomes start with great people. Our team combines deep industry expertise with a commitment to innovation and integrity.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="premium-card rounded-2xl p-8 text-center">
              <h4 className="font-bold text-zenith-navy text-lg uppercase tracking-wider mb-4">Innovation First</h4>
              <p className="text-slate-500 text-sm leading-relaxed">We challenge conventional thinking and embrace new approaches to solve complex problems in healthcare risk.</p>
            </div>
            <div className="premium-card rounded-2xl p-8 text-center">
              <h4 className="font-bold text-zenith-navy text-lg uppercase tracking-wider mb-4">Collaborative Spirit</h4>
              <p className="text-slate-500 text-sm leading-relaxed">Our cross-functional teams work together seamlessly, leveraging diverse expertise to deliver exceptional results.</p>
            </div>
            <div className="premium-card rounded-2xl p-8 text-center">
              <h4 className="font-bold text-zenith-navy text-lg uppercase tracking-wider mb-4">Growth Mindset</h4>
              <p className="text-slate-500 text-sm leading-relaxed">We invest in our people through continuous learning opportunities and clear paths for career advancement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="premium-light-section py-24 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[12px] font-black text-blue-600 uppercase tracking-[0.3em] mb-6">Opportunities</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-zenith-navy mb-6">Current Openings</h3>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="premium-card rounded-[2rem] p-12 text-center shadow-sm">
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
      <section className="premium-light-section py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[12px] font-black text-blue-600 uppercase tracking-[0.3em] mb-6">How to Apply</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-zenith-navy mb-6">Our Application Process</h3>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="premium-card rounded-2xl p-6 text-center">
              <div className="w-12 h-12 bg-zenith-blue text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">1</div>
              <h4 className="font-bold text-zenith-navy uppercase tracking-wider text-sm mb-2">Submit</h4>
              <p className="text-slate-500 text-sm">Send your resume and cover letter to our careers inbox.</p>
            </div>
            <div className="premium-card rounded-2xl p-6 text-center">
              <div className="w-12 h-12 bg-zenith-blue text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">2</div>
              <h4 className="font-bold text-zenith-navy uppercase tracking-wider text-sm mb-2">Review</h4>
              <p className="text-slate-500 text-sm">Our team carefully reviews each application.</p>
            </div>
            <div className="premium-card rounded-2xl p-6 text-center">
              <div className="w-12 h-12 bg-zenith-blue text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">3</div>
              <h4 className="font-bold text-zenith-navy uppercase tracking-wider text-sm mb-2">Interview</h4>
              <p className="text-slate-500 text-sm">Selected candidates meet with our leadership team.</p>
            </div>
            <div className="premium-card rounded-2xl p-6 text-center">
              <div className="w-12 h-12 bg-zenith-blue text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">4</div>
              <h4 className="font-bold text-zenith-navy uppercase tracking-wider text-sm mb-2">Welcome</h4>
              <p className="text-slate-500 text-sm">Join the Zenith team and start making an impact.</p>
            </div>
          </div>
        </div>
      </section>

      <ClosingCta
        eyebrow="Careers at Zenith"
        title="Interested in joining us?"
        description={<>Send your resume and a brief introduction to <strong className="text-zenith-navy">careers@zenithrisk.com</strong>.</>}
        primary={{ label: 'Contact us', to: '/contact' }}
      />
    </div>
  );
};

export default Careers;
