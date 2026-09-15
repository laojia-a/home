/** One website owns one theme and one ordered set of local animation scenes. */
export function defineWebsite(definition) {
  const { moduleId, channel, theme, scenes } = definition;
  if (!/^[a-z][a-z0-9-]*$/.test(moduleId || '')) throw new TypeError('Invalid website moduleId');
  if (!channel || !Number.isInteger(channel.n) || channel.n < 1 || !channel.id || !channel.name) {
    throw new TypeError(`${moduleId}: invalid channel metadata`);
  }
  if (!theme || ['bg', 'ink', 'muted', 'accent', 'line'].some(key => typeof theme[key] !== 'string')) {
    throw new TypeError(`${moduleId}: incomplete theme`);
  }
  if (!Array.isArray(scenes) || !scenes.length) throw new TypeError(`${moduleId}: no scenes`);
  const ids = new Set();
  for (const scene of scenes) {
    if (!scene.id?.startsWith(moduleId + '.') || ids.has(scene.id)) throw new TypeError(`${moduleId}: repeated or invalid scene ID`);
    if (scene.renderer !== 'canvas2d' || typeof scene.draw !== 'function' || !scene.label || !Number.isFinite(scene.seconds) || scene.seconds <= 0) {
      throw new TypeError(`${scene.id}: incomplete Canvas scene`);
    }
    ids.add(scene.id);
  }
  return Object.freeze({ apiVersion: 1, moduleId, channel: Object.freeze({ ...channel }),
    theme: Object.freeze({ ...theme }), scenes: Object.freeze(scenes.map(s => Object.freeze({ ...s }))) });
}
