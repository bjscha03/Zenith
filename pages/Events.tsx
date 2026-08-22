import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ContentGrid from '../components/content/ContentGrid';

const Events: React.FC = () => {
  const [expandedCity, setExpandedCity] = useState<string | null>(null);
  const agendaItems = [
    { time: '', title: 'Check-In / Welcome & Framing' },
    { time: '9:30 - 10:45 AM', title: 'Interactive Session' },
    { time: '11:00 AM', title: 'Break' },
    { time: '11:00 AM - 2:30 PM', title: 'Speakers' },
    { time: '2:30 PM', title: 'Break' },
    { time: '2:45 - 4:00 PM', title: 'Speakers' },
    { time: '4:15 PM', title: 'Closing Reflections' },
    { time: '5:00 PM', title: 'Networking Happy Hour' },
  ];


  const locations: any[] = [
    {
      city: 'Dallas',
      state: 'Texas',
      details: {
        subtitle: 'Bluebonnets VS BUCA: Order Before Growth',
        date: 'April 23 2026 | Dallas TX',
        purpose: 'Dallas represents a scale market- faster broker cycles, higher carrier density, and increased exposure to default solutions. This summit examines the difference between governed growth (Bluebonnet) and reactive scale (BUCA), and how structure determines outcomes as plans grow.',
        attendees: [
          'Brokers advising growing employers',
          'TPAs and plan architects',
          'Employer CFOs and HR leaders (50-500) lives',
        ],
        highlights: [
          'Roundtable working sessions',
          'Journal-first opening',
          'Facilitated discussion (no vendor booths)',
          'Broker Hot Seat panel',
          'Private networking reception',
        ],
      },
    },
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

      {/* EVENTS SUB-NAVIGATION */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center gap-8">
            <span className="py-4 text-[11px] font-black uppercase tracking-[0.3em] text-zenith-navy border-b-2 border-zenith-navy cursor-default">Conferences</span>
            <a href="#/events/speakers" className="py-4 text-[11px] font-black uppercase tracking-[0.3em] text-slate-400 hover:text-zenith-navy border-b-2 border-transparent hover:border-zenith-navy transition-all">Speakers</a>
          </div>
        </div>
      </nav>

      {/* MANAGED EVENT ARCHIVE */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-[11px] font-black text-blue-600 uppercase tracking-[0.35em] mb-4 block">Event Archive</span>
            <h2 className="text-3xl md:text-4xl font-bold text-zenith-navy tracking-tight mb-4">Recaps, galleries, and event conversations</h2>
            <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">Revisit past gatherings through curated photography, video, and practical takeaways.</p>
          </div>
          <ContentGrid section="event" />
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

      {/* SECTION 5: 2026 SUMMER SERIES */}
      <section id="series" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[11px] font-black text-blue-400 uppercase tracking-[0.4em] mb-4 block">Coming Soon</span>
            <h2 className="text-3xl md:text-5xl font-bold text-zenith-navy tracking-tight mb-6">2026 Summer Series</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">Three cities. Three opportunities to connect with the minds shaping employer-funded healthcare.</p>
          </div>
          <div className="max-w-4xl mx-auto space-y-4">
            {locations.map((loc: any, i: number) => {
              const isExpanded = expandedCity === loc.city;
              const hasDetails = loc.details;
              return (
                <div key={i} className="bg-white rounded-xl border border-slate-200 overflow-hidden transition-all">
                  <button
                    onClick={() => hasDetails && setExpandedCity(isExpanded ? null : loc.city)}
                    className={`w-full flex items-center justify-between p-8 text-left ${hasDetails ? 'cursor-pointer hover:bg-slate-50' : 'cursor-default'} transition-all`}
                  >
                    <div>
                      <h3 className="text-2xl font-bold text-zenith-navy uppercase tracking-wide">{loc.city} {loc.state}</h3>
                    </div>
                    {hasDetails && (
                      <span className="text-zenith-navy text-2xl font-light ml-4">{isExpanded ? '\u2013' : '+'}</span>
                    )}
                  </button>
                  {isExpanded && hasDetails && (
                    <div className="px-8 pb-10 border-t border-slate-200">
                      <div className="max-w-3xl mx-auto text-center pt-8">
                        <p className="text-lg font-bold italic text-zenith-navy mb-2">{loc.details.subtitle}</p>
                        <p className="text-slate-500 mb-6">{loc.details.date}</p>
                        <h4 className="text-sm font-black uppercase tracking-[0.2em] text-zenith-navy mb-4">Purpose:</h4>
                        <p className="text-slate-600 leading-relaxed mb-8">{loc.details.purpose}</p>
                        <h4 className="text-sm font-black uppercase tracking-[0.2em] text-zenith-navy mb-4">Who Should Attend:</h4>
                        <ul className="space-y-2 mb-8">
                          {loc.details.attendees.map((a: string, j: number) => (
                            <li key={j} className="text-slate-600 flex items-center justify-center gap-2">
                              <span className="w-1.5 h-1.5 bg-zenith-navy rounded-full flex-shrink-0"></span>
                              {a}
                            </li>
                          ))}
                        </ul>
                        <h4 className="text-sm font-black uppercase tracking-[0.2em] text-zenith-navy mb-4">Format Highlights:</h4>
                        <ul className="space-y-2 mb-6">
                          {loc.details.highlights.map((h: string, j: number) => (
                            <li key={j} className="text-slate-600 flex items-center justify-center gap-2">
                              <span className="w-1.5 h-1.5 bg-zenith-navy rounded-full flex-shrink-0"></span>
                              {h}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
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
