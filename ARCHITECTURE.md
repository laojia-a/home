# S10 模块划分与开发边界

2026-09-15 / 目标设计 v0.1，尚未全部实现。当前真实源码形态见 SOURCE_INTAKE.json，不能把以下目录当作已入库代码。

## 1. 保持轻量

延续已有原生 HTML/CSS/JavaScript 和 Canvas，不为拆分引入桌面内核、微前端、插件市场、业务后端或统一账号。采用原生模块组织开发源码，构建时产生浏览器可打开的单文件版本；构建工具选择以能保留现有画面、可复现和少依赖为准。

关键关系：界面发动作 → 播放器/设置服务更新状态 → 动画宿主提供时间和尺寸 → 当前节目绘制。动画不反向操作界面和存储。

## 2. 目标目录

```text
README.md / PLAN.md / DESIGN.md / ANIMATION_API.md
SOURCE_INTAKE.json
reference/s10-tv.html          原始上传，固定哈希
baseline/s10-programme/        最新交付基线，保留原源码及来源
archive/                      历史页面/动画与清单，按需打开
src/
  app/                        入口装配，不堆所有业务
  shell/                      大屏、遥控器、台标、手机控件
  player/                     播放状态、单时钟、换台、电源、转场
  navigation/                 频道注册、地址解析、真实跳转
  animations/
    contract/                 接口校验与实例协议
    host/                     当前实例、生命周期、异常降级
    adapters/                 canvas2d / svg2d / css3d
    shared/                   绘制原语、缓动、材质工具
    channels/cth/             六幕各自文件
    channels/learning/        三幕课程
    channels/workbench/       三幕曲线
    channels/previews/        文档、项目、证据、资料
    registry.js               元数据注册；没有菜单/存储逻辑
  settings/
    host/                     面板切换、焦点、关闭确认
    panels/                   guide / links / picture / archive
    schema.js                 配置字段、默认值、校验
  services/                   preferences / url-policy / assets
  styles/                     tokens / shell / settings / responsive
  dev/                        独立动画预览与测试入口
scripts/                      构建、来源校验、边界检查
tests/                        单元、接口、交互、固定帧、档案往返
dist/                         托管输出（生成）
release/                      单文件与完整便携包（生成）
```

场景文件数量由真实职责决定，不为了显得模块化拆大量只有一行的文件。通用函数只有被多个场景稳定使用时才抽到shared。

## 3. 模块职责

| 模块 | 负责 | 不允许承担 |
|---|---|---|
| shell | 机身、控件、焦点和交互反馈 | 内置16幕绘制或URL保存 |
| player | 当前频道/分幕、时间、暂停原因、转场状态 | 设置表单DOM和业务数据 |
| navigation | 一个频道目录，校验后打开真实工具 | 推断网站在线率，替原应用计算 |
| animation host | 挂载/更新/卸载一个活动节目，尺寸和异常 | 修改偏好、跳转网站、创建菜单 |
| programme | 指定时间帧的视觉与局部物理动作 | 自设全局定时器或访问研究数据 |
| settings host | 面板导航、焦点恢复、未保存关闭处理 | 把所有字段和表单塞进一个renderMenu |
| panel | 自己的视图、草稿展示、错误定位 | 直接写localStorage、直接改播放器全局变量 |
| services | 地址策略、存储、读取清单和资源释放 | 大屏布局、具体动画构图 |
| styles | token、比例、排版、层级 | 用CSS隐藏错误来冒充交互完成 |

## 4. 时间、状态与错误

播放器只保留导航需要的状态：channelId、sceneId、elapsedMs、播放意图、pauseReasons、转场版本和显示模式。暂停原因独立记为user/menu/hidden/power；关闭菜单只移除menu，不能覆盖用户之前手动暂停。

动画进度、曲线端点、液面/书签余动都来自同一个elapsedMs，不能同时使用Date.now、私有interval和播放器时间。绝对时间帧可重放；具有累积物理状态的场景需要确定性重建，不可靠地seek时不得标成接口通过。

换台立即更新目标频道，取消旧转场，旧实例dispose，最后选择生效；不通过短时锁输入丢弃按键。动画加载失败显示本地错误/静态预览，导航、菜单和目标链接继续工作。未接入可以看预告，但打开动作转到配置，不伪装在线。

## 5. 设置面板接口（拟定）

每个面板暴露：

```text
id / label
mount({ container, settingsService, navigationService, onDirtyChange, signal })
→ { update(snapshot), focusInitial(), canClose(), dispose() }
```

宿主控制面板切换和焦点，panel的事件监听属于自身生命周期。guide和archive通常无编辑草稿；links草稿保存在settings session，不随面板DOM销毁。picture的即时预览状态与持久配置分开，明确应用/取消语义，不偷偷保存。

设置服务负责createDraft、patchDraft、validate、apply、discard、persist和迁移。保存成功返回persisted；仅内存成功但本地存储失败返回session-only并显示原因；校验失败返回字段级错误。不能catch后仍提示已保存。

URL策略统一：HTTPS或明确的loopback HTTP，禁止javascript/data等协议和带用户名密码的URL；外链使用noopener noreferrer。空地址不能启用。导入旧配置如要支持，必须主动确认和校验，不能靠存储键碰巧兼容。

## 6. 模块化的实际验收

演示三次真实修改，而不只检查目录：

1. 新增一幕节目并注册：无需改shell、navigation和settings。
2. 把一个设置字段加入既有面板：改schema、panel和使用该值的模块，无需改其他动画。
3. 替换外观token：不改工具地址、当前频道、配置数据或播放器时钟。

CSS/SVG三维图形不能假称WebGL场景，动画预览也不等于工具实机画面。生产页与开发预览复用接口，旧档案单独运行，不给旧脚本直接修改新播放器的全局权限。

## 7. 提交与并行

先由同一条工作线完成基线、接口和一个垂直试拆。HOME-03后再并行分配不同频道、不同设置面板，接口变更单独评审。每个模块的说明写清职责、依赖、入口、销毁和验证命令，不再复制整个HTML来开发一个动画。
