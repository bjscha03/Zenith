
import React from 'react';
import { Link } from 'react-router-dom';

const Resources: React.FC = () => {
  const resourceCategories = [
    { name: 'Blog', count: 12 },
    { name: 'Educational PDFs', count: 8 },
    { name: 'Submission Checklists', count: 4 },
  ];

  const leadMagnets = [
    {
      type: 'Checklist',
      title: 'RFP Submission Checklist',
      desc: 'The definitive list of data points and documents required to secure the most competitive firm terms in the current market.',
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
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
      )
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-slate-50 py-24 border-b border-slate-200 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/4 h-full opacity-[0.03] pointer-events-none">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-zenith-blue">
            <path d="M50 0 L54 35 L90 25 L65 46 L100 50 L65 54 L90 75 L54 65 L50 100 L46 65 L10 75 L35 54 L0 50 L35 46 L10 25 L46 35 Z" />
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <span className="text-[11px] font-black text-blue-600 uppercase tracking-[0.4em] mb-6 block">Knowledge Base</span>
            <h1 className="text-4xl md:text-6xl font-bold text-zenith-navy leading-tight tracking-tight mb-8">
              Technical Resources for the <br/>
              <span className="text-blue-600 italic">Self-Funded</span> Professional.
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed font-light max-w-2xl">
              Equipping advisors and plan sponsors with the clinical data and strategic frameworks needed to master healthcare risk.
            </p>
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="bg-white border-b border-slate-100 sticky top-[80px] z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 md:space-x-16 py-6 overflow-x-auto no-scrollbar">
            {resourceCategories.map((cat) => (
              <button key={cat.name} className="flex items-center space-x-3 group whitespace-nowrap">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 group-hover:text-blue-600 transition-colors">
                  {cat.name}
                </span>
                <span className="bg-slate-50 text-slate-400 text-[9px] font-black px-2 py-0.5 rounded border border-slate-100 group-hover:bg-blue-50 group-hover:text-blue-600 group-hover:border-blue-100 transition-all">
                  {cat.count}
                </span>
              </button>
            ))}
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
                  <button className="flex items-center text-[10px] font-black uppercase tracking-[0.2em] text-zenith-navy hover:text-blue-600 transition-colors">
                    Download Resource
                    <svg className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M7 10l5 5 5-5M12 15V3" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscription Section */}
      <section className="py-24 bg-zenith-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900 opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto bg-white/5 backdrop-blur-md border border-white/10 p-10 md:p-16 rounded-3xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Stay ahead of the <br/><span className="text-blue-400">risk curve.</span></h2>
                <p className="text-slate-400 leading-relaxed font-light">
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
                <p className="text-[9px] text-slate-500 uppercase tracking-widest text-center sm:text-left">
                  We respect your inbox. Unsubscribe at any time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Teaser Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-[12px] font-black text-slate-400 uppercase tracking-[0.3em] mb-4">Latest Insights</h2>
              <h3 className="text-3xl font-bold text-zenith-navy">From the Zenith Blog</h3>
            </div>
            <Link to="#" className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em] border-b-2 border-blue-100 pb-1 hover:border-blue-600 transition-all hidden md:block">
              View All Posts
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                date: 'Oct 24, 2024',
                title: 'The Impact of GLP-1s on Stop-Loss Renewals',
                excerpt: 'How proprietary clinical oversight helps plan sponsors manage the exploding costs of weight-loss medications.'
              },
              {
                date: 'Sep 12, 2024',
                title: 'Moving Beyond the Annual Spreadsheet War',
                excerpt: 'Why transactional brokerage models fail in a volatile healthcare market and how to transition to strategic risk ownership.'
              }
            ].map((post, idx) => (
              <div key={idx} className="flex flex-col group cursor-pointer">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">{post.date}</span>
                <h4 className="text-2xl font-bold text-zenith-navy mb-4 group-hover:text-blue-600 transition-colors leading-tight">{post.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 font-light">
                  {post.excerpt}
                </p>
                <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em] flex items-center group-hover:translate-x-2 transition-transform">
                  Read Article
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;
