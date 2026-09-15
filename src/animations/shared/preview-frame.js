import { D } from "./draw.js";
const {rr,heading}=D;
 function previewFrame(c,W,H,th,m,title,sub){
  // Test-card colour cues remain as a thin edge; the whole channel is now a preview.
  const colors=['#b5baa7','#ccbb88','#8dbabd','#a9bd95','#b398b0','#bd9688','#8396af'];colors.forEach((s,i)=>rr(c,i*W/7,0,W/7+.2,5,0,s));
  heading(c,W,H,title,sub,th,m);
 }

export { previewFrame };
