import React, { useState } from 'react';
import { submitWebsiteForm } from '../lib/formSubmission';

const options = [
  {
    value: 'attend',
    label: 'Will attend',
    icon: '✓',
    iconClass: 'bg-zenith-navy text-white',
    borderClass: 'hover:border-zenith-navy',
  },
  {
    value: 'attend-with-guest',
    label: 'Will attend and bring a guest',
    icon: '●●',
    iconClass: 'bg-[#8d2e24] text-white text-[9px] tracking-[-1px]',
    borderClass: 'hover:border-[#8d2e24]',
  },
  {
    value: 'decline',
    label: 'Will not attend',
    icon: '×',
    iconClass: 'bg-[#6f5035] text-white',
    borderClass: 'hover:border-[#6f5035]',
  },
] as const;

type RsvpResponse = typeof options[number]['value'];

const HolidayRsvp: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    guestName: '',
  });
  const [website, setWebsite] = useState('');
  const [submitting, setSubmitting] = useState<RsvpResponse | ''>('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const updateField = (field: keyof typeof formData, value: string) => {
    setFormData((current) => ({ ...current, [field]: value }));
    if (error) setError('');
  };

  const submitRsvp = async (response: RsvpResponse) => {
    setError('');
    setSuccess('');

    if (!formData.name.trim()) return setError('Please enter your name.');
    if (!formData.email.trim()) return setError('Please enter your email address.');
    if (response === 'attend-with-guest' && !formData.guestName.trim()) {
      return setError('Please enter your guest’s name before choosing the guest option.');
    }

    setSubmitting(response);
    try {
      const result = await submitWebsiteForm('/api/holiday-rsvp', {
        ...formData,
        response,
        _website: website,
      });
      const answer = response === 'attend-with-guest'
        ? 'Will attend and bring a guest'
        : response === 'decline'
          ? 'Will not attend'
          : 'Will attend';
      setSuccess(result.confirmationSent
        ? `Thank you. Your RSVP has been recorded as “${answer}” and a confirmation was sent to ${formData.email}.`
        : `Thank you. Your RSVP has been recorded as “${answer}”.`);
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : 'We could not submit your RSVP. Please try again.');
    } finally {
      setSubmitting('');
    }
  };

  return (
    <section id="holiday-rsvp" className="relative overflow-hidden bg-[#f7f0e4] py-16 md:py-20 border-y border-[#d8c6a9]">
      <div className="absolute inset-0 opacity-[0.2]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #aa9373 1px, transparent 0)', backgroundSize: '18px 18px' }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-12 items-stretch">
          <div className="rounded-[2rem] bg-zenith-navy text-white p-8 md:p-10 shadow-2xl relative overflow-hidden">
            <div className="absolute -right-20 -top-20 w-56 h-56 rounded-full border border-white/10" />
            <div className="absolute -right-8 -top-8 w-36 h-36 rounded-full border border-white/10" />
            <div className="relative z-10">
              <span className="text-[10px] font-black uppercase tracking-[0.35em] text-[#e4c391] block mb-5">Save the Date</span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-[0.98] mb-5">Zenith Holiday Celebration</h2>
              <p className="text-[#e5dbc8] text-lg italic mb-8">Good Partners. Great People. Stronger Together.</p>

              <div className="space-y-5 border-t border-white/15 pt-7">
                <div className="flex gap-4 items-start">
                  <div className="w-14 h-14 shrink-0 rounded-xl bg-white/10 flex items-center justify-center text-2xl font-black">11</div>
                  <div><div className="text-xs uppercase tracking-[0.22em] text-[#e4c391] font-black">Friday</div><div className="text-xl font-bold mt-1">December 11, 2026</div></div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="rounded-xl border border-white/12 bg-white/[0.06] p-4"><div className="text-[10px] uppercase tracking-[0.2em] text-[#e4c391] font-black mb-1">Time</div><div className="font-bold">Evening — TBA</div></div>
                  <div className="rounded-xl border border-white/12 bg-white/[0.06] p-4"><div className="text-[10px] uppercase tracking-[0.2em] text-[#e4c391] font-black mb-1">Location</div><div className="font-bold">Austin, TX — TBA</div></div>
                </div>
              </div>

              <div className="mt-8 rounded-2xl bg-[#8d2e24] px-5 py-4">
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white/75">Please reply by</div>
                <div className="text-xl font-black mt-1">September 15, 2026</div>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] bg-white border border-[#dfd2bd] p-6 sm:p-8 md:p-10 shadow-[0_26px_70px_-45px_rgba(15,23,42,0.5)]">
            <span className="text-[10px] font-black uppercase tracking-[0.35em] text-[#8d2e24] block mb-3">Kindly reply</span>
            <h3 className="text-3xl font-bold text-zenith-navy mb-2">Let us know your plans</h3>
            <p className="text-slate-500 mb-8">Add your information, then choose one of the RSVP options below. Your selection is submitted immediately.</p>

            {success ? (
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-6 py-7" role="status">
                <div className="w-11 h-11 rounded-full bg-emerald-600 text-white flex items-center justify-center text-2xl font-bold mb-4">✓</div>
                <h4 className="text-xl font-bold text-emerald-900 mb-2">RSVP received</h4>
                <p className="text-emerald-800 leading-relaxed">{success}</p>
                <button type="button" onClick={() => setSuccess('')} className="mt-5 text-sm font-bold text-emerald-900 underline underline-offset-4">Update my response</button>
              </div>
            ) : (
              <form onSubmit={(event) => event.preventDefault()} className="space-y-5" noValidate>
                <div className="grid sm:grid-cols-2 gap-4">
                  <label className="block">
                    <span className="block text-[10px] font-black uppercase tracking-[0.18em] text-slate-500 mb-2">Name *</span>
                    <input value={formData.name} onChange={(event) => updateField('name', event.target.value)} autoComplete="name" className="w-full rounded-xl border border-slate-300 px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300" placeholder="Your name" />
                  </label>
                  <label className="block">
                    <span className="block text-[10px] font-black uppercase tracking-[0.18em] text-slate-500 mb-2">Email *</span>
                    <input type="email" value={formData.email} onChange={(event) => updateField('email', event.target.value)} autoComplete="email" className="w-full rounded-xl border border-slate-300 px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300" placeholder="you@company.com" />
                  </label>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <label className="block">
                    <span className="block text-[10px] font-black uppercase tracking-[0.18em] text-slate-500 mb-2">Company / Organization</span>
                    <input value={formData.company} onChange={(event) => updateField('company', event.target.value)} autoComplete="organization" className="w-full rounded-xl border border-slate-300 px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300" placeholder="Optional" />
                  </label>
                  <label className="block">
                    <span className="block text-[10px] font-black uppercase tracking-[0.18em] text-slate-500 mb-2">Guest name</span>
                    <input value={formData.guestName} onChange={(event) => updateField('guestName', event.target.value)} className="w-full rounded-xl border border-slate-300 px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300" placeholder="Only if bringing a guest" />
                  </label>
                </div>

                <div className="absolute left-[-10000px] top-auto w-px h-px overflow-hidden" aria-hidden="true">
                  <label>Website<input tabIndex={-1} autoComplete="off" value={website} onChange={(event) => setWebsite(event.target.value)} /></label>
                </div>

                <div className="pt-2">
                  <span className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-3">Choose your response</span>
                  <div className="space-y-3">
                    {options.map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        disabled={Boolean(submitting)}
                        onClick={() => submitRsvp(option.value)}
                        className={`w-full flex items-center gap-4 rounded-xl border-2 border-slate-200 px-4 py-4 text-left transition-all disabled:opacity-60 disabled:cursor-wait ${option.borderClass}`}
                      >
                        <span className={`w-9 h-9 shrink-0 rounded-full flex items-center justify-center font-black text-xl ${option.iconClass}`}>{submitting === option.value ? '…' : option.icon}</span>
                        <span className="font-black uppercase tracking-wide text-sm text-zenith-navy">{submitting === option.value ? 'Submitting…' : option.label}</span>
                        <span className="ml-auto text-slate-300 text-xl">→</span>
                      </button>
                    ))}
                  </div>
                </div>

                {error && <p role="alert" className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">{error}</p>}
                <p className="text-xs leading-relaxed text-slate-400">Submitting again with the same email address updates your previous RSVP.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HolidayRsvp;
