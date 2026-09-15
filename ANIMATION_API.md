# 统一动画接口：当前Canvas实现与后续扩展

更新：2026-09-15。这里区分已实现和拟扩展，不再把整个接口描述为尚未开始。[原v0.1草案](docs/history/ANIMATION_API-0.1-proposal.md)保留作设计历史。

## 已实现的Canvas场景合同

真实代码：`src/animations/contract/canvas-scene.js`，16幕及网站独立预览共用。

```js
const definition = defineCanvasScene({
  id, channelId, label, seconds,
  draw(ctx, W, H, progress, elapsedSeconds, theme, mobile) { /* 场景绘制 */ }
});
const instance = definition.create({
  canvas, viewport: { width, height, dpr }, theme,
  index: 0, count: 1, signal
});
instance.render({ elapsedMs });
instance.resize({ width, height, dpr });
instance.updateTheme(theme);
instance.dispose();
```

definition暴露apiVersion:1、id、channelId、label/title、seconds/durationMs、posterTimeMs、renderer:'canvas2d'、alt、draw、create。posterTimeMs目前为时长的72%。render把毫秒换秒并限制到本幕范围，使用公共背景/分幕包装/进度条，再执行本网站draw。

当前实例由宿主传入canvas；**不是原草案里的通用container create**。接口对照必须按实码，不让SVG开发者误认为把renderer改个字符串就能接入。

实例拥有绘制状态，宿主拥有Canvas及时间。dispose幂等、移除自身abort监听；它不负责移除宿主Canvas节点。resize和updateTheme更新局部状态，需要宿主再render；它们不会自行播放。signal中止后停止绘制。请据此写合同测试，不能把“dispose清除一切DOM/GPU资源”的目标描述套到这个具体实现上。

## 仍待实现的统一宿主

Canvas之外，还要验证SVG2D和CSS3D。拟采用create/mount → render(frame) → resize/updateTheme → dispose，统一宿主单时钟、暂停、seek及旧实例取消；传入container或Canvas等细节须经过一个真实试例再冻结。保留既有Canvas薄适配，不先重画16幕。

SVG的实例ID应独立，变换和路径按宿主时间绘制；CSS三维的透视/相机局部于实例。二者不得另开不受控infinite动画、读取全局当前频道或直接访问localStorage/window.open。CSS三维导出是HTML，不称为3D SVG。

后续Frame拟增加deltaMs/progress/iteration/playing/reducedMotion；当前render实际使用elapsedMs，其余字段不得当作已经具有行为。

## 所有渲染器必须验证

同一时间帧重现，倒退/跳转seek，真实暂停和恢复，尺寸变化不改进度，主题更新不推进时间，快速切台旧实例停止及迟到create取消；dispose重复调用安全。动画失败保留工具入口。字体或媒体加载失败如实显示，不能以回退字形冒充手绘加载成功。

播放器控制play/pause/seek/restart，不让每网站私设时钟。预览页和正式TV复用同一实例定义；资源原文件能独立播放不代表已满足正式宿主合同。
