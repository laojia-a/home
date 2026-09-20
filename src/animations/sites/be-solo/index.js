import { defineNoSignalScene } from "../../shared/no-signal.js";
const website = {
  "id": "solo",
  "n": 5,
  "name": "BE Solo",
  "url": "",
  "enabled": false,
  "color": "#a3b5cf",
  "desc": "无信号 · 未接入"
};
const theme = Object.freeze({
  "bg": "#e2e6eb",
  "dark": "#414b66",
  "ink": "#39475a",
  "muted": "#7b8a9d",
  "accent": "#677d9c",
  "line": "#667e9b26",
  "light": true
});
const scenes = Object.freeze([
  defineNoSignalScene({ channelId:"solo", channel:5 })
]);
const site = Object.freeze({ apiVersion:1, website:Object.freeze(website), theme, scenes });
export { site };
