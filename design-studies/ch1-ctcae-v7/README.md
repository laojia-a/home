# CH01 不良事件分级：CTCAE 条目核对 v7

用户认可例数估算的同舞台编排后，继续下一幕“不良事件分级”。本幕以 Nausea（恶心）为查询示例，表现：检索条目 → 展开等级索引 → G2 前移、逐项阅读条件 → 回看完整条目。不提供患者病例或自动分级结论。

## 核对依据

- 当前 CTH 的 `src/utils/ctcae.js` 默认加载 `/data/ctcae/v6`。
- 已核对本地 `public/data/ctcae/v6/soc/gastrointestinal-disorders.json` 中的 `ctcae:6.0:10028813` 英文记录。该来源包的中文带未审校状态，因此本动画不将其作为正式中文定义。
- 对照 [NCI CTCAE v6.0 PDF](https://dctd.cancer.gov/research/ctep-trials/for-sites/adverse-events/ctcae-v6.pdf) 印刷第 69 页的 Nausea 条目：G1–G3 有定义，G4/G5 不适用；G2 包含静脉干预的另一项条件。
- PDF 第 2 页说明分号表达 OR。动画在 G2 展开时把两段条件分开，中间明确展示“或”。

主页面标注“中文为动画释义”。G1/G3 小卡只是索引摘要，不能代替完整分级条件；G2 的中文释义来自本次对英文条件的核对。来源为 National Cancer Institute 的 CTCAE，链接如上。

## 动作与边界

20 秒。搜索词逐字出现、G1–G5 五张索引卡展开、G2 前移、条件逐行强调、返回条目。按用户反馈完整显示五级框架，G4/G5 在“恶心”条目下明确标注不适用。不将整页连续横向平移。台标固定。没有成功判级印章或患者结果。

桌面与 390 × 844 下检查了展开条件和可读区域，无横向溢出。`node --test term.test.js` 验证分号的 OR 解析、IV 条件以及 G4/G5 不可用的含义。构建：`npm ci`、`npm run build`。独立审阅样稿，未替换线上。
