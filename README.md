# JCLAW Home · S10 节目式导航

一个可以每天使用的TV工具导航。保留S10的大屏节目、薄奶油包边、实体遥控器、七频道与屏内菜单；动画和设置分别开发，不再扩成浏览器操作系统。

## 新工作区从这里接手

**先读 [AGENTS.md](AGENTS.md) 和 [当前状态](docs/context/STATUS.md)**，再读[对话决策](docs/context/DECISIONS.md)、[被否定的方案](docs/context/REJECTED.md)及[执行计划](PLAN.md)。连接并拉取仓库即可接续已入库部分，不需人工下载再上传源码。

- [对话成果总索引](docs/context/README.md)：原始目标、方案演进、可复用资产、历史证据和缺口。
- [模块边界](ARCHITECTURE.md)、[已实现的Canvas接口与后续合同](ANIMATION_API.md)、[美学规范](DESIGN.md)。
- [历史规划](docs/history/)只记录当时状态，不作为重复导入源码的理由。

## 已入库的生产源码

核心源码导入提交：`af23c7664f85107d353937a691ebd3fe43fc46d6`。七网站共16幕，每目录含index.js、renderers.js、manifest.json、README.md。

| 网站 | 模块目录 | 分幕 |
|---|---|---|
| 临床工具集 | src/animations/sites/cth | 6 |
| 临研知视 | src/animations/sites/clinical-vision | 3 |
| BE Workbench | src/animations/sites/be-workbench | 3 |
| EZCTD | src/animations/sites/ezctd | 1 |
| BE Solo | src/animations/sites/be-solo | 1 |
| BE Oracle | src/animations/sites/be-oracle | 1 |
| 2026学习资料 | src/animations/sites/study-2026 | 1 |

共同绘制在shared，实例合同在contract，registry只组合网站模块。TV和独立预览共用场景实例接口。src/runtime.js仍集中了播放器、设置等逻辑，进一步解耦尚未完成。

## 构建与验证

Node.js 22、Python 3；当前生产源码没有第三方运行依赖安装步骤。

```sh
npm run check
python3 tests/browser.py --content
python3 tests/parity.py
python3 tests/collection.py
```

浏览器测试另需Playwright和Chromium。build/test/check是现有npm脚本，没有dev脚本。Windows需确认python3命令可用。

构建后：dist/index.html是独立TV；dist/previews/是七网站独立预览；只有历史合集真实补齐后才生成dist/portable.html。根index.html是ES模块开发入口，不把双击它等同于可用的file://单文件版。

2026-09-15回读确认导入workflow成功，run 34917156186。但本次文档整理没有重跑应用测试；历史19流程/128固定帧的说明与当前执行记录分开看。所有验证均不代表外部站点在线、临床计算正确或最终视觉已获认可。

## 资产完整性

原始reference/s10-tv.html和最新核心基线baseline/s10-programme已在仓库。完整旧合集、历史独立动画/图标、研究说明与验证材料正在分批归档；以[状态表](docs/context/STATUS.md)记载的实物路径为准。**文档沉淀完成不等于所有二进制和历史网页已入库。**

本次不修改线上业务、域名或部署；未确认地址不猜测。历史包中的演示文字也不自动成为产品承诺。
