
import React from 'react';
import { Link } from 'react-router-dom';
import CompassMark from '../components/brand/CompassMark';
import { ZENITH_PEAK_IMAGE } from '../lib/brandAssets';

const ServicesOverview: React.FC = () => {
  const services = [
    {
      title: 'Underwriting & Claims',
      description: 'Data-driven underwriting discipline paired with proactive clinical oversight to contain costs before escalation.',
      path: '/services/underwriting-claims'
    },
    {
      title: 'Captive Integration',
      description: 'Strategic alignment between stop-loss and captive structures to preserve surplus and ensure long-term stability.',
      path: '/services/captive-integration'
    },
    {
      title: 'Apollo Health Plan',
      description: 'A level-funded health plan designed to control claims at the point of care for small to mid-sized employers.',
      path: '/services/apollo-health-plan'
    },
    {
      title: 'Consulting & Strategy',
      description: 'Long-term risk strategy and program design tailored to the unique needs of advisors and employers.',
      path: '/services/consulting-strategy'
    }
  ];

  return (
    <div className="w-full">
      <section className="premium-hero relative overflow-hidden bg-zenith-navy text-white py-28 md:py-36">
        <img src={ZENITH_PEAK_IMAGE} alt="" aria-hidden="true" className="premium-hero-image absolute right-0 inset-y-0 h-full w-[62%] object-cover object-center opacity-45" />
        <div className="absolute inset-0 bg-gradient-to-r from-zenith-navy via-zenith-navy/[0.92] to-zenith-navy/[0.45]" />
        <CompassMark className="absolute -right-6 -top-16 w-80 h-80 opacity-[0.075]" imageClassName="brightness-0 invert" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="premium-hero-copy max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-7 tracking-tight">Our Services</h1>
            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed font-light">
              Zenith’s services are not standalone products; they are integrated components of a comprehensive risk management strategy. We work together with brokers and employers to build sustainable health plan outcomes.
            </p>
          </div>
        </div>
      </section>

      <section className="premium-light-section relative overflow-hidden py-24 md:py-28">
        <CompassMark className="absolute -left-20 top-20 w-96 h-96 opacity-[0.025]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Link 
                key={service.title} 
                to={service.path}
                className="premium-card group p-9 md:p-12 rounded-[1.75rem] hover:-translate-y-1.5 transition-all duration-500 min-h-[310px] flex flex-col"
              >
                <div className="flex items-center justify-between mb-10">
                  <span className="text-[10px] font-black tracking-[0.3em] text-blue-600">0{index + 1}</span>
                  <CompassMark className="w-12 h-12 opacity-[0.09] group-hover:opacity-[0.16] transition-opacity" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-zenith-navy mb-5 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                <p className="text-slate-600 mb-9 leading-relaxed flex-grow">{service.description}</p>
                <div className="flex items-center text-blue-600 font-semibold pt-5 border-t border-slate-200/70">
                  Learn More
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesOverview;
