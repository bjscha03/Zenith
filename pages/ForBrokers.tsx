
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ForBrokers: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is your typical turnaround time for a firm proposal?",
      answer: "We aim for a 48-hour initial submission review and a 5–7 business day turnaround for firm proposals, provided all required data is received."
    },
    {
      question: "What group sizes are the best fit for Zenith?",
      answer: "Our sweet spot is 10 to 500 employee lives. We specialize in both level-funded platforms for smaller groups and complex self-funded or captive structures for larger employers."
    },
    {
      question: "Do you offer any co-branding for broker presentations?",
      answer: "Yes. We provide full proposal support including co-branded pitch decks, clinical impact summaries, and actuarial analysis to help you demonstrate value to your clients."
    },
    {
      question: "How do you handle high-cost claimants mid-year?",
      answer: "Our clinical stewardship team monitors claims in real-time. We provide you with intervention summaries and proactive reporting so you can keep your client informed before the renewal."
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-slate-50 py-24 md:py-32 border-b border-slate-200 relative overflow-hidden">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <span className="text-[11px] font-black text-blue-600 uppercase tracking-[0.4em] mb-6 block">Broker Partnership</span>
            <h1 className="text-4xl md:text-6xl font-bold text-zenith-navy leading-tight tracking-tight mb-8">
              Built for Brokers Who Want to <br/>
              <span className="text-zenith-blue italic decoration-blue-500/30 underline underline-offset-8 decoration-4">Win Renewals</span> Not Defend Them.
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed font-light max-w-2xl">
              We provide the technical scaffolding and clinical oversight that turns stop-loss from a commodity into a strategic advantage.
            </p>
          </div>
        </div>
      </section>

      {/* Submission Requirements Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="bg-zenith-navy p-12 rounded-3xl text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V7h2v9zm4 0h-2V7h2v9z" />
                </svg>
              </div>
              <h2 className="text-[12px] font-black text-blue-400 uppercase tracking-[0.3em] mb-10">Submission Pipeline</h2>
              <h3 className="text-2xl font-bold mb-8">Submission Requirements</h3>
              
              <div className="space-y-8 mb-12">
                <div>
                  <h4 className="text-blue-400 text-xs font-black uppercase tracking-widest mb-4">Required Documents</h4>
                  <ul className="space-y-3 text-slate-300 text-sm font-light">
                    <li className="flex items-center"><span className="w-1 h-1 bg-blue-500 rounded-full mr-3"></span> Current Census (Excel format)</li>
                    <li className="flex items-center"><span className="w-1 h-1 bg-blue-500 rounded-full mr-3"></span> 24 Months of Monthly Claims & Enrollment</li>
                    <li className="flex items-center"><span className="w-1 h-1 bg-blue-500 rounded-full mr-3"></span> Current & Renewal Stop-Loss Terms</li>
                    <li className="flex items-center"><span className="w-1 h-1 bg-blue-500 rounded-full mr-3"></span> Large Claim Reports (over 50% of spec)</li>
                    <li className="flex items-center"><span className="w-1 h-1 bg-blue-500 rounded-full mr-3"></span> Summary of Benefits (SBCs)</li>
                  </ul>
                </div>
              </div>

              <a 
                href="#" 
                className="inline-flex items-center px-8 py-4 bg-white text-zenith-navy font-black text-[10px] uppercase tracking-widest rounded group hover:bg-blue-50 transition-all"
              >
                <svg className="w-4 h-4 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M7 10l5 5 5-5M12 15V3" />
                </svg>
                Download Checklist (.PDF)
              </a>
            </div>

            <div className="py-8">
              <h2 className="text-[12px] font-black text-slate-400 uppercase tracking-[0.3em] mb-10">Strategic Alignment</h2>
              <h3 className="text-3xl font-bold text-zenith-navy mb-8">What we look for in a group</h3>
              <p className="text-slate-600 leading-relaxed mb-10">
                Zenith is built for advisors who move beyond the annual spreadsheet war. We deliver the best results for employers who are ready to embrace clinical oversight and financial transparency.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="p-6 border-l-4 border-blue-500 bg-slate-50">
                  <h4 className="font-bold text-zenith-navy text-sm uppercase tracking-wider mb-2">Ideal Group Size</h4>
                  <p className="text-slate-500 text-xs">10 to 500+ employee lives across various industries.</p>
                </div>
                <div className="p-6 border-l-4 border-blue-500 bg-slate-50">
                  <h4 className="font-bold text-zenith-navy text-sm uppercase tracking-wider mb-2">Funding Status</h4>
                  <p className="text-slate-500 text-xs">Level-funded or fully self-funded transition opportunities.</p>
                </div>
                <div className="p-6 border-l-4 border-blue-500 bg-slate-50">
                  <h4 className="font-bold text-zenith-navy text-sm uppercase tracking-wider mb-2">Strategy Fit</h4>
                  <p className="text-slate-500 text-xs">Captive-ready employers or those seeking multi-year stability.</p>
                </div>
                <div className="p-6 border-l-4 border-blue-500 bg-slate-50">
                  <h4 className="font-bold text-zenith-navy text-sm uppercase tracking-wider mb-2">Data Openness</h4>
                  <p className="text-slate-500 text-xs">Groups willing to share clinical data for proactive management.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits & Support Grid */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="p-10 bg-white rounded-2xl border border-slate-100 shadow-sm">
              <h3 className="text-xl font-bold text-zenith-navy mb-6 flex items-center">
                <span className="w-10 h-10 bg-blue-50 text-blue-600 rounded flex items-center justify-center mr-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </span>
                What brokers receive
              </h3>
              <ul className="space-y-4 text-slate-600 text-sm leading-relaxed">
                <li className="flex items-start">
                  <span className="text-blue-500 font-bold mr-3">✓</span>
                  Direct access to our decision-making underwriting team (no gatekeepers).
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 font-bold mr-3">✓</span>
                  Predictive underwriting insights based on clinical modeling, not just lag data.
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 font-bold mr-3">✓</span>
                  Real-time high-claimant reporting and intervention summaries.
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 font-bold mr-3">✓</span>
                  Full transparency into surplus generation and renewal repricing logic.
                </li>
              </ul>
            </div>

            <div className="p-10 bg-white rounded-2xl border border-slate-100 shadow-sm">
              <h3 className="text-xl font-bold text-zenith-navy mb-6 flex items-center">
                <span className="w-10 h-10 bg-blue-50 text-blue-600 rounded flex items-center justify-center mr-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                </span>
                Co-branding & proposal support
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                We act as an extension of your back office. Our team provides high-impact materials designed to help you differentiate yourself in the marketplace.
              </p>
              <ul className="space-y-4 text-slate-600 text-sm leading-relaxed">
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></span> Customized co-branded proposal decks</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></span> Clinical oversight visualization for clients</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></span> Actuarial justification letters for renewals</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></span> Assistance with onsite or virtual client presentations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[12px] font-black text-slate-400 uppercase tracking-[0.3em] mb-4">Common Questions</h2>
            <h3 className="text-3xl font-bold text-zenith-navy">Broker FAQs</h3>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-slate-100 rounded-xl overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex justify-between items-center p-6 text-left bg-slate-50 hover:bg-slate-100 transition-colors"
                >
                  <span className="font-bold text-zenith-navy text-sm uppercase tracking-wide">{faq.question}</span>
                  <svg className={`w-5 h-5 text-blue-500 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === idx && (
                  <div className="p-6 bg-white border-t border-slate-100 text-slate-600 text-sm leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-zenith-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900 opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 tracking-tight">Ready to win your next renewal?</h2>
          
          <div className="flex justify-center">
            <Link 
              to="/contact" 
              className="group relative inline-flex items-center justify-center px-12 py-6 font-black text-[11px] uppercase tracking-[0.3em] text-white transition-all duration-300"
            >
              <span className="absolute inset-0 bg-zenith-blue transform skew-x-[-12deg] group-hover:bg-blue-600 group-hover:scale-105 transition-all"></span>
              <span className="relative z-10">Submit a Group</span>
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

export default ForBrokers;
