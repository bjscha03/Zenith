import React, { useState } from 'react';
import CompassMark from '../components/brand/CompassMark';
import ContentGrid from '../components/content/ContentGrid';
import { ZENITH_PEAK_IMAGE } from '../lib/brandAssets';

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
      <section className="premium-hero relative text-white py-24 md:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop')" }}></div>
        <img src={ZENITH_PEAK_IMAGE} alt="" aria-hidden="true" className="absolute right-0 inset-y-0 w-[58%] h-full object-cover object-center opacity-[0.2] mix-blend-screen" />
        <div className="absolute inset-0 bg-gradient-to-r from-zenith-navy/95 via-zenith-navy/90 to-zenith-navy/[0.58]"></div>
        <CompassMark className="absolute -right-8 -top-10 w-80 h-80 opacity-[0.08]" imageClassName="brightness-0 invert" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="premium-hero-copy text-center max-w-3xl mx-auto">
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

      {/* FEATURED RECAP + AUDIENCE */}
      <section className="premium-light-section relative overflow-hidden py-20">
        <CompassMark className="absolute -right-24 top-12 w-96 h-96 opacity-[0.035]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-[1.18fr_0.82fr] gap-8 items-stretch">
            <div>
              <div className="mb-9">
                <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.35em] mb-4 block">Featured Event Story</span>
                <h2 className="text-3xl md:text-4xl font-bold text-zenith-navy tracking-tight mb-4">Recaps, galleries, and conversations</h2>
                <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">Revisit the ideas and connections that continue beyond the room.</p>
              </div>
              <ContentGrid section="event" variant="archive" />
            </div>

            <aside className="relative overflow-hidden rounded-[2rem] bg-zenith-navy p-8 md:p-10 text-white shadow-[0_28px_70px_-42px_rgba(15,35,68,0.75)]">
              <img src={ZENITH_PEAK_IMAGE} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover object-center opacity-30" />
              <div className="absolute inset-0 bg-gradient-to-b from-zenith-navy/[0.72] via-zenith-navy/[0.88] to-zenith-navy/[0.98]" />
              <CompassMark className="absolute -right-10 -bottom-14 w-56 h-56 opacity-[0.07]" imageClassName="brightness-0 invert" />
              <div className="relative z-10">
                <span className="text-[10px] font-black text-blue-300 uppercase tracking-[0.35em] mb-4 block">Who Is In The Room</span>
                <h2 className="text-3xl font-bold tracking-tight mb-3">Built for decision-makers</h2>
                <p className="text-slate-300 leading-relaxed mb-8">Conferences for the people actively shaping employer-funded healthcare.</p>
                <div className="space-y-3">
                  {[
                    { number: '01', title: 'Employers & CFOs', desc: 'Clarity on self-funded economics and long-term cost strategy.' },
                    { number: '02', title: 'Brokers & Advisors', desc: 'Tools, insight, and partnership models that differentiate.' },
                    { number: '03', title: 'TPAs & Partners', desc: 'Connections with teams building next-generation programs.' },
                  ].map((item) => (
                    <div key={item.title} className="group flex gap-4 rounded-2xl border border-white/[0.12] bg-white/[0.07] p-4 backdrop-blur-sm hover:bg-white/[0.11] hover:border-blue-300/[0.35] transition-all">
                      <span className="text-[10px] font-black text-blue-300 pt-1">{item.number}</span>
                      <div><h3 className="font-bold text-white mb-1">{item.title}</h3><p className="text-sm leading-relaxed text-slate-300">{item.desc}</p></div>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* SECTION 3: CONFERENCE AGENDA */}
      <section id="agenda" className="premium-dark-section relative overflow-hidden py-24">
        <img src={ZENITH_PEAK_IMAGE} alt="" aria-hidden="true" className="absolute right-0 inset-y-0 w-[48%] h-full object-cover opacity-[0.14]" />
        <CompassMark className="absolute -right-10 -top-16 w-80 h-80 opacity-[0.06]" imageClassName="brightness-0 invert" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="text-[11px] font-black text-blue-400 uppercase tracking-[0.4em] mb-4 block">The Schedule</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6">Conference Agenda</h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">A full day designed for depth, not breadth. Every session is built around real-world application.</p>
          </div>
          <div className="max-w-3xl mx-auto rounded-[2rem] border border-white/10 bg-white/[0.045] px-6 sm:px-10 py-4 backdrop-blur-sm">
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
      <section id="series" className="premium-light-section py-24">
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
                <div key={i} className="premium-card rounded-2xl overflow-hidden transition-all">
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
      <section id="register" className="premium-cta py-24">
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
      <section id="speaker" className="premium-light-section py-24">
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
