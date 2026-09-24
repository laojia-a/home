# 外部资源：对齐具体部件，不拼贴不同风格

核查日期：2026-09-16。以原厂、博物馆、规范组织和项目官方文档为主要来源。下面区分文献事实、视觉观察和本项目的设计取舍；不是引用某个设计师替用户决定审美。

## 一、用户资料的优先级

- S01：用户最初提供的ToolTV奶油手绘电视图。用于色温、材质、局部描边与实体关系；不继承摄影角度、背景盆栽、四分类文案或改变七频道含义。图中按钮以奶油面为主、小色端为辅。
- S02：用户指出“这个可以”的页面构图。用于大屏与右侧控制的位置；后续正面、无遥控器、无页眉要求优先。
- S03：最后生成的合同追踪电视图片。只能作为未获批准的探索图；仍有四个整面彩色胶囊，不能把它当成“配色问题已解决”的证据。

用户图片可用于本次审查，但原始出处/商业再发布权不因用户提供图片而被自动确认。不得将来源不明的参考整图直接作为生产皮肤。

## 二、实物与工业设计

### E01 · Braun SK4：借零件家族和材质节制

来源：[Cooper Hewitt / Smithsonian，An Apple Inspiration](https://www.cooperhewitt.org/2013/09/24/an-apple-inspiration/)。记录描述1956年的SK4、白色金属壳、木侧板和透明盖。已打开并查看[该页实物图片](https://www.cooperhewitt.org/wp-content/uploads/2013/09/16136_94ff2b6fb146e4e2_b.jpg)。

观察：同族深色旋钮、紧凑机械按键和极少量状态色，操作标识没有各自变成一块完整亮色面。借鉴的是同类零件的一致性、安装关系与标识克制，不复制其唱机布局、商标或顶部操作位置。

对齐：A07/A09/A10/A18 → R03/R05/R12 → D03/D04 → T02。该图片许可未确认可自由再分发，因此仅给来源链接，不复制到生产资源或把整个图片嵌入界面。

### E02 · Sony早期便携电视：借设备逻辑，不照搬技术叙事

来源：[Sony官方电视发展记录](https://www.sony.com/en/SonyInfo/CorporateInfo/History/sonyhistory-c.html)，可核对TV8-301（1960）和KV-1310（1968）的历史条目。

用途：约束便携电视的设备类别、真实控制和年代参考。不引用营销性“首创/领先”作为本项目优越性，也不据图片文件名推测按钮动作。原图下载在当前工具中失败，本次不声称已对Sony控件原图做逐像素分析。

[索尼电视图片提供页面](https://www.sony.com/ja/pressroom/pict_data/tv.html)对新闻用途和处理方式有条件说明。研究可查阅不等于任意用于界面皮肤；不把原厂照片/商标直接打包。

对齐：R02/R05/R17 → D02/D04/D10。此来源主要补年代与设备角色，不凌驾于用户的正面构图要求。

### E03 · Brionvega Algol 11：借圆润体量，明确不借倾斜屏幕

来源：[Design Museum Brussels馆藏](https://collection.designmuseum.brussels/en/algol-11-0)及[MoMA馆藏记录](https://www.moma.org/collection/works/4112)。记录可核对1964、塑料/金属、便携形态。Brussels明确描述略向上倾的造型、可收拢提手和位于顶部的控制。

借鉴：卡通化可以来自一个完整圆润物体，而不是增加贴纸与四块糖果键。不采用它的屏幕倾斜和顶部控制布局，这两项与用户“正面、右侧操作”冲突。Brussels图片请求失败；本轮对其形态取舍依据馆藏文字，不声称已完成原图细节描摹。

MoMA页面提供图片授权联系说明，不是开放素材承诺。对齐：A03/A05/A06 → R02/R03 → D02/D03 → T03。

## 三、实现候选：只用解决实际问题的部分

### E04 · Rough.js

[官网](https://roughjs.com/) / [官方API](https://github.com/rough-stuff/rough/wiki) / [MIT许可](https://github.com/rough-stuff/rough/blob/master/LICENSE)。官网说明其支持Canvas/SVG及手绘线条；可调roughness、bowing、strokeWidth。

本项目取舍：可评估为离线生成少量稳定边缘的工具；不是必需依赖，不随机改变每一帧，不把小字、图标、按钮命中区域画歪。默认优先复用已有SVG/CSS装饰。引入代码时另核固定版本和许可证，不引用官网体积或star数作选择理由。

对齐：R03/R12/R17 → D03/D10 → T02/T03。

### E05 · Zdog

[官网](https://zzz.dog/) / [官方仓库](https://github.com/metafizzy/zdog)。官方将其定位为Canvas/SVG伪3D：三维几何以平面形状绘制。

取舍：可以说明纵深不必依赖复杂WebGL；本轮不引入新引擎。官网的dragRotate/自转示例与用户要求冲突，不得直接复制。原生HTML控件继续负责语义、键盘与焦点，不能退为Canvas热点。

对齐：R02/R17 → D02/D10。列出候选不等于决定安装；没有产品依赖变更。

## 四、交互和可访问性依据

这些是行为与可读性依据，不是复古审美标准。项目44px目标、配色、几何和1700ms开机时长是自己的设计选择，不能冒称法规或标准原文。

| ID | 官方来源 | 本项目采用的具体约束 | 对齐 |
|---|---|---|---|
| N01 | [W3C APG Button Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/button/) | toggle的label应稳定；如果文案改成相反动作，就不应同时套同一aria-pressed模式 | A13；R05/R12；D04；V12 |
| N02 | [WCAG2.2 Target Size Minimum](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html) | AA最低条款为24×24 CSS px且有例外；本项目选择44×44作为更高触控目标 | R15；D09；V15 |
| N03 | [Pause, Stop, Hide](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide) | 自动移动/更新需要按适用条件提供暂停/停止；不能只用鼠标聚焦暂时停止 | R09；D07；V09 |
| N04 | [Three Flashes or Below Threshold](https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold.html) | 避免强闪与红闪风险；本项目更保守地不做全屏高对比闪白 | R07/R16；D07；V16 |
| N05 | [Contrast Minimum](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html) | 常规文本4.5:1，大文本3:1；按适用文本和实际背景检查，不给全部装饰套文字标准 | R12/R16；D03/D09；V16 |
| N06 | [W3C APG Dialog Modal](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/) | 名称、焦点进入/约束/恢复、外部不可交互；不要漏掉屏内HUD | R13/R16；D05；V13/V16 |
| N07 | [MDN prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion) | 依据用户系统偏好提供非必要运动的减少方案，不是取消导航 | R10；D07；V10 |
| N08 | [MDN requestAnimationFrame](https://developer.mozilla.org/en-US/docs/Web/API/Window/requestAnimationFrame) | 由时间戳推进，关注后台暂停行为；不按固定每帧增量假设刷新率 | R08/R09/R17；D07；V08/V09 |
| N09 | [WCAG2.2，2.5.7 Dragging Movements](https://www.w3.org/TR/WCAG22/#dragging-movements) | 拖动操作有不拖动的单指替代，旋钮之外保留点击换台 | R06；D04/D06；V06 |

## 五、没有采用的资源做法

不以Pinterest/Dribbble风格拼图作为最终设计依据；不把二手图片的“复古”标签当作历史真实性；不把不同年代的金属、木纹、霓虹与游戏按键拼成一台设备。不为了证明“查过很多”堆积无具体用途的链接。

本次未从外部站点下载字体、照片皮肤或音效入库。Sony/Brussels部分图片失败、V&A访问受限等结果不按成功分析计；可用的官方文字与已经打开的SK4图片已清楚区分。

参考最终优先级：用户明确要求 > 已确认构图 > 实物的部件逻辑 > 本项目待审核色卡/控件板。生成图只有探索地位，不能自己成为批准依据。
