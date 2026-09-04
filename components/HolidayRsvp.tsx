import React, { useState } from 'react';
import { submitWebsiteForm } from '../lib/formSubmission';

const HOLIDAY_INVITE = 'data:image/jpeg;base64,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[...TRUNCATED...]/2Q==';

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
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-12 items-start">
          <div className="rounded-[1.5rem] overflow-hidden border border-[#d8c6a9] bg-white shadow-[0_26px_70px_-45px_rgba(15,23,42,0.5)]">
            <img
              src={HOLIDAY_INVITE}
              alt="Zenith Holiday Celebration invitation"
              className="block w-full h-auto"
            />
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
