import { defineCanvasScene } from "../../contract/canvas-scene.js";
import { contract, inventory, sample, grades, terms, breakfast } from "./renderers.js";
const website = {
  "id": "cth",
  "n": 1,
  "name": "临床工具集",
  "url": "https://cth.jclaw.top",
  "enabled": true,
  "color": "#9dab75",
  "desc": "合同 / 物资 / 例数 / 分级 / 术语 / 餐谱"
};
const theme = Object.freeze({
  "bg": "#e9e2ce",
  "dark": "#384b38",
  "ink": "#364331",
  "muted": "#7e856c",
  "accent": "#7b8153",
  "line": "#7c815126",
  "light": true
});
const scenes = Object.freeze([
  defineCanvasScene({ id:"cth.contract", channelId:"cth", label:"合同追踪", seconds:10, draw:contract }),
  defineCanvasScene({ id:"cth.inventory", channelId:"cth", label:"物资盘点", seconds:10.5, draw:inventory }),
  defineCanvasScene({ id:"cth.sample", channelId:"cth", label:"例数估算", seconds:10, draw:sample }),
  defineCanvasScene({ id:"cth.grades", channelId:"cth", label:"不良事件分级", seconds:10, draw:grades }),
  defineCanvasScene({ id:"cth.terms", channelId:"cth", label:"术语检索", seconds:10, draw:terms }),
  defineCanvasScene({ id:"cth.breakfast", channelId:"cth", label:"餐谱计算", seconds:11, draw:breakfast })
]);
const site = Object.freeze({ apiVersion:1, website:Object.freeze(website), theme, scenes });
export { site };
