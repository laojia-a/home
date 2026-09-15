# BE Oracle · 独立网站动画模块

入口 `index.js`，本网站的画面函数在 `renderers.js`，元数据清单在 `manifest.json`。

现有 1 幕：证据预告。函数体从 S10 节目精修原文件迁移，不改写构图或动作；保留合成/示意说明。

开发只修改本目录的节目函数、场景注册和主题。不要复制播放器、菜单、导航或创建 requestAnimationFrame/setInterval。宿主传入绝对时间，支持指定帧、暂停与恢复，实例 dispose 必须可重复调用。

单独预览：构建后打开 `dist/previews/be-oracle.html`。预览和电视使用同一入口与同一 Canvas 适配器。

验证：仓库根目录 `npm run check`；`python tests/parity.py` 检查16幕与原始基线固定帧相同。后续视觉修改另开 polish 提交，不与本次迁移混在一起。
