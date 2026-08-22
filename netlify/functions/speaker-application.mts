import type { Config } from '@netlify/functions';
import { speakerApplicationDefinition } from './_shared/form-definitions.mts';
import { createFormHandler } from './_shared/form-runtime.mts';

export default createFormHandler(speakerApplicationDefinition);

export const config: Config = {
  path: '/api/speaker-application',
};
