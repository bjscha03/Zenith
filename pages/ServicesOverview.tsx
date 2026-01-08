
import React from 'react';
import { Link } from 'react-router-dom';

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
      <section className="bg-zenith-navy text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-slate-300">
              Zenith’s services are not standalone products; they are integrated components of a comprehensive risk management strategy. We work together with brokers and employers to build sustainable health plan outcomes.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Link 
                key={service.title} 
                to={service.path}
                className="group p-10 bg-slate-50 border border-slate-200 rounded-xl hover:bg-white hover:shadow-xl hover:border-blue-500 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-zenith-navy mb-4 group-hover:text-blue-600">{service.title}</h3>
                <p className="text-slate-600 mb-8 leading-relaxed">{service.description}</p>
                <div className="flex items-center text-blue-600 font-semibold">
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
