/* JCLAW TV: original SVG programme illustrations, guided by s10-tv.html.
   All scenes are visual introductions, never recordings or computed research results. */
const PROGRAMS = {
 cth:[
  {id:'contract',title:'把金额，算清楚。',sub:'合同金额',text:'含税金额、分期比例与中文大写。\n让重复核对更顺手。',meta:'01 / 06 · 合同计算',kind:'receipt'},
  {id:'supplies',title:'每一支，都有数。',sub:'物资估算',text:'从采血安排出发，整理采血管、\n冻存管与冻存盒的用量。',meta:'02 / 06 · 物资计算',kind:'tubes'},
  {id:'size',title:'先说清楚假设。',sub:'例数探索',text:'选择研究设计、变异与把握度，\n再进入工具进行估算。',meta:'03 / 06 · 例数估算',kind:'sample'},
  {id:'ctcae',title:'找到那条原文。',sub:'CTCAE 查询',text:'查询术语、查看分级描述。\n具体分级仍需结合实际情况核对。',meta:'04 / 06 · 术语查询',kind:'grade'},
  {id:'meddra',title:'把术语，放回层级。',sub:'MedDRA 浏览',text:'从词条走向完整层级，\n保留名称、代码与上下文。',meta:'05 / 06 · 术语浏览',kind:'terms'},
  {id:'meal',title:'一餐，也有章法。',sub:'高脂餐谱',text:'组合食材，查看营养构成。\n数值与餐谱在原工具中核对。',meta:'06 / 06 · 餐谱计算',kind:'meal'}],
 learn:[
  {id:'design',title:'从问题，学到设计。',sub:'研究设计',text:'先理解问题，再看研究设计。\n课程内容以学习平台为准。',meta:'01 / 03 · 学习内容示意',kind:'lesson'},
  {id:'guidance',title:'读原文，也读背景。',sub:'法规学习',text:'把概念放回实际工作，\n在原平台查阅课程与资料。',meta:'02 / 03 · 学习内容示意',kind:'reading'},
  {id:'practice',title:'用一个案例，想深一点。',sub:'案例练习',text:'看情境、辨问题、回到依据。\n这里不产生学习记录或学分。',meta:'03 / 03 · 学习内容示意',kind:'practice'}],
 workbench:[
  {id:'nca',title:'让数据，显出形状。',sub:'PK / NCA',text:'从浓度出发，整理数据、\n查看曲线与参数。',meta:'01 / 03 · 曲线为形态示意，非研究数据',kind:'curve'},
  {id:'be',title:'比较之前，先核对。',sub:'BE 分析',text:'研究设计、输入与方法各有位置。\n在 Workbench 中开展分析与复核。',meta:'02 / 03 · 方法示意，不生成等效结论',kind:'compare'},
  {id:'explore',title:'看见不同的可能。',sub:'例数探索',text:'改变假设，比较估算路径。\n结果与适用范围在原工具确认。',meta:'03 / 03 · 探索示意，不提供推荐例数',kind:'explore'}],
 ezctd:[{id:'pdf',title:'把文件，处理妥当。',sub:'临床 PDF',text:'阅读、检索与批量检查。\n先配置实际使用入口。',meta:'01 / 01 · 工具用途示意',kind:'pdf'}],
 solo:[{id:'project',title:'今天的事，心中有数。',sub:'项目与节点',text:'项目、日程与待办，\n仍然留在自己的工作台。',meta:'01 / 01 · 工具用途示意',kind:'project'}],
 oracle:[{id:'evidence',title:'每个判断，都能回看。',sub:'经验与证据',text:'查询 PK / BE / CV 项目经验，\n比较结果，回到来源。',meta:'01 / 01 · 工具用途示意',kind:'evidence'}],
 gcp:[{id:'reference',title:'学过的，留在手边。',sub:'2026 / 学习资料',text:'整理过的法规与学习资料，\n从一个确认过的入口重新打开。',meta:'01 / 01 · 资料用途示意',kind:'book'}]
};
