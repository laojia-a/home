# 统一动画嵌入接口

版本：0.1 proposal / 2026-09-15
**这是待实现、待合同测试的接口草案，不代表当前仓库已经支持这些方法。** HOME-02试拆后冻结v1；不按接口名称多少计算完成度。

## 1. 要解决的事

同一幕可以在TV、独立预览和后续其他导航主题里运行。宿主给时间、尺寸和主题，节目只画自己的内容。Canvas、SVG和CSS三维遵守相同生命周期，但不强求使用同一种绘图技术。

当前16幕Canvas是生产迁移对象；SVG和CSS三维各选真实示例验证。WebGL作为以后可能的适配器，不宣称现在支持。

## 2. 定义和实例

以下TypeScript是合同描述，不要求为整个项目增加TypeScript构建工具。

```ts
type Renderer = 'canvas2d' | 'svg2d' | 'css3d';
interface Viewport { width: number; height: number; dpr: number }
interface Frame {
  elapsedMs: number;   // 当前分幕本轮绝对时间，毫秒
  deltaMs: number;     // 播放推进量，暂停/seek重绘时为0
  progress: number;    // elapsedMs / durationMs，范围0..1
  iteration: number;  // 循环次数
  playing: boolean;
  reducedMotion: boolean;
}
interface AnimationDefinition {
  apiVersion: 1;
  id: string;         // 稳定ID，如cth.contract，不用数组下标当身份
  channelId: string;
  title: string;
  renderer: Renderer;
  durationMs: number;
  posterTimeMs: number; // 静态/减少动态效果时可读帧
  alt: string;         // 文本替代，不是文件名
  create(context: {
    container: HTMLElement;
    viewport: Viewport;
    theme: Readonly<Record<string, string>>;
    signal: AbortSignal;
    reportError(error: Error): void;
  }): AnimationInstance | Promise<AnimationInstance>;
}
interface AnimationInstance {
  render(frame: Readonly<Frame>): void;
  resize(viewport: Readonly<Viewport>): void;
  updateTheme(theme: Readonly<Record<string, string>>): void;
  dispose(): void; // 幂等，负责本实例全部资源
}
```

play/pause/seek/restart属于播放器控制器，不让每个场景再造一套时钟。宿主按控制结果调用render；SVG/CSS使用已暂停的受控动画实例并设置currentTime，不能另开不受控infinite动画。无需资源预加载的create同步返回即可。

## 3. 生命周期语义

- 挂载：建立一个实例，先resize并渲染0或posterTimeMs；只有必需资源就绪才报告ready。不能显示“已载入”但字形/素材仍缺失。
- 播放：宿主requestAnimationFrame推进elapsedMs；每个帧参数一致。相同时间、尺寸、主题、种子得到可重复画面。
- 暂停：保留elapsedMs。菜单、页面隐藏、待机和用户暂停由宿主管理；显示更新不暗中推进节目。
- Seek：宿主设置目标elapsedMs并以deltaMs=0渲染。不能依赖“从第0帧一步一步播放过来”才能正常显示。累积模拟必须提供确定性重建。
- Resize：只改变空间，不重置进度。Canvas的CSS像素与实际像素分开；DPR限制由宿主配置而非场景自取全局值。
- 切换：发出AbortSignal；未完成的旧create结果若迟到必须立即dispose，不能覆盖新频道。相同场景的旧实例不得继续挂监听器或计时器。
- Dispose：清理DOM、监听器、WAAPI、观察器、Canvas引用和可撤销对象URL；适配器如拥有GPU资源也必须释放。清理后重复调用不抛异常。
- 错误：隔离在当前节目，保留工具直接打开和菜单。记录sceneId与错误，不全屏崩溃。

跨渠道跳转、URL设置、localStorage和真实业务数据都不进入context。动画不能偷偷调用window.open、创建全局键盘监听或读取上层私有状态。

## 4. 三类适配器

**Canvas2D**：旧draw函数通过薄适配器接收ctx、W/H、归一化进度、秒值、频道材质和移动布局标记。转换写在适配器，避免每幕重新解析宿主状态。原PROGRAMMES中的秒数转换到durationMs只做一次。

**SVG2D**：静态路径及动态分组由模块创建；所有ID按实例前缀隔离。动态由宿主时间驱动，不依赖img标签内不能交互的脚本。导出文件需自包含实际CSS；不能把只剩静帧的导出称动画。

**CSS3D**：局部DOM包含透视和深度变换；相机/卡片状态属于实例，当前时间仍由宿主提供；仅设置局部样式，不能改全局body。默认导航无需旋转才能进入工具。导出是HTML+必要资源，不称为独立3D SVG。

## 5. 独立预览

开发页从registry读取同一条目，提供播放、暂停、复位、指定时间、尺寸和主题预览；控制器复用正式TV的时间语义。不是给普通首页再加一个复杂编辑器。生产TV只在“更多”提供可选入口。

登记每条资产的sceneId、源文件、renderer、时长、演示性质、来源/许可说明、预览和导出能力。原页静态图标、带透视的2D插画、CSS三维场景分别标识，不能累计成虚假的“3D动画数量”。

## 6. 必须通过的接口测试

1. 固定时间可重现；0/25/55/90%帧可绘制，seek到后再回前不依赖播放历史。
2. 播放画面推进，暂停画面及时间冻结；resume从暂停点继续。
3. 暂停状态下resize和换主题仍重绘，但时间不推进。
4. 快速换台/异步资源迟到不会覆盖新实例；连续挂载销毁不叠加监听和动画。
5. 菜单先打开再手动暂停、或先暂停再开菜单，关闭后都保持正确状态。
6. 360px窄屏、横屏、桌面与DPR变化下没有裁掉主内容或错误拉伸。
7. 资源失败、字体回退、SVG ID冲突和存储不可用不会使导航失效。
8. 真正的Canvas、SVG、CSS3D各有可运行测试，不用空适配器、接口类型或截图替身证明支持。

接口测试完成后写入实际提交号、已支持渲染器和限制；本文件当前不作该声明。
