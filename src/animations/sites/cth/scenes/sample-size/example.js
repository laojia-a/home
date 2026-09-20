import { crossoverSampleSize, plannedEnrollment } from './reference/be-stats.js';
// These are the existing CTH calculator defaults, not assumptions for a real study.
const inputs=Object.freeze({power:.8,alpha:.05,cv:.18,ratio:.9,lower:.8,upper:1.25,dropout:.1});
const estimated=crossoverSampleSize(inputs.power,inputs.alpha,inputs.cv,inputs.ratio,inputs.lower,inputs.upper);
if(estimated.invalid||estimated.maxReached||!Number.isFinite(estimated.n))throw Error('Example calculation failed');
const enrollment=plannedEnrollment(estimated.n,inputs.dropout,2);
const example=Object.freeze({inputs,evaluable:estimated.n,enrollment,perSequence:enrollment/2,achievedPower:estimated.achievedPower});
export { example };
