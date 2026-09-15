# 七个网站：开发与节目资产对应

核验基准af23c76。网站模块是一级开发单位，分幕是模块内部内容；站点线上功能未在本次核验，表中是导航节目，不是业务功能承诺。

| 网站 | 目录 | sceneId | 节目形式 |
|---|---|---|---|
| 临床工具集 | cth | cth.contract/inventory/sample/grades/terms/breakfast | 合同动作、物资盘点、例数示意、分级示意、术语检索、餐谱 |
| 临研知视 | clinical-vision | learn.design/gcp/data-review | 三段课程板书、要点跟进、字幕 |
| BE Workbench | be-workbench | workbench.traces/auc/parameters | 合成T/R轨迹、AUC区域、参数标记 |
| EZCTD | ezctd | ezctd.documents | 文档插入、扫描、标记预告 |
| BE Solo | be-solo | solo.planning | 项目纸签/节点落位预告 |
| BE Oracle | be-oracle | oracle.evidence | 问题、资料、出处、镜片预告 |
| 2026学习资料 | study-2026 | study.reading | 资料翻页及书签余动预告 |

路径前缀均为src/animations/sites/。每个目录保留index.js、renderers.js、manifest.json和README.md；共16幕。共享绘制在shared/draw.js，contract/canvas-scene.js提供实例合同。dev预览按同一网站manifest构建。

## 链接决策

当前源码前三个默认地址为cth.jclaw.top、cv.jclaw.top、be-workbench.jclaw.top，来自用户s10参考；用户最初提过对应.com。两者都记录，当前任务不自动迁移域名、不声称在线。

后四个默认空地址，节目可播放但不是“已接入”；用户手动配置后才启用跳转，不扫描本机端口、不猜测BE Solo/EZCTD运行地址。

## 以后新增站点

新增独立站点目录及manifest/注册，提供本网站分幕与独立预览。不要改成只有场景编号、缺失站点身份的动画池。真正业务计算仍在原站点，TV负责入口和解释性节目。
