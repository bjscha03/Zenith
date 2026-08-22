import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CompassMark from '../components/brand/CompassMark';
import { ZENITH_PEAK_IMAGE } from '../lib/brandAssets';

const About: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 140;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  const leadership = [
    {
      name: "Thomas Wagner, CEBS",
      title: "Chief Executive Officer",
      image: "https://res.cloudinary.com/dtrxl120u/image/upload/v1766605487/1694980990711_ybcsi1_uzxcxk.jpg",
      bio: "Thomas Wagner is the Founder and CEO of Zenith Risk Strategies, a program management firm focused on medical stop-loss, captive insurance solutions, and alternative risk financing. He has 20 years of entrepreneurial and executive-level experience in the insurance industry.\n\nOwning multiple agencies, he has been responsible for distribution, program-level execution, and captive medical stop-loss development, with direct responsibility for building, scaling, and managing risk portfolios across multiple platforms.\n\nThomas began his career as an insurance entrepreneur, founding, owning, and operating multiple insurance agencies, including Wagner Benefits Group and Echelon Advisors. He also created an agency captive company, Prestige International Insurance in Bermuda.\n\nAcross these firms, he built producer teams, developed middle-market and large-employer client portfolios, and oversaw sustained premium growth driven by long-term client relationships and disciplined plan design, resulting in a high client retention rate. These agencies were scaled operationally and commercially, ultimately leading to successful exits.\n\nThis period of ownership provided Thomas with firsthand exposure to portfolio performance, renewal dynamics, claims volatility, and the behavioral drivers of broker-sourced risk—experience that continues to inform how he evaluates and structures risk programs.\n\nFollowing the sale of his agencies, Thomas joined an established Managing General Underwriter, where he was directly involved in creating and launching a captive medical stop-loss department. In this role, he worked closely with actuarial partners, third-party administrators, and broker relationships to design captive structures, support employer participation, and manage ongoing program execution.\n\nHis responsibilities extended beyond program formation into the operational realities of captive management, including coordinating claims administration through TPAs, supporting renewal and continuation decisions, and managing broker and employer engagement across multiple program years.\n\nBuilding on this experience, Thomas founded Zenith Risk Strategies to apply his combined background in agency ownership, captive program creation, and operational execution to the design and management of medical stop-loss and captive solutions.\n\nThrough Zenith, he continues to work directly with brokers, TPAs, carriers, and employer groups, focusing on programs that are structured for durability, transparency, and long-term participation rather than transactional placement.\n\nThomas's background reflects end-to-end exposure to how medical stop-loss risk is sourced, structured, administered, and maintained over time. His experience operating within both distribution-led and captive-based environments provides a practical understanding of the interdependencies between brokers, employers, administrators, and risk capital.\n\nZenith Risk Strategies was formed as a natural extension of this experience, providing a platform grounded in real portfolio management and captive execution rather than theoretical program design."
    }
  ];

  const [expandedBios, setExpandedBios] = useState<Record<number, boolean>>({});

  const BIO_PREVIEW_LENGTH = 500;

  const toggleBio = (idx: number) => {
    setExpandedBios(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  const getPreviewText = (bio: string) => {
    if (bio.length <= BIO_PREVIEW_LENGTH) return bio;
    const truncated = bio.substring(0, BIO_PREVIEW_LENGTH);
    const lastSpace = truncated.lastIndexOf(' ');
    return truncated.substring(0, lastSpace > 0 ? lastSpace : BIO_PREVIEW_LENGTH) + '...';
  };

  return (
    <div className="w-full">
      {/* Hero Section - Blue with Image Underlay */}
      <section className="premium-hero relative text-white py-24 md:py-36 overflow-hidden">
        {/* Background Image - Compass/Navigation theme */}
        <div 
          className="premium-hero-image absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=2074&auto=format&fit=crop')" }}
        ></div>
        {/* Blue Overlay */}
        <img src={ZENITH_PEAK_IMAGE} alt="" aria-hidden="true" className="absolute right-0 inset-y-0 w-[58%] h-full object-cover opacity-[0.2] mix-blend-screen" />
        <div className="absolute inset-0 bg-gradient-to-r from-zenith-navy/[0.97] via-zenith-navy/[0.9] to-zenith-navy/[0.52]"></div>
        <CompassMark className="absolute -right-10 -top-12 w-80 h-80 opacity-[0.07]" imageClassName="brightness-0 invert" />
        
        <div className="premium-hero-copy max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-[11px] font-black text-blue-400 uppercase tracking-[0.4em] mb-8 block">Credibility & Discipline</span>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight mb-8 max-w-5xl mx-auto">
            We exist to realign incentives in healthcare and empower employers to control their risk.
          </h1>
          <p className="text-2xl text-slate-300 font-light italic">
            Together we can create a better path forward.
          </p>
        </div>
      </section>

      {/* Internal Nav */}
      <div className="bg-white border-b border-slate-100 sticky top-[80px] z-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center space-x-8 md:space-x-12 py-6">
            <button 
              onClick={() => scrollToSection('mission-statement')}
              className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 hover:text-blue-600 transition-colors"
            >
              Mission
            </button>
            <button 
              onClick={() => scrollToSection('leadership')}
              className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 hover:text-blue-600 transition-colors"
            >
              Leadership
            </button>
            <button 
              onClick={() => scrollToSection('values')}
              className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 hover:text-blue-600 transition-colors"
            >
              Values
            </button>
            <Link 
              to="/careers"
              className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 hover:text-blue-600 transition-colors"
            >
              Careers
            </Link>
          </div>
        </div>
      </div>

      {/* Mission Statement Section */}
      <section id="mission-statement" className="premium-light-section py-20 scroll-mt-36">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="premium-card text-center p-9 md:p-14 rounded-[2rem]">
            <h2 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.3em] mb-6">Our Mission</h2>
            <div className="relative">
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full hidden md:block"></div>
              <p className="text-2xl md:text-3xl text-zenith-navy leading-relaxed font-light">
                We empower brokers and businesses to achieve success through innovative captive insurance solutions. With deep expertise in risk management, we help our partners{' '}
                <span className="font-semibold text-blue-600">reduce costs</span>,{' '}
                <span className="font-semibold text-blue-600">mitigate risk</span>, and{' '}
                <span className="font-semibold text-blue-600">build long-term stability</span>{' '}
                by challenging traditional insurance models and delivering transparent, strategically aligned solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section - White */}
      <section id="leadership" className="premium-light-section py-24 scroll-mt-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-zenith-navy mb-6">Leadership Team</h2>
            <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed">
              Experienced leadership guiding underwriting, operations, medical oversight, and technology development.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            {leadership.map((member, idx) => (
              <div key={idx} className="premium-card rounded-[2rem] p-8 md:p-12 transition-all duration-500 md:grid md:grid-cols-[240px_1fr] md:gap-12 items-start text-left">
                <div className="w-full max-w-[240px] aspect-[4/5] rounded-[1.5rem] overflow-hidden mb-8 md:mb-0 border-4 border-white shadow-xl mx-auto">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover grayscale-[0.2] contrast-110"
                  />
                </div>
                <div>
                <h3 className="text-3xl font-bold text-zenith-navy mb-2">{member.name}</h3>
                <p className="text-blue-600 font-black text-[10px] uppercase tracking-[0.2em] mb-8">{member.title}</p>
                <div className="text-slate-500 text-sm leading-relaxed font-light text-left">
                  {(expandedBios[idx] ? member.bio : getPreviewText(member.bio)).split('\n\n').map((paragraph, pIdx) => (
                    <p key={pIdx} className={pIdx > 0 ? 'mt-4' : ''}>
                      {paragraph}
                    </p>
                  ))}
                </div>
                {member.bio.length > BIO_PREVIEW_LENGTH && (
                  <button
                    onClick={() => toggleBio(idx)}
                    className="mt-4 text-blue-600 hover:text-blue-800 text-sm font-semibold tracking-wide transition-colors duration-200"
                  >
                    {expandedBios[idx] ? 'Read Less' : 'Read More'}
                  </button>
                )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Values Section - Blue */}
      <section id="values" className="premium-dark-section py-24 relative overflow-hidden scroll-mt-36">
        <div className="absolute inset-0 bg-blue-900 opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-[12px] font-black text-blue-400 uppercase tracking-[0.3em] mb-10">Our Core Values</h2>
              <div className="space-y-12">
                <div>
                  <h4 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">Radical Transparency</h4>
                  <p className="text-slate-300 leading-relaxed font-light">
                    We believe the self-funded market thrives on data openness. We provide the visibility required for employers to see exactly where their premium goes and how their claims are managed.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">Clinical Integrity</h4>
                  <p className="text-slate-300 leading-relaxed font-light">
                    Risk management isn't just about math; it's about medicine. Our clinical leadership ensures that cost containment never comes at the expense of member care quality.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-[12px] font-black text-blue-400 uppercase tracking-[0.3em] mb-10">Our Philosophy</h2>
              <div className="premium-card-dark p-10 rounded-2xl">
                <p className="text-lg text-slate-200 leading-relaxed font-light italic mb-8">
                  "Traditional stop-loss models are fundamentally misaligned. At Zenith, we've rebuilt the process to prioritize clinical oversight, financial transparency, and predictable outcomes."
                </p>
                <div className="w-12 h-1 bg-blue-400"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - White */}
      <section className="premium-cta py-24 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 tracking-tight">Ready to learn more?</h2>
          
          <div className="flex justify-center">
            <Link 
              to="/contact" 
              className="group relative inline-flex items-center justify-center px-12 py-6 font-black text-[11px] uppercase tracking-[0.3em] text-white transition-all duration-300"
            >
              <span className="absolute inset-0 bg-zenith-blue transform skew-x-[-12deg] group-hover:bg-blue-600 group-hover:scale-105 transition-all"></span>
              <span className="relative z-10">Find out more</span>
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

export default About;
