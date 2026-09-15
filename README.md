# JCLAW Home · S10 网站独立动画模块

本期导入 S10 节目精修核心源码，并按网站拆分七个动画模块；本轮不更换配色、构图和动作，不重新设计桌面系统。

## 运行与检查

Node.js 22、Python 3。`npm run check` 完成10项单元检查、构建、JavaScript语法和基线哈希检查。`python tests/browser.py --content` 检查19个浏览器流程；`python tests/parity.py` 将16幕在桌面和手机下的128个固定帧与原始交付基线比较。浏览器测试需要 Playwright 与 Chromium。

`npm run build` 后用浏览器打开 `dist/index.html`；各网站独立预览在 `dist/previews/`。部署源码目录时也可直接使用根目录index.html；file://请使用构建后的单文件，不直接双击ES模块开发入口。

## 一个网站一个目录

| 网站 | 动画模块 | 现有分幕 |
|---|---|---|
| 临床工具集 | src/animations/sites/cth | 6 |
| 临研知视 | src/animations/sites/clinical-vision | 3 |
| BE Workbench | src/animations/sites/be-workbench | 3 |
| EZCTD | src/animations/sites/ezctd | 1 |
| BE Solo | src/animations/sites/be-solo | 1 |
| BE Oracle | src/animations/sites/be-oracle | 1 |
| 2026 学习资料 | src/animations/sites/study-2026 | 1 |

每个目录有 index.js（网站/分幕/主题注册）、renderers.js（本网站的画面）、manifest.json 和 README.md。不是七个空目录，也不通过七个包装文件继续调用一个中央programme巨函数。

通用绘制在shared；Canvas实例合同在contract；registry只组合模块。生产TV与七个预览使用相同的场景definition.create/render/resize/updateTheme/dispose。只有播放器/预览宿主推进时间，动画不访问存储、跳转网站或自行开定时器。

## 来源与范围

原始 s10 位于reference/s10-tv.html；最新交付的核心文件原样保存在baseline/s10-programme，哈希见baseline/checksums.json。没有把被否定的简化vNext作为开发基线。原参考的大屏、七频道和屏内菜单继续保留。

本批次是核心源码与七网站拆分。此前约5.4MB的完整旧合集及约6.7MB的基线整合页属于单独的大文件归档批次；未实际传入前，不宣称完整历史档案已落库。交付ZIP中的旧资产在本地保留不删除。

当前Canvas接口已用于16幕和独立预览；SVG/CSS三维适配仍是后续任务。设置面板及播放器服务的进一步拆分尚未完成，src/runtime.js保留原操作逻辑；不要把本轮说成所有关键功能已经完全解耦。

美学规范见DESIGN.md，后续计划见PLAN.md；原文件中的“源码未导入”是此前核验快照，本次实际导入以Git树和提交为准。单元/浏览器检查均不能替代视觉验收，亦不代表外部网站在线或统计计算已验证。
