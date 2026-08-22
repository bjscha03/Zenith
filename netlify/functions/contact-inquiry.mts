import type { Config } from '@netlify/functions';
import { contactInquiryDefinition } from './_shared/form-definitions.mts';
import { createFormHandler } from './_shared/form-runtime.mts';

export default createFormHandler(contactInquiryDefinition);

export const config: Config = {
  path: '/api/contact-inquiry',
};
