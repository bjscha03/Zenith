import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import HolidayRsvp from '../components/HolidayRsvp';

export default function HolidayInvitation({ invitationKey }: { invitationKey?: string } = {}) {
  const { search } = useLocation();
  const invitation = invitationKey ?? new URLSearchParams(search).get('invitation') ?? '';
  const [verifiedKey, setVerifiedKey] = useState('');
  const [error, setError] = useState('');
  useEffect(() => {
    const robots = document.createElement('meta');
    robots.name = 'robots'; robots.content = 'noindex, nofollow, noarchive';
    document.head.appendChild(robots);
    return () => robots.remove();
  }, []);
  useEffect(() => {
    const controller = new AbortController();
    setVerifiedKey(''); setError('');
    if (!invitation) { setError('Please open the invitation link sent by Stacy to RSVP.'); return; }
    fetch('/api/holiday-access', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ invitation }), signal: controller.signal,
    }).then(async response => {
      const body = await response.json();
      if (!response.ok || !body.success) throw new Error(body.error || 'Unable to verify this invitation.');
      setVerifiedKey(invitation);
    }).catch(reason => { if (!controller.signal.aborted) setError(reason.message || 'Please try opening your invitation again.'); });
    return () => controller.abort();
  }, [invitation]);
  if (invitation && verifiedKey === invitation) return <HolidayRsvp invitation={invitation} />;
  return <section className="max-w-2xl mx-auto px-6 py-24 text-center">
    <h1 className="text-3xl font-bold text-zenith-navy mb-4">By invitation only</h1>
    <p role="status" className="text-slate-600">{error || 'Checking your invitation…'}</p>
  </section>;
}
