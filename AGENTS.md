# 接手本仓库先读

这是 JCLAW Home / S10 TV **工具导航**，不是浏览器操作系统。用户要求所有有价值的成果和判断留在GitHub，不要求用户下载聊天附件来弥补交接。

## 阅读顺序

1. README.md → docs/context/STATUS.md：当前代码和实际缺口。
2. docs/context/DECISIONS.md → docs/context/REJECTED.md：用户已确定及已否定的方向。
3. PLAN.md：接下来做什么；docs/history/只作历史，不是当前状态。
4. ARCHITECTURE.md、ANIMATION_API.md、DESIGN.md：实现边界、接口与独立美学规范。
5. 对应网站目录 README 和 manifest；不要为修改一幕重写整个TV。

## 不得再次做错

- 保留S10大屏、薄奶油包边、实体遥控器、七频道、屏内菜单和节目式内容。不是左插画右说明卡；不是换配色便称换台。
- 鹈鹕骑自行车只借鉴动作因果、次级动作、节奏和余动，不加鹈鹕主持人，不把页面改成儿童绘本。
- 一个网站一个动画模块，模块内部再分幕：src/animations/sites/{cth,clinical-vision,be-workbench,ezctd,be-solo,be-oracle,study-2026}。不要退回一个中央programme巨函数。
- 当前生产16幕是Canvas2D。不得把SVG/CSS三维接口草案或历史示例说成已接入的生产支持；不为统一接口强制重画现有节目。
- 结构重构与视觉打磨分开提交。重构阶段以固定帧比较证明没有非预期变化；视觉修改另给真实前后画面和录屏。
- 动画不能自行保存地址、打开网页、挂全局键盘或自设不受控时钟。关闭菜单只消除菜单暂停原因，不覆盖用户原有暂停意图。
- 未接入仍可看预告；演示不是直播，不声称真实签署、采购、患者分级、研究结果或等效结论。不得擅自把.top换.com。
- 原始reference和baseline不改。历史文件存在才能提供入口；只登记文件名、哈希或聊天链接不算归档完成。
- 不用上传blob、提交workflow、测试文件数量证明完成。给出可读commit、路径、实际通过/失败/未测项；技术验证不能代替用户视觉确认。

## 操作约定

先核对main和工作树，基于最新代码建立小分支；不force push、不回退他人提交。每批只解决一个目的。当前归档任务不改src、根开发index或线上站点。

npm run check 是现有检查入口；浏览器测试还需Python Playwright及Chromium。没有 npm run dev，勿凭空写该命令。具体命令以package.json和脚本为准。浏览器策略阻止file://或localhost时如实记录，不关闭安全策略绕过；允许时用最终HTML内容验证，并区分测试路径。

GitHub能访问不代表可以自动读到旧聊天附件。缺失资产以docs/context/STATUS.md和资产清单为准；先核验，不声称全量交接已完成。
