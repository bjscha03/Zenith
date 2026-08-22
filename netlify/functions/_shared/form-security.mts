const MAX_BODY_BYTES = 32_768;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const CONTROL_CHARACTERS = /[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g;

export class PublicFormError extends Error {
  status: number;
  publicMessage: string;
  code: string;

  constructor(status: number, publicMessage: string, code = 'invalid_request') {
    super(publicMessage);
    this.name = 'PublicFormError';
    this.status = status;
    this.publicMessage = publicMessage;
    this.code = code;
  }
}

export const jsonResponse = (value: unknown, status = 200) => new Response(
  JSON.stringify(value),
  {
    status,
    headers: {
      'Cache-Control': 'no-store',
      'Content-Type': 'application/json; charset=utf-8',
      'X-Content-Type-Options': 'nosniff',
    },
  },
);

export const assertSameOrigin = (request: Request) => {
  const origin = request.headers.get('origin');
  if (origin && origin !== new URL(request.url).origin) {
    throw new PublicFormError(403, 'This submission could not be verified.', 'invalid_origin');
  }
};

export const readJsonObject = async (request: Request): Promise<Record<string, unknown>> => {
  const contentType = request.headers.get('content-type') || '';
  if (!contentType.toLowerCase().startsWith('application/json')) {
    throw new PublicFormError(415, 'Please submit the form again.', 'invalid_content_type');
  }

  const declaredLength = Number(request.headers.get('content-length') || 0);
  if (Number.isFinite(declaredLength) && declaredLength > MAX_BODY_BYTES) {
    throw new PublicFormError(413, 'The form submission is too large.', 'body_too_large');
  }

  const body = await request.text();
  if (new TextEncoder().encode(body).byteLength > MAX_BODY_BYTES) {
    throw new PublicFormError(413, 'The form submission is too large.', 'body_too_large');
  }

  try {
    const parsed = JSON.parse(body);
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) throw new Error('Expected an object');
    return parsed as Record<string, unknown>;
  } catch {
    throw new PublicFormError(400, 'Please check the form and try again.', 'invalid_json');
  }
};

export const isHoneypotFilled = (input: Record<string, unknown>) => (
  typeof input._website === 'string' && input._website.trim().length > 0
);

export const cleanText = (
  value: unknown,
  label: string,
  options: { required?: boolean; max?: number } = {},
) => {
  const { required = false, max = 500 } = options;
  if (typeof value !== 'string') {
    if (required) throw new PublicFormError(400, `Please enter ${label}.`, 'missing_field');
    return '';
  }

  const cleaned = value.replace(CONTROL_CHARACTERS, '').trim();
  if (required && !cleaned) throw new PublicFormError(400, `Please enter ${label}.`, 'missing_field');
  if (cleaned.length > max) throw new PublicFormError(400, `${label} is too long.`, 'field_too_long');
  return cleaned;
};

export const cleanEmail = (value: unknown, label = 'a valid email address') => {
  const email = cleanText(value, label, { required: true, max: 254 }).toLowerCase();
  if (!EMAIL_PATTERN.test(email) || email.includes('\r') || email.includes('\n')) {
    throw new PublicFormError(400, `Please enter ${label}.`, 'invalid_email');
  }
  return email;
};

export const cleanOptionalUrl = (value: unknown, label: string) => {
  const candidate = cleanText(value, label, { max: 2_000 });
  if (!candidate) return '';

  try {
    const url = new URL(candidate);
    if (!['http:', 'https:'].includes(url.protocol)) throw new Error('Unsupported protocol');
    return url.toString();
  } catch {
    throw new PublicFormError(400, `Please enter a valid ${label}.`, 'invalid_url');
  }
};

export const cleanChoice = (
  value: unknown,
  label: string,
  allowed: readonly string[],
  required = false,
) => {
  const candidate = cleanText(value, label, { required, max: 100 });
  if (!candidate) return '';
  if (!allowed.includes(candidate)) {
    throw new PublicFormError(400, `Please select a valid ${label}.`, 'invalid_choice');
  }
  return candidate;
};

export const submissionIdFrom = (request: Request, fallback?: string) => {
  const supplied = request.headers.get('x-submission-id')?.trim() || '';
  if (/^[a-zA-Z0-9_-]{12,128}$/.test(supplied)) return supplied;
  if (fallback && /^[a-zA-Z0-9_-]{8,128}$/.test(fallback)) return fallback;
  return crypto.randomUUID();
};
