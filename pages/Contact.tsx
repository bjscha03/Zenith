import React from 'react';


const Contact: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section - Blue with Image Underlay */}
      <section className="relative text-white py-24 md:py-32 overflow-hidden">
        {/* Background Image - Strategic planning/compass theme */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1553484771-371a605b060b?q=80&w=2070&auto=format&fit=crop')" }}
        ></div>
        {/* Blue Overlay */}
        <div className="absolute inset-0 bg-zenith-navy/90"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="text-[11px] font-black text-blue-400 uppercase tracking-[0.4em] mb-6 block">Engagement</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight mb-8">
              Let's Talk <span className="text-blue-400 italic">Strategy</span>.
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed font-light">
              Schedule a conversation with our team to discuss your risk profile, program structure, or partnership opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section - White */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Form Section */}
            <div className="bg-white p-10 md:p-12 rounded-3xl border border-slate-100 shadow-2xl relative">
              <h2 className="text-[12px] font-black text-blue-600 uppercase tracking-[0.3em] mb-10">Inquiry Form</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">First Name</label>
                    <input type="text" className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none focus:bg-white transition-all" placeholder="Jane" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Last Name</label>
                    <input type="text" className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none focus:bg-white transition-all" placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Work Email</label>
                  <input type="email" className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none focus:bg-white transition-all" placeholder="jane.doe@company.com" />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Role / Identify As</label>
                  <select className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none focus:bg-white transition-all appearance-none cursor-pointer">
                    <option value="" disabled selected>Select your role</option>
                    <option>Employer</option>
                    <option>Broker</option>
                    <option>Captive</option>
                    <option>Strategic Partner</option>
                    <option>Investor</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Message</label>
                  <textarea rows={4} className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none focus:bg-white transition-all" placeholder="How can we help optimize your risk strategy?"></textarea>
                </div>
                <button className="w-full py-5 bg-zenith-blue text-white font-black text-[11px] uppercase tracking-[0.3em] rounded-lg hover:bg-blue-700 transition-all shadow-xl">
                  Send Inquiry
                </button>
              </form>
            </div>

            {/* Side Content / Info */}
            <div className="flex flex-col justify-center">
              <h2 className="text-[12px] font-black text-slate-400 uppercase tracking-[0.3em] mb-10">Direct Contact</h2>
              <div className="space-y-12">
                <div>
                  <h3 className="text-xl font-bold text-zenith-navy mb-4 uppercase tracking-wider">Submissions</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-2 font-light">New RFP data and renewal info:</p>
                  <a href="mailto:submissions@zenithrisk.com" className="text-blue-600 font-bold hover:underline decoration-2">submissions@zenithrisk.com</a>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-zenith-navy mb-4 uppercase tracking-wider">General Inquiries</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-2 font-light">Questions or partnership discussions:</p>
                  <a href="mailto:info@zenithrisk.com" className="text-blue-600 font-bold hover:underline decoration-2">info@zenithrisk.com</a>
                </div>
                <div className="pt-8 border-t border-slate-100">
                  <div className="flex items-center space-x-6">
                    <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-zenith-navy uppercase tracking-widest">SLA Commitment</p>
                      <p className="text-slate-500 text-xs font-light">Initial response within 24 business hours.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tier-2 Engagement Section - Blue */}
      <section className="py-24 bg-zenith-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900 opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Schedule a Call - Email Form */}
            <div className="bg-white/10 backdrop-blur-sm p-10 rounded-2xl border border-white/20">
              <div className="w-16 h-16 bg-white/10 text-white rounded-full flex items-center justify-center mb-8 border border-white/20 mx-auto">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Schedule a Call</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-8 font-light text-center">
                Fill out the form below and our team will reach out to schedule a focused strategy discussion.
              </p>
              <form className="space-y-4">
                <div>
                  <label className="block text-[10px] font-black text-slate-300 uppercase tracking-widest mb-2">Name</label>
                  <input type="text" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-slate-300 uppercase tracking-widest mb-2">Company Name</label>
                  <input type="text" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all" placeholder="Your company" />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-slate-300 uppercase tracking-widest mb-2">Who You Are</label>
                  <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all appearance-none cursor-pointer">
                    <option value="" disabled selected>Select your role</option>
                    <option>Advisor</option>
                    <option>Health Plan</option>
                    <option>TPA</option>
                    <option>Insurer</option>
                    <option>Employer Group</option>
                  </select>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-black text-slate-300 uppercase tracking-widest mb-2">Phone Number</label>
                    <input type="tel" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all" placeholder="(555) 123-4567" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-slate-300 uppercase tracking-widest mb-2">Email</label>
                    <input type="email" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all" placeholder="you@company.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-black text-slate-300 uppercase tracking-widest mb-2">Company Size</label>
                  <input type="text" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all" placeholder="Number of employees" />
                </div>
                <button type="submit" className="w-full mt-4 inline-flex items-center justify-center px-8 py-4 border-2 border-blue-400 text-blue-400 font-black text-[10px] uppercase tracking-widest rounded hover:bg-blue-400 hover:text-zenith-navy transition-all group">
                  Schedule a Call
                  <svg className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </button>
              </form>
            </div>

            {/* Overview Deck Download */}
            <div className="bg-white p-10 rounded-2xl shadow-xl flex flex-col items-center text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <svg className="w-32 h-32 text-zenith-navy" fill="currentColor" viewBox="0 0 24 24"><path d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M7 10l5 5 5-5M12 15V3" /></svg>
              </div>
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-8">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              </div>
              <h3 className="text-2xl font-bold text-zenith-navy mb-4">Zenith Overview Brochure</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-10 font-light">
                A comprehensive look at our underwriting methodology, clinical stewardship roadmap, and proprietary health platforms.
              </p>
              <a 
                href="/brochures/strategy-brochure.pdf" 
                download
                className="inline-flex items-center px-8 py-4 bg-zenith-blue text-white font-black text-[10px] uppercase tracking-widest rounded hover:bg-blue-600 transition-all shadow-xl group"
              >
                Download Overview Brochure
                <svg className="ml-3 w-4 h-4 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M7 10l5 5 5-5M12 15V3" /></svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
