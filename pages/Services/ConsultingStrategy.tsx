
import React from 'react';
import { Link } from 'react-router-dom';

const ConsultingStrategy: React.FC = () => {
  const serviceAreas = [
    {
      title: 'Feasibility Studies',
      desc: 'Deep actuarial and financial analysis to determine if a captive or self-funded structure is the optimal fit for your organization\'s risk profile.'
    },
    {
      title: 'Captive Program Launches',
      desc: 'Comprehensive management of the formation lifecycle, including domicile selection, structural design, and regulatory compliance.'
    },
    {
      title: 'Ongoing Captive Management',
      desc: 'Continuous strategic and administrative oversight to ensure your program remains solvent, efficient, and aligned with corporate goals.'
    },
    {
      title: 'Renewal Strategy & Cost-Containment Blueprints',
      desc: 'Customized risk roadmaps that move beyond reactive year-over-year pricing to build long-term plan stability and surplus retention.'
    },
    {
      title: 'TPA / MGU / Partner Coordination',
      desc: 'Expert orchestration of all stakeholders within the self-funded ecosystem to eliminate fragmentation and drive technical alignment.'
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-slate-50 py-24 md:py-32 border-b border-slate-200 relative overflow-hidden">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <span className="text-[11px] font-black text-blue-600 uppercase tracking-[0.4em] mb-6 block">Execution Excellence</span>
            <h1 className="text-4xl md:text-6xl font-bold text-zenith-navy leading-tight tracking-tight mb-8">
              Captive Feasibility, Risk Strategy & Program Management from Concept to Execution
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed font-light max-w-2xl">
              We provide the technical scaffolding required to build, launch, and manage high-performance risk programs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {serviceAreas.map((service, idx) => (
              <div key={idx} className="group p-8 bg-white border border-slate-100 rounded-xl hover:shadow-2xl hover:border-blue-200 transition-all duration-300">
                <div className="w-10 h-10 bg-slate-50 border border-slate-100 rounded flex items-center justify-center mb-6 group-hover:bg-zenith-blue group-hover:text-white transition-colors">
                  <span className="text-xs font-black uppercase tracking-widest">{String(idx + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="text-xl font-bold text-zenith-navy mb-4 uppercase tracking-wider leading-snug">{service.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-light">
                  {service.desc}
                </p>
              </div>
            ))}
            
            {/* The Blueprint Card */}
            <div className="p-8 bg-zenith-navy rounded-xl flex flex-col justify-center relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 opacity-10 translate-x-10 -translate-y-10 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform">
                <svg viewBox="0 0 100 100" className="fill-white"><path d="M50 0 L100 50 L50 100 L0 50 Z" /></svg>
              </div>
              <h4 className="text-white text-lg font-bold mb-2 uppercase tracking-widest">The Strategy Blueprint</h4>
              <p className="text-slate-400 text-xs leading-relaxed uppercase tracking-[0.2em] font-bold">
                From technical audit to long-term stability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategy Narrative Section */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-zenith-navy mb-8">Move beyond the <span className="text-blue-600">annual renewal.</span></h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8 font-light">
                Traditional risk management is focused on the next 12 months. Our consulting practice focuses on the next 60 months. We help plan sponsors and advisors transition from transactional procurement to strategic risk ownership.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm font-bold text-zenith-navy uppercase tracking-widest">Multi-year actuarial modeling</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm font-bold text-zenith-navy uppercase tracking-widest">Integrated clinical stewardship</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm font-bold text-zenith-navy uppercase tracking-widest">Vendor alignment audits</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white p-12 rounded-2xl shadow-xl border border-slate-200">
                <blockquote className="text-2xl font-light text-slate-800 leading-relaxed italic">
                  "Our Consulting & Strategy practice is the engine room of Zenith. It's where we translate complex risk data into actionable, multi-year results."
                </blockquote>
                <div className="mt-8 pt-8 border-t border-slate-100">
                   <p className="text-xs font-black uppercase tracking-[0.3em] text-blue-600">Zenith Strategic Advisory</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section with Dual Buttons */}
      <section className="py-24 bg-zenith-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900 opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 tracking-tight">Engineer your risk strategy.</h2>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <Link 
              to="/contact" 
              className="group relative inline-flex items-center justify-center px-10 py-5 font-black text-[11px] uppercase tracking-[0.3em] text-white transition-all duration-300 w-full sm:w-auto"
            >
              <span className="absolute inset-0 bg-zenith-blue transform skew-x-[-12deg] group-hover:bg-blue-600 group-hover:scale-105 transition-all"></span>
              <span className="relative z-10">Schedule Strategy Call</span>
            </Link>
            
            <Link 
              to="/resources" 
              className="group relative inline-flex items-center justify-center px-10 py-5 font-black text-[11px] uppercase tracking-[0.3em] text-white transition-all duration-300 w-full sm:w-auto"
            >
              <span className="absolute inset-0 border border-white/30 transform skew-x-[-12deg] group-hover:border-white group-hover:bg-white/5 transition-all"></span>
              <span className="relative z-10 flex items-center">
                Download Zenith Deck
                <svg className="ml-3 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M7 10l5 5 5-5M12 15V3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConsultingStrategy;
