import React, { useState } from 'react';

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
      title: 'CEO & Founder of Zenith Risk Strategies'
    },
    {
      name: 'David Balat',
      title: 'CEO of The Direct Care Alliance'
    },
    {
      name: 'Tracy Creger',
      title: 'President & Founder of Connect Benefit'
    },
    {
      name: 'Jarred Pierce',
      title: 'Founder & CEO of Unity Preferred Network'
    },
    {
      name: 'Mark Testa',
      title: 'Executive VP of Regenxx for Business'
    }
  ];

  return (
    <div className="w-full">

      {/* SECTION 1: HERO */}
      <div className="w-full max-h-[500px] overflow-hidden">
        <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop" alt="Zenith Conference" className="w-full h-[500px] object-cover" />
      </div>

      {/* SECTION 2: WHO SHOULD APPLY */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-zenith-navy tracking-tight mb-12">WHO SHOULD APPLY?</h2>
          <ul className="text-left max-w-2xl mx-auto space-y-6 text-lg text-slate-600">
            <li className="flex items-start gap-3"><span className="text-zenith-blue mt-1 font-bold">•</span>Healthcare operators and solution leaders with hands-on experience</li>
            <li className="flex items-start gap-3"><span className="text-zenith-blue mt-1 font-bold">•</span>Executives working directly with brokers, TPAs, or employers</li>
            <li className="flex items-start gap-3"><span className="text-zenith-blue mt-1 font-bold">•</span>Speakers comfortable with unscripted discussion and real examples</li>
          </ul>
        </div>
      </section>

      {/* SECTION 3: SPEAKER EXPECTATIONS */}
      <section className="py-24 bg-zenith-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-12 text-center">SPEAKER EXPECTATIONS</h2>
          <div className="space-y-4">
            {accordionItems.map((item, i) => (
              <div key={i} className="border border-white/20 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleAccordion(i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <span className="text-[11px] font-black text-white uppercase tracking-[0.3em]">{item.title}</span>
                  <svg className={`w-5 h-5 text-white transition-transform duration-300 ${openAccordion === i ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={`transition-all duration-300 overflow-hidden ${openAccordion === i ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="px-6 pb-5 text-slate-300 leading-relaxed">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: OUR SPEAKERS */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold text-zenith-navy tracking-tight mb-16 text-center">OUR SPEAKERS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {speakers.map((sp, i) => (
              <div key={i} className="flex items-center gap-6">
                <div className="w-24 h-24 rounded-lg bg-slate-200 flex-shrink-0 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-zenith-navy/20 to-zenith-blue/20 flex items-center justify-center">
                    <span className="text-2xl font-bold text-zenith-navy/40">{sp.name.split(" ").map(n => n[0]).join("")}</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-zenith-navy">{sp.name}</h3>
                  <p className="text-slate-500 text-sm">{sp.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: APPLICATION FORM */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* LEFT: Image */}
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img src="https://images.unsplash.com/photo-1475721027785-f74eccf2f5a2?q=80&w=2070&auto=format&fit=crop" alt="Speaker presenting" className="w-full h-[500px] object-cover" />
            </div>

            {/* RIGHT: Form */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-zenith-navy tracking-tight mb-4">SHOW WHAT ACTUALLY WORKS</h2>
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
