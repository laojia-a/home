# www.jclaw.top 发布记录（已上线，证书验证收敛中）

- 源码：`feat/immersive-tv-material-20260917`，`cbc8cd66c73f790627a5b6f53d2f72cb962c4b3e`；该分支已推送，未合并到 `main`。
- 构建：15 项单元检查、`scripts/build.py`、`scripts/verify.py` 通过。
- 发布包：`release/www-jclaw-top/cbc8cd66/index.html`，仅 1 个文件；SHA-256 `acd8e51ec5cf62fb6f3410f030a0576bdb72e914f31103609051343b755646dd`，与 `dist/index.html` 一致。`release/` 在 `.gitignore` 中。
- Cloudflare Pages 项目：`jclaw-home`；Production 分支为 `feat/immersive-tv-material-20260917`。
- Pages 部署：`0d0b2617-b136-45a7-8b8a-897a53e6b451`；`https://jclaw-home.pages.dev/` 返回 HTTP 200 和 `JCLAW TV · S10 节目精修` 标题。此响应可能经过 Cloudflare HTML 注入，未声称与本地 HTML 逐字节相同。
- 自定义域名：`www.jclaw.top` 已添加到该 Pages 项目。绑定初期报告 `CNAME record not set`，从本机访问曾返回 HTTP 525；DNS 调整后，Pages 所有权验证变为 `active`，HTTP 证书验证暂为 `pending`。
- 线上检查：`https://www.jclaw.top/` 已返回 HTTP 200 与 `JCLAW TV · S10 节目精修` 标题；在默认 Edge 中观察到电视画面，并验证旋钮由 CH01 切到 CH02、设置菜单打开和关闭。未把 Pages `pending` 状态误报为完全 `active`。

后续检查：复查 Pages 自定义域名的 HTTP 证书验证是否从 `pending` 转为 `active`。当前 API 令牌具有 Pages 操作权限，但 DNS 读取返回 403；此次 DNS 操作通过用户已登录的 Cloudflare 控制台完成。

## DNS 变更前快照

2026-09-17 在已登录的 Cloudflare 控制台中确认：`www.jclaw.top` 的记录 ID 为 `5fd20447d5631a5194e0f51234fa472a`，类型 `A`，内容 `91.195.240.123`，Proxied 开启，TTL 为 Auto。此次只针对这条记录；`jclaw.top` 根域和其他子域名不在范围内。若需回退，应将 `www` 恢复为上述 A 记录并复查 HTTPS。

## DNS 变更后

用户在看到 Cloudflare“更改类型会删除旧记录并新建记录”的提示范围后，明确确认替换。通过默认 Edge 的 Cloudflare 控制台把 `www` 改为 `CNAME → jclaw-home.pages.dev`，Proxied 开启、TTL Auto；保存后 DNS 列表显示该新记录。根域 `jclaw.top` 仍为原 A 记录 `91.195.240.123`，其他子域名未操作。

未修改或创建 API/OAuth 令牌，也未把令牌内容写入仓库。
