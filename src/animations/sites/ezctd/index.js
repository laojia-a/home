import { defineNoSignalScene } from "../../shared/no-signal.js";
const website = {
  "id": "ezctd",
  "n": 4,
  "name": "EZCTD",
  "url": "",
  "enabled": false,
  "color": "#c3a2b6",
  "desc": "无信号 · 未接入"
};
const theme = Object.freeze({
  "bg": "#ece3e2",
  "dark": "#5c4f5b",
  "ink": "#574755",
  "muted": "#a08b99",
  "accent": "#9c657e",
  "line": "#85657526",
  "light": true
});
const scenes = Object.freeze([
  defineNoSignalScene({ channelId:"ezctd", channel:4 })
]);
const site = Object.freeze({ apiVersion:1, website:Object.freeze(website), theme, scenes });
export { site };
