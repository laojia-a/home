import example from './example.json' with { type:'json' };
function calculate(items){
  const totals={protein:0,fat:0,carb:0};
  for(const food of items)for(const key of Object.keys(totals))totals[key]+=food.per100[key]*food.amount/100;
  const energy={protein:totals.protein*4,fat:totals.fat*9,carb:totals.carb*4};
  const calories=energy.protein+energy.fat+energy.carb;
  return {...totals,energy,calories,fatShare:calories?energy.fat/calories:0};
}
const result=calculate(example.items);
export { example, result, calculate };
