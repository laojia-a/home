import { defineCanvasScene } from "../../contract/canvas-scene.js";
import { documents } from "./renderers.js";
const website = {
  "id": "ezctd",
  "n": 4,
  "name": "EZCTD",
  "url": "",
  "enabled": false,
  "color": "#c3a2b6",
  "desc": "文档预告 · 原测试卡方向延续"
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
  defineCanvasScene({ id:"ezctd.documents", channelId:"ezctd", label:"文档预告", seconds:12, draw:documents })
]);
const site = Object.freeze({ apiVersion:1, website:Object.freeze(website), theme, scenes });
export { site };
