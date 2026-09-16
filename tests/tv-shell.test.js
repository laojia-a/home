import test from 'node:test';
import assert from 'node:assert/strict';
import { channelDistance } from '../src/ui/tv-shell.js';
import { paintTuning, tuningOpacity } from '../src/ui/tuning.js';

test('dial takes the shortest cyclic route for every pair of seven channels', () => {
  for (let from = 1; from <= 7; from++) for (let to = 1; to <= 7; to++) {
    const step = channelDistance(from, to);
    assert.ok(Math.abs(step) <= 3);
    assert.equal(((from - 1 + step + 7) % 7) + 1, to);
  }
  assert.equal(channelDistance(7, 1), 1);
  assert.equal(channelDistance(1, 7), -1);
});

test('all tuning strips start opaque and settle monotonically to transparent', () => {
  for (let row = 0; row < 18; row++) {
    let previous = 1;
    for (let t = 0; t <= 100; t++) {
      const alpha = tuningOpacity(t / 100, row);
      assert.ok(alpha >= 0 && alpha <= previous);
      previous = alpha;
    }
    assert.equal(tuningOpacity(0, row), 1);
    assert.equal(tuningOpacity(1, row), 0);
  }
});

test('tuning restores canvas context and draws nothing after settling', () => {
  const calls = [];
  const context = { save() { calls.push('save'); }, restore() { calls.push('restore'); },
    drawImage() { calls.push('image'); }, fillRect() { calls.push('line'); } };
  paintTuning(context, { width: 1000, height: 600 }, 1000, 600, .3);
  assert.equal(calls[0], 'save');
  assert.equal(calls.at(-1), 'restore');
  assert.equal(calls.filter(x => x === 'image').length, 18);
  calls.length = 0;
  paintTuning(context, { width: 1000, height: 600 }, 1000, 600, 1);
  assert.deepEqual(calls, ['save', 'restore']);
});
