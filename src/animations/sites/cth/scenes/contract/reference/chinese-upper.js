function toChineseUpper(num) {
  if (Number.isNaN(num)) return '无效金额';
  if (!Number.isFinite(num)) return '金额溢出';
  if (num === 0) return '零元整';
  const Dg = ['零','壹','贰','叁','肆','伍','陆','柒','捌','玖'];
  num = Math.abs(num);
  let intP = Math.floor(num);
  let decP = Math.round((num - intP) * 100);
  if (decP >= 100) { intP++; decP = 0; }
  let r = '';
  if (intP > 0) r += _intCh(intP) + '元';
  if (decP > 0) {
    let j = Math.floor(decP / 10), f = decP % 10;
    if (j > 0) r += Dg[j] + '角';
    else if (intP > 0) r += '零';
    if (f > 0) r += Dg[f] + '分';
  } else {
    r += '整';
  }
  return r;
}

function _intCh(n) {
  const Dg = ['零','壹','贰','叁','肆','伍','陆','柒','捌','玖'];
  const U = ['','拾','佰','仟'];
  const B = ['','万','亿','万亿'];
  if (n === 0) return '';
  let s = n.toString();
  let groups = [];
  while (s.length > 0) { groups.unshift(parseInt(s.slice(-4))); s = s.slice(0, -4); }
  let r = '';
  let needZero = false;
  for (let g = 0; g < groups.length; g++) {
    let gv = groups[g];
    let bi = groups.length - 1 - g;
    if (gv === 0) { needZero = true; continue; }
    let digits = gv.toString().padStart(4, '0');
    if (r.length > 0 && (digits[0] === '0' || needZero)) r += '零';
    needZero = false;
    let gs = '';
    let pz = false;
    for (let i = 0; i < 4; i++) {
      let d = parseInt(digits[i]);
      let ui = 3 - i;
      if (d === 0) { pz = true; }
      else {
        if (pz && gs.length > 0) gs += '零';
        pz = false;
        gs += Dg[d] + U[ui];
      }
    }
    r += gs + B[bi];
  }
  return r;
}

export { toChineseUpper };
