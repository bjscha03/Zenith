import React, { useState } from 'react';
import { submitWebsiteForm } from '../lib/formSubmission';
import { HOLIDAY_INVITE_SRC } from './holidayInviteImage';

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
              src={HOLIDAY_INVITE_SRC}
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
