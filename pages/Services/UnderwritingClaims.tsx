
import React from 'react';
import { Link } from 'react-router-dom';

const UnderwritingClaims: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-slate-50 py-24 md:py-32 border-b border-slate-200 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/4 h-full opacity-[0.03] pointer-events-none">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-zenith-blue">
            <path d="M50 0 L54 35 L90 25 L65 46 L100 50 L65 54 L90 75 L54 65 L50 100 L46 65 L10 75 L35 54 L0 50 L35 46 L10 25 L46 35 Z" />
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <span className="text-[11px] font-black text-blue-600 uppercase tracking-[0.4em] mb-6 block">Precision Engineering</span>
            <h1 className="text-4xl md:text-6xl font-bold text-zenith-navy leading-tight tracking-tight mb-8">
              Underwriting That Sees the Risk <br/>
              <span className="text-zenith-blue italic decoration-blue-500/30 underline underline-offset-8 decoration-4">Before</span> It Hits the Claims File.
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed font-light max-w-2xl">
              We bridge the gap between reactive insurance and proactive risk management through disciplined methodology and clinical stewardship.
            </p>
          </div>
        </div>
      </section>

      {/* 1. Approach & Methodology */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-[12px] font-black text-blue-600 uppercase tracking-[0.3em] mb-6 flex items-center">
                <span className="w-8 h-px bg-blue-200 mr-4"></span>
                Approach & Methodology
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Our underwriting isn't just a spreadsheet exercise. It’s a multi-dimensional assessment that looks beyond historical claims to identify the underlying clinical and financial drivers of risk. By applying a rigorous, engineering-led methodology, we provide stability in an otherwise volatile market.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-slate-50 border border-slate-100 rounded flex items-center justify-center mr-4 mt-1">
                    <span className="text-blue-600 font-bold text-xs uppercase">Data</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-zenith-navy uppercase tracking-wider text-sm mb-1">Actuarial Support</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      We leverage advanced actuarial science and proprietary data modeling to ensure every quote reflects true risk, not just industry averages or carrier benchmarks.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute -inset-4 bg-slate-50 rounded-2xl -z-10 group-hover:scale-105 transition-transform duration-500"></div>
              <div className="bg-zenith-navy p-10 md:p-12 rounded-xl shadow-2xl relative overflow-hidden">
                <div className="absolute bottom-[-10%] right-[-10%] w-40 h-40 opacity-[0.05] pointer-events-none">
                  <svg viewBox="0 0 100 100" className="w-full h-full fill-white">
                    <path d="M50 0 L60 40 L100 50 L60 60 L50 100 L40 60 L0 50 L40 40 Z" />
                  </svg>
                </div>
                <h3 className="text-white text-xl font-bold mb-8 flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  The Zenith Standard
                </h3>
                <ul className="space-y-6">
                  {['Transparent Pricing Framework', 'Proactive Risk Identification', 'Sustainable Multi-Year Strategy'].map((item) => (
                    <li key={item} className="flex items-center text-slate-300 font-medium">
                      <svg className="w-5 h-5 text-blue-400 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Clinical Review Workflow */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[12px] font-black text-blue-600 uppercase tracking-[0.3em] mb-4">Intervention Workflow</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-zenith-navy">Claims Intervention → Clinical Review</h3>
            <div className="w-12 h-1 bg-zenith-blue mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            {[
              { step: '01', title: 'Data Ingestion', desc: 'Real-time claims data monitoring.' },
              { step: '02', title: 'Clinical Trigger', desc: 'Auto-identification of high-risk cases.' },
              { step: '03', title: 'Medical Review', desc: 'Director-led clinical pathway audit.' },
              { step: '04', title: 'Containment', desc: 'Immediate intervention at the point of care.' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded border border-slate-100 shadow-sm relative group hover:shadow-md transition-shadow">
                <span className="absolute top-4 right-4 text-3xl font-black text-slate-50 group-hover:text-blue-50 transition-colors">{item.step}</span>
                <h4 className="text-zenith-blue font-bold uppercase tracking-widest text-xs mb-3 relative z-10">{item.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed relative z-10">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Economics & Renewal */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-bold text-zenith-navy mb-6">Renewal Logic & Repricing</h2>
              <p className="text-slate-600 leading-relaxed mb-8">
                We reject the reactive renewal model. Our repricing framework is built on a "no-surprises" philosophy, using clinical stewardship data from throughout the plan year to inform the next cycle. This allows for renewals that are based on performance and outcome, not market volatility.
              </p>
              <div className="p-8 border border-slate-100 bg-slate-50 rounded-lg">
                <h4 className="font-bold text-slate-900 uppercase tracking-widest text-[10px] mb-4 text-blue-600">Performance Metrics</h4>
                <ul className="space-y-4">
                  <li className="flex justify-between items-center text-sm border-b border-slate-200 pb-2">
                    <span className="text-slate-600">Loss Ratio Stability</span>
                    <span className="font-bold text-zenith-navy">92% Average</span>
                  </li>
                  <li className="flex justify-between items-center text-sm border-b border-slate-200 pb-2">
                    <span className="text-slate-600">Intervention Success</span>
                    <span className="font-bold text-zenith-navy">High Impact</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <h2 className="text-2xl font-bold text-zenith-navy mb-6">Transparent Economics</h2>
              <p className="text-slate-600 leading-relaxed mb-8">
                Alignment only exists when incentives are shared. Our economic model is designed for transparency, ensuring that when a plan performs well, the surplus returns to the sponsor, not the carrier.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 border border-blue-50 bg-blue-50/20 rounded text-center">
                  <span className="block text-[10px] font-black text-blue-600 uppercase tracking-widest mb-2">Aligned</span>
                  <p className="text-sm font-bold text-zenith-navy">Margins</p>
                </div>
                <div className="p-6 border border-blue-50 bg-blue-50/20 rounded text-center">
                  <span className="block text-[10px] font-black text-blue-600 uppercase tracking-widest mb-2">Surplus</span>
                  <p className="text-sm font-bold text-zenith-navy">Return</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CTA */}
      <section className="py-24 bg-zenith-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900 opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 tracking-tight">Ready to optimize your portfolio?</h2>
          
          <div className="flex justify-center">
            <Link 
              to="/contact" 
              className="group relative inline-flex items-center justify-center px-12 py-6 font-black text-[11px] uppercase tracking-[0.3em] text-white transition-all duration-300"
            >
              <span className="absolute inset-0 bg-zenith-blue transform skew-x-[-12deg] group-hover:bg-blue-600 group-hover:scale-105 transition-all"></span>
              <span className="relative z-10">Submit a Group</span>
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

export default UnderwritingClaims;
