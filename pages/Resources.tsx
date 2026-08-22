
import React, { useRef, useState } from 'react';
import CompassMark from '../components/brand/CompassMark';
import ContentGrid from '../components/content/ContentGrid';
import SpamTrap from '../components/forms/SpamTrap';
import { ZENITH_PEAK_IMAGE } from '../lib/brandAssets';
import { submitWebsiteForm } from '../lib/formSubmission';

const Resources: React.FC = () => {
  const [nlEmail, setNlEmail] = useState('');
  const [nlSubmitting, setNlSubmitting] = useState(false);
  const [nlSuccess, setNlSuccess] = useState(false);
  const [nlError, setNlError] = useState('');
  const [nlWebsite, setNlWebsite] = useState('');
  const newsletterInFlight = useRef(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterInFlight.current) return;
    newsletterInFlight.current = true;
    setNlSubmitting(true);
    setNlError('');
    try {
      await submitWebsiteForm('/api/newsletter-subscribe', { email: nlEmail, _website: nlWebsite });
      setNlSuccess(true);
      setNlEmail('');
      setNlWebsite('');
    } catch (error) {
      setNlError(error instanceof Error ? error.message : 'Something went wrong. Please try again.');
    } finally {
      newsletterInFlight.current = false;
      setNlSubmitting(false);
    }
  };

  return (
    <div className="w-full">
      {/* Hero Section - Blue with Image Underlay */}
      <section className="premium-hero relative text-white py-24 md:py-32 overflow-hidden">
        {/* Background Image - Knowledge/library theme */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2090&auto=format&fit=crop')" }}
        ></div>
        <img src={ZENITH_PEAK_IMAGE} alt="" aria-hidden="true" className="absolute right-0 inset-y-0 w-[56%] h-full object-cover object-center opacity-[0.24] mix-blend-screen" />
        <div className="absolute inset-0 bg-gradient-to-r from-zenith-navy/95 via-zenith-navy/90 to-zenith-navy/58"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_45%,rgba(96,165,250,0.15),transparent_35%)]" />
        <CompassMark className="absolute -right-8 -top-10 w-80 h-80 opacity-[0.08]" imageClassName="brightness-0 invert" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-300/70 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="premium-hero-copy max-w-4xl">
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

      {/* Managed Resource Library */}
      <section className="premium-light-section relative overflow-hidden py-24">
        <CompassMark className="absolute -right-24 top-32 w-96 h-96 opacity-[0.035]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="relative overflow-hidden rounded-[2rem] bg-zenith-navy px-8 py-10 sm:px-10 md:px-14 md:py-14 mb-12 shadow-[0_30px_80px_-45px_rgba(15,35,68,0.7)]">
            <img src={ZENITH_PEAK_IMAGE} alt="" aria-hidden="true" className="absolute right-0 inset-y-0 w-[62%] h-full object-cover object-center opacity-35" />
            <div className="absolute inset-0 bg-gradient-to-r from-zenith-navy via-zenith-navy/92 to-zenith-navy/42" />
            <CompassMark className="absolute -right-12 -bottom-20 w-72 h-72 opacity-[0.08]" imageClassName="brightness-0 invert" />
            <div aria-hidden="true" className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-300 via-blue-500 to-transparent" />
            <div className="relative z-10 max-w-3xl">
              <div className="flex items-center gap-3 mb-5">
                <span className="w-2 h-2 rounded-full bg-blue-300 shadow-[0_0_0_5px_rgba(147,197,253,0.12)]" />
                <h2 className="text-[10px] font-black text-blue-300 uppercase tracking-[0.35em]">Resource Library</h2>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">Guides, research, and strategic intelligence</h3>
              <p className="text-slate-300 text-lg leading-relaxed font-light max-w-2xl">Practical knowledge for brokers, employers, and healthcare risk professionals—organized to help you move from insight to action.</p>
            </div>
          </div>
          <ContentGrid section="resource" showFilters />
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
              {
                name: 'Samaritan Fund Program',
                desc: 'Supplemental health funding solutions supporting employees with unexpected medical expenses',
                url: 'https://samaritanfundprogram.com/',
                logo: 'https://github.com/user-attachments/assets/8e11bae0-c1b4-4bde-bb80-fc3eac1f8782',
              },
            ].map((partner) => (
              <a
                key={partner.name}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${partner.name} website`}
                className="premium-card group p-10 rounded-2xl hover:-translate-y-1 transition-all duration-500 flex flex-col h-full no-underline"
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
      <section className="premium-light-section py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="premium-card-dark max-w-5xl mx-auto bg-zenith-navy p-10 md:p-16 rounded-3xl relative overflow-hidden">
            <CompassMark className="absolute -right-10 -bottom-14 w-56 h-56 opacity-[0.06]" imageClassName="brightness-0 invert" />
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
                    <SpamTrap value={nlWebsite} onChange={setNlWebsite} />
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
