import { defineNoSignalScene } from "../../shared/no-signal.js";
const website = {
  "id": "oracle",
  "n": 6,
  "name": "BE Oracle",
  "url": "",
  "enabled": false,
  "color": "#b5c5a4",
  "desc": "无信号 · 未接入"
};
const theme = Object.freeze({
  "bg": "#dce4d5",
  "dark": "#334b3f",
  "ink": "#324e40",
  "muted": "#7a8c73",
  "accent": "#708e60",
  "line": "#60775c26",
  "light": true
});
const scenes = Object.freeze([
  defineNoSignalScene({ channelId:"oracle", channel:6 })
]);
const site = Object.freeze({ apiVersion:1, website:Object.freeze(website), theme, scenes });
export { site };
