// Stable original comparison for the earlier studies, independent of the new CH1 playlist order.
import { defineCanvasScene } from '../src/animations/contract/canvas-scene.js';
import { inventory } from '../src/animations/sites/cth/renderers.js';
const originalTheme=Object.freeze({bg:'#e9e2ce',dark:'#384b38',ink:'#364331',muted:'#7e856c',accent:'#7b8153',line:'#7c815126',light:true});
const inventoryScene=defineCanvasScene({id:'cth.inventory-original',channelId:'cth',label:'物资盘点',seconds:10.5,draw:inventory});
export { originalTheme,inventoryScene };
