import { example } from './data.js';
function buildNodes(record){
  return record.levels.map(level=>({...level,key:level.level+':'+level.code}));
}
const nodes=buildNodes(example);
export { example, nodes, buildNodes };
