import React, { useState } from 'react';


const Contact: React.FC = () => {
  const [inquiryData, setInquiryData] = useState({ firstName: '', lastName: '', email: '', role: '', message: '' });
  const [inquirySubmitting, setInquirySubmitting] = useState(false);
  const [inquirySuccess, setInquirySuccess] = useState(false);
  const [inquiryError, setInquiryError] = useState('');

  const [scheduleData, setScheduleData] = useState({ name: '', companyName: '', whoYouAre: '', phone: '', email: '', companySize: '' });
  const [scheduleSubmitting, setScheduleSubmitting] = useState(false);
  const [scheduleSuccess, setScheduleSuccess] = useState(false);
  const [scheduleError, setScheduleError] = useState('');

  const handleInquirySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySubmitting(true);
    setInquiryError('');
    try {
      const res = await fetch('/.netlify/functions/contact-inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(inquiryData)
      });
      if (!res.ok) throw new Error('Failed');
      setInquirySuccess(true);
      setInquiryData({ firstName: '', lastName: '', email: '', role: '', message: '' });
    } catch {
      setInquiryError('Something went wrong. Please try again.');
    } finally {
      setInquirySubmitting(false);
    }
  };

  const handleScheduleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setScheduleSubmitting(true);
    setScheduleError('');
    try {
      const res = await fetch('/.netlify/functions/schedule-call', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(scheduleData)
      });
      if (!res.ok) throw new Error('Failed');
      setScheduleSuccess(true);
      setScheduleData({ name: '', companyName: '', whoYouAre: '', phone: '', email: '', companySize: '' });
    } catch {
      setScheduleError('Something went wrong. Please try again.');
    } finally {
      setScheduleSubmitting(false);
    }
  };

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
              {inquirySuccess ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <h3 className="text-2xl font-bold text-zenith-navy mb-4">Thank You!</h3>
                  <p className="text-slate-600">We've received your inquiry and will respond within 24 business hours.</p>
                  <button onClick={() => setInquirySuccess(false)} className="mt-6 px-6 py-3 bg-zenith-blue text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors">Send Another</button>
                </div>
              ) : (
              <form onSubmit={handleInquirySubmit} className="space-y-6">
                {inquiryError && <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">{inquiryError}</div>}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">First Name</label>
                    <input type="text" required value={inquiryData.firstName} onChange={(e) => setInquiryData({...inquiryData, firstName: e.target.value})} className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none focus:bg-white transition-all" placeholder="Jane" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Last Name</label>
                    <input type="text" required value={inquiryData.lastName} onChange={(e) => setInquiryData({...inquiryData, lastName: e.target.value})} className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none focus:bg-white transition-all" placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Work Email</label>
                  <input type="email" required value={inquiryData.email} onChange={(e) => setInquiryData({...inquiryData, email: e.target.value})} className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none focus:bg-white transition-all" placeholder="jane.doe@company.com" />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Role / Identify As</label>
                  <select required value={inquiryData.role} onChange={(e) => setInquiryData({...inquiryData, role: e.target.value})} className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none focus:bg-white transition-all appearance-none cursor-pointer">
                    <option value="">Select your role</option>
                    <option value="Employer">Employer</option>
                    <option value="Broker">Broker</option>
                    <option value="Captive">Captive</option>
                    <option value="Strategic Partner">Strategic Partner</option>
                    <option value="Investor">Investor</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Message</label>
                  <textarea rows={4} value={inquiryData.message} onChange={(e) => setInquiryData({...inquiryData, message: e.target.value})} className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none focus:bg-white transition-all" placeholder="How can we help optimize your risk strategy?"></textarea>
                </div>
                <button type="submit" disabled={inquirySubmitting} className="w-full py-5 bg-zenith-blue text-white font-black text-[11px] uppercase tracking-[0.3em] rounded-lg hover:bg-blue-700 transition-all shadow-xl disabled:opacity-50 disabled:cursor-not-allowed">
                  {inquirySubmitting ? 'Sending...' : 'Send Inquiry'}
                </button>
              </form>
              )}
            </div>

            {/* Side Content / Info */}
            <div className="flex flex-col justify-center">
              <h2 className="text-[12px] font-black text-slate-400 uppercase tracking-[0.3em] mb-10">Direct Contact</h2>
              <div className="space-y-12">
                <div>
                  <h3 className="text-xl font-bold text-zenith-navy mb-4 uppercase tracking-wider">RFP Submissions</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-2 font-light">Submit an RFP:</p>
                  <a href="mailto:RFP@zenithriskstrategies.com" className="text-blue-600 font-bold hover:underline decoration-2">RFP@zenithriskstrategies.com</a>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-zenith-navy mb-4 uppercase tracking-wider">General Inquiries</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-2 font-light">Questions or partnership discussions:</p>
                  <a href="mailto:info@zenithriskstrategies.com" className="text-blue-600 font-bold hover:underline decoration-2">info@zenithriskstrategies.com</a>
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
              {scheduleSuccess ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Request Received!</h3>
                  <p className="text-slate-300">Our team will reach out shortly to schedule your call.</p>
                  <button onClick={() => setScheduleSuccess(false)} className="mt-6 px-6 py-3 border-2 border-blue-400 text-blue-400 rounded-lg font-semibold hover:bg-blue-400 hover:text-zenith-navy transition-colors">Submit Another</button>
                </div>
              ) : (
              <form onSubmit={handleScheduleSubmit} className="space-y-4">
                {scheduleError && <div className="p-3 bg-red-500/20 border border-red-400/30 rounded-lg text-red-300 text-sm">{scheduleError}</div>}
                <div>
                  <label className="block text-[10px] font-black text-slate-300 uppercase tracking-widest mb-2">Name</label>
                  <input type="text" required value={scheduleData.name} onChange={(e) => setScheduleData({...scheduleData, name: e.target.value})} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-slate-300 uppercase tracking-widest mb-2">Company Name</label>
                  <input type="text" value={scheduleData.companyName} onChange={(e) => setScheduleData({...scheduleData, companyName: e.target.value})} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all" placeholder="Your company" />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-slate-300 uppercase tracking-widest mb-2">Who You Are</label>
                  <select value={scheduleData.whoYouAre} onChange={(e) => setScheduleData({...scheduleData, whoYouAre: e.target.value})} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all appearance-none cursor-pointer">
                    <option value="">Select your role</option>
                    <option value="Advisor">Advisor</option>
                    <option value="Health Plan">Health Plan</option>
                    <option value="TPA">TPA</option>
                    <option value="Insurer">Insurer</option>
                    <option value="Employer Group">Employer Group</option>
                  </select>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-black text-slate-300 uppercase tracking-widest mb-2">Phone</label>
                    <input type="tel" value={scheduleData.phone} onChange={(e) => setScheduleData({...scheduleData, phone: e.target.value})} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all" placeholder="(555) 123-4567" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-slate-300 uppercase tracking-widest mb-2">Email</label>
                    <input type="email" required value={scheduleData.email} onChange={(e) => setScheduleData({...scheduleData, email: e.target.value})} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all" placeholder="you@company.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-black text-slate-300 uppercase tracking-widest mb-2">Company Size</label>
                  <input type="text" value={scheduleData.companySize} onChange={(e) => setScheduleData({...scheduleData, companySize: e.target.value})} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all" placeholder="Number of employees" />
                </div>
                <button type="submit" disabled={scheduleSubmitting} className="w-full mt-4 inline-flex items-center justify-center px-8 py-4 border-2 border-blue-400 text-blue-400 font-black text-[10px] uppercase tracking-widest rounded hover:bg-blue-400 hover:text-zenith-navy transition-all group disabled:opacity-50 disabled:cursor-not-allowed">
                  {scheduleSubmitting ? 'Submitting...' : 'Schedule a Call'}
                  {!scheduleSubmitting && <svg className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>}
                </button>
              </form>
              )}
            </div>

            {/* Overview Deck Download */}
            <div className="bg-white/10 backdrop-blur-sm p-10 rounded-2xl border border-white/20 flex flex-col justify-center text-center">
              <div className="w-16 h-16 bg-white/10 text-white rounded-full flex items-center justify-center mb-8 mx-auto border border-white/20">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Overview Deck</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-8 font-light">
                Download our executive overview deck for a comprehensive look at Zenith Risk Strategies.
              </p>
              <a
                href="/brochures/strategy-brochure.pdf"
                download
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-blue-400 text-blue-400 font-black text-[10px] uppercase tracking-widest rounded hover:bg-blue-400 hover:text-zenith-navy transition-all group"
              >
                Download Deck
                <svg className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
