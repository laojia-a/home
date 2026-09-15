# 模块结构：实际实现与待拆分部分

核验基准：af23c7664f85107d353937a691ebd3fe43fc46d6。此前目标目录保存在[0.1设计草案](docs/history/ARCHITECTURE-0.1-target.md)，不能误当作已全部实现。

## 当前已存在

```text
src/animations/
  contract/canvas-scene.js   Canvas实例合同
  shared/draw.js             公共绘制
  registry.js                网站模块组合
  sites/
    cth/                    临床工具集6幕
    clinical-vision/        临研知视3幕
    be-workbench/           BE Workbench3幕
    ezctd/                  文档预告
    be-solo/                项目预告
    be-oracle/              证据预告
    study-2026/             学习资料预告
    manifest.json
src/dev/                    独立网站动画预览
src/styles/                 原S10外观与局部修正
src/runtime.js              TV操作逻辑；尚需进一步拆分
src/shell.template.html     构建模板
scripts/build.py            本地ES模块打包、七预览、可选整合页
reference/                  用户原始参考，不修改
baseline/                   最新交付核心基线，不当作开发目录
```

每网站目录的index.js负责本网站/分幕/主题元数据，renderers.js负责本网站画面，manifest.json/README提供身份和说明。网站内部再划分场景，不把所有网站聚成一个programme文件，也不把“一个网站一个模块”误解为“一网站只有一个动画”。

## 未完成部分

runtime.js尚未完全拆成播放器、设置、导航、存储和输入服务。Canvas合同已经实际使用，SVG/CSS3D适配仍是目标；独立预览不等于跨渲染器宿主已经验证。

下一拆分的职责：shell只显示状态和发动作；player拥有唯一节目时钟、当前频道/分幕和暂停原因；navigation拥有校验后的真实跳转；settings拥有面板会话及草稿；services负责偏好和URL策略；animation instance只绘制。

菜单/hidden/power/user暂停原因需独立。关闭菜单只消除menu，不把手动暂停改为播放。不同渲染器的时间均由宿主提供；迟到的异步实例不能覆盖当前频道；异常动画不能阻断菜单和导航。

## 设置面板开发目标

guide、links、picture、archive分别维护。拟定mount/update/focusInitial/canClose/dispose统一面板生命周期，实际接口在试拆后固定。存储和URL校验不要放在各按钮里；表单卸载不丢草稿。

## 归档与生产分开

archive只保存旧资源和出处，不进入默认首屏；历史网页本身保留原文字和限制，归档说明在旁边，不把它们伪装为当前功能。缺失档案文件不能用占位空HTML通过测试。老代码中的LIVE/统计数值不成为新生产内容。

## 结构验收

分别做一次新增网站场景、替换场景渲染器、增加设置字段、调整主题token的真实修改。每次应只触及它负责的模块及注册/消费方。重构不得重画外壳；固定帧、暂停/恢复、快速换台及菜单草稿需回归。
