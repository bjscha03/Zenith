import React from 'react';
import { Link } from 'react-router-dom';

const Events: React.FC = () => {
  const agendaItems = [
    { time: '8:30 AM', title: 'Welcome & Framing' },
    { time: '9:00 AM', title: 'Interactive Session: The State of the Market' },
    { time: '10:15 AM', title: 'Break' },
    { time: '10:30 AM', title: 'Interactive Session: The Bluebonnet Solution' },
    { time: '12:00 PM', title: 'Lunch & Networking' },
    { time: '1:30 PM', title: 'Interactive Session: Implementation & Strategy' },
    { time: '3:00 PM', title: 'Break' },
    { time: '3:15 PM', title: 'Closing Reflections & Next Steps' },
    { time: '4:00 PM', title: 'Networking Happy Hour' },
  ];

  const speakers = [
    { name: 'Speaker Name', title: 'Chief Risk Officer', bio: 'A seasoned executive with over 20 years of experience in healthcare risk management and captive strategy.' },
    { name: 'Speaker Name', title: 'VP of Clinical Operations', bio: 'Leads clinical stewardship programs that have reduced high-cost claimant exposure across mid-market employers.' },
    { name: 'Speaker Name', title: 'Benefits Strategist', bio: 'Advises self-funded employers on multi-year benefit strategies focused on transparency and cost containment.' },
    { name: 'Speaker Name', title: 'Actuarial Consultant', bio: 'Specializes in predictive modeling for stop-loss programs and captive feasibility analysis.' },
  ];

  const locations = [
    { city: 'Dallas', state: 'Texas' },
    { city: 'Hilton Head', state: 'South Carolina' },
    { city: 'Denver', state: 'Colorado' },
  ];

  return (
    <div className="w-full">
      {/* SECTION 1: HERO */}
      <section className="relative text-white py-24 md:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop')" }}></div>
        <div className="absolute inset-0 bg-zenith-navy/90"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-[11px] font-black text-blue-400 uppercase tracking-[0.4em] mb-6 block">Zenith Events</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight mb-8">Zenith Risk Strategies Events</h1>
            <p className="text-xl text-slate-300 leading-relaxed font-light mb-10">Zenith helps brokers and employers replace renewal chaos with structure that holds through captives, disciplined networks, and intentional design.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://www.eventbrite.com/o/zenith-risk-strategies-120923310117" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-10 py-5 bg-zenith-blue text-white font-black text-[11px] uppercase tracking-[0.3em] rounded hover:bg-blue-600 transition-all">
                Register Now
                <svg className="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
              <a href="#/conference-series" className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-white font-bold text-[10px] uppercase tracking-widest rounded hover:bg-white/10 transition-all">Explore the Conference Series</a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: BUILT FOR DECISION-MAKERS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[11px] font-black text-blue-400 uppercase tracking-[0.4em] mb-4 block">Who This Is For</span>
            <h2 className="text-3xl md:text-5xl font-bold text-zenith-navy tracking-tight mb-6">Built for Decision-Makers</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">Our conferences are designed for those shaping the future of employer-funded healthcare.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4', title: 'Employers & CFOs', desc: 'Gain clarity on self-funded economics and long-term cost strategy.' },
              { icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z', title: 'Brokers & Advisors', desc: 'Differentiate your practice with tools, insights, and partnership models.' },
              { icon: 'M13 10V3L4 14h7v7l9-11h-7z', title: 'TPAs & Partners', desc: 'Connect with forward-thinking employers and brokers building next-gen programs.' },
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 rounded-xl p-10 border border-slate-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg">
                <div className="w-14 h-14 rounded-lg bg-zenith-navy flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} /></svg>
                </div>
                <h3 className="text-xl font-bold text-zenith-navy mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: CONFERENCE AGENDA */}
      <section id="agenda" className="py-24 bg-zenith-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[11px] font-black text-blue-400 uppercase tracking-[0.4em] mb-4 block">The Schedule</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6">Conference Agenda</h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">A full day designed for depth, not breadth. Every session is built around real-world application.</p>
          </div>
          <div className="max-w-3xl mx-auto">
            {agendaItems.map((item, i) => (
              <div key={i} className="flex items-start gap-6 py-5 border-b border-slate-700/50 last:border-0">
                <span className="text-blue-400 font-mono text-sm font-bold min-w-[120px] pt-1">{item.time}</span>
                <span className="text-white font-semibold text-lg">{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: SPEAKERS */}
      <section id="speakers" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[11px] font-black text-blue-400 uppercase tracking-[0.4em] mb-4 block">Meet the Experts</span>
            <h2 className="text-3xl md:text-5xl font-bold text-zenith-navy tracking-tight mb-6">Featured Speakers</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">Industry leaders sharing actionable insights on captive strategy, clinical stewardship, and benefit design.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {speakers.map((sp, i) => (
              <div key={i} className="bg-slate-50 rounded-xl p-8 border border-slate-200 text-center hover:shadow-lg transition-all">
                <div className="w-20 h-20 rounded-full bg-zenith-navy mx-auto mb-5 flex items-center justify-center">
                  <svg className="w-10 h-10 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                </div>
                <h3 className="text-lg font-bold text-zenith-navy mb-1">{sp.name}</h3>
                <p className="text-sm text-blue-500 font-semibold mb-3">{sp.title}</p>
                <p className="text-slate-600 text-sm leading-relaxed">{sp.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: 2026 SUMMER SERIES */}
      <section id="series" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[11px] font-black text-blue-400 uppercase tracking-[0.4em] mb-4 block">Coming Soon</span>
            <h2 className="text-3xl md:text-5xl font-bold text-zenith-navy tracking-tight mb-6">2026 Summer Series</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">Three cities. Three opportunities to connect with the minds shaping employer-funded healthcare.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {locations.map((loc, i) => (
              <div key={i} className="bg-white rounded-xl p-10 border border-slate-200 text-center hover:shadow-lg transition-all">
                <div className="w-14 h-14 rounded-lg bg-zenith-navy flex items-center justify-center mx-auto mb-6">
                  <svg className="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <h3 className="text-2xl font-bold text-zenith-navy mb-2">{loc.city}</h3>
                <p className="text-slate-500 font-medium">{loc.state}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: REGISTER */}
      <section id="register" className="py-24 bg-zenith-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-[11px] font-black text-blue-400 uppercase tracking-[0.4em] mb-4 block">Reserve Your Seat</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6">Register for the 2026 Summit</h2>
            <p className="text-lg text-slate-400 leading-relaxed mb-10">Seats are limited to ensure quality interaction. Reserve your place at the table.</p>
            <a href="https://www.eventbrite.com/o/zenith-risk-strategies-120923310117" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-10 py-5 bg-zenith-blue text-white font-black text-[11px] uppercase tracking-[0.3em] rounded hover:bg-blue-600 transition-all">
              Register Now
              <svg className="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
          </div>
        </div>
      </section>

      {/* SPEAKER APPLICATION */}
      <section id="speaker" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-[11px] font-black text-blue-400 uppercase tracking-[0.4em] mb-4 block">Share Your Expertise</span>
            <h2 className="text-3xl md:text-5xl font-bold text-zenith-navy tracking-tight mb-6">Interested in Speaking?</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-10">We welcome thought leaders in risk management, captive strategy, clinical stewardship, and benefit design to apply for speaking opportunities.</p>
            <a href="#/events/speakers" className="inline-flex items-center justify-center px-10 py-5 border-2 border-zenith-navy text-zenith-navy font-black text-[11px] uppercase tracking-[0.3em] rounded hover:bg-zenith-navy hover:text-white transition-all">
              Apply to Speak
              <svg className="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
