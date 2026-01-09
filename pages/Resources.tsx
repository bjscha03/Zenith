
import React from 'react';

const Resources: React.FC = () => {
  const leadMagnets = [
    {
      type: 'Checklist',
      title: 'RFP Submission Checklist',
      desc: 'The definitive list of data points and documents required to secure the most competitive firm terms in the current market.',
      downloadUrl: '/brochures/submission-checklist.pdf',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      )
    },
    {
      type: 'Guide',
      title: 'Captive vs Traditional Stop Loss Employer Guide',
      desc: 'A structural comparison designed for CFOs and HR Directors evaluating the transition to a captive risk-sharing model.',
      downloadUrl: '/brochures/captive-vs-traditional-stoploss.pptx',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      type: 'Report',
      title: '2025 Risk Trend Report',
      desc: 'Our annual analysis of emerging clinical cost drivers, pharmacy trends, and stop-loss market volatility projections.',
      downloadUrl: '/brochures/2025-risk-trend-report.pdf',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
      )
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section - Blue with Image Underlay */}
      <section className="relative text-white py-24 md:py-32 overflow-hidden">
        {/* Background Image - Knowledge/library theme */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2090&auto=format&fit=crop')" }}
        ></div>
        {/* Blue Overlay */}
        <div className="absolute inset-0 bg-zenith-navy/90"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <span className="text-[11px] font-black text-blue-400 uppercase tracking-[0.4em] mb-6 block">Knowledge Base</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight mb-8">
              Technical Resources for the <br/>
              <span className="text-blue-400 italic">Self-Funded</span> Professional.
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed font-light max-w-2xl">
              Equipping advisors and plan sponsors with the clinical data and strategic frameworks needed to master healthcare risk.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Resources (Lead Magnets) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-[12px] font-black text-slate-400 uppercase tracking-[0.3em] mb-4">Featured Assets</h2>
            <h3 className="text-3xl font-bold text-zenith-navy">Technical Guides & Checklists</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadMagnets.map((item, idx) => (
              <div key={idx} className="group p-10 bg-slate-50 border border-slate-100 rounded-2xl hover:bg-white hover:shadow-2xl hover:border-blue-200 transition-all duration-500 flex flex-col h-full">
                <div className="w-14 h-14 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center mb-8 text-blue-600 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em] mb-4 block">{item.type}</span>
                <h4 className="text-xl font-bold text-zenith-navy mb-4 leading-snug group-hover:text-blue-600 transition-colors">{item.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed font-light mb-10 flex-grow">
                  {item.desc}
                </p>
                <div className="pt-6 border-t border-slate-200/50">
                  <a 
                    href={item.downloadUrl} 
                    download 
                    className="flex items-center text-[10px] font-black uppercase tracking-[0.2em] text-zenith-navy hover:text-blue-600 transition-colors"
                  >
                    Download Resource
                    <svg className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M7 10l5 5 5-5M12 15V3" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscription Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto bg-zenith-navy p-10 md:p-16 rounded-3xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-white">Stay ahead of the <br/><span className="text-blue-400">risk curve.</span></h2>
                <p className="text-slate-300 leading-relaxed font-light">
                  Receive monthly clinical insights, market volatility reports, and proprietary underwriting updates delivered directly to your inbox. No fluff, just discipline.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input 
                    type="email" 
                    placeholder="Work Email Address"
                    className="flex-grow px-6 py-4 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-white placeholder-slate-400"
                  />
                  <button className="px-10 py-4 bg-zenith-blue hover:bg-blue-600 text-white font-black text-[11px] uppercase tracking-[0.2em] rounded-lg transition-all shadow-xl">
                    Subscribe for Updates
                  </button>
                </div>
                <p className="text-[9px] text-slate-400 uppercase tracking-widest text-center sm:text-left">
                  We respect your inbox. Unsubscribe at any time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Resources;
