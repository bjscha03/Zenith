import type { Config } from '@netlify/functions';
import { newsletterSubscriptionDefinition } from './_shared/form-definitions.mts';
import { createFormHandler } from './_shared/form-runtime.mts';

export default createFormHandler(newsletterSubscriptionDefinition);

export const config: Config = {
  path: '/api/newsletter-subscribe',
};
