import { createProgrammeSeries } from "../../contract/programme-series.js";
import { drawProcess as contract } from "./scenes/contract/drawing.js";
import { drawProcess as plasma } from "./scenes/plasma/drawing.js";
import { drawProcess as sample } from "./scenes/sample-size/drawing.js";
import { drawProcess as grades } from "./scenes/ctcae/drawing.js";
import { drawProcess as terms } from "./scenes/terms/drawing.js";
import { drawProcess as meal } from "./scenes/meal/drawing.js";
const website = {
  "id": "cth",
  "n": 1,
  "name": "临床工具集",
  "url": "https://cth.jclaw.top",
  "enabled": true,
  "color": "#9dab75",
  "desc": "例数 / 合同金额 / 餐谱 / 血浆分装 / 分级 / 术语"
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
const scenes = createProgrammeSeries('cth',[
  {id:'cth.sample',label:'例数估算',section:'研究准备',subtitle:'研究设计 · 例数规划',contentMs:20000,draw:sample},
  {id:'cth.contract',label:'合同金额与分期',section:'研究准备',subtitle:'费用测算 · 分期安排',contentMs:20000,draw:contract},
  {id:'cth.breakfast',label:'餐谱计算',section:'执行操作',subtitle:'食材份量 · 供能构成',contentMs:20000,draw:meal},
  {id:'cth.inventory',label:'血浆分装',section:'执行操作',subtitle:'离心分层 · 待测与备份',contentMs:28000,draw:plasma},
  {id:'cth.grades',label:'不良事件分级',section:'记录核对',subtitle:'查找条目 · 阅读条件',contentMs:20000,draw:grades},
  {id:'cth.terms',label:'术语检索',section:'记录核对',subtitle:'选择术语 · 展开层级',contentMs:20000,draw:terms}
]);
const site = Object.freeze({ apiVersion:1, website:Object.freeze(website), theme, scenes });
export { site };
