import { build } from 'esbuild';
import { readFile, writeFile } from 'node:fs/promises';

await build({entryPoints:['scene.js'],bundle:true,format:'esm',outfile:'bundle.js',minify:true,legalComments:'eof'});
const cabinet=await Promise.all(['s10.css','refinements.css','tv-shell.css'].map(name=>readFile(new URL('../../src/styles/'+name,import.meta.url),'utf8')));
await writeFile(new URL('./cabinet.css',import.meta.url),'/* Cabinet snapshot for the reviewed v2. */\n'+cabinet.join('\n').replace(/\r\n/g,'\n'));
console.log('Built standalone Canvas refinement study and cabinet snapshot.');
