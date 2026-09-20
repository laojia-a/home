# 临床工具集 · 六幕连播

index.js 注册六个已审阅场景，绘制与示例数据分别位于 scenes/ 的六个子目录；scenes/PROVENANCE.json 记录对应样稿与来源哈希。原 renderers.js 保留作历史对照，不用于当前 CH1 播放。

| 主题组 | 顺序 | 内容 | 正片时长 |
|---|---|---|---|
| 研究准备 | 1 | 例数估算 | 20 s |
| 研究准备 | 2 | 合同金额与分期 | 20 s |
| 执行操作 | 3 | 餐谱计算 | 20 s |
| 执行操作 | 4 | 血浆分装 | 28 s |
| 记录核对 | 5 | 不良事件分级 | 20 s |
| 记录核对 | 6 | 术语检索 | 20 s |

以上为节目理解顺序，不是临床操作 SOP。每幕增加 0.85 s 入场、1.1 s 收尾阅读、0.9 s 接续，总计 145.1 s。接续终帧与下一幕开场卡片相同，第六幕也接回第一幕。

适配器位于 src/animations/contract/programme-series.js。统一由宿主时间推进，支持暂停、恢复与拖动。关闭分幕轮播时回到本幕开场卡片。手动切幕使用短叠化，不改变手动暂停状态。

本地审阅：design-studies/ch1-continuous-v11/ 提供整期时间轴和“看衔接”；根 index.html 与 dist/index.html 使用同一组模块，dist/previews/cth.html 可逐幕检查。

验证：npm test、构建、scripts/verify.py，以及 tests/programme-series.py 的真实浏览器边界像素、暂停、手动切幕、自动推进和循环检查。tests/parity.py 继续验证未改动的 CH02–03。

当前仅在本地与私有开发分支接入，未发布线上。术语单例授权范围是私有仓库，不包括公开站点部署。
