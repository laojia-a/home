import { defineCanvasScene } from "../../contract/canvas-scene.js";
import { planning } from "./renderers.js";
const website = {
  "id": "solo",
  "n": 5,
  "name": "BE Solo",
  "url": "",
  "enabled": false,
  "color": "#a3b5cf",
  "desc": "项目预告 · 不读取真实任务"
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
  defineCanvasScene({ id:"solo.planning", channelId:"solo", label:"项目预告", seconds:12, draw:planning })
]);
const site = Object.freeze({ apiVersion:1, website:Object.freeze(website), theme, scenes });
export { site };
