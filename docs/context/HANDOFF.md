# 给接续工作区

直接拉取laojia-a/home，读取AGENTS.md、PLAN.md、docs/context/STATUS.md；以当前main为准，不退回旧的“只有四文件”计划。

已落库的生产起点是af23c76七网站Canvas模块。研究和172个图标等首批194文件在d8207d8；16个后期历史SVG及原始源码在f716a43。历史SVG不是生产Canvas，也不是正式SVG宿主已经实现。

## 当前并行两条线

- 归档线 #9：停止损坏24片流；按可重建、可校验的小批恢复八主题原资源、完整合集和旧证据，状态明确。当前无效片段已移出工作树，记录仍在历史。
- 开发线 #10 → #11：先接入配置/草稿及独立面板，再拆播放器、导航、单时钟/暂停原因；冻结Canvas合同后验证真实SVG/CSS三维适配。归档大包缺失不阻塞这条线。

网站精修 #2–#8 分别负责CTH、临研知视、Workbench、EZCTD、Solo、Oracle、2026；公共行为稳定后按网站开展。先合同、物资、课程、T/R，不再全量重画TV或加入OS功能。

## 命令

```sh
npm run check
python3 scripts/restore_cinematic.py
python3 tests/browser.py --content
python3 tests/parity.py
python3 tests/archived_svg.py
python3 tests/collection.py
```

核对package.json/脚本参数，准备Python、Node和浏览器测试环境。根index为ES模块开发入口，file://使用构建后dist/index.html。完整archive/earlier-tv.html不在时collection检查只打印NOT TESTED，不能算通过；dist/portable.html也不会产生。

## 不要误解证据

本轮run34939772081真实执行了10单元、19浏览器、128Canvas固定帧及16SVG控制测试，证据在docs/evidence/cinematic-recovery-20260915。代表截图是此次重新渲染，不是原聊天录屏；不是用户最终视觉认可。保留s10大屏/遥控器/节目组织，鹈鹕仅借动作方法。

收尾写清commit、实际变动/未动、通过/失败/未测及剩余资产。禁止替用户搬运问题提出下载请求、用占位文件通过归档检查或把构建成功说成设计已满意。
