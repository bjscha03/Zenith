# Zenith website email setup

The website uses server-side Netlify Functions, Neon Postgres, and Resend. Browser code never receives the Resend API key.

## Public workflows

| Form | Stored in | Internal notification | Visitor confirmation |
| --- | --- | --- | --- |
| Contact inquiry | `contact_inquiries` | Yes; Reply-To is the visitor | Yes |
| Schedule a call | `schedule_calls` | Yes; Reply-To is the visitor | Yes |
| Speaker application | `speaker_applications` | Yes; Reply-To is the applicant | Yes, without acceptance language |
| Apollo brochure request | `brochure_requests` | Yes; Reply-To is the visitor | Yes, with the brochure link |
| Newsletter signup | `newsletter_subscribers` | Yes; Reply-To is the subscriber | Yes |

Admin login and CMS editing forms are application controls and do not send transactional email.

## Netlify environment variables

- `DATABASE_URL` — existing secret used only by server-side functions.
- `RESEND_API_KEY` — existing secret used only by server-side functions.
- `EMAIL_NOTIFICATION_TO` — internal notification recipient; currently `twagner@zenithriskstrategies.com`.
- `EMAIL_FROM_NAME` — display name; `Zenith Risk Strategies`.
- `EMAIL_FROM_ADDRESS` — use `onboarding@resend.dev` only for pre-verification testing.
- `EMAIL_PUBLIC_REPLY_TO` — address used when a visitor replies to a confirmation.
- `EMAIL_SITE_URL` — canonical website origin used for resource links.

## After Resend verifies the Zenith domain

1. Confirm `zenithriskstrategies.com` shows **Verified** in Resend.
2. Change `EMAIL_FROM_ADDRESS` in Netlify to `website@zenithriskstrategies.com`.
3. Redeploy the site.
4. Submit one live contact test and confirm the internal and visitor messages.
5. Confirm Thomas can use Reply and reach the visitor directly.

No code change, MX change, Microsoft 365 change, or nameserver change is required for the sender switch.

## Failure and abuse handling

- A submission is saved before email is attempted.
- A Resend outage does not discard a valid database submission.
- Provider errors are reduced to safe codes in function logs; form payloads and secrets are not logged.
- A browser-generated submission ID and database claim prevent duplicate records and duplicate emails.
- Resend idempotency keys provide a second layer of duplicate-email protection.
- Same-origin validation, strict length/type validation, HTML escaping, and a hidden honeypot reject common abuse without adding friction.
