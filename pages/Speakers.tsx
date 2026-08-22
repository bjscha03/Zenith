import React, { useState } from 'react';
import { ZENITH_LOGO_IMAGE, ZENITH_PEAK_IMAGE } from '../lib/brandAssets';

const Speakers: React.FC = () => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', company: '',
    title: '', email: '', phone: '',
    expertise: '', perspective: '', linkedin: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const scrollToApplication = () => {
    document.getElementById('speaker-application')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch('/.netlify/functions/speaker-application', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        console.log('Form data:', formData);
        setSubmitted(true);
      }
    } catch {
      console.log('Form data:', formData);
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  const accordionItems = [
    {
      title: 'EXPERIENCE-BASED',
      content: 'Real implementation, not theory.'
    },
    {
      title: 'FRAMEWORK ALIGNED',
      content: 'Speakers support the summit\u2019s structure\u2014not their product.'
    },
    {
      title: 'INTERACTIVE',
      content: 'Panels, exercises, and live discussion over slide decks.'
    }
  ];

  const speakers = [
    {
      name: 'Thomas Wagner',
      title: 'CEO & Founder of Zenith Risk Strategies',
      image: 'https://res.cloudinary.com/dtrxl120u/image/upload/v1772749637/Screenshot_2026-03-05_at_5.27.13_PM_xcm6b5.png'
    },
    {
      name: 'David Balat',
      title: 'CEO of The Direct Care Alliance',
      image: 'https://res.cloudinary.com/dtrxl120u/image/upload/v1772749541/Screenshot_2026-03-05_at_5.25.38_PM_k6mgmg.png'
    },
    {
      name: 'Tracy Creger',
      title: 'President & Founder of Connect Benefit',
      image: 'https://res.cloudinary.com/dtrxl120u/image/upload/v1772749599/Screenshot_2026-03-05_at_5.26.36_PM_cmrnbm.png'
    },
    {
      name: 'Jarred Pierce',
      title: 'Founder & CEO of Unity Preferred Network',
      image: 'https://res.cloudinary.com/dtrxl120u/image/upload/v1772749584/Screenshot_2026-03-05_at_5.26.21_PM_qlapbl.png'
    },
    {
      name: 'Mark Testa',
      title: 'Executive VP of Regenxx for Business',
      image: 'https://res.cloudinary.com/dtrxl120u/image/upload/v1772749556/Screenshot_2026-03-05_at_5.25.54_PM_bvd5dx.png'
    }
  ];

  return (
    <div className="w-full">

      {/* SECTION 1: HERO */}
      <section className="relative min-h-[520px] flex items-center overflow-hidden bg-zenith-navy text-white">
        <img src="https://res.cloudinary.com/dtrxl120u/image/upload/v1772749927/Screenshot_2026-03-05_at_5.32.02_PM_ppusgl.png" alt="Zenith Conference speakers on stage" className="absolute inset-0 w-full h-full object-cover object-[center_20%] opacity-70" />
        <img src={ZENITH_PEAK_IMAGE} alt="" aria-hidden="true" className="absolute left-0 inset-y-0 w-[58%] h-full object-cover object-center opacity-25 mix-blend-screen" />
        <div className="absolute inset-0 bg-gradient-to-r from-zenith-navy/[0.96] via-zenith-navy/[0.83] to-zenith-navy/[0.35]" />
        <div aria-hidden="true" className="absolute -right-20 -top-24 w-[430px] h-[430px] rounded-full border border-blue-300/[0.18]"><div className="absolute inset-14 rounded-full border border-blue-300/[0.18]" /><div className="absolute inset-28 rounded-full border border-blue-300/[0.18]" /><div className="absolute inset-[7.25rem] overflow-hidden rounded-full opacity-[0.1]"><img src={ZENITH_LOGO_IMAGE} alt="" className="h-full w-auto max-w-none" /></div></div>
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-24 relative z-10">
          <div className="max-w-3xl">
            <span className="text-[10px] font-black text-blue-300 uppercase tracking-[0.4em] mb-6 block">Zenith Conference Voices</span>
            <h1 className="text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight mb-7">Insight earned in the field. Shared from the stage.</h1>
            <p className="text-xl text-slate-300 leading-relaxed font-light max-w-2xl mb-9">Zenith brings together operators, advisors, and healthcare leaders ready to move the conversation beyond theory.</p>
            <button type="button" onClick={scrollToApplication} className="inline-flex items-center px-8 py-4 bg-blue-500 text-white font-black text-[10px] uppercase tracking-[0.25em] rounded shadow-xl shadow-blue-950/30 hover:bg-blue-400 transition-colors">Apply to speak <span className="ml-3 text-base">→</span></button>
          </div>
        </div>
      </section>


      {/* EVENTS SUB-NAVIGATION */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center gap-8">
            <a href="#/events" className="py-4 text-[11px] font-black uppercase tracking-[0.3em] text-slate-400 hover:text-zenith-navy border-b-2 border-transparent hover:border-zenith-navy transition-all">Conferences</a>
            <span className="py-4 text-[11px] font-black uppercase tracking-[0.3em] text-zenith-navy border-b-2 border-zenith-navy cursor-default">Speakers</span>
          </div>
        </div>
      </nav>

      {/* SECTION 2: WHO SHOULD APPLY */}
      <section className="relative overflow-hidden py-20 bg-gradient-to-b from-slate-50 via-white to-blue-50/[0.50]">
        <div aria-hidden="true" className="absolute -left-48 -bottom-64 w-[520px] h-[520px] rounded-full border border-blue-200/[0.35]"><div className="absolute inset-20 rounded-full border border-blue-200/[0.35]" /><div className="absolute inset-40 rounded-full border border-blue-200/[0.35]" /></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] rounded-[2rem] overflow-hidden border border-slate-200 bg-white shadow-[0_30px_80px_-48px_rgba(15,35,68,0.55)]">
            <div className="relative overflow-hidden bg-zenith-navy p-9 md:p-12 text-white">
              <img src={ZENITH_PEAK_IMAGE} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover opacity-[0.45]" />
              <div className="absolute inset-0 bg-gradient-to-b from-zenith-navy/[0.55] via-zenith-navy/80 to-zenith-navy/[0.97]" />
              <div className="relative z-10 flex flex-col justify-between h-full min-h-[330px]">
                <div><span className="text-[10px] font-black text-blue-300 uppercase tracking-[0.35em] mb-5 block">The Right Perspective</span><h2 className="text-3xl md:text-4xl font-bold tracking-tight">Who should apply?</h2></div>
                <p className="text-slate-300 leading-relaxed max-w-sm">We select practitioners with useful experience, a clear point of view, and the confidence to engage without a sales pitch.</p>
              </div>
            </div>
            <div className="p-7 md:p-10 lg:p-12 grid gap-4 content-center">
              {[
                { number: '01', title: 'Hands-on operators', text: 'Healthcare operators and solution leaders with implementation experience.' },
                { number: '02', title: 'Connected executives', text: 'Leaders working directly with brokers, TPAs, employers, and plan sponsors.' },
                { number: '03', title: 'Candid communicators', text: 'Speakers comfortable with unscripted discussion, real examples, and useful debate.' },
              ].map((item) => (
                <div key={item.number} className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-blue-50/60 p-5 md:p-6 hover:border-blue-300 hover:shadow-lg transition-all">
                  <div className="relative z-10 flex gap-5"><span className="text-[10px] font-black text-blue-600 pt-1">{item.number}</span><div><h3 className="text-lg font-bold text-zenith-navy mb-1.5">{item.title}</h3><p className="text-sm leading-relaxed text-slate-600">{item.text}</p></div></div>
                  <div aria-hidden="true" className="absolute -right-10 -bottom-12 w-28 h-28 rounded-full border border-blue-200/50"><div className="absolute inset-6 rounded-full border border-blue-200/50" /></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: SPEAKER EXPECTATIONS */}
      <section className="relative overflow-hidden py-24 bg-zenith-navy">
        <img src={ZENITH_PEAK_IMAGE} alt="" aria-hidden="true" className="absolute right-0 inset-y-0 w-[55%] h-full object-cover opacity-[0.16]" />
        <div aria-hidden="true" className="absolute -right-32 -top-40 w-[440px] h-[440px] rounded-full border border-blue-300/[0.12]"><div className="absolute inset-16 rounded-full border border-blue-300/[0.12]" /><div className="absolute inset-32 rounded-full border border-blue-300/[0.12]" /></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12"><span className="text-[10px] font-black text-blue-300 uppercase tracking-[0.35em] mb-4 block">What The Room Expects</span><h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Speaker expectations</h2></div>
          <div className="space-y-4">
            {accordionItems.map((item, i) => (
              <div key={i} className={`border rounded-2xl overflow-hidden backdrop-blur-sm transition-all ${openAccordion === i ? 'border-blue-300/[0.45] bg-white/[0.09]' : 'border-white/[0.15] bg-white/[0.045] hover:bg-white/[0.07]'}`}>
                <button
                  onClick={() => toggleAccordion(i)}
                  className="w-full flex items-center justify-between gap-5 px-6 md:px-8 py-6 text-left"
                >
                  <span className="flex items-center gap-5"><span className="text-[10px] font-black text-blue-300">0{i + 1}</span><span className="text-[11px] font-black text-white uppercase tracking-[0.3em]">{item.title}</span></span>
                  <svg className={`w-5 h-5 text-white transition-transform duration-300 ${openAccordion === i ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={`transition-all duration-300 overflow-hidden ${openAccordion === i ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="px-6 md:px-8 pb-6 pl-[4.25rem] md:pl-[5.25rem] text-slate-300 leading-relaxed">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: OUR SPEAKERS */}
      <section className="relative overflow-hidden py-24 bg-gradient-to-b from-white via-slate-50 to-blue-50/40">
        <div aria-hidden="true" className="absolute -right-48 top-20 w-[520px] h-[520px] rounded-full border border-blue-200/[0.35]"><div className="absolute inset-20 rounded-full border border-blue-200/[0.35]" /><div className="absolute inset-40 rounded-full border border-blue-200/[0.35]" /></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16"><span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.35em] mb-4 block">Voices From The Summit</span><h2 className="text-3xl md:text-5xl font-bold text-zenith-navy tracking-tight mb-5">Our speakers</h2><p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">Experienced leaders bringing real work, real decisions, and real outcomes to the conversation.</p></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-7">
            {speakers.map((sp, i) => (
              <article key={i} className={`group relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_24px_60px_-42px_rgba(15,35,68,0.55)] hover:-translate-y-1.5 hover:shadow-2xl hover:border-blue-200 transition-all duration-300 sm:col-span-1 lg:col-span-2 ${i === 3 ? 'lg:col-start-2' : ''}`}>
                <div className="relative aspect-[4/5] overflow-hidden bg-slate-200">
                  <img src={sp.image} alt={sp.name} className="w-full h-full object-cover object-center group-hover:scale-[1.025] transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-zenith-navy/[0.55] via-transparent to-transparent" />
                  <span className="absolute left-5 bottom-4 text-[9px] font-black uppercase tracking-[0.28em] text-blue-200">Zenith Speaker</span>
                </div>
                <div className="relative overflow-hidden p-6 min-h-[132px] bg-gradient-to-br from-white to-blue-50/[0.55]">
                  <div className="relative z-10"><h3 className="text-xl font-bold text-zenith-navy mb-2">{sp.name}</h3><p className="text-slate-500 text-sm leading-relaxed">{sp.title}</p></div>
                  <img src={ZENITH_PEAK_IMAGE} alt="" aria-hidden="true" className="absolute -right-10 bottom-0 w-52 opacity-[0.045] grayscale" />
                  <div aria-hidden="true" className="absolute -right-12 -bottom-16 w-36 h-36 rounded-full border border-blue-200/60"><div className="absolute inset-7 rounded-full border border-blue-200/60" /></div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: APPLICATION FORM */}
      <section id="speaker-application" className="relative overflow-hidden py-24 bg-white scroll-mt-20">
        <div aria-hidden="true" className="absolute -left-48 top-24 w-[480px] h-[480px] rounded-full border border-blue-200/30"><div className="absolute inset-20 rounded-full border border-blue-200/30" /><div className="absolute inset-40 rounded-full border border-blue-200/30" /></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch rounded-[2rem] overflow-hidden border border-slate-200 bg-white shadow-[0_35px_90px_-50px_rgba(15,35,68,0.62)]">
            {/* LEFT: Image */}
            <div className="relative overflow-hidden min-h-[430px] lg:min-h-full bg-zenith-navy">
              <img src="https://res.cloudinary.com/dtrxl120u/image/upload/v1772749571/Screenshot_2026-03-05_at_5.26.08_PM_fmurq6.png" alt="Speaker presenting" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-zenith-navy/[0.92] via-zenith-navy/[0.12] to-transparent" />
              <img src={ZENITH_PEAK_IMAGE} alt="" aria-hidden="true" className="absolute inset-x-0 bottom-0 w-full h-[52%] object-cover object-top opacity-30 mix-blend-screen" />
              <div className="absolute left-8 right-8 bottom-8 z-10"><span className="text-[9px] font-black text-blue-200 uppercase tracking-[0.35em] mb-3 block">Bring The Work To The Room</span><p className="text-2xl font-bold text-white max-w-md">Useful ideas become more powerful when they are challenged, refined, and shared.</p></div>
            </div>

            {/* RIGHT: Form */}
            <div className="p-8 md:p-10 lg:p-12 bg-gradient-to-br from-white via-white to-blue-50/[0.45]">
              <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.35em] mb-4 block">Speaker Application</span>
              <h2 className="text-3xl md:text-4xl font-bold text-zenith-navy tracking-tight mb-4">Show what actually works</h2>
              <p className="text-slate-600 leading-relaxed mb-8">Zenith invites practitioners and operators, not marketers, to contribute real-world insight to our conference series.</p>
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                  <p className="text-green-800 font-medium text-lg">Thank you. Our team will review your submission and follow up.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name *"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-zenith-blue focus:border-transparent outline-none"
                    />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name *"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-zenith-blue focus:border-transparent outline-none"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="company"
                      placeholder="Company *"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-zenith-blue focus:border-transparent outline-none"
                    />
                    <input
                      type="text"
                      name="title"
                      placeholder="Title / Role *"
                      required
                      value={formData.title}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-zenith-blue focus:border-transparent outline-none"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email *"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-zenith-blue focus:border-transparent outline-none"
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone *"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-zenith-blue focus:border-transparent outline-none"
                    />
                  </div>
                  <textarea
                    name="expertise"
                    placeholder="Area of Expertise"
                    rows={4}
                    value={formData.expertise}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-zenith-blue focus:border-transparent outline-none resize-none"
                  />
                  <textarea
                    name="perspective"
                    placeholder="What experience or perspective will you bring to the summit?"
                    rows={4}
                    value={formData.perspective}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-zenith-blue focus:border-transparent outline-none resize-none"
                  />
                    <input
                      type="text"
                      name="linkedin"
                      placeholder="LinkedIn Profile URL"
                      value={formData.linkedin}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-zenith-blue focus:border-transparent outline-none"
                    />
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full px-10 py-5 bg-zenith-blue text-white font-black text-[11px] uppercase tracking-[0.3em] rounded hover:bg-blue-600 transition-all disabled:opacity-50"
                  >
                    {submitting ? 'SUBMITTING...' : 'SUBMIT'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Speakers;
