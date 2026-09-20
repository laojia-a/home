const LANCZOS_G = [
  0.99999999999980993,
  676.5203681218851,
  -1259.1392167224028,
  771.32342877765313,
  -176.61502916214059,
  12.507343278686905,
  -0.13857109526572012,
  9.9843695780195716e-6,
  1.5056327351493116e-7
];

function lnGamma(z) {
  if (z < 0.5) {
    return Math.log(Math.PI / Math.sin(Math.PI * z)) - lnGamma(1 - z);
  }
  z -= 1;
  let x = LANCZOS_G[0];
  for (let i = 1; i < LANCZOS_G.length; i++) {
    x += LANCZOS_G[i] / (z + i);
  }
  const t = z + LANCZOS_G.length - 1.5;
  return 0.5 * Math.log(2 * Math.PI) + (z + 0.5) * Math.log(t) - t + Math.log(x);
}

function lnBeta(a, b) {
  return lnGamma(a) + lnGamma(b) - lnGamma(a + b);
}

function regularizedBeta(x, a, b) {
  if (x <= 0) return 0;
  if (x >= 1) return 1;
  if (x < (a + 1) / (a + b + 2)) {
    return betaCF(x, a, b) * Math.exp(a * Math.log(x) + b * Math.log(1 - x) - lnBeta(a, b)) / a;
  }
  return 1 - regularizedBeta(1 - x, b, a);
}

function betaCF(x, a, b) {
  const maxIter = 200;
  const eps = 1e-14;
  let qab = a + b;
  let qap = a + 1;
  let qam = a - 1;
  let c = 1;
  let d = 1 - qab * x / qap;
  if (Math.abs(d) < 1e-30) d = 1e-30;
  d = 1 / d;
  let h = d;
  for (let m = 1; m <= maxIter; m++) {
    let m2 = 2 * m;
    let aa = m * (b - m) * x / ((qam + m2) * (a + m2));
    d = 1 + aa * d;
    if (Math.abs(d) < 1e-30) d = 1e-30;
    c = 1 + aa / c;
    if (Math.abs(c) < 1e-30) c = 1e-30;
    d = 1 / d;
    h *= d * c;
    aa = -(a + m) * (qab + m) * x / ((a + m2) * (qap + m2));
    d = 1 + aa * d;
    if (Math.abs(d) < 1e-30) d = 1e-30;
    c = 1 + aa / c;
    if (Math.abs(c) < 1e-30) c = 1e-30;
    d = 1 / d;
    let del = d * c;
    h *= del;
    if (Math.abs(del - 1) < eps) break;
  }
  return h;
}

function normalCDF(x) {
  const a1 = 0.254829592;
  const a2 = -0.284496736;
  const a3 = 1.421413741;
  const a4 = -1.453152027;
  const a5 = 1.061405429;
  const p = 0.3275911;
  const sign = x < 0 ? -1 : 1;
  const ax = Math.abs(x) / Math.SQRT2;
  const t = 1 / (1 + p * ax);
  const y = 1 - (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t * Math.exp(-ax * ax);
  return 0.5 * (1 + sign * y);
}

function tCDF(t, df) {
  const x = df / (df + t * t);
  const p = regularizedBeta(x, df / 2, 0.5);
  if (t >= 0) return 1 - 0.5 * p;
  return 0.5 * p;
}

function tInv(p, df) {
  if (p <= 0) return -Infinity;
  if (p >= 1) return Infinity;
  let lo = -100, hi = 100;
  for (let i = 0; i < 100; i++) {
    const mid = (lo + hi) / 2;
    const val = tCDF(mid, df);
    if (val < p) lo = mid;
    else hi = mid;
    if (hi - lo < 1e-12) break;
  }
  let t = (lo + hi) / 2;
  for (let i = 0; i < 20; i++) {
    const f = tCDF(t, df) - p;
    const dt = 1e-7;
    const fp = (tCDF(t + dt, df) - tCDF(t - dt, df)) / (2 * dt);
    if (Math.abs(fp) < 1e-30) break;
    const delta = f / fp;
    t -= delta;
    if (Math.abs(delta) < 1e-12) break;
  }
  return t;
}

function chiSqPdf(v, nu) {
  if (v <= 0) return 0;
  const halfNu = nu / 2;
  const logPdf = (halfNu - 1) * Math.log(v) - v / 2 - halfNu * Math.LN2 - lnGamma(halfNu);
  return Math.exp(logPdf);
}

function nctCDF(x, df, ncp) {
  if (Math.abs(ncp) < 1e-10) return tCDF(x, df);
  const nu = df;
  const upper = Math.max(nu + 12 * Math.sqrt(2 * nu), 50);
  const n = Math.min(Math.max(Math.round(upper * 2), 200), 2000);
  const h = upper / n;
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    const v = i * h;
    const phi = normalCDF(x * Math.sqrt(v / nu) - ncp);
    const pdf = chiSqPdf(v, nu);
    const w = (i === 0 || i === n) ? 1 : (i % 2 === 0 ? 2 : 4);
    sum += w * phi * pdf;
  }
  return Math.min(1, Math.max(0, sum * h / 3));
}

function invalidSampleSize(error, shape = {}) {
  return {
    ...shape,
    achievedPower: null,
    invalid: true,
    error,
  };
}

