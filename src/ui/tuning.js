/* CRT synchronisation: a brief horizontal tear settles into the new frame.
   Driven only by the existing player clock; no random flash or input lock. */
function tuningOpacity(progress, strip) {
  const p = Math.min(1, Math.max(0, (progress - strip * .008) / .72));
  return 1 - p * p * (3 - 2 * p);
}
function paintTuning(ctx, snapshot, width, height, progress, direction = 1) {
  const strips = 18, sh = height / strips;
  const envelope = Math.sin(Math.PI * progress) * (1 - progress);
  ctx.save();
  for (let row = 0; row < strips; row++) {
    const alpha = tuningOpacity(progress, row);
    if (alpha <= .001) continue;
    const offset = Math.sin(row * 1.7 + progress * 12) * 9 * envelope * direction;
    ctx.globalAlpha = alpha;
    ctx.drawImage(snapshot, 0, row / strips * snapshot.height,
      snapshot.width, snapshot.height / strips,
      offset, row * sh, width, sh + .5);
  }
  // A low-contrast sync line, never a full-screen white frame.
  if (progress > .08 && progress < .72) {
    ctx.globalAlpha = .1 * envelope;
    ctx.fillStyle = '#182c24';
    ctx.fillRect(0, height * progress, width, Math.max(1, height * .006));
  }
  ctx.restore();
}
export { paintTuning, tuningOpacity };
