import type { Config } from '@netlify/functions';
import { scheduleCallDefinition } from './_shared/form-definitions.mts';
import { createFormHandler } from './_shared/form-runtime.mts';

export default createFormHandler(scheduleCallDefinition);

export const config: Config = {
  path: '/api/schedule-call',
};
