import { defineCanvasScene } from "../../contract/canvas-scene.js";
import { lecture } from "./renderers.js";
const website = {
  "id": "learn",
  "n": 2,
  "name": "临研知视",
  "url": "https://cv.jclaw.top",
  "enabled": true,
  "color": "#9ac47a",
  "desc": "三幕课程板书 · 逐条展开"
};
const theme = Object.freeze({
  "bg": "#183c2d",
  "dark": "#0b251b",
  "ink": "#e9efd8",
  "muted": "#a1b699",
  "accent": "#c4da93",
  "line": "#b5d29325",
  "light": false
});
const scenes = Object.freeze([
  defineCanvasScene({ id:"learn.design", channelId:"learn", label:"BE 试验设计入门", seconds:12, draw:(c,W,H,p,t,th,m)=>lecture(c,W,H,p,t,th,m,0) }),
  defineCanvasScene({ id:"learn.gcp", channelId:"learn", label:"GCP 法规更新解读", seconds:12, draw:(c,W,H,p,t,th,m)=>lecture(c,W,H,p,t,th,m,1) }),
  defineCanvasScene({ id:"learn.data-review", channelId:"learn", label:"数据核查实战", seconds:12, draw:(c,W,H,p,t,th,m)=>lecture(c,W,H,p,t,th,m,2) })
]);
const site = Object.freeze({ apiVersion:1, website:Object.freeze(website), theme, scenes });
export { site };
