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

## 第二轮更新：立体机身与播放问题

按最新反馈，主操作集中到机身右侧的旋钮与四个彩色竖排按钮；独立遥控器默认收起，可在“画面”中开启。机身增加侧面厚度与轻透视。普通模式自动播放；因系统“减少动态”暂停时会明确说明，并提供常驻播放按钮，点击从开场播放。新增 `tests/tv_motion.py` 用真实时间检查16幕主体像素变化，不只检查时钟或进度条。详见 [第二轮记录](docs/development/TV-DEPTH-PLAYBACK-20260916.md)。下段保留第一轮交付说明。

## 主界面打磨 · PR #14

本分支已经实现奶油色机身、弧形玻璃内框、可点击/拖动的换台旋钮与300ms换台过渡；保留独立遥控器、七频道和Canvas16幕，不修改站点地址或历史基线。手机使用44px底部遥控按钮，横屏减少装饰。没有自动合并、部署或宣称用户已确认审美。

阅读 [打磨与验证记录](docs/development/TV-SHELL-20260916.md)。新增 `python3 tests/tv_shell.py --video`，受限浏览器环境可显式加 `--content`；后者不代表HTTP或file入口已通过。运行产物由GitHub Actions的 `s10-check-evidence` 和 `tv-preview` 提供，有效期7天；截图和录屏不是永久归档。

## 当前执行顺序

当前先完成用户指定的主界面打磨 [PR #14](https://github.com/laojia-a/home/pull/14) 与视觉确认。归档 [#9](https://github.com/laojia-a/home/issues/9) 独立推进。后续结构开发仍是 [#10 设置面板/配置服务](https://github.com/laojia-a/home/issues/10)，再与 [#11 播放器/导航/统一嵌入](https://github.com/laojia-a/home/issues/11) 协同。公共接口和回归基准稳定后，七个网站独立精修。历史大包缺失不阻塞核心开发，但阻塞完整便携包验收。总任务 [#1](https://github.com/laojia-a/home/issues/1)。

## 构建与验证

Node.js22、Python3；当前生产源码没有第三方运行依赖安装步骤。浏览器测试另需Playwright及Chromium。

```sh
npm run check
python3 scripts/restore_cinematic.py
python3 tests/browser.py --content
python3 tests/parity.py
python3 tests/tv_shell.py --video
python3 tests/archived_svg.py
python3 tests/collection.py
```

没有npm run dev。Windows需确认python3命令；file://使用构建输出dist/index.html，不直接双击根ES模块开发入口。七网站预览在dist/previews；只有真实archive/earlier-tv.html存在才生成完整dist/portable.html。

2026-09-15归档恢复批次run [34939772081](https://github.com/laojia-a/home/actions/runs/34939772081) 实际通过：10单元/构建/边界及基线哈希，19浏览器流程，128个固定Canvas帧，16个历史SVG的seek/冻结像素/resume。结果及截图已提交 [docs/evidence/cinematic-recovery-20260915](docs/evidence/cinematic-recovery-20260915/)。这不是最终视觉确认，也不是全档案往返、file://、远程字体或直播验证。

该归档恢复批次未改生产布局、动画、原始参考、冻结核心基线或外部业务站点；未部署、未改域名。2026-09-16机身改动见上文PR #14。损坏临时导入片段已移出当前工作树，其证据保存在docs/development/INTERRUPTED-TRANSFER-20260915.json。
