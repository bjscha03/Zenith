export interface FormSubmissionResult {
  success: true;
  duplicate?: boolean;
  notificationSent?: boolean;
  confirmationSent?: boolean;
  emailStatus?: 'accepted' | 'partial' | 'failed' | 'duplicate';
}

const createSubmissionId = () => {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') return crypto.randomUUID();
  return `form_${Date.now()}_${Math.random().toString(36).slice(2)}`;
};

export const submitWebsiteForm = async (
  endpoint: string,
  payload: Record<string, unknown>,
): Promise<FormSubmissionResult> => {
  const response = await fetch(endpoint, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      'X-Submission-Id': createSubmissionId(),
    },
    body: JSON.stringify(payload),
  });
  const body = await response.json().catch(() => ({})) as { error?: string } & Partial<FormSubmissionResult>;

  if (!response.ok || !body.success) {
    throw new Error(body.error || 'We could not submit the form. Please try again.');
  }

  return body as FormSubmissionResult;
};
