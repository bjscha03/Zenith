
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Resources: React.FC = () => {
  const [nlEmail, setNlEmail] = useState('');
  const [nlSubmitting, setNlSubmitting] = useState(false);
  const [nlSuccess, setNlSuccess] = useState(false);
  const [nlError, setNlError] = useState('');

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setNlSubmitting(true);
    setNlError('');
    try {
      const res = await fetch('/.netlify/functions/newsletter-subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: nlEmail })
      });
      if (!res.ok) throw new Error('Failed');
      setNlSuccess(true);
      setNlEmail('');
    } catch {
      setNlError('Something went wrong. Please try again.');
    } finally {
      setNlSubmitting(false);
    }
  };

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
      comingSoon: true,
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
                  {item.comingSoon ? (
                    <span className="flex items-center text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                      Coming Soon
                    </span>
                  ) : (
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
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* White Papers Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-[12px] font-black text-slate-400 uppercase tracking-[0.3em] mb-4">Industry Research</h2>
            <h3 className="text-3xl font-bold text-zenith-navy">White Papers</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Reimagining Health Insurance - links to dedicated page */}
            <Link
              to="/resources/reimagining-health-insurance"
              className="group p-10 bg-white border border-slate-100 rounded-2xl hover:shadow-2xl hover:border-blue-200 transition-all duration-500 flex flex-col h-full no-underline"
            >
              <div className="w-14 h-14 bg-slate-50 rounded-xl shadow-sm border border-slate-100 flex items-center justify-center mb-8 text-blue-600 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em] mb-4 block">White Paper</span>
              <h4 className="text-xl font-bold text-zenith-navy mb-4 leading-snug group-hover:text-blue-600 transition-colors">Reimagining Health Insurance</h4>
              <p className="text-slate-500 text-sm leading-relaxed font-light mb-10 flex-grow">
                A forward-looking analysis of how innovative risk structures are reshaping the health insurance landscape for self-funded employers.
              </p>
              <div className="pt-6 border-t border-slate-200/50">
                <span className="flex items-center text-[10px] font-black uppercase tracking-[0.2em] text-zenith-navy group-hover:text-blue-600 transition-colors">
                  Read White Paper
                  <svg className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </div>
            </Link>

            {/* Remaining white papers - external PDF links */}
            {[
              {
                title: 'Stop Loss Captives',
                desc: 'An in-depth exploration of stop loss captive structures, their strategic advantages, and implementation considerations for employers and advisors.',
                url: '/brochures/stop-loss-captives.pdf',
              },
              {
                title: 'Cost Containment & Stop Loss Pricing Impact',
                desc: 'Examining the relationship between clinical cost containment strategies and their measurable impact on stop loss pricing outcomes.',
                url: '/brochures/cost-containment-stop-loss.pdf',
              },
            ].map((paper) => (
              <a
                key={paper.url}
                href={paper.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-10 bg-white border border-slate-100 rounded-2xl hover:shadow-2xl hover:border-blue-200 transition-all duration-500 flex flex-col h-full no-underline"
              >
                <div className="w-14 h-14 bg-slate-50 rounded-xl shadow-sm border border-slate-100 flex items-center justify-center mb-8 text-blue-600 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em] mb-4 block">White Paper</span>
                <h4 className="text-xl font-bold text-zenith-navy mb-4 leading-snug group-hover:text-blue-600 transition-colors">{paper.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed font-light mb-10 flex-grow">
                  {paper.desc}
                </p>
                <div className="pt-6 border-t border-slate-200/50">
                  <span className="flex items-center text-[10px] font-black uppercase tracking-[0.2em] text-zenith-navy group-hover:text-blue-600 transition-colors">
                    View White Paper
                    <svg className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Partners Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-[12px] font-black text-slate-400 uppercase tracking-[0.3em] mb-4">Strategic Alliances</h2>
            <h3 className="text-3xl font-bold text-zenith-navy">Trusted Partners</h3>
            <p className="text-slate-500 text-lg leading-relaxed font-light mt-4 max-w-2xl">
              We collaborate with industry-leading partners to deliver best-in-class healthcare, pharmacy, and cost containment solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'TrueScripts',
                desc: 'Pharmacy benefit optimization and transparent PBM solutions',
                url: 'https://www.truescripts.com/',
                logo: 'https://res.cloudinary.com/dtrxl120u/image/upload/v1774982082/truescripts_gfnsm1.png',
              },
              {
                name: 'PriceMDs',
                desc: 'Transparent healthcare pricing and cost navigation platform',
                url: 'https://pricemds.com/',
                logo: 'https://res.cloudinary.com/dtrxl120u/image/upload/v1774982082/pricemds_ygnlpr.png',
              },
              {
                name: 'Veracity Benefits',
                desc: 'Benefits consulting focused on cost control and plan optimization',
                url: 'https://www.veracity-benefits.com/',
                logo: 'https://res.cloudinary.com/dtrxl120u/image/upload/v1774982082/Veracity_ktevzt.webp',
              },
              {
                name: 'Direct Care Alliance',
                desc: 'Network advancing direct primary care models nationwide',
                url: 'https://directcarealliance.com/',
                logo: 'https://res.cloudinary.com/dtrxl120u/image/upload/v1774982900/Screenshot_2026-03-31_at_2.47.38_PM_racatz.png',
              },
              {
                name: 'Connect Benefit',
                desc: 'Healthcare cost containment and member advocacy solutions',
                url: 'https://www.connectbenefit.com/',
                logo: 'https://res.cloudinary.com/dtrxl120u/image/upload/v1774982898/Screenshot_2026-03-31_at_2.47.54_PM_ud46ao.png',
              },
              {
                name: 'Kerix',
                desc: 'Healthcare navigation and savings optimization platform',
                url: 'https://www.kerix.com/',
                logo: 'https://res.cloudinary.com/dtrxl120u/image/upload/v1774982082/Ketrix_pukzec.png',
              },
            ].map((partner) => (
              <a
                key={partner.name}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${partner.name} website`}
                className="group p-10 bg-slate-50 border border-slate-100 rounded-2xl hover:bg-white hover:shadow-2xl hover:border-blue-200 transition-all duration-500 flex flex-col h-full no-underline"
              >
                <div className="w-full h-16 flex items-center justify-start mb-8 group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="max-h-16 max-w-[180px] w-auto h-auto object-contain"
                  />
                </div>
                <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em] mb-4 block">Partner</span>
                <h4 className="text-xl font-bold text-zenith-navy mb-4 leading-snug group-hover:text-blue-600 transition-colors">{partner.name}</h4>
                <p className="text-slate-500 text-sm leading-relaxed font-light mb-10 flex-grow">
                  {partner.desc}
                </p>
                <div className="pt-6 border-t border-slate-200/50">
                  <span className="flex items-center text-[10px] font-black uppercase tracking-[0.2em] text-zenith-navy group-hover:text-blue-600 transition-colors">
                    Visit Partner
                    <svg className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </span>
                </div>
              </a>
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
                {nlSuccess ? (
                  <div className="text-center py-4">
                    <p className="text-green-400 font-bold mb-3">Successfully subscribed!</p>
                    <button onClick={() => setNlSuccess(false)} className="text-blue-400 text-sm underline">Subscribe Another</button>
                  </div>
                ) : (
                  <form onSubmit={handleNewsletterSubmit}>
                    {nlError && <div className="text-red-400 text-sm mb-3">{nlError}</div>}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <input 
                        type="email" 
                        required
                        value={nlEmail}
                        onChange={(e) => setNlEmail(e.target.value)}
                        placeholder="Work Email Address"
                        className="flex-grow px-6 py-4 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-white placeholder-slate-400"
                      />
                      <button type="submit" disabled={nlSubmitting} className="px-10 py-4 bg-zenith-blue hover:bg-blue-600 text-white font-black text-[11px] uppercase tracking-[0.2em] rounded-lg transition-all shadow-xl disabled:opacity-50 disabled:cursor-not-allowed">
                        {nlSubmitting ? 'Subscribing...' : 'Subscribe for Updates'}
                      </button>
                    </div>
                  </form>
                )}
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
