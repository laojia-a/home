import { defineCanvasScene } from "../../contract/canvas-scene.js";
import { reading } from "./renderers.js";
const website = {
  "id": "study",
  "n": 7,
  "name": "2026 · 学习资料",
  "url": "",
  "enabled": false,
  "color": "#d1bd8d",
  "desc": "资料预告 · 默认地址未配置"
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
  defineCanvasScene({ id:"study.reading", channelId:"study", label:"学习资料预告", seconds:13, draw:reading })
]);
const site = Object.freeze({ apiVersion:1, website:Object.freeze(website), theme, scenes });
export { site };
