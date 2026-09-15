# JCLAW Home · S10 节目式导航

一个可以每天使用的TV工具导航。保留S10大屏节目、薄奶油包边、实体遥控器、七频道与屏内菜单。每个网站独立开发动画；设置、播放器、导航和存储分别维护，不扩成浏览器操作系统。

## 接手入口

直接连接GitHub读取 [AGENTS.md](AGENTS.md) → [当前状态](docs/context/STATUS.md) → [PLAN.md](PLAN.md)。

[对话成果索引](docs/context/README.md)、[用户决定](docs/context/DECISIONS.md)、[否定方向](docs/context/REJECTED.md)、[独立美学规范](DESIGN.md)、[模块边界](ARCHITECTURE.md)、[动画接口](ANIMATION_API.md)。docs/history只记录旧状态，不据其重复导入源码。

## 已实际入库

- 核心S10、原始reference和冻结核心baseline、七网站Canvas16幕：af23c76。
- 关键决定与接续文档：c32fe3e起。
- 原始研究、主题代码、172独立SVG图标等194个归档文件：d8207d8。
- [16个历史SVG及原始生成源码](archive/reuse/cinematic-original/)：f716a43，逐文件匹配原交付SHA-256；不是生产SVG接口或新视觉精修。

[历史资源目录](archive/README.md)区分已入库与缺项。完整旧TV合集、早期八主题SVG/CSS三维及部分旧媒体仍在#9，不能宣称全对话全部实物归档完成。

## 一个网站一个模块和开发任务

| 网站 | src/animations/sites/下目录 | 分幕 | 任务 |
|---|---|---|---|
| 临床工具集 | cth | 6 | [#2](https://github.com/laojia-a/home/issues/2) |
| 临研知视 | clinical-vision | 3 | [#3](https://github.com/laojia-a/home/issues/3) |
| BE Workbench | be-workbench | 3 | [#4](https://github.com/laojia-a/home/issues/4) |
| EZCTD | ezctd | 1 | [#5](https://github.com/laojia-a/home/issues/5) |
| BE Solo | be-solo | 1 | [#6](https://github.com/laojia-a/home/issues/6) |
| BE Oracle | be-oracle | 1 | [#7](https://github.com/laojia-a/home/issues/7) |
| 2026学习资料 | study-2026 | 1 | [#8](https://github.com/laojia-a/home/issues/8) |

每个目录包含index.js、renderers.js、manifest.json、README.md；共享绘制在shared，Canvas实例在contract，registry只组合网站。src/runtime.js仍需进一步拆分。

## 当前执行顺序

归档 [#9](https://github.com/laojia-a/home/issues/9) 和开发分线进行。下一开发批次是 [#10 设置面板/配置服务](https://github.com/laojia-a/home/issues/10)，再与 [#11 播放器/导航/统一嵌入](https://github.com/laojia-a/home/issues/11) 协同。公共接口和回归基准稳定后，七个网站独立精修。历史大包缺失不阻塞核心开发，但阻塞完整便携包验收。总任务 [#1](https://github.com/laojia-a/home/issues/1)。

## 构建与验证

Node.js22、Python3；当前生产源码没有第三方运行依赖安装步骤。浏览器测试另需Playwright及Chromium。

```sh
npm run check
python3 scripts/restore_cinematic.py
python3 tests/browser.py --content
python3 tests/parity.py
python3 tests/archived_svg.py
python3 tests/collection.py
```

没有npm run dev。Windows需确认python3命令；file://使用构建输出dist/index.html，不直接双击根ES模块开发入口。七网站预览在dist/previews；只有真实archive/earlier-tv.html存在才生成完整dist/portable.html。

本轮run [34939772081](https://github.com/laojia-a/home/actions/runs/34939772081) 实际通过：10单元/构建/边界及基线哈希，19浏览器流程，128个固定Canvas帧，16个历史SVG的seek/冻结像素/resume。结果及截图已提交 [docs/evidence/cinematic-recovery-20260915](docs/evidence/cinematic-recovery-20260915/)。这不是最终视觉确认，也不是全档案往返、file://、远程字体或直播验证。

本轮未改生产布局、动画、原始参考、冻结核心基线或外部业务站点；未部署、未改域名。损坏临时导入片段已移出当前工作树，其证据保存在docs/development/INTERRUPTED-TRANSFER-20260915.json。
