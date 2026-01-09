import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  const leadership = [
    {
      name: "Thomas Wagner, CEBS",
      title: "CEO & CUO",
      image: "https://res.cloudinary.com/dtrxl120u/image/upload/v1766605487/1694980990711_ybcsi1_uzxcxk.jpg",
      bio: "Thomas Wagner has over 20 years of relevant industry experience. He founded Zenith Risk Strategies in September 2024 with a vision of creating an MGU that delivers unique advantages to clients through profit share, cost-containment, and captive programs. Zenith offers pre-built turnkey solutions for small, medium, and large employers. Since July 2018, Thomas has served as Chairman of the Board, VP, and Director of Prestige International Insurance, a Bermuda-based captive with multiple segregated cells and exclusive distribution channels. His previous roles include senior executive positions at Captive Solutions, Echelon Advisors, Underwriting Management Experts (UME), Medxoom, and HealthWallet. Thomas earned his MBA from the Wharton School of the University of Pennsylvania."
    },
    {
      name: "John Owens",
      title: "Chief Underwriting Officer",
      image: "https://res.cloudinary.com/dtrxl120u/image/upload/v1766605533/1749008849819_uasuiw_lx9vup.jpg",
      bio: "John Owens brings over 15 years of experience in the Third-Party Administrator (TPA) and Managed General Underwriting (MGU) marketplace. His career has been defined by a deep understanding that every TPA and block of business is unique—a perspective he honed while leading the underwriting and marketing division of a national TPA for five years. Applying this philosophy to the stop-loss marketplace, John has achieved notable success in helping TPAs build and expand their businesses, playing a pivotal role in launching a successful MGU in partnership with a TPA and guiding it through five consecutive years of profitability and growth. Throughout his career, John has held positions ranging from Junior Underwriter to Chief Underwriting Officer, giving him a comprehensive perspective on the underwriting process. His leadership style emphasizes building strong teams and implementing best-in-class policies and procedures. John's operational expertise spans claims processing, policy administration, premium administration, and underwriting oversight. He has successfully managed blocks of business ranging from $15–$20 million in annual written premium, demonstrating his ability to balance strategic growth with operational excellence."
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section - Blue with Image Underlay */}
      <section className="relative text-white py-24 md:py-36 overflow-hidden">
        {/* Background Image - Compass/Navigation theme */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=2074&auto=format&fit=crop')" }}
        ></div>
        {/* Blue Overlay */}
        <div className="absolute inset-0 bg-zenith-navy/90"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
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
            <a 
              href="#mission-statement"
              className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 hover:text-blue-600 transition-colors"
            >
              Mission
            </a>
            <a 
              href="#leadership"
              className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 hover:text-blue-600 transition-colors"
            >
              Leadership
            </a>
            <a 
              href="#values"
              className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 hover:text-blue-600 transition-colors"
            >
              Values
            </a>
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
      <section id="mission-statement" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
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
      <section id="leadership" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-zenith-navy mb-6">Leadership Team</h2>
            <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed">
              Experienced leadership guiding underwriting, operations, medical oversight, and technology development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {leadership.map((member, idx) => (
              <div key={idx} className="bg-white border border-slate-100 rounded-2xl p-10 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col items-center text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-8 border-4 border-slate-50 shadow-inner">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover grayscale contrast-110"
                  />
                </div>
                <h3 className="text-2xl font-bold text-zenith-navy mb-1">{member.name}</h3>
                <p className="text-blue-600 font-black text-[10px] uppercase tracking-[0.2em] mb-8">{member.title}</p>
                <p className="text-slate-500 text-sm leading-relaxed font-light text-justify">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Values Section - Blue */}
      <section id="mission" className="py-24 bg-zenith-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900 opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20">
            <div id="values">
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
              <div className="p-10 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
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
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-zenith-navy mb-12 tracking-tight">Ready to learn more?</h2>
          
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
