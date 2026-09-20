import example from './example.json' with { type: 'json' };
function buildNodes(record){
  return record.levels.map(level=>({...level,key:level.level+':'+level.code}));
}
const nodes=buildNodes(example);
export { example, nodes, buildNodes };
