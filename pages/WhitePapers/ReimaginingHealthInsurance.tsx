
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

/* ────────────────────────────────────────────────────────────
   Chart Components – lightweight SVG, no external library
   ──────────────────────────────────────────────────────────── */

const BarChart: React.FC<{
  data: { label: string; value: number; color?: string }[];
  title: string;
  unit?: string;
}> = ({ data, title, unit = '%' }) => {
  const max = Math.max(...data.map((d) => d.value));
  return (
    <div className="my-10">
      <h4 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-6">{title}</h4>
      <div className="space-y-4">
        {data.map((d, i) => (
          <div key={i}>
            <div className="flex justify-between mb-1.5">
              <span className="text-sm font-semibold text-slate-700">{d.label}</span>
              <span className="text-sm font-bold text-slate-900">
                {d.value}{unit}
              </span>
            </div>
            <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-1000"
                style={{
                  width: `${(d.value / max) * 100}%`,
                  backgroundColor: d.color || '#16365d',
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const DonutChart: React.FC<{
  segments: { label: string; value: number; color: string }[];
  title: string;
  centerLabel?: string;
}> = ({ segments, title, centerLabel }) => {
  const total = segments.reduce((s, d) => s + d.value, 0);
  const radius = 60;
  const stroke = 20;
  const circumference = 2 * Math.PI * radius;
  let offset = 0;

  return (
    <div className="my-10">
      <h4 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-6">{title}</h4>
      <div className="flex flex-col sm:flex-row items-center gap-8">
        <svg width="160" height="160" viewBox="0 0 160 160" className="flex-shrink-0">
          {segments.map((seg, i) => {
            const pct = seg.value / total;
            const dash = pct * circumference;
            const gap = circumference - dash;
            const currentOffset = offset;
            offset += dash;
            return (
              <circle
                key={i}
                cx="80"
                cy="80"
                r={radius}
                fill="none"
                stroke={seg.color}
                strokeWidth={stroke}
                strokeDasharray={`${dash} ${gap}`}
                strokeDashoffset={-currentOffset}
                strokeLinecap="butt"
                transform="rotate(-90 80 80)"
              />
            );
          })}
          {centerLabel && (
            <text x="80" y="84" textAnchor="middle" className="fill-slate-800 text-lg font-bold">
              {centerLabel}
            </text>
          )}
        </svg>
        <div className="space-y-2">
          {segments.map((seg, i) => (
            <div key={i} className="flex items-center gap-3 text-sm">
              <span className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: seg.color }} />
              <span className="text-slate-600">{seg.label}</span>
              <span className="font-bold text-slate-800 ml-auto">{seg.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

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
  { id: 'analysis', label: 'Analysis' },
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
        margin: [0.5, 0.6, 0.5, 0.6],
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
      <section className="relative bg-white pt-16 pb-20 md:pt-24 md:pb-28 border-b border-slate-100">
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
        <section id="strategy" className="py-20 md:py-28">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-16">
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
                    most employers' balance sheets. When a mid-market company spends $8–15 million
                    annually on healthcare yet applies less analytical rigor to it than it does to a
                    $500,000 equipment lease, the misalignment of oversight is staggering.
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
        <section id="inefficiencies" className="py-20 md:py-28 bg-slate-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-16">
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

                  <h3 className="text-xl font-bold text-zenith-navy mt-10 mb-4">
                    The Hidden Costs of Risk Transfer
                  </h3>
                  <p>
                    Insurance carriers embed substantial margins into fully insured premiums to
                    compensate for the risk they assume. These margins typically include 12–18% in
                    administrative charges, profit loading, and reserve contributions that never
                    return to the employer, even in years of favorable claims experience.
                  </p>

                  <BarChart
                    title="Premium Allocation — Fully Insured Model"
                    data={[
                      { label: 'Actual Claims Paid', value: 68, color: '#16365d' },
                      { label: 'Carrier Profit & Reserves', value: 14, color: '#3b82f6' },
                      { label: 'Administrative Fees', value: 12, color: '#94a3b8' },
                      { label: 'Premium Tax & Assessments', value: 6, color: '#cbd5e1' },
                    ]}
                  />

                  <p>
                    For a company paying $10 million in annual premium, approximately $3.2 million
                    flows to non-claims expenses. Over a five-year period, this translates to $16
                    million in value leakage that could otherwise be retained, invested, or
                    strategically deployed.
                  </p>

                  <h3 className="text-xl font-bold text-zenith-navy mt-10 mb-4">
                    The Renewal Cycle Trap
                  </h3>
                  <p>
                    The annual renewal process reinforces a reactive posture. Employers receive a
                    renewal increase—often 8–14%—and are forced into a frantic market exercise
                    comparing nearly identical products. This cycle rewards short-term shopping
                    behavior while penalizing long-term strategic investment in population health and
                    risk management.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-1">
                <KeyTakeaways
                  items={[
                    'Fully insured premiums embed 12–18% in non-claims costs.',
                    'Employers surrender favorable claims experience to carriers.',
                    'The annual renewal cycle incentivizes short-term thinking.',
                    'Risk avoidance is not risk management—it is cost escalation.',
                  ]}
                />

                <div className="mt-10 bg-white border border-slate-200 rounded-2xl p-8 print-takeaway">
                  <h4 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-4">By The Numbers</h4>
                  <div className="space-y-6">
                    <div>
                      <div className="text-4xl font-extrabold text-zenith-navy">$3.2M</div>
                      <div className="text-sm text-slate-500 mt-1">Annual non-claims leakage on a $10M premium</div>
                    </div>
                    <div className="border-t border-slate-100 pt-6">
                      <div className="text-4xl font-extrabold text-blue-600">8–14%</div>
                      <div className="text-sm text-slate-500 mt-1">Typical annual renewal increase</div>
                    </div>
                    <div className="border-t border-slate-100 pt-6">
                      <div className="text-4xl font-extrabold text-zenith-navy">5yr</div>
                      <div className="text-sm text-slate-500 mt-1">$16M cumulative value leakage</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3 – Risk */}
        <section id="risk" className="py-20 md:py-28">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-16">
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

                  <h3 className="text-xl font-bold text-zenith-navy mt-10 mb-4">
                    Level-Funded Plans
                  </h3>
                  <p>
                    A level-funded arrangement provides budgetary predictability similar to a fully
                    insured plan while allowing the employer to benefit from favorable claims
                    experience. Monthly payments are fixed, but surplus funds—the difference between
                    projected and actual claims—are returned to the employer.
                  </p>

                  <h3 className="text-xl font-bold text-zenith-navy mt-10 mb-4">
                    Self-Funded with Stop Loss
                  </h3>
                  <p>
                    Self-funded employers pay claims directly and purchase stop-loss insurance to
                    cap exposure at both the individual (specific) and aggregate levels. This
                    structure provides maximum control over plan design, vendor selection, and data
                    access—advantages that are impossible under a fully insured arrangement.
                  </p>

                  <h3 className="text-xl font-bold text-zenith-navy mt-10 mb-4">
                    Captive Stop-Loss Programs
                  </h3>
                  <p>
                    Captive structures represent the most sophisticated tier of employer risk
                    financing. By pooling risk across a group of like-minded employers within a
                    regulated captive insurance entity, participants access institutional-grade
                    reinsurance pricing, share in collective underwriting profit, and gain
                    transparency into the full insurance value chain.
                  </p>

                  <DonutChart
                    title="Risk Financing Spectrum — Employer Adoption (2025)"
                    segments={[
                      { label: 'Fully Insured', value: 40, color: '#cbd5e1' },
                      { label: 'Level-Funded', value: 18, color: '#94a3b8' },
                      { label: 'Self-Funded (Traditional)', value: 28, color: '#3b82f6' },
                      { label: 'Captive / Group Captive', value: 14, color: '#16365d' },
                    ]}
                    centerLabel="100%"
                  />
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

                <div className="mt-10 bg-blue-600 text-white rounded-2xl p-8 print-takeaway">
                  <h4 className="text-xs font-black uppercase tracking-[0.2em] text-blue-200 mb-4">Industry Insight</h4>
                  <p className="text-sm leading-relaxed text-blue-100">
                    "Employers who transition from fully insured to a self-funded captive model
                    typically realize 15–30% cumulative savings over a three-year period while
                    gaining access to granular claims data that enables proactive risk management."
                  </p>
                  <p className="mt-4 text-xs font-bold text-blue-200">— Zenith Risk Strategies</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4 – Analysis */}
        <section id="analysis" className="py-20 md:py-28 bg-slate-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-16">
              <div className="lg:col-span-2">
                <h2 className="text-3xl md:text-4xl font-bold text-zenith-navy mb-8 leading-tight">
                  4. Data-Driven Analysis: Quantifying the Strategic Advantage
                </h2>

                <div className="prose-slate max-w-none space-y-6 text-slate-600 leading-relaxed">
                  <p>
                    The financial case for alternative risk financing is compelling when examined
                    through rigorous actuarial analysis. Below, we model a representative mid-market
                    employer (500 employees, $12M annual healthcare spend) across three financing
                    structures over a five-year horizon.
                  </p>

                  <BarChart
                    title="5-Year Total Cost of Risk — $12M Annual Spend"
                    unit="M"
                    data={[
                      { label: 'Fully Insured', value: 78.2, color: '#cbd5e1' },
                      { label: 'Self-Funded + Stop Loss', value: 67.8, color: '#3b82f6' },
                      { label: 'Captive Program', value: 61.5, color: '#16365d' },
                    ]}
                  />

                  <h3 className="text-xl font-bold text-zenith-navy mt-10 mb-4">
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
                        value: '8–12%',
                        desc: 'Removing embedded profit & reserve charges',
                      },
                      {
                        label: 'Premium Tax Avoidance',
                        value: '2–3%',
                        desc: 'Captive structures avoid state premium taxes',
                      },
                      {
                        label: 'Underwriting Profit Sharing',
                        value: '5–15%',
                        desc: 'Favorable experience returns to the captive members',
                      },
                      {
                        label: 'Clinical Program ROI',
                        value: '3–8%',
                        desc: 'Cost containment and care management savings',
                      },
                    ].map((item, idx) => (
                      <div key={idx} className="bg-white border border-slate-200 rounded-xl p-6">
                        <div className="text-2xl font-extrabold text-blue-600 mb-1">{item.value}</div>
                        <div className="text-sm font-bold text-zenith-navy mb-2">{item.label}</div>
                        <div className="text-xs text-slate-500">{item.desc}</div>
                      </div>
                    ))}
                  </div>

                  <h3 className="text-xl font-bold text-zenith-navy mt-10 mb-4">
                    Pharmacy: The Fastest-Growing Cost Driver
                  </h3>
                  <p>
                    Specialty pharmacy now represents over 50% of total drug spend for many
                    self-funded plans, driven by GLP-1 therapies, cell and gene therapies, and
                    biosimilar adoption dynamics. Transparent PBM arrangements within a captive
                    framework can reduce pharmacy costs by 18–25% compared to traditional spread
                    pricing models.
                  </p>

                  <BarChart
                    title="Pharmacy Cost Distribution — Self-Funded Plans"
                    data={[
                      { label: 'Specialty Pharmacy', value: 52, color: '#16365d' },
                      { label: 'Brand Name Drugs', value: 22, color: '#3b82f6' },
                      { label: 'Generic Drugs', value: 18, color: '#94a3b8' },
                      { label: 'Compounding & Other', value: 8, color: '#cbd5e1' },
                    ]}
                  />
                </div>
              </div>

              <div className="lg:col-span-1">
                <KeyTakeaways
                  items={[
                    'Captive programs can reduce 5-year costs by 21% vs. fully insured.',
                    'Savings compound across carrier margins, taxes, and underwriting profit.',
                    'Specialty pharmacy is the largest growth driver in self-funded plans.',
                    'Transparent PBM models save 18–25% over traditional spread pricing.',
                  ]}
                />

                <div className="mt-10 bg-white border border-slate-200 rounded-2xl p-8 print-takeaway">
                  <h4 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-6">Model Assumptions</h4>
                  <div className="space-y-4 text-sm text-slate-600">
                    <div className="flex justify-between">
                      <span>Employer Size</span>
                      <span className="font-bold text-slate-800">500 EEs</span>
                    </div>
                    <div className="border-t border-slate-100" />
                    <div className="flex justify-between">
                      <span>Annual Spend</span>
                      <span className="font-bold text-slate-800">$12M</span>
                    </div>
                    <div className="border-t border-slate-100" />
                    <div className="flex justify-between">
                      <span>Trend Factor</span>
                      <span className="font-bold text-slate-800">7.5% / yr</span>
                    </div>
                    <div className="border-t border-slate-100" />
                    <div className="flex justify-between">
                      <span>Projection Period</span>
                      <span className="font-bold text-slate-800">5 Years</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5 – Path Forward */}
        <section id="path-forward" className="py-20 md:py-28">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-16">
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
                        desc: 'Evaluate level-funded, self-funded, and captive options. Model projected total cost of risk over 3- and 5-year horizons under each structure.',
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

                  <h3 className="text-xl font-bold text-zenith-navy mt-10 mb-4">
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
                </div>
              </div>

              <div className="lg:col-span-1">
                <KeyTakeaways
                  items={[
                    'A diagnostic assessment establishes the risk baseline.',
                    'Structure design should model 3- and 5-year total cost projections.',
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
          .print-takeaway { break-inside: avoid; }
          section { break-inside: avoid; }
        }
      `}</style>
    </div>
  );
};

export default ReimaginingHealthInsurance;
