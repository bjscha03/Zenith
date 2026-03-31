
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

/* ────────────────────────────────────────────────────────────
   Key Takeaways Sidebar
   ──────────────────────────────────────────────────────────── */

const KeyTakeaways: React.FC<{ items: string[] }> = ({ items }) => (
  <div className="bg-slate-50 border border-slate-100 rounded-2xl p-8 mt-2 print-takeaway">
    <h4 className="text-xs font-black uppercase tracking-[0.2em] text-blue-600 mb-6">Key Takeaways</h4>
    <ul className="space-y-4">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 text-sm text-slate-600 leading-relaxed">
          <svg className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
          {item}
        </li>
      ))}
    </ul>
  </div>
);

/* ────────────────────────────────────────────────────────────
   Section anchors for sticky nav
   ──────────────────────────────────────────────────────────── */

const sections = [
  { id: 'strategy', label: 'Strategy' },
  { id: 'inefficiencies', label: 'Inefficiencies' },
  { id: 'risk', label: 'Risk' },
  { id: 'analysis', label: 'Strategic Impact' },
  { id: 'path-forward', label: 'Path Forward' },
];

/* ────────────────────────────────────────────────────────────
   Main Page
   ──────────────────────────────────────────────────────────── */

const ReimaginingHealthInsurance: React.FC = () => {
  const [activeSection, setActiveSection] = useState('strategy');
  const [isNavSticky, setIsNavSticky] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  /* Intersection observer for active section highlighting */
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: '-20% 0px -60% 0px' }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  /* Sticky nav sentinel */
  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        const rect = navRef.current.getBoundingClientRect();
        setIsNavSticky(rect.top <= 80);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 140;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  /* PDF download */
  const handleDownloadPDF = async () => {
    setDownloading(true);
    try {
      const html2pdf = (await import('html2pdf.js')).default;
      const element = contentRef.current;
      if (!element) return;

      const opt = {
        margin: [0.6, 0.7, 0.6, 0.7],
        filename: 'Zenith-Reimagining-Health-Insurance.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true, logging: false },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' as const },
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] },
      };

      await html2pdf().set(opt).from(element).save();
    } catch (err) {
      console.error('PDF generation failed:', err);
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="w-full bg-white">
      {/* ───── Hero ───── */}
      <section className="relative bg-white pt-16 pb-16 md:pt-20 md:pb-20 border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-8">
            <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span className="text-xs font-black uppercase tracking-[0.3em] text-slate-400">
              White Paper&ensp;·&ensp;Zenith Risk Strategies
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05] mb-8">
            <span className="text-zenith-navy">Reimagining</span>
            <br />
            <span className="text-slate-400">Health Insurance</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-500 font-light leading-relaxed max-w-3xl mb-3">
            A Strategic Framework for Financing Employer Healthcare Risk.
          </p>
          <p className="text-lg text-slate-400 font-light max-w-2xl">
            Moving from procurement to financial strategy.
          </p>
        </div>
      </section>

      {/* ───── Sticky Section Navigation ───── */}
      <div ref={navRef} className="sticky top-[64px] md:top-[80px] z-30 bg-white border-b border-slate-100 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            <nav className="flex items-center gap-6 overflow-x-auto no-scrollbar">
              {sections.map((s) => (
                <button
                  key={s.id}
                  onClick={() => scrollTo(s.id)}
                  className={`text-[11px] font-bold uppercase tracking-[0.2em] whitespace-nowrap py-4 border-b-2 transition-colors ${
                    activeSection === s.id
                      ? 'border-blue-600 text-blue-600'
                      : 'border-transparent text-slate-400 hover:text-slate-600'
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </nav>

            <button
              onClick={handleDownloadPDF}
              disabled={downloading}
              className="hidden sm:flex items-center gap-2 px-5 py-2 bg-zenith-navy text-white text-[11px] font-bold uppercase tracking-[0.15em] rounded-lg hover:bg-slate-800 transition-colors disabled:opacity-50 flex-shrink-0 ml-4"
            >
              {downloading ? (
                <>
                  <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Generating…
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M7 10l5 5 5-5M12 15V3" />
                  </svg>
                  Download PDF
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile download button */}
      <div className="sm:hidden sticky top-[120px] z-20 px-4 py-3 bg-white border-b border-slate-100">
        <button
          onClick={handleDownloadPDF}
          disabled={downloading}
          className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-zenith-navy text-white text-[11px] font-bold uppercase tracking-[0.15em] rounded-lg disabled:opacity-50"
        >
          {downloading ? 'Generating PDF…' : (
            <>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M7 10l5 5 5-5M12 15V3" />
              </svg>
              Download PDF
            </>
          )}
        </button>
      </div>

      {/* ───── Content ───── */}
      <div ref={contentRef} className="print-content">
        {/* SECTION 1 – Strategy */}
        <section id="strategy" className="py-14 md:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="text-3xl md:text-4xl font-bold text-zenith-navy mb-8 leading-tight">
                  1. Introduction: The Shift from Procurement to Financial Strategy
                </h2>

                <div className="prose-slate max-w-none space-y-6 text-slate-600 leading-relaxed">
                  <p>
                    In the modern corporate landscape, the persistent treatment of healthcare as a
                    static line-item represents a significant failure in corporate fiduciary duty. For
                    decades, executives have viewed medical benefits as an unavoidable cost of doing
                    business—a procurement exercise where the goal is merely to "buy better."
                  </p>
                  <p>
                    This paradigm is fundamentally flawed. Healthcare is not a commodity to be
                    purchased; it is the <strong>single largest variable financial risk</strong> on
                    most employers' balance sheets. When a mid-market company spends millions
                    annually on healthcare yet applies less analytical rigor to it than it does to a
                    routine equipment lease, the misalignment of oversight is staggering.
                  </p>
                  <p>
                    The question for executive leadership is no longer <em>"How do we buy better
                    insurance?"</em> but rather <em>"How do we finance and manage the underlying
                    healthcare risk itself?"</em>
                  </p>
                  <p>
                    This white paper presents a strategic framework that reframes employer-sponsored
                    health insurance from a passive procurement function into an active financial
                    strategy—one rooted in data, underwriting discipline, and structural innovation.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-1">
                <KeyTakeaways
                  items={[
                    'Healthcare is a financial risk, not a procurement line-item.',
                    'Fully insured plans surrender all underwriting gains to carriers.',
                    'Captives allow mid-market firms to access institutional strategies.',
                    'Data-driven risk management reduces long-term cost volatility.',
                  ]}
                />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2 – Inefficiencies */}
        <section id="inefficiencies" className="py-14 md:py-20 bg-slate-50 border-t border-slate-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="text-3xl md:text-4xl font-bold text-zenith-navy mb-8 leading-tight">
                  2. The Inefficiency of Fully Insured Models
                </h2>

                <div className="prose-slate max-w-none space-y-6 text-slate-600 leading-relaxed">
                  <p>
                    The fully insured model operates on a simple premise: the employer pays a fixed
                    premium, and the carrier assumes all claims risk. On the surface, this appears
                    prudent. In practice, it is the most expensive long-term financing strategy
                    available.
                  </p>

                  <h3 className="text-xl font-bold text-zenith-navy mt-8 mb-4">
                    The Hidden Costs of Risk Transfer
                  </h3>
                  <p>
                    Insurance carriers embed substantial margins into fully insured premiums to
                    compensate for the risk they assume. These margins typically include significant
                    administrative charges, profit loading, and reserve contributions that never
                    return to the employer, even in years of favorable claims experience.
                  </p>

                  <p>
                    In a fully insured arrangement, premium dollars are allocated across actual
                    claims payments, carrier profit and reserves, administrative fees, and premium
                    taxes. Only a portion of each premium dollar is used to pay claims directly—the
                    remainder flows to non-claims expenses that the employer can never recoup.
                  </p>

                  <p>
                    For many employers, this results in a meaningful share of total premium flowing
                    to non-claims costs each year. Over a multi-year period, the cumulative value
                    leakage can be substantial—dollars that could otherwise be retained, invested,
                    or strategically deployed.
                  </p>

                  <h3 className="text-xl font-bold text-zenith-navy mt-8 mb-4">
                    The Renewal Cycle Trap
                  </h3>
                  <p>
                    The annual renewal process reinforces a reactive posture. Employers receive a
                    renewal increase—often well above general inflation—and are forced into a frantic
                    market exercise comparing nearly identical products. This cycle rewards short-term
                    shopping behavior while penalizing long-term strategic investment in population
                    health and risk management.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-1">
                <KeyTakeaways
                  items={[
                    'Fully insured premiums embed significant non-claims costs.',
                    'Employers surrender favorable claims experience to carriers.',
                    'The annual renewal cycle incentivizes short-term thinking.',
                    'Risk avoidance is not risk management—it is cost escalation.',
                  ]}
                />

                <div className="mt-10 bg-white border border-slate-200 rounded-2xl p-8 print-takeaway">
                  <h4 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-4">The Core Issue</h4>
                  <div className="space-y-6 text-sm text-slate-600 leading-relaxed">
                    <p>
                      A significant share of every fully insured premium dollar goes to non-claims expenses—carrier profit, administrative overhead, reserves, and taxes—that the employer can never recoup.
                    </p>
                    <div className="border-t border-slate-100 pt-6">
                      <p>
                        Annual renewal increases often outpace general inflation, compounding over time and eroding the employer's ability to invest in population health.
                      </p>
                    </div>
                    <div className="border-t border-slate-100 pt-6">
                      <p>
                        Over a multi-year horizon, cumulative value leakage from embedded carrier margins can represent a material financial opportunity cost.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3 – Risk */}
        <section id="risk" className="py-14 md:py-20 border-t border-slate-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="text-3xl md:text-4xl font-bold text-zenith-navy mb-8 leading-tight">
                  3. Understanding Risk Financing Structures
                </h2>

                <div className="prose-slate max-w-none space-y-6 text-slate-600 leading-relaxed">
                  <p>
                    Between the fully insured model and unprotected self-insurance lies a spectrum
                    of risk financing strategies that allow employers to retain favorable experience
                    while transferring catastrophic exposure. The key structures include:
                  </p>

                  <h3 className="text-xl font-bold text-zenith-navy mt-8 mb-4">
                    Level-Funded Plans
                  </h3>
                  <p>
                    A level-funded arrangement provides budgetary predictability similar to a fully
                    insured plan while allowing the employer to benefit from favorable claims
                    experience. Monthly payments are fixed, but surplus funds—the difference between
                    projected and actual claims—are returned to the employer.
                  </p>

                  <h3 className="text-xl font-bold text-zenith-navy mt-8 mb-4">
                    Self-Funded with Stop Loss
                  </h3>
                  <p>
                    Self-funded employers pay claims directly and purchase stop-loss insurance to
                    cap exposure at both the individual (specific) and aggregate levels. This
                    structure provides maximum control over plan design, vendor selection, and data
                    access—advantages that are impossible under a fully insured arrangement.
                  </p>

                  <h3 className="text-xl font-bold text-zenith-navy mt-8 mb-4">
                    Captive Stop-Loss Programs
                  </h3>
                  <p>
                    Captive structures represent the most sophisticated tier of employer risk
                    financing. By pooling risk across a group of like-minded employers within a
                    regulated captive insurance entity, participants access institutional-grade
                    reinsurance pricing, share in collective underwriting profit, and gain
                    transparency into the full insurance value chain.
                  </p>

                  <p>
                    Today, a growing number of employers are moving along the risk financing
                    spectrum—from fully insured to level-funded, self-funded, and captive
                    arrangements. While fully insured plans remain common, adoption of alternative
                    structures continues to accelerate as employers seek greater control, transparency,
                    and long-term cost stability.
                  </p>

                  {/* Industry Insight — placed inline with content */}
                  <div className="bg-blue-600 text-white rounded-2xl p-8 my-8 print-takeaway">
                    <h4 className="text-xs font-black uppercase tracking-[0.2em] text-blue-200 mb-4">Industry Insight</h4>
                    <p className="text-sm leading-relaxed text-blue-100">
                      "Employers who transition from fully insured to a self-funded captive model
                      can realize meaningful cumulative savings depending on structure, execution,
                      and population profile—while gaining access to granular claims data that
                      enables proactive risk management."
                    </p>
                    <p className="mt-4 text-xs font-bold text-blue-200">— Zenith Risk Strategies</p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-1">
                <KeyTakeaways
                  items={[
                    'Level-funded plans return surplus claims dollars to employers.',
                    'Self-funding provides full control over plan design and data.',
                    'Stop-loss caps catastrophic exposure at defined thresholds.',
                    'Captives unlock institutional reinsurance and collective underwriting profit.',
                  ]}
                />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4 – Strategic Impact */}
        <section id="analysis" className="py-14 md:py-20 bg-slate-50 border-t border-slate-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="text-3xl md:text-4xl font-bold text-zenith-navy mb-8 leading-tight">
                  4. Strategic Impact: Understanding the Financial Advantage
                </h2>

                <div className="prose-slate max-w-none space-y-6 text-slate-600 leading-relaxed">
                  <p>
                    The financial case for alternative risk financing is compelling when examined
                    through rigorous actuarial analysis. When modeling a representative mid-market
                    employer across fully insured, self-funded, and captive structures over a
                    multi-year horizon, the total cost-of-risk differences are often significant.
                  </p>

                  <p>
                    In many cases, captive and self-funded structures demonstrate materially lower
                    total costs compared to fully insured arrangements over a five-year period. The
                    magnitude of the difference depends on plan design, population health profile,
                    and the employer's risk tolerance.
                  </p>

                  <h3 className="text-xl font-bold text-zenith-navy mt-8 mb-4">
                    Savings Decomposition
                  </h3>
                  <p>
                    The savings in a captive model derive from multiple compounding sources, not
                    merely reduced premiums:
                  </p>

                  <div className="grid sm:grid-cols-2 gap-6 my-8">
                    {[
                      {
                        label: 'Carrier Margin Elimination',
                        desc: 'Removing embedded profit and reserve charges that are built into fully insured premiums.',
                      },
                      {
                        label: 'Premium Tax Avoidance',
                        desc: 'Captive structures are designed to avoid certain state premium taxes that apply to fully insured plans.',
                      },
                      {
                        label: 'Underwriting Profit Sharing',
                        desc: 'Favorable claims experience returns to captive members rather than being retained by the carrier.',
                      },
                      {
                        label: 'Clinical Program ROI',
                        desc: 'Targeted cost containment and care management programs are designed to generate meaningful returns over time.',
                      },
                    ].map((item, idx) => (
                      <div key={idx} className="bg-white border border-slate-200 rounded-xl p-6">
                        <div className="text-sm font-bold text-zenith-navy mb-2">{item.label}</div>
                        <div className="text-xs text-slate-500">{item.desc}</div>
                      </div>
                    ))}
                  </div>

                  <h3 className="text-xl font-bold text-zenith-navy mt-8 mb-4">
                    Pharmacy: The Fastest-Growing Cost Driver
                  </h3>
                  <p>
                    Specialty pharmacy now represents a substantial and growing share of total drug
                    spend for many self-funded plans, driven by GLP-1 therapies, cell and gene
                    therapies, and biosimilar adoption dynamics. Transparent PBM arrangements within
                    a captive framework enables employers to meaningfully reduce pharmacy costs compared to
                    traditional spread pricing models.
                  </p>

                  <p>
                    Beyond specialty drugs, plan costs are typically distributed across brand name
                    drugs, generics, and compounding or other categories. Understanding this
                    distribution is essential to designing effective pharmacy management strategies.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-1">
                <KeyTakeaways
                  items={[
                    'Captive programs are structured to reduce long-term costs vs. fully insured.',
                    'Savings compound across carrier margins, taxes, and underwriting profit.',
                    'Specialty pharmacy is the largest growth driver in self-funded plans.',
                    'Transparent PBM models enable employers to meaningfully reduce costs over traditional spread pricing.',
                  ]}
                />

                <div className="mt-10 bg-white border border-slate-200 rounded-2xl p-8 print-takeaway">
                  <h4 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-6">Strategic Considerations</h4>
                  <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
                    <p>
                      The magnitude of savings depends on employer size, population health profile, plan design, and risk tolerance. A thorough actuarial analysis tailored to each employer's specific circumstances is essential before transitioning structures.
                    </p>
                    <div className="border-t border-slate-100 pt-4">
                      <p>
                        Multi-year modeling across fully insured, self-funded, and captive scenarios provides the clearest picture of total cost-of-risk differences and informs the optimal financing strategy.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5 – Path Forward */}
        <section id="path-forward" className="py-14 md:py-20 border-t border-slate-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="text-3xl md:text-4xl font-bold text-zenith-navy mb-8 leading-tight">
                  5. The Path Forward: Building a Healthcare Risk Strategy
                </h2>

                <div className="prose-slate max-w-none space-y-6 text-slate-600 leading-relaxed">
                  <p>
                    Transitioning from a procurement mindset to a risk management strategy requires
                    organizational commitment and the right advisory partnership. The following
                    framework outlines the progression:
                  </p>

                  {/* Roadmap */}
                  <div className="my-10 space-y-0">
                    {[
                      {
                        phase: 'Phase 1',
                        title: 'Diagnostic Assessment',
                        desc: 'Comprehensive review of current plan design, claims history, vendor contracts, and population health data to establish a risk baseline.',
                        time: 'Month 1–2',
                      },
                      {
                        phase: 'Phase 2',
                        title: 'Structure Design',
                        desc: 'Evaluate level-funded, self-funded, and captive options. Model projected total cost of risk over multi-year horizons under each structure.',
                        time: 'Month 2–3',
                      },
                      {
                        phase: 'Phase 3',
                        title: 'Implementation',
                        desc: 'Execute the chosen strategy with best-in-class vendor partners, transparent pharmacy arrangements, and clinical cost containment programs.',
                        time: 'Month 3–6',
                      },
                      {
                        phase: 'Phase 4',
                        title: 'Ongoing Stewardship',
                        desc: 'Monthly claims monitoring, quarterly actuarial reviews, annual strategy recalibration, and continuous population health investment.',
                        time: 'Ongoing',
                      },
                    ].map((step, idx) => (
                      <div key={idx} className="flex gap-6">
                        <div className="flex flex-col items-center">
                          <div className="w-10 h-10 rounded-full bg-zenith-navy text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                            {idx + 1}
                          </div>
                          {idx < 3 && <div className="w-0.5 flex-grow bg-slate-200 my-1" />}
                        </div>
                        <div className="pb-10">
                          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600">
                            {step.phase} · {step.time}
                          </span>
                          <h4 className="text-lg font-bold text-zenith-navy mt-2 mb-2">{step.title}</h4>
                          <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <h3 className="text-xl font-bold text-zenith-navy mt-8 mb-4">
                    Conclusion
                  </h3>
                  <p>
                    The era of passively renewing health insurance is ending. Organizations that
                    treat healthcare as a strategic financial risk—applying the same rigor they
                    bring to capital allocation, treasury management, and enterprise risk—will
                    achieve materially better outcomes for their employees and their bottom line.
                  </p>
                  <p>
                    Zenith Risk Strategies exists to engineer this alignment. Through disciplined
                    underwriting, innovative captive structures, and transparent advisory
                    partnerships, we help employers reclaim control of their largest variable cost
                    and transform it into a strategic advantage.
                  </p>
                  <p className="italic text-slate-500 border-l-4 border-blue-600 pl-6 mt-8">
                    For organizations evaluating a transition away from fully insured models, a
                    structured diagnostic is the first step toward understanding the true financial
                    opportunity.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-1">
                <KeyTakeaways
                  items={[
                    'A diagnostic assessment establishes the risk baseline.',
                    'Structure design should model multi-year total cost projections across scenarios.',
                    'Implementation requires best-in-class vendor partnerships.',
                    'Ongoing stewardship ensures continuous optimization.',
                  ]}
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-zenith-navy text-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
              Ready to reimagine your <span className="text-blue-400">healthcare strategy</span>?
            </h2>
            <p className="text-slate-300 text-lg font-light mb-10 max-w-2xl mx-auto leading-relaxed">
              Zenith Risk Strategies partners with forward-thinking employers and advisors to
              engineer better outcomes. Let's start the conversation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white text-[11px] font-bold uppercase tracking-[0.2em] rounded-lg transition-colors"
              >
                Contact Us
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              <Link
                to="/resources"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-slate-500 text-slate-300 hover:text-white hover:border-white text-[11px] font-bold uppercase tracking-[0.2em] rounded-lg transition-colors"
              >
                Back to Resources
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* Print / PDF styles */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

        @media print {
          .print-content { padding: 0; }
          .print-content section { padding-top: 1.5rem; padding-bottom: 1.5rem; }
          .print-takeaway { break-inside: avoid; page-break-inside: avoid; }
          section { break-inside: avoid; page-break-inside: avoid; }
          h2, h3, h4 { break-after: avoid; page-break-after: avoid; }
          p { orphans: 3; widows: 3; }
        }
      `}</style>
    </div>
  );
};

export default ReimaginingHealthInsurance;
