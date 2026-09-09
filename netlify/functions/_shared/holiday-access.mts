import { createHash, timingSafeEqual } from 'node:crypto';
import { PublicFormError } from './form-security.mts';

// Only the one-way digest is deployed. The invitation key is never in the client bundle.
const INVITATION_DIGEST = 'f73a2aa71396557f9c694149de512f121707ef839c6118674ae35e65f8ec7157';
export function assertHolidayAccess(value: unknown) {
  if (typeof value !== 'string' || !/^[A-Za-z0-9_-]{43}$/.test(value) ||
      !timingSafeEqual(createHash('sha256').update(value).digest(), Buffer.from(INVITATION_DIGEST, 'hex'))) {
    throw new PublicFormError(403, 'Please open the invitation link sent by Stacy to RSVP.', 'invitation_required');
  }
}
