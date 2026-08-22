import type { Config } from '@netlify/functions';
import { brochureRequestDefinition } from './_shared/form-definitions.mts';
import { createFormHandler } from './_shared/form-runtime.mts';

export default createFormHandler(brochureRequestDefinition);

export const config: Config = {
  path: '/api/brochure-request',
};
