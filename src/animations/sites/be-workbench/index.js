import { defineCanvasScene } from "../../contract/canvas-scene.js";
import { workbench } from "./renderers.js";
const website = {
  "id": "workbench",
  "n": 3,
  "name": "BE Workbench",
  "url": "https://be-workbench.jclaw.top",
  "enabled": true,
  "color": "#ed987e",
  "desc": "合成曲线 / AUC 示意 / 参数标记"
};
const theme = Object.freeze({
  "bg": "#152b31",
  "dark": "#0e1f26",
  "ink": "#e4e7df",
  "muted": "#93a8a8",
  "accent": "#ed977b",
  "line": "#a9b8b920",
  "light": false
});
const scenes = Object.freeze([
  defineCanvasScene({ id:"workbench.traces", channelId:"workbench", label:"T / R 轨迹", seconds:12, draw:(c,W,H,p,t,th,m)=>workbench(c,W,H,p,t,th,m,0) }),
  defineCanvasScene({ id:"workbench.auc", channelId:"workbench", label:"AUC 区域", seconds:12, draw:(c,W,H,p,t,th,m)=>workbench(c,W,H,p,t,th,m,1) }),
  defineCanvasScene({ id:"workbench.parameters", channelId:"workbench", label:"参数标记", seconds:12, draw:(c,W,H,p,t,th,m)=>workbench(c,W,H,p,t,th,m,2) })
]);
const site = Object.freeze({ apiVersion:1, website:Object.freeze(website), theme, scenes });
export { site };
