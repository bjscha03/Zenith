import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

const EVENTBRITE = 'https://www.eventbrite.com/o/zenith-risk-strategies-120923310117';

const ConferenceSeries: React.FC = () => {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  const scrollTo = (index: number) => {
    sectionRefs.current[index]?.scrollIntoView({ behavior: 'smooth' });
  };

  const ArrowButton = ({ direction, onClick }: { direction: 'left' | 'right'; onClick: () => void }) => (
    <button onClick={onClick} className={`absolute top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-zenith-navy/80 hover:bg-zenith-navy text-white flex items-center justify-center transition-all shadow-lg backdrop-blur-sm ${direction === 'left' ? 'left-4' : 'right-4'}`}>
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={direction === 'left' ? 'M15 19l-7-7 7-7' : 'M9 5l7 7-7 7'} />
      </svg>
    </button>
  );

  return (
    <div className="w-full">
      {/* PAGE HEADER */}
      <div className="bg-white py-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-zenith-navy tracking-tight">2026 ZENITH CONFERENCE SERIES</h1>
      </div>

      {/* SECTION 1: DALLAS */}
      <section ref={(el) => { sectionRefs.current[0] = el; }} className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1545194445-dddb8f4487c6?q=80&w=2070&auto=format&fit=crop')" }}></div>
        <div className="absolute inset-0 bg-black/40"></div>
        {scrollTo && (
          <>
            {0 > 0 && <ArrowButton direction="left" onClick={() => scrollTo(0)} />}
            <ArrowButton direction="right" onClick={() => scrollTo(1)} />
          </>
        )}
        <div className="relative z-10 w-[90%] max-w-4xl mx-auto bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 md:p-14 overflow-y-auto max-h-[85vh]">
          <h2 className="text-3xl md:text-5xl font-bold text-zenith-navy tracking-tight mb-2 text-center">BUCA VS BLUEBONNETS</h2>
          <p className="text-center text-slate-500 font-medium mb-10">April 23, 2026 | Dallas, TX</p>

          <h3 className="text-[11px] font-black text-blue-400 uppercase tracking-[0.4em] mb-6">Who This Summit Is For</h3>

          <div className="space-y-4 mb-10">
            <div>
              <h4 className="text-lg font-bold text-zenith-navy">Regional &amp; National Brokers</h4>
              <p className="text-slate-600 leading-relaxed">Advising growing employer groups navigating renewal volatility and scaling plan complexity.</p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-zenith-navy">TPAs and Plan Architects</h4>
              <p className="text-slate-600 leading-relaxed">Designing funding, network, and operational structure under growth pressure.</p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-zenith-navy">Employer CFOs &amp; HR Leaders (50–500 lives)</h4>
              <p className="text-slate-600 leading-relaxed">CFOs and HR leaders responsible for balancing cost predictability with employee access.</p>
            </div>
          </div>
          <h3 className="text-[11px] font-black text-blue-400 uppercase tracking-[0.4em] mb-6">Strategic Focus</h3>
          <div className="space-y-4 mb-10">
            <div>
              <h4 className="text-lg font-bold text-zenith-navy">Captives as Architecture Under Scale</h4>
              <p className="text-slate-600 leading-relaxed">How structure—not size—determines long-term plan performance.</p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-zenith-navy">Access Before Insurance</h4>
              <p className="text-slate-600 leading-relaxed">Reframing healthcare purchasing around utilization and outcomes.</p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-zenith-navy">Networks With Intention</h4>
              <p className="text-slate-600 leading-relaxed">Moving beyond default carrier pathways toward governed design.</p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-zenith-navy">Predictable Surgery &amp; Stop-Loss Discipline</h4>
              <p className="text-slate-600 leading-relaxed">Controlling volatility through proactive strategy rather than reactive renewal.</p>
            </div>
          </div>
          <h3 className="text-[11px] font-black text-blue-400 uppercase tracking-[0.4em] mb-6">Why This Summit Exists</h3>
          <p className="text-slate-600 leading-relaxed mb-4">Dallas represents one of the fastest-scaling benefits markets in the country. Growth happens quickly — but structure often lags.</p>
          <div className="bg-slate-50 rounded-lg p-6 mb-10">
            <p className="text-slate-700 font-medium mb-2">✅ Bluebonnet Growth: intentional, governed, structured</p>
            <p className="text-slate-500">❌ BUCA Growth: reactive expansion driven by default solutions</p>
          </div>
          <h3 className="text-[11px] font-black text-blue-400 uppercase tracking-[0.4em] mb-6">Format Highlights</h3>
          <ul className="space-y-2 text-slate-600 mb-10">
            <li>Journal-First Opening Session</li>
            <li>Executive Roundtable Working Sessions</li>
            <li>Broker Hot Seat Panel</li>
            <li>No Vendor Booths</li>
            <li>Private Networking Reception</li>
          </ul>
          <div className="text-center">
            <a href={EVENTBRITE} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-10 py-5 bg-zenith-blue text-white font-black text-[11px] uppercase tracking-[0.3em] rounded hover:bg-blue-600 transition-all">Register Today</a>
          </div>
        </div>
      </section>

      {/* SECTION 2: HILTON HEAD */}
      <section ref={(el) => { sectionRefs.current[1] = el; }} className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?q=80&w=2070&auto=format&fit=crop')" }}></div>
        <div className="absolute inset-0 bg-black/40"></div>
        <ArrowButton direction="left" onClick={() => scrollTo(0)} />
        <ArrowButton direction="right" onClick={() => scrollTo(2)} />
        <div className="relative z-10 w-[90%] max-w-4xl mx-auto bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 md:p-14 overflow-y-auto max-h-[85vh]">
          <h2 className="text-3xl md:text-5xl font-bold text-zenith-navy tracking-tight mb-2 text-center">LOWCOUNTRY LOGIC</h2>
          <p className="text-center text-slate-500 font-medium mb-10">May 2026 | Hilton Head, SC</p>
          <h3 className="text-[11px] font-black text-blue-400 uppercase tracking-[0.4em] mb-6">Who This Summit Is For</h3>
          <ul className="space-y-2 text-slate-600 mb-10">
            <li>Regional &amp; Independent Brokers</li>
            <li>TPAs &amp; Strategic Advisors</li>
            <li>Employer Leadership (50–500 lives)</li>
          </ul>
          <h3 className="text-[11px] font-black text-blue-400 uppercase tracking-[0.4em] mb-6">Strategic Focus</h3>
          <ul className="space-y-2 text-slate-600 mb-10">
            <li>Long-Term Plan Governance</li>
            <li>Funding Strategy With Intention</li>
            <li>Network Simplicity &amp; Alignment</li>
            <li>Sustainable Cost Containment</li>
          </ul>
          <h3 className="text-[11px] font-black text-blue-400 uppercase tracking-[0.4em] mb-6">Why This Summit Exists</h3>
          <p className="text-slate-600 leading-relaxed mb-10">The Hilton Head Summit explores how disciplined decision-making creates healthcare plans that perform consistently over time.</p>
          <h3 className="text-[11px] font-black text-blue-400 uppercase tracking-[0.4em] mb-6">Format Highlights</h3>
          <ul className="space-y-2 text-slate-600 mb-10">
            <li>Journal-First Opening Session</li>
            <li>Facilitated Roundtable Conversations</li>
            <li>Strategy Case Discussions</li>
            <li>No Vendor Booths</li>
            <li>Coastal Networking Reception</li>
          </ul>
          <div className="text-center">
            <a href={EVENTBRITE} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-10 py-5 bg-zenith-blue text-white font-black text-[11px] uppercase tracking-[0.3em] rounded hover:bg-blue-600 transition-all">Register Today</a>
          </div>
        </div>
      </section>

      {/* SECTION 3: DENVER */}
      <section ref={(el) => { sectionRefs.current[2] = el; }} className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1546156929-a4c0ac411f47?q=80&w=2070&auto=format&fit=crop')" }}></div>
        <div className="absolute inset-0 bg-black/40"></div>
        <ArrowButton direction="left" onClick={() => scrollTo(1)} />
        <div className="relative z-10 w-[90%] max-w-4xl mx-auto bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 md:p-14">
          <h2 className="text-3xl md:text-5xl font-bold text-zenith-navy tracking-tight mb-2 text-center">REACHING BENEFITS HEIGHTS</h2>
          <p className="text-center text-slate-500 font-medium mb-10">August 2026 | Denver, CO</p>
          <p className="text-slate-600 leading-relaxed text-center mb-10">Long-range planning, sustainability, and systems that hold at altitude.</p>
          <div className="text-center">
            <a href={EVENTBRITE} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-10 py-5 bg-zenith-blue text-white font-black text-[11px] uppercase tracking-[0.3em] rounded hover:bg-blue-600 transition-all">RSVP</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConferenceSeries;
