import { defineNoSignalScene } from "../../shared/no-signal.js";
const website = {
  "id": "study",
  "n": 7,
  "name": "2026 · 学习资料",
  "url": "",
  "enabled": false,
  "color": "#d1bd8d",
  "desc": "无信号 · 未接入"
};
const theme = Object.freeze({
  "bg": "#eee3ca",
  "dark": "#5a543d",
  "ink": "#534b35",
  "muted": "#9a8c67",
  "accent": "#a0864b",
  "line": "#937e4726",
  "light": true
});
const scenes = Object.freeze([
  defineNoSignalScene({ channelId:"study", channel:7 })
]);
const site = Object.freeze({ apiVersion:1, website:Object.freeze(website), theme, scenes });
export { site };