function validateCommonInputs(power, alpha, cv, ratio, lower, upper) {
  if (!Number.isFinite(power) || power <= 0 || power >= 1) {
    return '目标 Power 必须大于 0% 且小于 100%';
  }
  if (!Number.isFinite(alpha) || alpha <= 0 || alpha >= 0.5) {
    return '显著性水平 α 必须大于 0 且小于 0.5';
  }
  if (!Number.isFinite(cv) || cv <= 0) {
    return 'CV 必须大于 0';
  }
  if (!Number.isFinite(ratio) || ratio <= 0) {
    return '预期 GMR 必须大于 0';
  }
  if (!Number.isFinite(lower) || !Number.isFinite(upper) || lower <= 0 || upper <= lower) {
    return '等效区间必须满足 0 < 下限 < 上限';
  }
  if (ratio <= lower || ratio >= upper) {
    return '预期 GMR 必须位于等效区间内，才能反求样本量';
  }
  return null;
}

function crossoverSampleSize(power, alpha, cv, ratio, lower, upper) {
  const inputError = validateCommonInputs(power, alpha, cv, ratio, lower, upper);
  if (inputError) return invalidSampleSize(inputError, { n: null });

  const sw = Math.sqrt(Math.log(cv * cv + 1));
  const sw2 = sw * sw;
  let n = 12;
  let achievedPower = 0;
  while (n <= 2000) {
    const df = n - 2;
    const t = tInv(1 - alpha, df);
    const tau2 = Math.sqrt(n) * (Math.log(ratio) - Math.log(upper)) / Math.sqrt(2 * sw2);
    const tau1 = Math.sqrt(n) * (Math.log(ratio) - Math.log(lower)) / Math.sqrt(2 * sw2);
    achievedPower = nctCDF(-t, df, tau2) - nctCDF(t, df, tau1);
    if (achievedPower >= power) break;
    n += 2;
  }
  if (n > 2000 || achievedPower < power) return { n: null, achievedPower, maxReached: true };
  return { n, achievedPower };
}

function cvFromCI(n, lower, upper, alpha) {
  if (alpha === undefined) alpha = 0.1;
  if (!Number.isInteger(n) || n < 4) {
    return { invalid: true, error: 'N 必须是大于或等于 4 的整数', cv: null };
  }
  if (!Number.isFinite(lower) || !Number.isFinite(upper) || lower <= 0 || upper <= lower) {
    return { invalid: true, error: '90% CI 上限必须大于下限，且两者均大于 0', cv: null };
  }
  if (!Number.isFinite(alpha) || alpha <= 0 || alpha >= 1) {
    return { invalid: true, error: '置信水平参数无效', cv: null };
  }

  const isEvenN = n % 2 === 0;
  let N1, N2, denomFactor;
  if (isEvenN) {
    N1 = N2 = n / 2;
    denomFactor = Math.sqrt(2 / N1);
  } else {
    N1 = (n + 1) / 2;
    N2 = (n - 1) / 2;
    denomFactor = Math.sqrt(1 / N1 + 1 / N2);
  }
  const PE = Math.sqrt(lower * upper);
  const deltaCL = Math.log(upper) - Math.log(PE);
  const t_val = tInv(1 - alpha / 2, n - 2);
  const MSE = 2 * Math.pow(deltaCL / (denomFactor * t_val), 2);
  const cv = 100 * Math.sqrt(Math.exp(MSE) - 1);
  return { pe: PE, deltaCL, mse: MSE, cv, isEvenN, n1: N1, n2: N2 };
}

function replicateSampleSize() {
  return {
    n: null,
    achievedPower: null,
    unavailable: true,
    error: '重复交叉样本量计算已暂停，待按当前 FDA/EMA 方法完成监管特异性重构',
  };
}

function parallelSampleSize(power, alpha, cv, ratio, r, lower, upper) {
  if (r === undefined) r = 1;
  if (lower === undefined) lower = 0.8;
  if (upper === undefined) upper = 1 / lower;
  const inputError = validateCommonInputs(power, alpha, cv, ratio, lower, upper);
  if (inputError) {
    return invalidSampleSize(inputError, { nA: null, nB: null, total: null });
  }
  if (!Number.isFinite(r) || r <= 0) {
    return invalidSampleSize('分配比 r 必须大于 0', { nA: null, nB: null, total: null });
  }

  const s = Math.sqrt(Math.log(cv * cv + 1));
  const s2 = s * s;
  let nT = 1;
  let nR = Math.ceil(nT * r);
  let total = nT + nR;
  let achievedPower = 0;
  while (total <= 2000) {
    if (total >= 12) {
      const df = total - 2;
      const t = tInv(1 - alpha, df);
      const allocationFactor = Math.sqrt((nT * nR) / total);
      const tau2 = allocationFactor * (Math.log(ratio) - Math.log(upper)) / Math.sqrt(s2);
      const tau1 = allocationFactor * (Math.log(ratio) - Math.log(lower)) / Math.sqrt(s2);
      achievedPower = nctCDF(-t, df, tau2) - nctCDF(t, df, tau1);
      if (achievedPower >= power) break;
    }
    nT += 1;
    nR = Math.ceil(nT * r);
    total = nT + nR;
  }
  if (total > 2000 || achievedPower < power) {
    return { nA: null, nB: null, total: null, achievedPower, maxReached: true };
  }
  return { nA: nT, nB: nR, total, achievedPower };
}

function plannedEnrollment(evaluableN, dropoutRate = 0, blockSize = 1) {
  if (!Number.isInteger(evaluableN) || evaluableN <= 0) return null;
  if (!Number.isFinite(dropoutRate) || dropoutRate < 0 || dropoutRate >= 1) return null;
  if (!Number.isInteger(blockSize) || blockSize <= 0) return null;

  const inflated = Math.ceil(evaluableN / (1 - dropoutRate));
  return Math.ceil(inflated / blockSize) * blockSize;
}

export { tCDF, tInv, nctCDF, crossoverSampleSize, cvFromCI, replicateSampleSize, parallelSampleSize, plannedEnrollment };
